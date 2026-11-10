/**
 * ELICER — Módulo Interactivo & Educativo de Personalización "HAZLO TUYO"
 * Soporte para las 5 Líneas Oficiales con fotos reales y logos
 */

const CUSTOM_PIECES = {
  // 1. Línea Sport (Fotos reales)
  "crossbody-sport": {
    id: "custom-crossbody",
    line: "sport",
    lineName: "Línea Sport",
    logo: LINE_LOGOS.sport,
    name: "Bolso Crossbody & Sling 'Urban Rider'",
    image: "fotos/sport/Gemini_Generated_Image_m261vpm261vpm261.jpg",
    description: "Ajuste anatómico al cuerpo, cuero hidrófugo y hebilla táctica magnética de rápida liberación."
  },
  "rinonera-sport": {
    id: "custom-rinonera",
    line: "sport",
    lineName: "Línea Sport",
    logo: LINE_LOGOS.sport,
    name: "Riñonera Atelier 'Stride'",
    image: "fotos/sport/Gemini_Generated_Image_sprdugsprdugsprd.jpg",
    description: "Perfil ultracompacto para movilidad urbana y manos libres con cremallera sellada."
  },

  // 2. Línea Deportiva (Fotos reales)
  "duffle-deporte": {
    id: "custom-duffle",
    line: "deportiva",
    lineName: "Línea Deportiva",
    logo: LINE_LOGOS.deportiva,
    name: "Maletín Duffle Weekend & Club",
    image: "fotos/deportiva/Gemini_Generated_Image_f2o81cf2o81cf2o8.jpg",
    description: "Cuero graso impermeable con compartimento ventilado independiente para calzado deportivo."
  },
  "raqueta-deporte": {
    id: "custom-raqueta",
    line: "deportiva",
    lineName: "Línea Deportiva",
    logo: LINE_LOGOS.deportiva,
    name: "Funda de Raquetas & Pádel 'Club Court'",
    image: "fotos/deportiva/Gemini_Generated_Image_z3bf8qz3bf8qz3bf.jpg",
    description: "Aislamiento térmico interior y cuero flexible para raquetas de tenis o palas de pádel."
  },

  // 3. Línea Marroquinería (Fotos reales)
  "billetera-marroquineria": {
    id: "custom-billetera",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Billetera Verde de Doble Vista",
    image: "fotos/Marroquineria/billetera-verde-doble-vista.webp",
    description: "Diseño bifold exclusivo en cuero verde olivo con arquitectura de doble vista."
  },
  "pasaporte-marroquineria": {
    id: "custom-pasaporte",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Colección de Portapasaportes 'Vuelo'",
    image: "fotos/Marroquineria/coleccion-portapasaportes.webp",
    description: "Estuche refinado para pasaportes, pases de abordar y documentos de viaje."
  },
  "portavinos-marroquineria": {
    id: "custom-portavinos",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Estuche Porta Vinos 'Sommelier'",
    image: "fotos/Marroquineria/porta-vinos-1.webp",
    description: "Estructura cilíndrica de cuero macizo para transporte y regalo de vinos."
  },
  "accesorios-marroquineria": {
    id: "custom-accesorios",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Set de Accesorios Fines de Taller",
    image: "fotos/Marroquineria/set-accesorios-artesanal.webp",
    description: "Tarjetero, llavero y estuche artesanal pulidos a mano con cera natural."
  },
  "carteras-marroquineria": {
    id: "custom-carteras",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Set de Carteras & Viaje",
    image: "fotos/Marroquineria/set-carteras-viaje.webp",
    description: "Bolsos de mano y equipaje liviano con asas ergonómicas en cuero vacuno."
  },
  "alfombra-marroquineria": {
    id: "custom-alfombra",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Alfombra de Piel de Vaca Natural",
    image: "fotos/Marroquineria/alfombra-vaca-blanco-negro.webp",
    description: "Pieza única de acento para interiores en piel de vaca 100% natural."
  },
  "bolso-hombre-marroquineria": {
    id: "custom-bolso-hombre",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Bolso Lateral & Canguro Hombre Floter",
    image: "fotos/Marroquineria/bolso-lateral-canguro-hombre-floter-miel.webp",
    description: "Silueta cruzada ergonómica en cuero floter graneado de alta durabilidad."
  },
  "canguro-dama-marroquineria": {
    id: "custom-canguro-dama",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Bolso Canguro Dama 'Panter'",
    image: "fotos/Marroquineria/bolso-canguro-dama-floter-negro-panter.webp",
    description: "Diseño curvilíneo de tendencia para llevar al pecho o cintura en cuero suave."
  },
  "llavero-marroquineria": {
    id: "custom-llavero",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    logo: LINE_LOGOS.marroquineria,
    name: "Llavero de Cuero & Doble Hebilla",
    image: "fotos/Marroquineria/llavero-cuero-graso-doble-hebilla.webp",
    description: "Talabartería en miniatura con herrajes macizos y cuero curtido al aceite."
  },

  // 4. Línea Institucional
  "carpeta-institucional": {
    id: "custom-carpeta",
    line: "institucional",
    lineName: "Línea Institucional",
    logo: LINE_LOGOS.institucional,
    name: "Carpeta de Firma Directiva",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
    description: "Portadocumentos institucional con opción de grabado masivo de logotipo empresarial."
  },
  "deskpad-institucional": {
    id: "custom-deskpad",
    line: "institucional",
    lineName: "Línea Institucional",
    logo: LINE_LOGOS.institucional,
    name: "Desk Pad & Set de Escritorio 'C-Suite'",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
    description: "Superficie de cuero suave con base de gamuza antideslizante para oficinas directivas."
  },

  // 5. Línea Premium (Fotos reales de taller)
  "morral-lauren-premium": {
    id: "custom-morral-lauren",
    line: "premium",
    lineName: "Línea Premium",
    logo: LINE_LOGOS.premium,
    name: "Morral Ejecutivo de Dama 'Lauren' — EG Marroquinería",
    image: "fotos/Marroquineria/catalogo/mochila-ejecutiva-dama-nude-lauren-eg.jpg",
    description: "Cuero vacuno suave tono nude arena, placa dorada pulida Lauren y solapa de alta marroquinería."
  },
  "portabotellas-premium": {
    id: "custom-portabotellas",
    line: "premium",
    lineName: "Línea Premium",
    logo: LINE_LOGOS.premium,
    name: "Portabotellas de Lujo Baileys — Sello EG",
    image: "fotos/Marroquineria/catalogo/portabotellas-baileys-lujo-cuero-grabado-eg.jpg",
    description: "Estuche cilíndrico rígido en cuero grabado cocodrilo con solapa de broche y forro satinado."
  }
};

const LEATHER_COLORS = [
  { id: "cognac", name: "Cognac Noble", hex: "#8A532B", desc: "Tono cálido tradicional con pátina dorada" },
  { id: "espresso", name: "Espresso Oscuro", hex: "#352820", desc: "Marrón profundo y sobrio de alta elegancia" },
  { id: "noir", name: "Noir Profundo", hex: "#1C1B19", desc: "Negro mate con tacto sedoso y sofisticado" },
  { id: "caramelo", name: "Caramelo Miel", hex: "#A8764B", desc: "Acabado semigraso encerado muy flexible" },
  { id: "sand", name: "Arena / Sand", hex: "#D8C8B5", desc: "Curtido vegetal crudo con textura pura" },
  { id: "oliva", name: "Oliva Botánico", hex: "#4C5645", desc: "Acento vegetal contemporáneo exclusivo" }
];

const HARDWARE_OPTIONS = [
  { id: "brass", name: "Latón Macizo Cepillado", desc: "Dorado mate antioxidante" },
  { id: "nickel", name: "Níquel Satinado", desc: "Plateado contemporáneo sobrio" },
  { id: "antique", name: "Bronce / Oro Envejecido", desc: "Pátina vintage artesanal" },
  { id: "none", name: "Sin Herrajes Metálicos", desc: "Construcción 100% cuero puro" }
];

const FOIL_TYPES = [
  { id: "blind", name: "Bajo Relieve a Fuego (Ciego)", desc: "Hundimiento térmico puro sobre el cuero sin tintas", cssClass: "monogram-blind" },
  { id: "gold", name: "Foil Oro Champagne", desc: "Estampado térmico metalizado dorado", cssClass: "monogram-gold" },
  { id: "silver", name: "Foil Plata Satinada", desc: "Estampado térmico plateado sobrio", cssClass: "monogram-silver" }
];

let customState = {
  filterLine: "all", // all | sport | deportiva | marroquineria | institucional | premium
  pieceKey: "billetera-marroquineria",
  leatherColor: "cognac",
  hardware: "brass",
  monogramType: "initials", // initials | logo
  monogramText: "E.L.",
  foilType: "blind",
  quantityType: "unit", // unit | wholesale-small | wholesale-large
  customNotes: ""
};

function initCustomizer() {
  const container = document.getElementById("customizer-interactive");
  if (!container) return;
  renderCustomizerUI();
}

function renderCustomizerUI() {
  const container = document.getElementById("customizer-interactive");
  if (!container) return;

  const currentPiece = CUSTOM_PIECES[customState.pieceKey] || CUSTOM_PIECES["billetera-marroquineria"];
  const currentColor = LEATHER_COLORS.find(c => c.id === customState.leatherColor) || LEATHER_COLORS[0];
  const currentFoil = FOIL_TYPES.find(f => f.id === customState.foilType) || FOIL_TYPES[0];

  const availablePieceKeys = Object.keys(CUSTOM_PIECES).filter(key => {
    if (customState.filterLine === "all") return true;
    return CUSTOM_PIECES[key].line === customState.filterLine;
  });

  container.innerHTML = `
    <!-- Guía Editorial de Proceso de Personalización -->
    <div class="mb-12 bg-warm-white border border-sand/50 p-6 md:p-8 shadow-sm">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-xs font-mono text-leather font-semibold uppercase tracking-widest">¿Cómo Funciona el Proceso?</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
        <div class="space-y-1.5 border-l-2 border-sand pl-4">
          <p class="font-mono text-leather font-semibold">Paso 01</p>
          <p class="font-serif text-lg text-charcoal font-medium">Elige tu Línea</p>
          <p class="text-charcoal/70 font-light">Filtra entre Sport, Deportiva, Marroquinería, Institucional o Premium.</p>
        </div>
        <div class="space-y-1.5 border-l-2 border-sand pl-4">
          <p class="font-mono text-leather font-semibold">Paso 02</p>
          <p class="font-serif text-lg text-charcoal font-medium">Cueros & Acabados</p>
          <p class="text-charcoal/70 font-light">Define el tono de curtición vegetal y el tipo de herrajes macizos.</p>
        </div>
        <div class="space-y-1.5 border-l-2 border-sand pl-4">
          <p class="font-mono text-leather font-semibold">Paso 03</p>
          <p class="font-serif text-lg text-charcoal font-medium">Identidad & Grabado</p>
          <p class="text-charcoal/70 font-light">Añade iniciales, nombres o logotipo empresarial en bajo relieve térmico.</p>
        </div>
        <div class="space-y-1.5 border-l-2 border-sand pl-4">
          <p class="font-mono text-leather font-semibold">Paso 04</p>
          <p class="font-serif text-lg text-charcoal font-medium">Asesoría WhatsApp</p>
          <p class="text-charcoal/70 font-light">Enviamos tu ficha técnica al taller para cotizar y afinar cada detalle.</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      <!-- Panel Izquierdo: Visualizador de Taller en Vivo -->
      <div class="lg:col-span-6 sticky top-28 space-y-6">
        <div class="relative bg-warm-white p-6 md:p-8 border border-sand/60 shadow-sm transition-all duration-500 overflow-hidden">
          
          <div class="flex items-center justify-between border-b border-sand/30 pb-4 mb-6">
            <div class="flex items-center gap-3">
              ${currentPiece.logo ? `
                <img src="${currentPiece.logo}" alt="${currentPiece.lineName}" class="w-8 h-8 rounded-full object-cover border border-sand/60 shadow-sm" />
              ` : ''}
              <div>
                <span class="text-[11px] tracking-[0.25em] uppercase font-semibold text-charcoal/60 block">
                  Simulador de Taller
                </span>
                <span class="text-xs text-charcoal font-serif italic">${currentPiece.lineName}</span>
              </div>
            </div>
            <span class="inline-flex items-center gap-1.5 text-xs text-leather font-medium">
              <span class="w-2 h-2 rounded-full bg-leather animate-pulse"></span>
              Vista Previa en Vivo
            </span>
          </div>

          <!-- Canvas Visual del Producto -->
          <div class="relative aspect-[4/3] w-full overflow-hidden bg-sand/20 p-4 flex items-center justify-center group">
            <img 
              id="custom-preview-img" 
              src="${currentPiece.image}" 
              alt="${currentPiece.name}" 
              class="max-w-full max-h-full w-auto h-auto object-contain mx-auto transition-all duration-700 filter group-hover:scale-105"
            />
            
            <!-- Capa de Tinte del Cuero -->
            <div 
              id="custom-color-overlay" 
              class="absolute inset-0 mix-blend-multiply opacity-35 transition-colors duration-500 pointer-events-none"
              style="background-color: ${currentColor.hex};"
            ></div>

            <!-- Simulación de Grabado / Monograma -->
            <div 
              id="custom-monogram-preview" 
              class="absolute bottom-6 right-6 px-4 py-2 bg-charcoal/30 backdrop-blur-sm border border-white/20 transition-all duration-300 pointer-events-none"
            >
              <div class="text-[10px] tracking-[0.2em] uppercase text-warm-white/70 text-right mb-0.5">
                ${customState.monogramType === 'logo' ? 'Logo Corporativo' : 'Monograma Grabado'}
              </div>
              <div 
                id="monogram-rendered-text"
                class="font-serif text-xl tracking-[0.3em] font-semibold text-center ${currentFoil.cssClass}"
              >
                ${customState.monogramType === 'logo' ? '[ TU LOGO ]' : (customState.monogramText || "EL")}
              </div>
            </div>

            <!-- Badge de Origen -->
            <div class="absolute top-4 left-4 bg-charcoal/85 text-ivory text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-mono">
              COLOMBIA • CANADÁ
            </div>
          </div>

          <!-- Resumen de Configuración -->
          <div class="mt-6 pt-5 border-t border-sand/30 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p class="text-charcoal/50 uppercase tracking-wider text-[10px]">Silueta Seleccionada</p>
              <p class="font-medium text-charcoal text-sm mt-0.5">${currentPiece.name}</p>
            </div>
            <div>
              <p class="text-charcoal/50 uppercase tracking-wider text-[10px]">Cuero Elegido</p>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="w-3 h-3 rounded-full border border-charcoal/20" style="background-color: ${currentColor.hex}"></span>
                <span class="font-medium text-charcoal text-sm">${currentColor.name}</span>
              </div>
            </div>
          </div>

          <p class="mt-4 text-xs text-charcoal/70 font-light italic">
            ${currentPiece.description}
          </p>

          <div class="mt-4 p-3.5 bg-ivory border border-sand/40 text-[11px] text-charcoal/70 flex items-start gap-2.5">
            <svg class="w-4 h-4 text-leather flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p>Piezas confeccionadas bajo pedido. Aceptamos pedidos individuales y producciones mayoristas institucionales o para clubes.</p>
          </div>
        </div>
      </div>

      <!-- Panel Derecho: Opciones de Configuración -->
      <div class="lg:col-span-6 space-y-8">
        
        <!-- Filtro rápido por las 5 Líneas -->
        <div>
          <label class="block text-xs uppercase tracking-[0.15em] text-charcoal/60 font-semibold mb-2">Filtrar Siluetas por Línea Oficial:</label>
          <div class="flex flex-wrap gap-1.5">
            <button 
              type="button" 
              onclick="filterCustomizerLine('all')" 
              class="py-2 px-3 text-center text-xs border transition-all cursor-pointer ${customState.filterLine === 'all' ? 'border-charcoal bg-charcoal text-ivory font-semibold' : 'border-sand bg-warm-white text-charcoal/80'}"
            >
              Todas (5)
            </button>
            <button 
              type="button" 
              onclick="filterCustomizerLine('sport')" 
              class="py-2 px-3 text-center text-xs border transition-all cursor-pointer ${customState.filterLine === 'sport' ? 'border-charcoal bg-charcoal text-ivory font-semibold' : 'border-sand bg-warm-white text-charcoal/80'}"
            >
              Sport
            </button>
            <button 
              type="button" 
              onclick="filterCustomizerLine('deportiva')" 
              class="py-2 px-3 text-center text-xs border transition-all cursor-pointer ${customState.filterLine === 'deportiva' ? 'border-charcoal bg-charcoal text-ivory font-semibold' : 'border-sand bg-warm-white text-charcoal/80'}"
            >
              Deportiva
            </button>
            <button 
              type="button" 
              onclick="filterCustomizerLine('marroquineria')" 
              class="py-2 px-3 text-center text-xs border transition-all cursor-pointer ${customState.filterLine === 'marroquineria' ? 'border-charcoal bg-charcoal text-ivory font-semibold' : 'border-sand bg-warm-white text-charcoal/80'}"
            >
              Marroquinería
            </button>
            <button 
              type="button" 
              onclick="filterCustomizerLine('institucional')" 
              class="py-2 px-3 text-center text-xs border transition-all cursor-pointer ${customState.filterLine === 'institucional' ? 'border-charcoal bg-charcoal text-ivory font-semibold' : 'border-sand bg-warm-white text-charcoal/80'}"
            >
              Institucional
            </button>
            <button 
              type="button" 
              onclick="filterCustomizerLine('premium')" 
              class="py-2 px-3 text-center text-xs border transition-all cursor-pointer ${customState.filterLine === 'premium' ? 'border-charcoal bg-charcoal text-ivory font-semibold' : 'border-sand bg-warm-white text-charcoal/80'}"
            >
              Premium
            </button>
          </div>
        </div>

        <!-- Paso 1: Elegir Silueta Base -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-mono text-leather font-semibold">01.</span>
            <h3 class="text-sm tracking-[0.15em] uppercase font-semibold text-charcoal">Selecciona la Silueta Base</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
            ${availablePieceKeys.map(key => {
              const p = CUSTOM_PIECES[key];
              const isSelected = customState.pieceKey === key;
              return `
                <button 
                  type="button"
                  onclick="selectCustomPiece('${key}')"
                  class="p-3 text-left border text-xs transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? 'border-charcoal bg-charcoal text-ivory shadow-sm' 
                      : 'border-sand/60 bg-warm-white text-charcoal hover:border-leather/60'
                  }"
                >
                  <p class="font-semibold">${p.name}</p>
                  <p class="text-[10px] mt-0.5 ${isSelected ? 'text-sand' : 'text-charcoal/60'} font-mono">${p.lineName}</p>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Paso 2: Tono de Cuero -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono text-leather font-semibold">02.</span>
              <h3 class="text-sm tracking-[0.15em] uppercase font-semibold text-charcoal">Color & Curtición de Cuero</h3>
            </div>
            <span class="text-xs text-charcoal/60 font-medium">${currentColor.name}</span>
          </div>
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
            ${LEATHER_COLORS.map(c => {
              const isSelected = customState.leatherColor === c.id;
              return `
                <button
                  type="button"
                  onclick="selectCustomColor('${c.id}')"
                  class="group flex flex-col items-center p-2.5 border transition-all duration-200 cursor-pointer ${
                    isSelected ? 'border-charcoal bg-sand/30 shadow-inner' : 'border-sand/50 bg-warm-white hover:border-leather/50'
                  }"
                  title="${c.name} - ${c.desc}"
                >
                  <span 
                    class="w-7 h-7 rounded-full shadow-inner border border-black/15 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center"
                    style="background-color: ${c.hex};"
                  >
                    ${isSelected ? '<svg class="w-3.5 h-3.5 text-white filter drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>' : ''}
                  </span>
                  <span class="text-[10px] mt-1.5 text-center line-clamp-1 text-charcoal/80 font-medium">${c.name.split(' ')[0]}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Paso 3: Identidad & Monograma / Logotipo -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-mono text-leather font-semibold">03.</span>
            <h3 class="text-sm tracking-[0.15em] uppercase font-semibold text-charcoal">Grabado & Identidad</h3>
          </div>
          
          <div class="bg-warm-white p-4 border border-sand/60 space-y-4">
            
            <div class="flex items-center gap-3 text-xs mb-2">
              <label class="flex items-center gap-1.5 cursor-pointer font-medium">
                <input type="radio" name="monogramType" value="initials" ${customState.monogramType === 'initials' ? 'checked' : ''} onchange="setMonogramType('initials')" />
                <span>Iniciales / Monograma</span>
              </label>
              <label class="flex items-center gap-1.5 cursor-pointer font-medium">
                <input type="radio" name="monogramType" value="logo" ${customState.monogramType === 'logo' ? 'checked' : ''} onchange="setMonogramType('logo')" />
                <span>Logotipo Institucional / Club</span>
              </label>
            </div>

            ${customState.monogramType === 'initials' ? `
              <div>
                <label class="block text-xs uppercase tracking-wider text-charcoal/70 mb-1.5">
                  Texto a grabar (Iniciales, Nombre o Fecha - Máx. 12 caracteres)
                </label>
                <div class="relative">
                  <input 
                    type="text" 
                    maxlength="12" 
                    value="${customState.monogramText}" 
                    oninput="updateMonogramText(this.value)"
                    placeholder="Ej: E.L. / BOG-YUL / 1994" 
                    class="w-full bg-ivory border border-sand px-3.5 py-2.5 text-charcoal text-sm uppercase tracking-widest font-serif focus:outline-none focus:border-charcoal transition-colors"
                  />
                  <span class="absolute right-3 top-2.5 text-[11px] text-charcoal/40 font-mono">
                    ${customState.monogramText.length}/12
                  </span>
                </div>
              </div>
            ` : `
              <div class="p-3 bg-ivory border border-sand/50 text-xs text-charcoal/80">
                <p class="font-medium text-charcoal">Grabado de Logotipo Institucional o de Club:</p>
                <p class="text-[11px] text-charcoal/70 mt-1">Podrás adjuntar tu archivo vectorizado (AI, PDF, SVG) directamente en WhatsApp para que nuestro taller prepare el cuño térmico de grabado.</p>
              </div>
            `}

            <!-- Técnica de Grabado -->
            <div>
              <label class="block text-xs uppercase tracking-wider text-charcoal/70 mb-2">
                Técnica de Grabado Térmico
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                ${FOIL_TYPES.map(f => {
                  const isSelected = customState.foilType === f.id;
                  return `
                    <button
                      type="button"
                      onclick="selectFoilType('${f.id}')"
                      class="p-2.5 text-left border text-xs transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-charcoal bg-charcoal text-ivory font-medium' 
                          : 'border-sand/60 bg-ivory text-charcoal hover:border-leather/50'
                      }"
                    >
                      <p class="font-semibold text-[11px]">${f.name}</p>
                      <p class="text-[10px] mt-0.5 ${isSelected ? 'text-sand' : 'text-charcoal/60'} line-clamp-1">${f.desc}</p>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

          </div>
        </div>

        <!-- Paso 4: Herrajes y Cantidad -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div class="flex items-center gap-1.5 mb-2">
              <span class="text-xs font-mono text-leather font-semibold">04.</span>
              <h4 class="text-xs tracking-[0.1em] uppercase font-semibold text-charcoal">Herrajes Metálicos</h4>
            </div>
            <select 
              onchange="selectHardware(this.value)" 
              class="w-full bg-warm-white border border-sand/80 px-3 py-2.5 text-xs text-charcoal focus:outline-none focus:border-charcoal cursor-pointer font-medium"
            >
              ${HARDWARE_OPTIONS.map(h => `
                <option value="${h.id}" ${customState.hardware === h.id ? 'selected' : ''}>${h.name}</option>
              `).join('')}
            </select>
          </div>

          <div>
            <div class="flex items-center gap-1.5 mb-2">
              <span class="text-xs font-mono text-leather font-semibold">05.</span>
              <h4 class="text-xs tracking-[0.1em] uppercase font-semibold text-charcoal">Volumen / Cantidad</h4>
            </div>
            <select 
              onchange="selectQuantityType(this.value)" 
              class="w-full bg-warm-white border border-sand/80 px-3 py-2.5 text-xs text-charcoal focus:outline-none focus:border-charcoal cursor-pointer font-medium"
            >
              <option value="unit" ${customState.quantityType === 'unit' ? 'selected' : ''}>Pieza Individual (1 unidad)</option>
              <option value="wholesale-small" ${customState.quantityType === 'wholesale-small' ? 'selected' : ''}>Lote Pequeño / Dotación (5 a 20 unidades)</option>
              <option value="wholesale-large" ${customState.quantityType === 'wholesale-large' ? 'selected' : ''}>Producción Mayorista (+20 unidades)</option>
            </select>
          </div>
        </div>

        <!-- Paso 5: Nota Especial Opcional -->
        <div>
          <label class="block text-xs uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
            Nota o requerimiento especial de diseño (Opcional)
          </label>
          <textarea 
            rows="2"
            oninput="updateCustomNotes(this.value)"
            placeholder="Ej: Deseo compartimento especial, forro personalizado, entrega para fecha de evento..."
            class="w-full bg-warm-white border border-sand/80 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-charcoal resize-none placeholder:text-charcoal/40"
          >${customState.customNotes}</textarea>
        </div>

        <!-- Botón de Cotización Llamativo por WhatsApp -->
        <div class="pt-4 border-t border-sand/40">
          <button 
            type="button"
            onclick="sendCustomWhatsAppQuote()"
            class="w-full btn-whatsapp-primary py-4 px-6 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-3 shadow-lg group cursor-pointer"
          >
            <svg class="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.129-.523-1.838-.76-3.023-2.624-3.114-2.748-.093-.125-.744-.991-.744-1.891 0-.899.47-1.343.637-1.528.167-.184.366-.231.488-.231.122 0 .245.001.352.007.113.006.264-.043.413.315.155.372.528 1.289.574 1.382.046.094.077.203.016.327-.061.124-.092.202-.183.311-.093.109-.196.244-.279.327-.093.093-.19.195-.082.381.109.186.483.797 1.037 1.29 1.139.715 1.503.798 1.717.904.214.106.34.093.468-.053.128-.146.551-.64.698-.86.147-.22.294-.184.496-.109.202.075 1.282.605 1.502.715.22.11.368.164.422.257.054.094.054.544-.09 1.002z"/>
            </svg>
            <span>Cotizar mi Configuración por WhatsApp</span>
            <span class="text-emerald-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          <p class="text-center text-[11px] text-charcoal/50 mt-2.5 font-light">
            Recibirás cotización directa con tiempos de elaboración artesanal y opciones de envío.
          </p>
        </div>

      </div>
    </div>
  `;
}

function filterCustomizerLine(lineKey) {
  customState.filterLine = lineKey;
  const available = Object.keys(CUSTOM_PIECES).filter(k => lineKey === "all" || CUSTOM_PIECES[k].line === lineKey);
  if (available.length > 0 && !available.includes(customState.pieceKey)) {
    customState.pieceKey = available[0];
  }
  renderCustomizerUI();
}

function selectCustomPiece(pieceKey) {
  customState.pieceKey = pieceKey;
  renderCustomizerUI();
}

function selectCustomColor(colorId) {
  customState.leatherColor = colorId;
  const color = LEATHER_COLORS.find(c => c.id === colorId);
  const overlay = document.getElementById("custom-color-overlay");
  if (overlay && color) {
    overlay.style.backgroundColor = color.hex;
  }
  renderCustomizerUI();
}

function setMonogramType(type) {
  customState.monogramType = type;
  renderCustomizerUI();
}

function updateMonogramText(text) {
  customState.monogramText = text.toUpperCase();
  const rendered = document.getElementById("monogram-rendered-text");
  if (rendered) {
    rendered.textContent = customState.monogramText || "EL";
  }
}

function selectFoilType(foilId) {
  customState.foilType = foilId;
  renderCustomizerUI();
}

function selectHardware(hwId) {
  customState.hardware = hwId;
}

function selectQuantityType(qty) {
  customState.quantityType = qty;
}

function updateCustomNotes(notes) {
  customState.customNotes = notes;
}

function sendCustomWhatsAppQuote() {
  const piece = CUSTOM_PIECES[customState.pieceKey] || CUSTOM_PIECES["billetera-marroquineria"];
  const color = LEATHER_COLORS.find(c => c.id === customState.leatherColor) || LEATHER_COLORS[0];
  const foil = FOIL_TYPES.find(f => f.id === customState.foilType) || FOIL_TYPES[0];
  const hardware = HARDWARE_OPTIONS.find(h => h.id === customState.hardware) || HARDWARE_OPTIONS[0];

  const qtyLabels = {
    "unit": "Pieza Individual (1 unidad)",
    "wholesale-small": "Lote Pequeño / Dotación (5 a 20 unidades)",
    "wholesale-large": "Producción Mayorista (+20 unidades)"
  };

  let msg = `Hola ELICER,%0A%0AMe comunico para *solicitar cotización de una pieza personalizada* configurada en su vitrina virtual:%0A%0A`;
  msg += `*1. Silueta:* ${encodeURIComponent(piece.name)} (${encodeURIComponent(piece.lineName)})%0A`;
  msg += `*2. Tono de Cuero:* ${encodeURIComponent(color.name)}%0A`;
  
  if (customState.monogramType === 'logo') {
    msg += `*3. Grabado:* Logotipo Institucional / Club (Adjuntaré archivo vector)%0A`;
  } else {
    msg += `*3. Grabado / Monograma:* ${encodeURIComponent(customState.monogramText || "Sin iniciales")}%0A`;
  }
  
  msg += `*4. Técnica de Grabado:* ${encodeURIComponent(foil.name)}%0A`;
  msg += `*5. Herrajes:* ${encodeURIComponent(hardware.name)}%0A`;
  msg += `*6. Volumen:* ${encodeURIComponent(qtyLabels[customState.quantityType] || "Individual")}%0A`;

  if (customState.customNotes && customState.customNotes.trim().length > 0) {
    msg += `%0A*Especificaciones adicionales:* ${encodeURIComponent(customState.customNotes)}%0A`;
  }

  msg += `%0A¿Podrían brindarme la cotización formal y los tiempos de fabricación artesanal? Muchas gracias.`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`;
  window.open(url, '_blank');
}
