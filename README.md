# ELICER — Calzado & Marroquinería Artesanal en Cuero Genuino
> **Maestro Artesano Jorge Eliecer Gómez** | *Colombia • Canadá*

Plataforma web editorial, catálogo interactivo y vitrina digital para la casa de calzado y marroquinería artesanal **ELICER**. El proyecto fusiona la tradición del trabajo en cuero genuino de alta gama con una experiencia digital contemporánea, accesible, fluida y completamente responsiva.

---

## 📋 Tabla de Contenidos

1. [Características Principales](#-características-principales)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Stack Tecnológico](#-stack-tecnológico)
4. [Instalación y Uso Local](#-instalación-y-uso-local)
5. [Módulos y Arquitectura Frontend](#-módulos-y-arquitectura-frontend)
6. [Seguridad y Rendimiento](#-seguridad-y-rendimiento)
7. [Personalización y Configuración](#-personalización-y-configuración)
8. [Créditos](#-créditos)

---

## ✨ Características Principales

- **Catálogo de 4 Líneas de Oficio (46 Piezas Reales):**
  - **Clásica (5 piezas):** Calzado formal, Oxford, Derby y mocasines de vestir cosidos a mano con pátina artesanal.
  - **Sport (7 piezas):** Sneakers y calzado casual urbano en cuero plena flor, nobuck y gamuza con suelas ergonómicas.
  - **Marroquinería (23 piezas):** Billeteras bifold/trifold, tarjeteros slim y cinturones de gala y doble faz en cuero legítimo.
  - **Premium (11 piezas):** Botas de autor, calzado de edición especial con pátina manual y suela en cuero grupón.
- **Vitrina Interactiva & Modal de Inspección Boutique:**
  - Filtrado dinámico con conteo de piezas por línea y cambio de identidad gráfica (isotipo y subtítulo de línea).
  - Buscador en tiempo real con normalización de acentos (`NFD`) por nombre, código de referencia, material o descripción.
  - Modal de detalle con galería multi-ángulo, lupa de zoom dinámico (mouse y pinch-to-zoom táctil), ficha técnica completa y campo de notas de personalización (talla, color, iniciales).
- **Navegación Móvil Refinada & Accesibilidad WCAG 2.2 AA:**
  - Enlace de salto al contenido principal (`skip-link`), trampa de foco (`focus trap`) en diálogos y soporte completo de teclado (`Escape`, `Tab`).
  - Respeto estricto a `prefers-reduced-motion` y áreas seguras (`safe-area-inset`) en dispositivos móviles.
- **Integración con WhatsApp Concierge (`+1 (514) 885-8825`):**
  - Generador automatizado de enlaces a WhatsApp que estructura la consulta con nombre de la pieza, código de referencia (`REF`), línea y notas de personalización.

---

## 📁 Estructura del Proyecto

```text
Pagina Eliecer/
├── css/
│   └── styles.css            # Estilos editoriales, variables CSS, animaciones y utilidades responsivas
├── fotos/                    # Recursos fotográficos optimizados del taller
│   ├── Clasica/              # Calzado formal y mocasines clásicos
│   ├── Deportiva/            # Reservado para futura línea deportiva
│   ├── Institucional/        # Reservado para futura línea institucional
│   ├── Logos/                # Emblemas oficiales por línea (SVG y WebP)
│   ├── Marroquineria/        # Billeteras, cinturones y accesorios en cuero
│   ├── Premium/              # Botas y piezas maestras de colección
│   └── sport/                # Calzado casual y sneakers de cuero
├── js/
│   ├── app.js                # Lógica de interfaz, filtros, buscador, modal, zoom y accesibilidad
│   └── products.js           # Catálogo de 46 piezas, configuración de líneas y generador de WhatsApp
├── .gitignore                # Reglas de exclusión para Git
├── index.html                # Estructura semántica HTML5, SEO, Open Graph, JSON-LD y Tailwind CSS
├── package.json              # Metadatos del proyecto y script de inicio
├── README.md                 # Documentación del proyecto
└── server.py                 # Servidor HTTP seguro en Python con lista blanca de extensiones, CSP y rate limiting
```

---

## 🛠 Stack Tecnológico

- **Maquetación & Semántica:** HTML5 semántico con atributos WAI-ARIA y datos estructurados Schema.org (`Brand`).
- **Estilos & Diseño:** [Tailwind CSS](https://tailwindcss.com/) + hoja de estilos editorial (`css/styles.css`).
- **Paleta de Identidad:**
  - Marfil (`#F4F0E8`), Blanco Cálido (`#FAF8F4`), Carbón Profundo (`#1C1B19`), Espresso (`#352820`), Cuero Legítimo (`#8A6347`) y Arena (`#D8C8B5`).
- **Tipografías:**
  - *Serif:* `Cormorant Garamond` (Elegancia artesanal clásica).
  - *Sans:* `Manrope` (Claridad técnica contemporánea).
- **Servidor Local:** Python 3 (`http.server` multihilo con cabeceras de seguridad y protección contra Path Traversal).

---

## 🚀 Instalación y Uso Local

### Opción 1: Servidor Seguro en Python (Recomendado)

1. Asegúrate de tener instalado **Python 3.8+**.
2. Abre una terminal en la raíz del proyecto e inicia el servidor:
   ```bash
   python server.py
   ```
3. Abre tu navegador en:
   ```text
   http://localhost:8000
   ```

### Opción 2: Servidor Estático Convencional

Puedes servir la carpeta raíz con cualquier servidor estático (`npx serve`, *Live Server* en VS Code, Nginx, Netlify, Vercel, Cloudflare Pages o GitHub Pages).

---

## 🧩 Módulos y Arquitectura Frontend

### 1. `js/products.js`
Contiene la configuración central (`WHATSAPP_PHONE`, `LINE_LOGOS`, `LINE_BRANDING`), el catálogo `PRODUCTS_DATA` con las 46 piezas documentadas y las funciones `buildWhatsAppUrl()` y `buildGeneralWhatsAppUrl()`.

### 2. `js/app.js`
Coordina la experiencia de usuario:
- Renderizado de tarjetas del catálogo, filtrado por línea con contador dinámico y búsqueda instantánea.
- Modal de detalle de producto con renderizado dinámico de especificaciones (`renderProductSpecsHTML`), galería multi-imagen sin pérdida de estado y zoom interactivo (`initModalImageZoom`).
- Control del menú móvil, cabecera dinámica en scroll y gestión de foco accesible.

---

## 🛡 Seguridad y Rendimiento

- **Lista Blanca de Extensiones (`ALLOWED_EXTENSIONS`):** `server.py` sirve únicamente recursos web estáticos autorizados, impidiendo la descarga de scripts del servidor o archivos de configuración.
- **Content Security Policy (CSP) & Cabeceras HTTP:** Políticas estrictas `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` y `Referrer-Policy`.
- **Rate Limiting:** Control de hasta 120 solicitudes por minuto por IP en `server.py`.
- **Optimización Fotográfica:** Fotografías de catálogo normalizadas en nombres ASCII (`kebab-case`) y optimizadas a máximo `1400px` para carga rápida (`loading="lazy"`, `decoding="async"`).

---

## ⚙️ Personalización y Configuración

- **Número de WhatsApp Oficial:**
  Configurado en `+1 (514) 885-8825` (`WHATSAPP_PHONE = "15148858825"` en `js/products.js` y enlaces directos en `index.html`).
- **Nuevos Productos o Fotografías:**
  Agrega las imágenes optimizadas en la subcarpeta correspondiente dentro de `fotos/` y registra el objeto del producto en `PRODUCTS_DATA` dentro de `js/products.js`.

---

## ✒️ Créditos

- **Concepto y Artesanía:** Jorge Eliecer Gómez — Maestro de Calzado y Marroquinería.
- **Marca:** ELICER (Colombia • Canadá).

---
*© 2026 ELICER — Jorge Eliecer Gómez. Todos los derechos reservados.*
