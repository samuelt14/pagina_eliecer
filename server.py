import os
import sys
import time
import mimetypes
from urllib.parse import unquote, urlparse
from http.server import HTTPServer, BaseHTTPRequestHandler
from socketserver import ThreadingMixIn
from collections import defaultdict

PORT = 8000
HOST = "0.0.0.0"
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

RATE_LIMIT_WINDOW_SECONDS = 60
RATE_LIMIT_MAX_REQUESTS = 120

class IPRateLimiter:
    def __init__(self, max_requests=RATE_LIMIT_MAX_REQUESTS, window_seconds=RATE_LIMIT_WINDOW_SECONDS):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests = defaultdict(list)

    def is_allowed(self, ip_address: str) -> bool:
        now = time.time()
        timestamps = self.requests[ip_address]
        # Purga marcas de tiempo fuera de la ventana
        self.requests[ip_address] = [t for t in timestamps if now - t < self.window_seconds]
        if len(self.requests[ip_address]) >= self.max_requests:
            return False
        self.requests[ip_address].append(now)
        return True

rate_limiter = IPRateLimiter()

class SecureHTTPRequestHandler(BaseHTTPRequestHandler):
    # Enmascarar información de software y versión del servidor (Regla 16, 19)
    server_version = "WebServer"
    sys_version = ""

    def log_message(self, format, *args):
        # Registro seguro y minimalista (Regla 18)
        sys.stderr.write(f"[{self.log_date_time_string()}] {self.client_address[0]} - {args[0]} {args[1]}\n")

    def send_security_headers(self, content_type="text/html; charset=utf-8"):
        """Inyecta cabeceras de seguridad estrictas en cada respuesta (Regla 13)."""
        self.send_header("Content-Type", content_type)
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: blob: https://images.unsplash.com https://*.unsplash.com; "
            "connect-src 'self'; "
            "frame-ancestors 'none'; "
            "object-src 'none'; "
            "base-uri 'self'; "
            "form-action 'self' https://wa.me; "
            "upgrade-insecure-requests;"
        )
        self.send_header("Permissions-Policy", "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()")
        self.send_header("Cross-Origin-Opener-Policy", "same-origin-allow-popups")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        
        # Cache-Control seguro y fresco
        if "text/html" in content_type or "javascript" in content_type or "css" in content_type:
            self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        else:
            self.send_header("Cache-Control", "public, max-age=86400, stale-while-revalidate=3600")

    def send_generic_error(self, status_code: int, message: str):
        """Devuelve respuestas de error genéricas sin filtrar detalles internos (Regla 8)."""
        content = (
            f"<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'>"
            f"<title>{status_code} — {message}</title>"
            f"<style>body{{font-family:sans-serif;background:#F4F0E8;color:#1C1B19;display:flex;align-items:center;"
            f"justify-content:center;height:100vh;margin:0;}}div{{text-align:center;padding:2rem;"
            f"border:1px solid #D8C8B5;background:#FAF8F4;box-shadow:0 4px 6px rgba(0,0,0,0.05);}}"
            f"h1{{margin:0 0 0.5rem;font-size:2rem;}}p{{margin:0 0 1rem;color:#8A6347;}}"
            f"a{{color:#1C1B19;text-decoration:none;font-weight:bold;}}</style></head>"
            f"<body><div><h1>{status_code}</h1><p>{message}</p><a href='/'>Regresar al Inicio</a></div></body></html>"
        ).encode("utf-8")

        self.send_response(status_code)
        if status_code == 429:
            self.send_header("Retry-After", "60")
        self.send_security_headers("text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_OPTIONS(self):
        """Maneja solicitudes OPTIONS restringidas (Regla 7, 9)."""
        client_ip = self.client_address[0]
        if not rate_limiter.is_allowed(client_ip):
            self.send_generic_error(429, "Demasiadas peticiones. Intenta de nuevo en unos momentos.")
            return

        self.send_response(204)
        self.send_header("Allow", "GET, HEAD, OPTIONS")
        self.send_security_headers("text/plain")
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self):
        """Maneja solicitudes GET con validaciones completas de seguridad."""
        client_ip = self.client_address[0]

        # 1. Verificación de Rate Limiting (Regla 1)
        if not rate_limiter.is_allowed(client_ip):
            self.send_generic_error(429, "Límite de solicitudes excedido. Por favor espera antes de continuar.")
            return

        # 2. Análisis y Sanitización de la Ruta (Regla 4, 16, 17)
        parsed_url = urlparse(self.path)
        raw_path = unquote(parsed_url.path)

        # Mapeo de la raíz a index.html
        if raw_path in ["", "/"]:
            relative_path = "index.html"
        else:
            relative_path = raw_path.lstrip("/\\")

        # Bloqueo estricto de archivos ocultos / dotfiles (ej. .env, .git) (Regla 16)
        path_segments = [seg for seg in relative_path.replace("\\", "/").split("/") if seg]
        for seg in path_segments:
            if seg.startswith("."):
                self.send_generic_error(404, "Recurso no encontrado.")
                return

        # Prevención de Path Traversal mediante resolución canónica (Regla 4, 17)
        target_path = os.path.realpath(os.path.join(BASE_DIR, relative_path))
        if not target_path.startswith(BASE_DIR):
            self.send_generic_error(403, "Acceso no autorizado.")
            return

        # 3. Prohibición estricta de listado de directorios (Regla 16)
        if os.path.isdir(target_path):
            index_in_dir = os.path.join(target_path, "index.html")
            if os.path.isfile(index_in_dir):
                target_path = index_in_dir
            else:
                self.send_generic_error(403, "Acceso al directorio denegado.")
                return

        # 4. Verificación de existencia del archivo
        if not os.path.isfile(target_path):
            self.send_generic_error(404, "Recurso no encontrado.")
            return

        # 5. Determinación segura del tipo MIME
        mime_type, _ = mimetypes.guess_type(target_path)
        if not mime_type:
            mime_type = "application/octet-stream"

        try:
            file_size = os.path.getsize(target_path)
            self.send_response(200)
            self.send_security_headers(mime_type)
            self.send_header("Content-Length", str(file_size))
            self.end_headers()

            with open(target_path, "rb") as f:
                # Transmisión en bloques para evitar agotamiento de memoria
                while chunk := f.read(65536):
                    self.wfile.write(chunk)
        except Exception:
            # Error genérico sin revelar detalles internos ni stack traces (Regla 8)
            self.send_generic_error(500, "Error interno del servidor.")

    def do_HEAD(self):
        """Maneja solicitudes HEAD idénticas a GET pero sin transmitir cuerpo."""
        client_ip = self.client_address[0]
        if not rate_limiter.is_allowed(client_ip):
            self.send_response(429)
            self.end_headers()
            return

        parsed_url = urlparse(self.path)
        raw_path = unquote(parsed_url.path)
        relative_path = "index.html" if raw_path in ["", "/"] else raw_path.lstrip("/\\")

        target_path = os.path.realpath(os.path.join(BASE_DIR, relative_path))
        if not target_path.startswith(BASE_DIR) or not os.path.isfile(target_path):
            self.send_response(404)
            self.end_headers()
            return

        mime_type, _ = mimetypes.guess_type(target_path) or ("application/octet-stream", None)
        self.send_response(200)
        self.send_security_headers(mime_type)
        self.send_header("Content-Length", str(os.path.getsize(target_path)))
        self.end_headers()

    # Bloqueo de todos los métodos no autorizados (Regla 7)
    def do_POST(self):
        self.send_generic_error(405, "Método no permitido.")

    def do_PUT(self):
        self.send_generic_error(405, "Método no permitido.")

    def do_DELETE(self):
        self.send_generic_error(405, "Método no permitido.")

    def do_PATCH(self):
        self.send_generic_error(405, "Método no permitido.")


class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    """Servidor multihilo para evitar que una petición bloquee a otras."""
    daemon_threads = True
    allow_reuse_address = True


def run_server():
    server_address = (HOST, PORT)
    httpd = ThreadedHTTPServer(server_address, SecureHTTPRequestHandler)
    print(f"[SEGURIDAD ACTIVA] Servidor seguro ELICER escuchando en http://localhost:{PORT}")
    print(f"[PROTECCIONES ACTIVAS] Rate Limiting ({RATE_LIMIT_MAX_REQUESTS} req/min), CSP, No Directory Listing, Anti-Traversal.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nDeteniendo servidor...")
        httpd.server_close()

if __name__ == "__main__":
    run_server()
