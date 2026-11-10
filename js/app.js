/**
 * ELICER — Lógica Principal de la Vitrina Virtual y Experiencia de Cotización
 */

let activeLine = "all"; // all | clasica | sport | marroquineria | premium
let selectedProductForModal = null;
let activeModalImageIndex = 0;

// Estado de paginación del catálogo
let currentPage = 1;
const PRODUCTS_PER_PAGE = 8;

// Estado de la SPA
let currentRoute = "inicio"; // inicio | vitrina | personalizacion | mayoristas | historia

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initRouter();
  initHeroProductCarousel();
  initLineFilters();
  updateActiveLineBranding(activeLine);
  renderProductGrid();
  initMobileMenu();
});

// 1. Control de Navbar al hacer Scroll
function initNavbarScroll() {
  const navbar = document.getElementById("main-navbar");
  const navLogo = document.getElementById("nav-logo");

  if (!navbar) return;

  const handleScroll = () => {
    // Si no estamos en la vista 'inicio' (hero oscuro), el navbar debe mantenerse con fondo sólido
    if (currentRoute !== "inicio" || window.scrollY > 40) {
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
  window.updateNavbarTheme = handleScroll;
  handleScroll();
}

// 1.1 Enrutador de Navegación por Páginas (SPA)
function initRouter() {
  const VALID_ROUTES = ["inicio", "vitrina", "personalizacion", "mayoristas", "historia"];

  function parseHash() {
    const raw = window.location.hash.replace(/^#\/?/, "").toLowerCase().trim();
    if (raw === "hero") return "inicio";
    return VALID_ROUTES.includes(raw) ? raw : "inicio";
  }

  function navigateTo(route, options = {}) {
    if (!VALID_ROUTES.includes(route)) {
      route = "inicio";
    }

    currentRoute = route;

    // Actualizar visibilidad de vistas
    VALID_ROUTES.forEach(r => {
      const el = document.getElementById(`view-${r}`);
      if (el) {
        if (r === route) {
          el.classList.remove("hidden-view");
        } else {
          el.classList.add("hidden-view");
        }
      }
    });

    // Actualizar estado 'active' en enlaces de navegación
    document.querySelectorAll("[data-route]").forEach(link => {
      if (link.dataset.route === route) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });

    // Filtro opcional si el enlace venía con data-filter
    if (options.filter && typeof PRODUCTS_DATA !== "undefined") {
      const targetBtn = document.getElementById(`tab-line-${options.filter}`);
      if (targetBtn) {
        targetBtn.click();
      }
    }

    // Actualizar tema de navbar
    if (window.updateNavbarTheme) {
      window.updateNavbarTheme();
    }

    // Desplazamiento limpio arriba
    if (!options.keepScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Escuchar clics globales en enlaces con data-route
  document.addEventListener("click", (e) => {
    const routeLink = e.target.closest("[data-route]");
    if (routeLink) {
      e.preventDefault();
      const targetRoute = routeLink.dataset.route;
      const targetFilter = routeLink.dataset.filter || null;

      if (window.location.hash !== `#${targetRoute}`) {
        window.location.hash = targetRoute;
      } else {
        navigateTo(targetRoute, { filter: targetFilter });
      }

      if (targetFilter) {
        setTimeout(() => {
          const targetBtn = document.getElementById(`tab-line-${targetFilter}`);
          if (targetBtn) targetBtn.click();
        }, 50);
      }
    }
  });

  // Escuchar cambios de URL / Historial del navegador (Atrás / Adelante)
  window.addEventListener("hashchange", () => {
    navigateTo(parseHash());
  });

  // Ruta inicial al cargar
  const initial = parseHash();
  navigateTo(initial, { keepScroll: true });
}

// 1.2 Carrusel Dinámico de Productos en el Hero de Inicio (Crossfade + Acceso Directo)
function initHeroProductCarousel() {
  if (typeof PRODUCTS_DATA === "undefined" || !PRODUCTS_DATA.length) return;

  const imgA = document.getElementById("hero-bg-img-a");
  const imgB = document.getElementById("hero-bg-img-b");
  const thumbEl = document.getElementById("hero-product-thumb");
  const lineEl = document.getElementById("hero-product-line");
  const counterEl = document.getElementById("hero-product-counter");
  const nameEl = document.getElementById("hero-product-name");
  const triggerEl = document.getElementById("hero-product-trigger");
  const prevBtn = document.getElementById("hero-prev-btn");
  const nextBtn = document.getElementById("hero-next-btn");
  const cardEl = document.getElementById("hero-product-card");

  if (!imgA || !imgB) return;

  // Intercalar piezas de las 4 líneas activas para mostrar variedad constante
  const byLine = {
    premium: PRODUCTS_DATA.filter(p => p.line === "premium"),
    clasica: PRODUCTS_DATA.filter(p => p.line === "clasica"),
    sport: PRODUCTS_DATA.filter(p => p.line === "sport"),
    marroquineria: PRODUCTS_DATA.filter(p => p.line === "marroquineria")
  };

  const showcaseList = [];
  const maxLen = Math.max(
    byLine.premium.length,
    byLine.clasica.length,
    byLine.sport.length,
    byLine.marroquineria.length
  );

  for (let i = 0; i < maxLen; i++) {
    if (byLine.premium[i]) showcaseList.push(byLine.premium[i]);
    if (byLine.clasica[i]) showcaseList.push(byLine.clasica[i]);
    if (byLine.sport[i]) showcaseList.push(byLine.sport[i]);
    if (byLine.marroquineria[i]) showcaseList.push(byLine.marroquineria[i]);
  }

  if (!showcaseList.length) return;

  let currentIndex = 0;
  let activeLayer = "A"; // "A" | "B"
  let timerId = null;
  const INTERVAL_MS = 4500;

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function preloadNext(index) {
    const nextIdx = (index + 1) % showcaseList.length;
    const preImg = new Image();
    preImg.src = showcaseList[nextIdx].image;
  }

  function updateShowcaseUI(product, index, animateBg = true) {
    if (thumbEl) {
      thumbEl.src = product.image;
      thumbEl.alt = product.name;
    }
    if (lineEl) {
      lineEl.textContent = product.lineName;
    }
    if (counterEl) {
      counterEl.textContent = `${pad2(index + 1)} / ${pad2(showcaseList.length)}`;
    }
    if (nameEl) {
      nameEl.textContent = product.name;
    }

    if (!animateBg) {
      imgA.src = product.image;
      imgA.alt = product.name;
      imgA.classList.add("active-slide");
      imgB.classList.remove("active-slide");
      activeLayer = "A";
      preloadNext(index);
      return;
    }

    const incoming = activeLayer === "A" ? imgB : imgA;
    const outgoing = activeLayer === "A" ? imgA : imgB;

    const swap = () => {
      incoming.alt = product.name;
      incoming.classList.add("active-slide");
      outgoing.classList.remove("active-slide");
      activeLayer = activeLayer === "A" ? "B" : "A";
      preloadNext(index);
    };

    if (incoming.getAttribute("src") === product.image) {
      swap();
    } else {
      incoming.onload = swap;
      incoming.src = product.image;
    }
  }

  function stepCarousel(delta) {
    currentIndex = (currentIndex + delta + showcaseList.length) % showcaseList.length;
    updateShowcaseUI(showcaseList[currentIndex], currentIndex, true);
  }

  function startAutoPlay() {
    stopAutoPlay();
    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    timerId = setInterval(() => {
      if (currentRoute === "inicio" && !document.body.classList.contains("modal-open")) {
        stepCarousel(1);
      }
    }, INTERVAL_MS);
  }

  function stopAutoPlay() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  // Eventos de botones Anterior / Siguiente
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      stepCarousel(-1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      stepCarousel(1);
      startAutoPlay();
    });
  }

  // Clic o Enter en la barra abre la ficha modal de la pieza actual
  if (triggerEl) {
    const openCurrentHeroProduct = () => {
      const currentProduct = showcaseList[currentIndex];
      if (currentProduct) {
        openProductModal(currentProduct.id);
      }
    };
    triggerEl.addEventListener("click", openCurrentHeroProduct);
    triggerEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCurrentHeroProduct();
      }
    });
  }

  // Soporte de gesto Swipe lateral en celulares sobre la tarjeta del Hero
  if (cardEl) {
    let touchStartX = 0;
    cardEl.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
      }
    }, { passive: true });

    cardEl.addEventListener("touchend", (e) => {
      if (!touchStartX || !e.changedTouches || !e.changedTouches.length) return;
      const diffX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diffX) > 45) {
        stepCarousel(diffX < 0 ? 1 : -1);
        startAutoPlay();
      }
      touchStartX = 0;
    }, { passive: true });
  }

  // Inicializar con la primera pieza y arrancar rotación
  updateShowcaseUI(showcaseList[0], 0, false);
  startAutoPlay();
}

// 2. Filtros por Líneas de Producto (con contador dinámico y sincronización ARIA)
function initLineFilters() {
  const filterButtons = document.querySelectorAll(".line-filter-btn");
  const gridContainer = document.getElementById("products-grid-container");

  filterButtons.forEach(btn => {
    const lineKey = btn.dataset.line;
    if (typeof PRODUCTS_DATA !== "undefined" && lineKey) {
      const count = lineKey === "all"
        ? PRODUCTS_DATA.length
        : PRODUCTS_DATA.filter(p => p.line === lineKey).length;
      const baseLabel = btn.textContent.trim();
      btn.innerHTML = `<span>${escapeHTML(baseLabel)}</span> <span class="ml-1 opacity-70 font-mono text-[10px]">(${count})</span>`;
    }

    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("border-charcoal", "bg-charcoal", "text-ivory");
        b.classList.add("border-sand/60", "bg-transparent", "text-charcoal/80");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("border-charcoal", "bg-charcoal", "text-ivory");
      btn.classList.remove("border-sand/60", "bg-transparent", "text-charcoal/80");
      btn.setAttribute("aria-selected", "true");

      if (gridContainer && btn.id) {
        gridContainer.setAttribute("aria-labelledby", btn.id);
      }

      activeLine = btn.dataset.line;
      currentPage = 1; // Reiniciar a página 1 al cambiar de línea
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

// 3. Render de la Cuadrícula Editorial de Productos y Paginación
function renderProductGrid() {
  const gridContainer = document.getElementById("products-grid-container");
  const paginationContainer = document.getElementById("products-pagination-container");
  if (!gridContainer) return;

  const filteredProducts = activeLine === "all" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.line === activeLine);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE) || 1;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

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
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
    }
    return;
  }

  // Segmentar productos de la página actual
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  gridContainer.innerHTML = paginatedProducts.map((product) => {
    const escapedName = escapeHTML(product.name);
    const escapedLineName = escapeHTML(product.lineName);
    const escapedTagline = escapeHTML(product.tagline);
    const escapedRef = escapeHTML(product.id.toUpperCase());

    return `
      <article class="product-card group flex flex-col justify-between overflow-hidden">
        
        <!-- Fotografía Studio Estilo Bosi con Acceso Rápido -->
        <div 
          class="relative w-full aspect-[3/4] overflow-hidden bg-[#F6F4F0] p-3 sm:p-4 flex items-center justify-center cursor-pointer group-hover:bg-[#F2EFE8] transition-colors" 
          onclick="openProductModal('${product.id}')"
          role="button"
          tabindex="0"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProductModal('${product.id}');}"
          aria-label="Abrir ficha y ver detalle de ${escapedName}"
        >
          <img 
            src="${product.image}" 
            alt="${escapedName}" 
            class="product-card-img w-full h-full object-contain p-2 mx-auto block drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          <!-- Badge de Línea Oficial -->
          <div class="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span class="bg-ivory/95 backdrop-blur-sm text-charcoal px-2.5 sm:px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-mono border border-sand/50 shadow-sm font-semibold">
              ${escapedLineName}
            </span>
          </div>

          <!-- Overlay con CTA Editorial (decorativo para ratón, no interrumpe el orden de tabulación) -->
          <div class="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6" aria-hidden="true">
            <button 
              type="button" 
              tabindex="-1"
              onclick="event.stopPropagation(); openProductModal('${product.id}')"
              class="w-full bg-warm-white/95 text-charcoal py-3 px-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-charcoal hover:text-ivory transition-colors duration-200 shadow-md min-h-[42px] flex items-center justify-center cursor-pointer"
            >
              Ver Ficha de Taller →
            </button>
          </div>
        </div>

        <!-- Información de la Pieza -->
        <div class="p-5 sm:p-6 md:p-7 flex flex-col flex-grow justify-between border-t border-sand/30">
          <div>
            <div class="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-charcoal/80 font-mono mb-2">
              <span class="text-leather font-semibold">${escapedLineName}</span>
              <span>REF: ${escapedRef}</span>
            </div>
            
            <h3 
              class="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-leather transition-colors duration-200 cursor-pointer font-medium leading-tight"
              onclick="openProductModal('${product.id}')"
              title="Ver ficha de ${escapedName}"
            >
              ${escapedName}
            </h3>

            <p class="text-xs text-charcoal/85 mt-2 font-light line-clamp-2 leading-relaxed">
              ${escapedTagline}
            </p>

            <!-- Características Rápidas -->
            <div class="mt-4 flex flex-wrap gap-1.5" aria-label="Características destacadas">
              ${product.features ? product.features.map(f => `
                <span class="text-[10px] bg-sand/35 text-charcoal px-2 py-0.5 border border-sand/60 font-mono font-medium">
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

  renderPaginationControls(totalPages, startIndex + 1, endIndex, totalProducts);
}

// Render de Controles de Paginación Editorial
function renderPaginationControls(totalPages, fromItem, toItem, totalProducts) {
  const container = document.getElementById("products-pagination-container");
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = `
      <div class="text-xs text-charcoal/70 font-mono text-center sm:text-left">
        Mostrando todas las <strong class="text-charcoal font-semibold">${totalProducts}</strong> piezas de esta selección.
      </div>
    `;
    return;
  }

  let buttonsHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const isCurrent = i === currentPage;
    buttonsHTML += `
      <button 
        type="button" 
        onclick="goToCatalogPage(${i})" 
        class="min-w-[44px] h-[44px] px-3 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer touch-target-min flex items-center justify-center ${
          isCurrent 
            ? 'bg-charcoal text-ivory border-charcoal font-bold shadow-sm' 
            : 'bg-warm-white text-charcoal border-sand/60 hover:border-leather hover:bg-sand/20'
        }"
        aria-label="Ir a página ${i}"
        ${isCurrent ? 'aria-current="page"' : ''}
      >
        ${i}
      </button>
    `;
  }

  container.innerHTML = `
    <div class="text-xs text-charcoal/70 font-mono text-center sm:text-left">
      Mostrando <strong class="text-charcoal font-semibold">${fromItem}–${toItem}</strong> de <strong class="text-charcoal font-semibold">${totalProducts}</strong> piezas
    </div>

    <div class="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
      <button 
        type="button" 
        onclick="goToCatalogPage(${currentPage - 1})" 
        class="px-3.5 h-[44px] text-xs font-mono uppercase tracking-wider border border-sand/60 bg-warm-white text-charcoal hover:border-leather hover:bg-sand/20 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none touch-target-min flex items-center justify-center"
        ${currentPage === 1 ? 'disabled' : ''}
        aria-label="Página anterior"
      >
        ← Ant.
      </button>

      <div class="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
        ${buttonsHTML}
      </div>

      <button 
        type="button" 
        onclick="goToCatalogPage(${currentPage + 1})" 
        class="px-3.5 h-[44px] text-xs font-mono uppercase tracking-wider border border-sand/60 bg-warm-white text-charcoal hover:border-leather hover:bg-sand/20 transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none touch-target-min flex items-center justify-center"
        ${currentPage === totalPages ? 'disabled' : ''}
        aria-label="Página siguiente"
      >
        Sig. →
      </button>
    </div>
  `;
}

// Función global para cambiar de página en el catálogo
function goToCatalogPage(pageNumber) {
  currentPage = pageNumber;
  renderProductGrid();
  const vitrinaAnchor = document.getElementById("vitrina");
  if (vitrinaAnchor) {
    vitrinaAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// 4. Modal de Vista de Detalle y Cotización (Accesible con Gestión de Foco)
let previousActiveElement = null;

const SPEC_LABELS = {
  material: "Material",
  curtido: "Curtido",
  suela: "Suela",
  forro: "Forro",
  dimensiones: "Dimensiones",
  ancho: "Ancho",
  sistema: "Sistema",
  herrajes: "Herrajes",
  estructura: "Estructura",
  detalles: "Detalles",
  ajuste: "Ajuste"
};

function renderProductSpecsHTML(specs) {
  if (!specs || typeof specs !== "object") return "";
  const entries = Object.entries(specs).filter(([k, v]) => k !== "personalizacion" && v);
  const gridItems = entries.map(([key, val]) => {
    const label = SPEC_LABELS[key] || (key.charAt(0).toUpperCase() + key.slice(1));
    return `<div><strong class="text-charcoal font-medium">${escapeHTML(label)}:</strong> ${escapeHTML(val)}</div>`;
  }).join("");

  const personalizacionHTML = specs.personalizacion
    ? `<div class="pt-1 text-[11px] text-charcoal/75"><strong class="text-charcoal font-medium">Personalización:</strong> ${escapeHTML(specs.personalizacion)}</div>`
    : "";

  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-charcoal/75">
      ${gridItems}
    </div>
    ${personalizacionHTML}
  `;
}

function trapFocusInContainer(container) {
  if (container._focusTrapBound) return;
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
  container._focusTrapBound = true;
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
  document.body.classList.add("modal-open");

  // Mover el foco al botón de cerrar para navegación por teclado
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.focus();
  }

  trapFocusInContainer(modal);
}

function closeProductModal() {
  resetModalImageZoom();
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.classList.remove("modal-open");
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
      
      <!-- Columna Izquierda: Galería Editorial con Inspección Zoom -->
      <div class="lg:col-span-6 space-y-3 sm:space-y-4">
        <div 
          id="modal-image-zoom-box" 
          class="relative w-full aspect-[3/4] bg-[#F6F4F0] overflow-hidden flex items-center justify-center p-4 sm:p-6 group select-none"
          onmousemove="handleModalImageZoom(event)"
          onmouseleave="resetModalImageZoom()"
          onclick="toggleModalTouchZoom(event)"
          ontouchmove="handleModalTouchZoom(event)"
          role="region"
          aria-label="Fotografía ampliable de ${escapedName}"
        >
          <img 
            id="modal-main-image" 
            src="${product.gallery[activeModalImageIndex] || product.image}" 
            alt="${escapedName}" 
            class="w-full h-full object-contain p-2 mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] pointer-events-none"
          />
          
          <!-- Badge de Línea Oficial -->
          <div class="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-40">
            <span class="bg-charcoal text-ivory text-[10px] tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 font-mono font-medium shadow-sm">
              ${escapedLineName}
            </span>
          </div>

          <!-- Indicador Sutil de Lupa para el Usuario -->
          <div 
            id="modal-zoom-badge"
            class="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 pointer-events-none z-10 bg-ivory/95 backdrop-blur-sm border border-sand/60 px-2.5 py-1 text-[10px] font-mono text-charcoal/80 flex items-center gap-1.5 shadow-sm transition-opacity duration-300 group-hover:opacity-0"
          >
            <svg class="w-3.5 h-3.5 text-leather flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>Pasa el cursor o pulsa para ampliar</span>
          </div>
        </div>

        <!-- Miniaturas Accesibles -->
        <div id="modal-thumbnails-group" class="grid grid-cols-3 gap-2 sm:gap-3" role="group" aria-label="Galería de imágenes de la pieza">
          ${product.gallery.map((img, i) => `
            <button 
              type="button" 
              data-thumb-index="${i}"
              onclick="switchModalImage(${i})" 
              aria-label="Ver fotografía ${i + 1} de ${product.gallery.length} de ${escapedName}"
              aria-pressed="${i === activeModalImageIndex ? 'true' : 'false'}"
              class="modal-thumb-btn aspect-square bg-sand/20 overflow-hidden border-2 transition-all duration-200 cursor-pointer min-h-[44px] p-1 flex items-center justify-center ${i === activeModalImageIndex ? 'border-charcoal opacity-100 ring-2 ring-leather/40' : 'border-transparent opacity-60 hover:opacity-90'}"
            >
              <img src="${img}" alt="Vista en miniatura ${i + 1} de ${escapedName}" class="max-w-full max-h-full w-auto h-auto object-contain"/>
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
            ${renderProductSpecsHTML(product.specs)}
          </div>

          <!-- Campo de Notas con Contador en Vivo y Accesibilidad (Prevención Zoom iOS Safari: min 16px) -->
          <div>
            <label for="modal-custom-note" class="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
              Especificación para la cotización (Monograma, talla, cantidad o color deseado):
            </label>
            <input 
              type="text" 
              id="modal-custom-note" 
              name="customNote"
              maxlength="150"
              autocomplete="off"
              spellcheck="true"
              placeholder="Ej: Talla 40, iniciales grabadas 'A.V.', tono Espresso, cotizar 5 unidades..." 
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
  resetModalImageZoom();
  activeModalImageIndex = index;
  const imgEl = document.getElementById("modal-main-image");
  if (imgEl && selectedProductForModal.gallery[index]) {
    imgEl.src = selectedProductForModal.gallery[index];
  }
  const thumbs = document.querySelectorAll(".modal-thumb-btn");
  thumbs.forEach((btn, i) => {
    const isSelected = i === index;
    btn.setAttribute("aria-pressed", isSelected ? "true" : "false");
    if (isSelected) {
      btn.classList.add("border-charcoal", "opacity-100", "ring-2", "ring-leather/40");
      btn.classList.remove("border-transparent", "opacity-60", "hover:opacity-90");
    } else {
      btn.classList.remove("border-charcoal", "opacity-100", "ring-2", "ring-leather/40");
      btn.classList.add("border-transparent", "opacity-60", "hover:opacity-90");
    }
  });
}

/**
 * Inspección Dinámica de Producto en Modal (Zoom Estilo Boutique)
 */
function handleModalImageZoom(e) {
  const box = document.getElementById("modal-image-zoom-box");
  const img = document.getElementById("modal-main-image");
  if (!box || !img) return;

  const rect = box.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  const clampedX = Math.max(0, Math.min(100, x));
  const clampedY = Math.max(0, Math.min(100, y));

  box.classList.add("is-zooming");
  img.style.transformOrigin = `${clampedX}% ${clampedY}%`;
  img.style.transform = "scale(2.4)";
}

function resetModalImageZoom() {
  const box = document.getElementById("modal-image-zoom-box");
  const img = document.getElementById("modal-main-image");
  isTouchZoomActive = false;
  if (!img) return;

  if (box) {
    box.classList.remove("is-zooming");
  }
  img.style.transformOrigin = "center center";
  img.style.transform = "scale(1)";
}

let isTouchZoomActive = false;

function handleModalTouchZoom(e) {
  if (!isTouchZoomActive || !e.touches || e.touches.length === 0) return;
  const touch = e.touches[0];
  const box = document.getElementById("modal-image-zoom-box");
  const img = document.getElementById("modal-main-image");
  if (!box || !img) return;

  const rect = box.getBoundingClientRect();
  const x = ((touch.clientX - rect.left) / rect.width) * 100;
  const y = ((touch.clientY - rect.top) / rect.height) * 100;

  const clampedX = Math.max(0, Math.min(100, x));
  const clampedY = Math.max(0, Math.min(100, y));

  box.classList.add("is-zooming");
  img.style.transformOrigin = `${clampedX}% ${clampedY}%`;
  img.style.transform = "scale(2.2)";
}

function toggleModalTouchZoom(e) {
  const box = document.getElementById("modal-image-zoom-box");
  const img = document.getElementById("modal-main-image");
  if (!box || !img) return;

  isTouchZoomActive = !isTouchZoomActive;
  if (isTouchZoomActive) {
    const touch = (e.touches && e.touches.length > 0) ? e.touches[0] : (e.changedTouches ? e.changedTouches[0] : null);
    const rect = box.getBoundingClientRect();
    const x = touch ? (((touch.clientX - rect.left) / rect.width) * 100) : 50;
    const y = touch ? (((touch.clientY - rect.top) / rect.height) * 100) : 50;
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    box.classList.add("is-zooming");
    img.style.transformOrigin = `${clampedX}% ${clampedY}%`;
    img.style.transform = "scale(2.2)";
  } else {
    resetModalImageZoom();
  }
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
    document.body.classList.add("menu-open");
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
    document.body.classList.remove("menu-open");
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

