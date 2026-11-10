# ELICER — Marroquinería Contemporánea & Líneas de Oficio
> **Maestro Artesano Jorge Eliecer Gómez** | *Colombia • Canadá*

Plataforma web premium, catálogo interactivo y vitrina digital para la marca de marroquinería artesanal **ELICER**. El proyecto fusiona la tradición del trabajo en cuero genuino de alta gama con una experiencia digital contemporánea, interactiva, fluida y completamente responsiva.

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

- **Catálogo de 5 Líneas de Oficio:**
  - **Sport:** Accesorios versátiles, dinámicos y ergonómicos para el día a día.
  - **Deportiva:** Equipamiento y bolsos robustos diseñados con resistencia de alto rendimiento.
  - **Marroquinería:** Billeteras, tarjeteros, cinturones y piezas clásicas cosidas a detalle.
  - **Institucional:** Dotación corporativa exclusiva, carpetas y regalos de negocios en cuero legítimo.
  - **Premium:** Piezas maestras de edición limitada, acabados con pátinas manuales y herrajes selectos.
- **Personalizador de Piezas en Tiempo Real (`js/customizer.js`):**
  - Selección dinámica de tipos de cuero y tonalidades artesanales (Café Moro, Habana, Suela, Negro Azabache).
  - Elección de herrajes (Bronce antiguo, Níquel satinado, Dorado mate).
  - Grabado de monogramas / iniciales personalizado con cálculo estimado de cotización en vivo.
- **Motion Design y Microinteracciones avanzadas (GSAP):**
  - Entradas escalonadas (*stagger*), revelado de textos, scroll parallax suave y transiciones de tarjetas.
  - Microinteracciones de hover háptico visual y elevación con feedback inmediato.
  - Soporte nativo para accesibilidad de movimiento (`prefers-reduced-motion`).
- **Navegación Móvil Refinada (Drawer UI/UX):**
  - Menú lateral deslizante con desenfoque de fondo (*backdrop blur*), control de foco accesible (`aria-expanded`, tecla `Escape`), prevención de scroll de fondo y targets táctiles optimizados (mínimo 44px).
- **Integración con WhatsApp Concierge:**
  - Generador automatizado de enlaces a WhatsApp que preformatea los datos de cotización (línea, producto, personalización seleccionada) para atención directa de taller.
- **Botón Flotante de Contacto:**
  - Botón minimalista de WhatsApp fijado en la esquina inferior derecha con tooltip descriptivo y elevación suave al interactuar.

---

## 📁 Estructura del Proyecto

```text
Pagina Eliecer/
├── css/
│   └── styles.css            # Estilos personalizados, animaciones CSS, utilities y variables
├── fotos/                    # Recursos fotográficos oficiales del taller
│   ├── Deportiva/            # Fotografías de la línea deportiva
│   ├── Institucional/        # Piezas corporativas e institucionales
│   ├── Logos/                # Emblemas oficiales e isotipos de marca
│   ├── Marroquineria/        # Fotografías de marroquinería tradicional
│   ├── Premium/              # Fotografías de piezas maestras de colección
│   └── Sport/                # Fotografías de la línea sport
├── js/
│   ├── app.js                # Lógica global, animaciones GSAP, menú móvil, header dinámico
│   ├── customizer.js         # Motor interactivo de personalización de productos y cotizaciones
│   └── products.js           # Base de datos local de productos, filtrado y renderizado dinámico
├── .gitignore                # Reglas de exclusión para Git (Node, Python, SO, editores)
├── index.html                # Estructura semántica HTML5, metadatos SEO, Open Graph y Tailwind
├── package.json              # Metadatos del proyecto
├── README.md                 # Documentación completa del proyecto
└── server.py                 # Servidor HTTP seguro en Python con rate limiting y cabeceras estrictas
```

---

## 🛠 Stack Tecnológico

- **Maquetación & Semántica:** HTML5 semántico con estándares WAI-ARIA para accesibilidad.
- **Estilos & Diseño:** [Tailwind CSS](https://tailwindcss.com/) complementado con CSS moderno (`css/styles.css`).
- **Paleta de Identidad:**
  - Marfil (`#F4F0E8`), Blanco Cálido (`#FAF8F4`), Carbón Profundo (`#1C1B19`), Espresso (`#352820`), Cuero Legítimo (`#8A6347`), Arena (`#D8C8B5`) y Acentos Oro Artesanal (`#D4AF37`).
- **Tipografías:**
  - *Serif:* `Cormorant Garamond` (Elegancia artesanal clásica).
  - *Sans:* `Manrope` (Claridad técnica contemporánea).
- **Animaciones & Motion:** [GSAP 3](https://greensock.com/gsap/) con ScrollTrigger para secuencias y revelados progresivos.
- **Servidor Local:** Python 3 (`http.server` multi-hilo con arquitectura de seguridad personalizada).

---

## 🚀 Instalación y Uso Local

### Opción 1: Servidor Seguro en Python (Recomendado)

El proyecto incluye `server.py`, configurado con cabeceras de seguridad CSP y limitador de peticiones para emular un entorno de producción seguro:

1. Asegúrate de tener instalado **Python 3.8+**.
2. Abre una terminal en la raíz del proyecto:
   ```bash
   cd "Pagina Eliecer"
   ```
3. Inicia el servidor:
   ```bash
   python server.py
   ```
4. Abre tu navegador en:
   ```text
   http://localhost:8000
   ```

### Opción 2: Abrir Directamente en el Navegador

Puedes abrir directamente el archivo `index.html` con cualquier navegador moderno o utilizando extensiones como *Live Server* en Visual Studio Code.

---

## 🧩 Módulos y Arquitectura Frontend

### 1. `js/products.js`
Almacena el catálogo de productos por categorías (`sport`, `deportiva`, `marroquineria`, `institucional`, `premium`), gestiona los filtros de vitrina y renderiza las tarjetas con sus detalles de material y acabados.

### 2. `js/customizer.js`
Controla el personalizador artesanal:
- Escucha los cambios de acabados, cuero y herrajes.
- Actualiza el visor visual y recalcula el valor sugerido.
- Genera el enlace dinámico a WhatsApp (`wa.me`) con el desglose exacto de la pieza configurada.

### 3. `js/app.js`
Coordina la experiencia de usuario general:
- Manejo del menú drawer en dispositivos móviles con gestión de foco accesible y bloqueo de scroll.
- Efecto de transparencia a estado sólido del navbar según el desplazamiento vertical.
- Inicialización de animaciones fluidas con GSAP (respetando `prefers-reduced-motion`).
- Desplazamiento suave (*smooth scroll*) para anclas de navegación interna.

---

## 🛡 Seguridad y Rendimiento

- **Content Security Policy (CSP):** Políticas restrictivas para carga de scripts, fuentes seguras y assets multimedia.
- **Anti-Clickjacking:** Cabecera `X-Frame-Options: DENY` para mitigar incrustaciones en marcos no autorizados.
- **MIME Protection:** `X-Content-Type-Options: nosniff` activo para prevenir ataques de confusión de tipos MIME.
- **Rate Limiting:** `server.py` implementa control de concurrencia limitando peticiones por IP (máximo 120 peticiones/minuto) para mitigar saturaciones accidentales o abusos.
- **Rendimiento de Imágenes:** Atributos `loading="lazy"` y `decoding="async"` para optimizar el First Contentful Paint (FCP).

---

## ⚙️ Personalización y Configuración

- **Número de WhatsApp Oficial:**
  Para actualizar el número de atención directa, edita los enlaces con prefijo `https://wa.me/573000000000` en `index.html`, `js/app.js` y `js/customizer.js`.
- **Nuevos Productos o Fotografías:**
  Agrega las imágenes correspondientes en la subcarpeta respectiva dentro de `fotos/` y declara la nueva pieza en la lista de `products.js`.

---

## ✒️ Créditos

- **Concepto y Artesanía:** Jorge Eliecer Gómez — Maestro Marroquinero.
- **Marca:** ELICER (Colombia • Canadá).
- **Desarrollo Web & Motion Design:** Experiencia interactiva desarrollada con estándares modernos de UI/UX y rendimiento web.

---
*© 2026 ELICER. Todos los derechos reservados.*
