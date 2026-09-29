/**
 * ELICER — Lógica Principal de la Vitrina Virtual y Experiencia de Cotización
 */

let activeLine = "all"; // all | trabajo | deportiva | esenciales
let selectedProductForModal = null;
let activeModalImageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initLineFilters();
  updateActiveLineBranding(activeLine);
  renderProductGrid();
  if (typeof initCustomizer === "function") initCustomizer();
  initMobileMenu();
});

// 1. Control de Navbar al hacer Scroll
function initNavbarScroll() {
  const navbar = document.getElementById("main-navbar");
  const navLogo = document.getElementById("nav-logo");

  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("navbar-scrolled");
      navbar.classList.remove("text-ivory");
      navbar.classList.add("text-charcoal");
      if (navLogo) navLogo.classList.replace("text-ivory", "text-charcoal");
    } else {
      navbar.classList.remove("navbar-scrolled");
      navbar.classList.remove("text-charcoal");
      navbar.classList.add("text-ivory");
      if (navLogo) navLogo.classList.replace("text-charcoal", "text-ivory");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// 2. Filtros por Líneas de Producto (5 Líneas Oficiales con sincronización ARIA)
function initLineFilters() {
  const filterButtons = document.querySelectorAll(".line-filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("border-charcoal", "bg-charcoal", "text-ivory");
        b.classList.add("border-sand/60", "bg-transparent", "text-charcoal/80");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("border-charcoal", "bg-charcoal", "text-ivory");
      btn.classList.remove("border-sand/60", "bg-transparent", "text-charcoal/80");
      btn.setAttribute("aria-selected", "true");

      activeLine = btn.dataset.line;
      updateActiveLineBranding(activeLine);
      renderProductGrid();
    });
  });
}

// =========================================================================
// Utilidades de Seguridad: Sanitización HTML y Rate Limiting / Anti-Abuso
// =========================================================================

function escapeHTML(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Limitador de tasa y protección contra saturación/abuso en interacciones de WhatsApp
const ActionRateLimiter = {
  lastActionTimes: {},
  canExecute(actionKey, cooldownMs = 2000) {
    const now = Date.now();
    const lastTime = this.lastActionTimes[actionKey] || 0;
    if (now - lastTime < cooldownMs) {
      return false;
    }
    this.lastActionTimes[actionKey] = now;
    return true;
  }
};

// 2.1 Actualización Dinámica del Logo y Subtítulo en Navbar y Vitrina
function updateActiveLineBranding(lineKey) {
  const branding = (typeof LINE_BRANDING !== "undefined" && LINE_BRANDING[lineKey]) 
    ? LINE_BRANDING[lineKey] 
    : (typeof LINE_BRANDING !== "undefined" ? LINE_BRANDING.all : null);

  if (!branding) return;

  // Actualizar Navbar
  const navLogoImg = document.getElementById("nav-logo-img");
  const navLogo = document.getElementById("nav-logo");
  const navSubtitle = document.getElementById("nav-subtitle");

  if (navLogoImg) {
    navLogoImg.src = branding.logo;
    navLogoImg.alt = escapeHTML(branding.name);
  }
  if (navLogo) {
    navLogo.textContent = branding.name;
  }
  if (navSubtitle) {
    navSubtitle.textContent = branding.subtitle;
  }

  // Actualizar Banner en Vitrina Virtual
  const bannerContainer = document.getElementById("vitrina-line-banner");
  if (!bannerContainer) return;

  if (lineKey === "all") {
    bannerContainer.innerHTML = `
      <div class="bg-ivory border border-sand/60 p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-sm mb-6 rounded-none">
        <div class="flex items-center gap-3.5 sm:gap-5 min-w-0">
          <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/80 shadow-md bg-warm-white p-0.5 flex-shrink-0 flex items-center justify-center">
            <img src="${branding.logo}" alt="ELICER Insignia" class="w-full h-full object-cover rounded-full" />
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2 mb-0.5">
              <span class="text-[10px] uppercase font-mono tracking-[0.25em] text-leather font-semibold">${escapeHTML(branding.badge)}</span>
            </div>
            <h3 class="font-serif text-lg sm:text-2xl text-charcoal font-medium break-words">${escapeHTML(branding.tagline)}</h3>
            <p class="text-xs text-charcoal/70 font-light mt-0.5 max-w-2xl leading-relaxed">${escapeHTML(branding.desc)}</p>
          </div>
        </div>
        <div class="flex-shrink-0 w-full sm:w-auto">
          <a href="#personalizacion" class="text-xs uppercase tracking-[0.18em] font-semibold text-leather hover:text-charcoal inline-flex items-center justify-center sm:justify-start gap-1.5 transition-colors w-full sm:w-auto py-2 sm:py-0 min-h-[44px]">
            <span>Personalizar Pieza</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    `;
  } else {
    bannerContainer.innerHTML = `
      <div class="bg-ivory border border-[#D4AF37]/60 p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-md mb-6 relative overflow-hidden">
        <div class="flex items-center gap-3.5 sm:gap-5 min-w-0">
          <div class="w-12 h-14 sm:w-16 sm:h-20 rounded-sm overflow-hidden border border-[#D4AF37] shadow-md bg-warm-white p-1 flex-shrink-0 flex items-center justify-center">
            <img src="${branding.logo}" alt="${escapeHTML(branding.name)}" class="w-full h-full object-contain" />
          </div>
          <div class="space-y-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2 py-0.5 bg-charcoal text-ivory text-[9px] font-mono uppercase tracking-[0.2em] font-semibold border border-[#D4AF37]/60">
                ${escapeHTML(branding.badge)}
              </span>
              <span class="text-[10px] uppercase font-mono tracking-[0.2em] text-leather font-medium">
                ${escapeHTML(branding.subtitle)}
              </span>
            </div>
            <h3 class="font-serif text-lg sm:text-2xl text-charcoal font-normal break-words">${escapeHTML(branding.tagline)}</h3>
            <p class="text-xs text-charcoal/75 font-light max-w-2xl leading-relaxed">${escapeHTML(branding.desc)}</p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
          <a 
            href="${getWhatsAppWholesaleLink(branding.name)}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-whatsapp-card py-2.5 px-4 text-[11px] uppercase tracking-[0.15em] font-semibold whitespace-nowrap text-center justify-center w-full sm:w-auto min-h-[44px]"
          >
            <svg class="w-3.5 h-3.5 text-emerald-400 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.129-.523-1.838-.76-3.023-2.624-3.114-2.748-.093-.125-.744-.991-.744-1.891 0-.899.47-1.343.637-1.528.167-.184.366-.231.488-.231.122 0 .245.001.352.007.113.006.264-.043.413.315.155.372.528 1.289.574 1.382.046.094.077.203.016.327-.061.124-.092.202-.183.311-.093.109-.196.244-.279.327-.093.093-.19.195-.082.381.109.186.483.797 1.037 1.29 1.139.715 1.503.798 1.717.904.214.106.34.093.468-.053.128-.146.551-.64.698-.86.147-.22.294-.184.496-.109.202.075 1.282.605 1.502.715.22.11.368.164.422.257.054.094.054.544-.09 1.002z"/>
            </svg>
            <span>Cotizar Línea</span>
          </a>
        </div>
      </div>
    `;
  }
}

// 3. Render de la Cuadrícula Editorial de Productos (Botones Llamativos WhatsApp)
function renderProductGrid() {
  const gridContainer = document.getElementById("products-grid-container");
  if (!gridContainer) return;

  const filteredProducts = activeLine === "all" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.line === activeLine);

  if (filteredProducts.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-4" role="status">
        <div class="w-12 h-12 mx-auto rounded-full bg-sand/30 flex items-center justify-center text-leather font-serif text-xl" aria-hidden="true">!</div>
        <h3 class="font-serif text-2xl text-charcoal font-medium">No se encontraron piezas en esta línea</h3>
        <p class="text-xs text-charcoal/70 max-w-md mx-auto">Actualmente estamos preparando nuevas siluetas para esta colección. Puedes explorar las demás líneas o consultar al taller.</p>
        <button 
          type="button" 
          onclick="document.getElementById('tab-line-all').click()" 
          class="btn-whatsapp-card mt-2 inline-flex items-center gap-2 cursor-pointer"
          aria-label="Ver todas las líneas del catálogo"
        >
          <span>Ver Todas las Líneas</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filteredProducts.map((product) => {
    const escapedName = escapeHTML(product.name);
    const escapedLineName = escapeHTML(product.lineName);
    const escapedTagline = escapeHTML(product.tagline);
    const escapedRef = escapeHTML(product.id.toUpperCase());

    return `
      <article class="product-card group flex flex-col justify-between overflow-hidden">
        
        <!-- Fotografía Editorial con Acceso Rápido y Navegación por Teclado -->
        <div 
          class="relative aspect-[3/4] w-full overflow-hidden bg-sand/15 cursor-pointer" 
          onclick="openProductModal('${product.id}')"
          role="button"
          tabindex="0"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProductModal('${product.id}');}"
          aria-label="Abrir detalle de ${escapedName}"
        >
          <img 
            src="${product.image}" 
            alt="${escapedName}" 
            class="product-card-img w-full h-full object-cover object-center"
            loading="lazy"
          />
          
          <!-- Badge de Línea Oficial -->
          <div class="absolute top-4 left-4">
            <span class="bg-ivory/95 backdrop-blur-sm text-charcoal px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-mono border border-sand/50 shadow-sm font-semibold">
              ${escapedLineName}
            </span>
          </div>

          <!-- Overlay con CTA Editorial -->
          <div class="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <button 
              type="button"
              onclick="event.stopPropagation(); openProductModal('${product.id}')"
              class="w-full bg-warm-white/95 text-charcoal py-3 px-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-charcoal hover:text-ivory transition-colors duration-200 shadow-md min-h-[42px] flex items-center justify-center cursor-pointer"
              aria-label="Ver ficha de taller de ${escapedName}"
            >
              Ver Ficha de Taller →
            </button>
          </div>
        </div>

        <!-- Información de la Pieza -->
        <div class="p-5 sm:p-6 md:p-7 flex flex-col flex-grow justify-between border-t border-sand/30">
          <div>
            <div class="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-charcoal/70 font-mono mb-2">
              <span class="text-leather font-semibold">${escapedLineName}</span>
              <span>REF: ${escapedRef}</span>
            </div>
            
            <h3 
              class="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-leather transition-colors duration-200 cursor-pointer font-medium leading-tight"
              onclick="openProductModal('${product.id}')"
              role="button"
              tabindex="0"
              onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProductModal('${product.id}');}"
              aria-label="Ver ficha de ${escapedName}"
            >
              ${escapedName}
            </h3>

            <p class="text-xs text-charcoal/75 mt-2 font-light line-clamp-2 leading-relaxed">
              ${escapedTagline}
            </p>

            <!-- Características Rápidas -->
            <div class="mt-4 flex flex-wrap gap-1.5" aria-label="Características destacadas">
              ${product.features ? product.features.map(f => `
                <span class="text-[10px] bg-sand/25 text-charcoal/85 px-2 py-0.5 border border-sand/40 font-mono">
                  ${escapeHTML(f)}
                </span>
              `).join('') : ''}
            </div>
          </div>

          <!-- Botón de Cotización Llamativo de WhatsApp -->
          <div class="mt-6 pt-4 border-t border-sand/30 flex items-center justify-between">
            <span class="text-[10px] text-charcoal/70 uppercase tracking-wider font-mono">
              Bajo Pedido
            </span>

            <a 
              href="${getWhatsAppProductLink(product)}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-whatsapp-card min-h-[44px]"
              aria-label="Cotizar ${escapedName} en WhatsApp"
              title="Cotizar ${escapedName} en WhatsApp"
            >
              <svg class="w-3.5 h-3.5 text-emerald-400 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.129-.523-1.838-.76-3.023-2.624-3.114-2.748-.093-.125-.744-.991-.744-1.891 0-.899.47-1.343.637-1.528.167-.184.366-.231.488-.231.122 0 .245.001.352.007.113.006.264-.043.413.315.155.372.528 1.289.574 1.382.046.094.077.203.016.327-.061.124-.092.202-.183.311-.093.109-.196.244-.279.327-.093.093-.19.195-.082.381.109.186.483.797 1.037 1.29 1.139.715 1.503.798 1.717.904.214.106.34.093.468-.053.128-.146.551-.64.698-.86.147-.22.294-.184.496-.109.202.075 1.282.605 1.502.715.22.11.368.164.422.257.054.094.054.544-.09 1.002z"/>
              </svg>
              <span>Cotizar</span>
            </a>
          </div>

        </div>

      </article>
    `;
  }).join('');
}

// 4. Modal de Vista de Detalle y Cotización (Accesible con Gestión de Foco)
let previousActiveElement = null;

function trapFocusInContainer(container) {
  const focusableSelectors = 'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])';
  
  container.addEventListener("keydown", function(e) {
    if (e.key !== "Tab") return;

    const focusable = Array.from(container.querySelectorAll(focusableSelectors)).filter(el => el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  selectedProductForModal = product;
  activeModalImageIndex = 0;
  previousActiveElement = document.activeElement;

  const modal = document.getElementById("product-detail-modal");
  const modalContent = document.getElementById("product-modal-content");

  if (!modal || !modalContent) return;

  renderModalContent(product);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Mover el foco al botón de cerrar para navegación por teclado
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.focus();
  }

  trapFocusInContainer(modal);
}

function closeProductModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Devolver el foco al elemento que activó el modal (WCAG 2.4.3)
  if (previousActiveElement && typeof previousActiveElement.focus === "function") {
    previousActiveElement.focus();
  }
}

function renderModalContent(product) {
  const modalContent = document.getElementById("product-modal-content");
  if (!modalContent) return;

  const escapedName = escapeHTML(product.name);
  const escapedLineName = escapeHTML(product.lineName);
  const escapedTagline = escapeHTML(product.tagline);
  const escapedRef = escapeHTML(product.id.toUpperCase());

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      
      <!-- Columna Izquierda: Galería Editorial -->
      <div class="lg:col-span-6 space-y-3 sm:space-y-4">
        <div class="relative aspect-[4/5] bg-sand/20 overflow-hidden">
          <img 
            id="modal-main-image" 
            src="${product.gallery[activeModalImageIndex] || product.image}" 
            alt="${escapedName}" 
            class="w-full h-full object-cover object-center transition-all duration-500"
          />
          <div class="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span class="bg-charcoal text-ivory text-[10px] tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 font-mono font-medium">
              ${escapedLineName}
            </span>
          </div>
        </div>

        <!-- Miniaturas Accesibles -->
        <div class="grid grid-cols-3 gap-2 sm:gap-3" role="group" aria-label="Galería de imágenes de la pieza">
          ${product.gallery.map((img, i) => `
            <button 
              type="button" 
              onclick="switchModalImage(${i})" 
              aria-label="Ver fotografía ${i + 1} de ${product.gallery.length} de ${escapedName}"
              aria-pressed="${i === activeModalImageIndex ? 'true' : 'false'}"
              class="aspect-square bg-sand/20 overflow-hidden border-2 transition-all duration-200 cursor-pointer min-h-[44px] ${i === activeModalImageIndex ? 'border-charcoal opacity-100 ring-2 ring-leather/40' : 'border-transparent opacity-60 hover:opacity-90'}"
            >
              <img src="${img}" alt="Vista ${i + 1}" class="w-full h-full object-cover"/>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Columna Derecha: Ficha Técnica & Cotización -->
      <div class="lg:col-span-6 flex flex-col justify-between h-full space-y-4 sm:space-y-6">
        <div>
          <div class="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.2em] text-charcoal/70 font-mono border-b border-sand/40 pb-3">
            <span class="text-leather font-semibold">${escapedLineName}</span>
            <span>REF: ${escapedRef}</span>
          </div>

          <h2 id="modal-product-title" class="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-charcoal mt-2 sm:mt-3 leading-tight">
            ${escapedName}
          </h2>

          <p class="font-serif italic text-base sm:text-lg text-leather mt-1">
            ${escapedTagline}
          </p>

          <!-- Banner Informativo de Confección -->
          <div class="my-3 sm:my-4 p-3.5 sm:p-4 bg-sand/20 border border-sand/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
            <div>
              <span class="text-[10px] uppercase tracking-wider text-charcoal/70 block font-mono">Modalidad de Atención</span>
              <span class="font-serif text-base sm:text-lg font-medium text-charcoal">Cotización Directa & A Medida</span>
            </div>
            <div class="sm:text-right">
              <span class="text-[10px] uppercase tracking-wider text-charcoal/70 block font-mono">Fabricación</span>
              <span class="text-xs text-leather font-medium">Oficio Artesanal</span>
            </div>
          </div>

          <!-- Descripción -->
          <p class="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mb-4">
            ${escapeHTML(product.description)}
          </p>

          <!-- Especificaciones Técnicas Adaptables -->
          <div class="space-y-2 text-xs border-t border-b border-sand/40 py-3 sm:py-4 mb-4">
            <h3 class="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal mb-2">Ficha de Taller</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-charcoal/75">
              <div><strong class="text-charcoal font-medium">Material:</strong> ${escapeHTML(product.specs.material)}</div>
              <div><strong class="text-charcoal font-medium">Curtido:</strong> ${escapeHTML(product.specs.curtido)}</div>
              <div><strong class="text-charcoal font-medium">Dimensiones:</strong> ${escapeHTML(product.specs.dimensiones)}</div>
              <div><strong class="text-charcoal font-medium">Herrajes:</strong> ${escapeHTML(product.specs.herrajes)}</div>
            </div>
            <div class="pt-1 text-[11px] text-charcoal/75">
              <strong class="text-charcoal font-medium">Personalización:</strong> ${escapeHTML(product.specs.personalizacion)}
            </div>
          </div>

          <!-- Campo de Notas con Contador en Vivo y Accesibilidad (Prevención Zoom iOS Safari: min 16px) -->
          <div>
            <label for="modal-custom-note" class="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
              Especificación para la cotización (Monograma, cantidad o color deseado):
            </label>
            <input 
              type="text" 
              id="modal-custom-note" 
              name="customNote"
              maxlength="150"
              autocomplete="off"
              spellcheck="true"
              placeholder="Ej: Iniciales grabadas 'A.V.', tono Espresso, cotizar 5 unidades para empresa..." 
              class="w-full bg-ivory border border-sand px-3.5 py-2.5 text-base sm:text-xs text-charcoal focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/50 min-h-[44px]"
            />
            <div class="flex justify-between items-center mt-1 text-[10px] text-charcoal/70 font-mono">
              <span>Opcional: afina detalles con el taller</span>
              <span><strong id="modal-char-count">0</strong> / 150 caracteres</span>
            </div>
          </div>
        </div>

        <!-- Botón de Cotización Llamativo por WhatsApp con Feedback de Carga -->
        <div class="pt-3 sm:pt-4 border-t border-sand/40">
          <button 
            type="button" 
            id="modal-submit-whatsapp-btn"
            onclick="sendModalWhatsAppOrder()" 
            class="w-full btn-whatsapp-primary py-3.5 sm:py-4 px-4 sm:px-6 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2.5 sm:gap-3 shadow-lg group cursor-pointer transition-all min-h-[48px]"
          >
            <svg class="w-4 h-4 text-emerald-400 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.129-.523-1.838-.76-3.023-2.624-3.114-2.748-.093-.125-.744-.991-.744-1.891 0-.899.47-1.343.637-1.528.167-.184.366-.231.488-.231.122 0 .245.001.352.007.113.006.264-.043.413.315.155.372.528 1.289.574 1.382.046.094.077.203.016.327-.061.124-.092.202-.183.311-.093.109-.196.244-.279.327-.093.093-.19.195-.082.381.109.186.483.797 1.037 1.29 1.139.715 1.503.798 1.717.904.214.106.34.093.468-.053.128-.146.551-.64.698-.86.147-.22.294-.184.496-.109.202.075 1.282.605 1.502.715.22.11.368.164.422.257.054.094.054.544-.09 1.002z"/>
            </svg>
            <span id="modal-submit-whatsapp-text">Solicitar Cotización por WhatsApp</span>
            <span class="text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
          </button>
          <p id="modal-ratelimit-notice" class="text-center text-[10px] text-charcoal/70 mt-2 transition-colors font-mono" role="status" aria-live="polite">
            Respuesta personalizada de taller • Cotizaciones individuales y corporativas al por mayor.
          </p>
        </div>

      </div>
    </div>
  `;

  // Listener para el contador de caracteres en tiempo real
  const noteInput = document.getElementById("modal-custom-note");
  const charCount = document.getElementById("modal-char-count");
  if (noteInput && charCount) {
    noteInput.addEventListener("input", () => {
      const len = noteInput.value.length;
      charCount.textContent = len;
      if (len >= 140) {
        charCount.classList.add("text-amber-700", "font-bold");
      } else {
        charCount.classList.remove("text-amber-700", "font-bold");
      }
    });
  }
}

function switchModalImage(index) {
  if (!selectedProductForModal) return;
  activeModalImageIndex = index;
  const imgEl = document.getElementById("modal-main-image");
  if (imgEl && selectedProductForModal.gallery[index]) {
    imgEl.src = selectedProductForModal.gallery[index];
  }
  renderModalContent(selectedProductForModal);
}

function sendModalWhatsAppOrder() {
  if (!selectedProductForModal) return;

  const btn = document.getElementById("modal-submit-whatsapp-btn");
  const btnText = document.getElementById("modal-submit-whatsapp-text");

  // Rate Limiting defensivo contra saturación y clics repetitivos automatizados
  if (!ActionRateLimiter.canExecute("whatsapp-modal", 2500)) {
    const noticeEl = document.getElementById("modal-ratelimit-notice");
    if (noticeEl) {
      noticeEl.textContent = "Por favor espera un momento antes de enviar otra solicitud de cotización.";
      noticeEl.className = "text-center text-[11px] text-amber-700 font-medium mt-2 transition-colors";
      setTimeout(() => {
        if (noticeEl) {
          noticeEl.textContent = "Respuesta personalizada de taller • Cotizaciones individuales y corporativas al por mayor.";
          noticeEl.className = "text-center text-[10px] text-charcoal/70 mt-2 transition-colors font-mono";
        }
      }, 2500);
    }
    return;
  }

  // Feedback de carga inmediato para el usuario (Heurística 1 de Nielsen)
  if (btn && btnText) {
    btn.disabled = true;
    btn.classList.add("opacity-80");
    btnText.textContent = "Abriendo WhatsApp...";
    setTimeout(() => {
      if (btn && btnText) {
        btn.disabled = false;
        btn.classList.remove("opacity-80");
        btnText.textContent = "Solicitar Cotización por WhatsApp";
      }
    }, 1800);
  }

  const noteEl = document.getElementById("modal-custom-note");
  const note = noteEl ? noteEl.value : "";
  const link = getWhatsAppProductLink(selectedProductForModal, note);

  // Apertura segura evitando Reverse Tabnabbing y protegiendo window.opener
  const newWin = window.open(link, "_blank", "noopener,noreferrer");
  if (newWin) {
    newWin.opener = null;
  }
}

// 5. Drawer Menú Móvil con Accesibilidad Completa
function initMobileMenu() {
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("close-mobile-menu");
  const drawer = document.getElementById("mobile-menu-drawer");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const links = document.querySelectorAll(".mobile-nav-link");

  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove("translate-x-full");
    if (backdrop) backdrop.classList.remove("hidden");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
    trapFocusInContainer(drawer);
  };

  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.add("translate-x-full");
    if (backdrop) backdrop.classList.add("hidden");
    if (openBtn) {
      openBtn.setAttribute("aria-expanded", "false");
      openBtn.focus();
    }
    document.body.style.overflow = "";
  };

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  links.forEach(l => {
    l.addEventListener("click", closeDrawer);
  });

  // Cerrar modal o drawer con clic en el fondo
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }
}

// Atajo de teclado global: tecla ESC cierra modal y menú móvil
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("product-detail-modal");
    if (modal && !modal.classList.contains("hidden")) {
      closeProductModal();
      return;
    }
    const drawer = document.getElementById("mobile-menu-drawer");
    if (drawer && !drawer.classList.contains("translate-x-full")) {
      const closeBtn = document.getElementById("close-mobile-menu");
      if (closeBtn) closeBtn.click();
    }
  }
});

