/**
 * ELICER — Catálogo de Piezas, Líneas Oficiales y Logos
 * 5 Líneas: Sport, Deportiva, Marroquinería, Institucional, Premium
 */

const WHATSAPP_PHONE = "573000000000"; // Número de WhatsApp de atención y cotizaciones

// Mapeo de Logos Oficiales en Alta Definición y Recorte Centrado
const LINE_LOGOS = {
  principal: "fotos/Logos/emblema_circle.jpg",
  premium: "fotos/Logos/emblema_circle.jpg",
  sport: "fotos/Logos/emblema_sport_deportiva.jpg",
  deportiva: "fotos/Logos/emblema_sport_deportiva.jpg",
  marroquineria: "fotos/Logos/emblema_marroquineria_institucional.jpg",
  institucional: "fotos/Logos/emblema_marroquineria_institucional.jpg"
};

// Configuración de Identidad Dinámica de Marca por Línea
const LINE_BRANDING = {
  all: {
    name: "ELICER",
    subtitle: "Jorge Eliecer Gómez",
    tagline: "Colección General de las 5 Líneas Oficiales",
    logo: "fotos/Logos/emblema_circle.jpg",
    badge: "5 Líneas de Oficio",
    desc: "Explora la totalidad de piezas creadas por nuestro taller entre Colombia y Canadá."
  },
  sport: {
    name: "ELICER SPORT",
    subtitle: "Sports Shoes & Accessories",
    tagline: "Línea Sport • Movilidad Urbana & Rendimiento",
    logo: "fotos/Logos/emblema_sport_deportiva.jpg",
    badge: "Línea Sport Oficial",
    desc: "Piezas aerodinámicas en cuero tratado contra humedad y sudor, con herrajes magnéticos rápidos."
  },
  deportiva: {
    name: "ELICER DEPORTIVA",
    subtitle: "Sports Shoes & Accessories",
    tagline: "Línea Deportiva • Athleisure, Torneos & Club",
    logo: "fotos/Logos/emblema_sport_deportiva.jpg",
    badge: "Línea Deportiva Oficial",
    desc: "Duffles weekend con zapatero independiente y fundas térmicas para raquetas de tenis y palas de pádel."
  },
  marroquineria: {
    name: "ELICER MARROQUINERÍA",
    subtitle: "Premium Footwear & Accessories",
    tagline: "Línea Marroquinería • Tradición, Pátina & Oficio",
    logo: "fotos/Logos/emblema_marroquineria_institucional.jpg",
    badge: "Línea Marroquinería Oficial",
    desc: "Billeteras bifold de perfil plano, tarjeteros biselados al fuego y cinturones macizos de montura en 4mm."
  },
  institucional: {
    name: "ELICER INSTITUCIONAL",
    subtitle: "Premium Footwear & Accessories",
    tagline: "Línea Institucional • Corporativo, Juntas & Dotaciones B2B",
    logo: "fotos/Logos/emblema_marroquineria_institucional.jpg",
    badge: "Línea Institucional B2B",
    desc: "Carpetas de firma directiva y desk pads ejecutivos con grabado de logotipo empresarial masivo."
  },
  premium: {
    name: "ELICER PREMIUM",
    subtitle: "Jorge Eliecer Gómez",
    tagline: "Línea Premium • Alta Gama & Ediciones de Autor",
    logo: "fotos/Logos/emblema_circle.jpg",
    badge: "Insignia Emblemática",
    desc: "Nuestra máxima expresión de diseño marroquinero. Portafolios insignias y totes atelier en cueros de primera selección."
  }
};

const PRODUCTS_DATA = [
  // =========================================================================
  // 1. LÍNEA SPORT (Fotos reales de taller)
  // =========================================================================
  {
    id: "el-sp-01",
    name: "Bolso Crossbody & Sling 'Urban Rider'",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Movilidad ágil y ajuste ergonómico al cuerpo en cuero impermeable",
    image: "fotos/sport/Gemini_Generated_Image_m261vpm261vpm261.jpg",
    gallery: [
      "fotos/sport/Gemini_Generated_Image_m261vpm261vpm261.jpg",
      "fotos/sport/Gemini_Generated_Image_sprdugsprdugsprd.jpg"
    ],
    description: "Diseñado para desplazamientos dinámicos y vida urbana activa. Confeccionado en cuero vacuno flexible tratado contra lluvia ligera, con correa anatómica reforzada y herrajes de liberación rápida.",
    specs: {
      material: "Cuero vacuno hidrófugo semigraso seleccionado",
      curtido: "Vegetal flexible resistente al sudor",
      dimensiones: "28 cm × 16 cm × 7 cm",
      herrajes: "Hebilla táctica y mosquetones en aleación mate",
      forro: "Cordura impermeable de secado rápido",
      personalizacion: "Grabado de iniciales en solapa frontal o cinta"
    },
    badge: "Línea Sport",
    features: ["Resistente al agua", "Ajuste anatómico", "Bolsillo de acceso rápido"]
  },
  {
    id: "el-sp-02",
    name: "Riñonera / Chest Bag Atelier 'Stride'",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Elegancia compacta para manos libres en la ciudad o viajes",
    image: "fotos/sport/Gemini_Generated_Image_sprdugsprdugsprd.jpg",
    gallery: [
      "fotos/sport/Gemini_Generated_Image_sprdugsprdugsprd.jpg",
      "fotos/sport/Gemini_Generated_Image_m261vpm261vpm261.jpg"
    ],
    description: "Silueta aerodinámica de perfil bajo para llevar teléfono inteligente, billetera compacta y llaves con total seguridad al caminar o desplazarse.",
    specs: {
      material: "Cuero vacuno flor suave",
      curtido: "Vegetal botánico",
      dimensiones: "22 cm × 13 cm × 5 cm",
      herrajes: "Cremallera invertida termosellada y broches en latón",
      forro: "Textil transpirable antimicrobial",
      personalizacion: "Monograma en cuero frontal"
    },
    badge: "Línea Sport",
    features: ["Perfil aerodinámico", "Correa ajustable al pecho/cintura", "Cremallera sellada"]
  },

  // =========================================================================
  // 2. LÍNEA DEPORTIVA (Fotos reales de taller)
  // =========================================================================
  {
    id: "el-dp-01",
    name: "Maletín Duffle Weekend & Club",
    line: "deportiva",
    lineName: "Línea Deportiva",
    lineLogo: LINE_LOGOS.deportiva,
    tagline: "Capacidad generosa para viajes cortos, club de golf o vestidor exclusivo",
    image: "fotos/deportiva/Gemini_Generated_Image_f2o81cf2o81cf2o8.jpg",
    gallery: [
      "fotos/deportiva/Gemini_Generated_Image_f2o81cf2o81cf2o8.jpg",
      "fotos/deportiva/Gemini_Generated_Image_z3bf8qz3bf8qz3bf.jpg"
    ],
    description: "Una pieza de alto rendimiento estético y resistencia. Cuero hidrofugado con compartimento lateral ventilado independiente para calzado deportivo, base reforzada con topes macizos y manijas tubulares acolchadas.",
    specs: {
      material: "Cuero vacuno graso de alta resistencia",
      curtido: "Vegetal hidrófugo de larga duración",
      dimensiones: "52 cm × 28 cm × 26 cm (Equipaje de mano aprobado)",
      herrajes: "Cremalleras YKK macizas con tiradores de cuero y latón",
      forro: "Lona resinada lavable impermeable",
      personalizacion: "Tag de viaje grabado con escudo de club o iniciales"
    },
    badge: "Línea Deportiva",
    features: ["Zapatero ventilado independiente", "Base con topes metálicos", "Correa acolchada desmontable"]
  },
  {
    id: "el-dp-02",
    name: "Funda para Raquetas & Palas 'Club Court'",
    line: "deportiva",
    lineName: "Línea Deportiva",
    lineLogo: LINE_LOGOS.deportiva,
    tagline: "Distinción artesanal para tenis y pádel contemporáneo",
    image: "fotos/deportiva/Gemini_Generated_Image_z3bf8qz3bf8qz3bf.jpg",
    gallery: [
      "fotos/deportiva/Gemini_Generated_Image_z3bf8qz3bf8qz3bf.jpg",
      "fotos/deportiva/Gemini_Generated_Image_f2o81cf2o81cf2o8.jpg"
    ],
    description: "Desarrollada para deportistas que no comprometen la sofisticación. Aislamiento térmico interior para protección de cordajes y palas contra el calor exterior, con bolsillo para pelotas y accesorios.",
    specs: {
      material: "Cuero de grano entero flexible y lona resinada",
      curtido: "Vegetal flexible noble",
      dimensiones: "Adaptada para 1 a 2 raquetas o palas",
      herrajes: "Hebillas de latón satinado",
      forro: "Aislante térmico y textil acolchado",
      personalizacion: "Monograma en cinta central o escudo de club"
    },
    badge: "Línea Deportiva",
    features: ["Aislamiento térmico interior", "Bolsillo para accesorios", "Correa ergonómica"]
  },

  // =========================================================================
  // 3. LÍNEA MARROQUINERÍA (Tradición & Oficio)
  // =========================================================================
  {
    id: "el-mq-01",
    name: "Tarjetero Doble Ala 'Horizon'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Esencialismo para el día a día sin abultar bolsillos",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606503829068-1644e590013f?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Corte milimétrico y bordes biselados pulidos a mano con cera de abejas. Capacidad para 6–8 tarjetas y billetes doblados sin generar volumen innecesario.",
    specs: {
      material: "Cuero flor curtición vegetal de 1.2mm",
      curtido: "Extracto de quebracho y mimosa",
      dimensiones: "10 cm × 7.2 cm × 0.6 cm",
      herrajes: "Sin elementos metálicos",
      forro: "Estructura 100% cuero integral",
      personalizacion: "Iniciales en bajo relieve o foil metálico"
    },
    badge: "Línea Marroquinería",
    features: ["Perfil ultradelgado", "Bordes bruñidos al fuego", "Capacidad 6-8 tarjetas"]
  },
  {
    id: "el-mq-02",
    name: "Billetera Bifold Clásica 'Andes'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Proporciones elegantes con arquitectura interior espaciosa",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Ocho ranuras para tarjetas, doble bolsillo oculto y compartimento amplio para billetes internacionales. Diseñada para cerrar completamente plana.",
    specs: {
      material: "Cuero vacuno grano entero curtido al tanino",
      curtido: "Vegetal libre de metales pesados",
      dimensiones: "11 cm × 9 cm × 1.2 cm",
      herrajes: "Sin partes metálicas",
      forro: "Seda de algodón resistente",
      personalizacion: "Grabado de iniciales o nombre en solapa interior"
    },
    badge: "Línea Marroquinería",
    features: ["8 ranuras para tarjetas", "Doble compartimento billetes", "Cierre plano garantizado"]
  },
  {
    id: "el-mq-03",
    name: "Cinturón Macizo de Silla 'Artesano'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Corte continuo en una sola tira de cuero de 4mm sin pegamentos",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Una sola pieza continua de cuero vacuno de montura curtido con extractos de corteza de roble. Hebilla forjada en latón macizo con acabado arenado.",
    specs: {
      material: "Cuero de montura 100% macizo 3.8 - 4.0 mm",
      curtido: "Tradicional al roble en fosa",
      dimensiones: "Ancho 3.5 cm | Tallas personalizadas a medida",
      herrajes: "Hebilla maciza en latón cepillado",
      forro: "Sin forro — cuero puro de flor a reverso",
      personalizacion: "Grabado de iniciales en puntera interior"
    },
    badge: "Línea Marroquinería",
    features: ["Cuero macizo indivisible", "Hebilla forjada a mano", "Confección a medida exacta"]
  },
  {
    id: "el-mq-04",
    name: "Funda para Pasaporte & Documentos 'Vuelo'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Seguridad y distinción en cada escala internacional",
    image: "https://images.unsplash.com/photo-1563903530058-2bf4563ff4e4?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1563903530058-2bf4563ff4e4?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Aloja con delicadeza dos pasaportes, pases de abordar y tarjetas. El accesorio indispensable para viajes internacionales entre Colombia, Canadá y América.",
    specs: {
      material: "Cuero vacuno flor lisa extra suave",
      curtido: "Vegetal noble de origen colombiano",
      dimensiones: "14.5 cm × 10.5 cm × 0.8 cm",
      herrajes: "Cierre magnético oculto ultra delgado",
      forro: "Algodón satinado color Sand",
      personalizacion: "Monograma frontal y coordenadas de viaje"
    },
    badge: "Línea Marroquinería",
    features: ["Capacidad para 2 pasaportes", "Ranura para boletos de avión", "Cierre magnético invisible"]
  },

  // =========================================================================
  // 4. LÍNEA INSTITUCIONAL (Dotaciones empresariales, B2B)
  // =========================================================================
  {
    id: "el-in-01",
    name: "Carpeta de Firma & Portadocumentos Directivo",
    line: "institucional",
    lineName: "Línea Institucional",
    lineLogo: LINE_LOGOS.institucional,
    tagline: "Presencia sobria para acuerdos, firmas notariales y juntas directivas",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Estructura semirrígida con ranuras interiores para libreta legal carta/A4, hojas membretadas, tarjetas corporativas y porta pluma estilográfica central.",
    specs: {
      material: "Cuero flor lisa con acabado satinado",
      curtido: "Extractos vegetales de mimosa y castaño",
      dimensiones: "33 cm × 24 cm (Cerrada)",
      herrajes: "Broche magnético oculto",
      forro: "Algodón peinado color Sand",
      personalizacion: "Grabado en bajo relieve de logotipo corporativo o escudo"
    },
    badge: "Línea Institucional",
    features: ["Apta para hojas carta y A4", "Porta pluma central", "Personalización masiva con logo"]
  },
  {
    id: "el-in-02",
    name: "Set Ejecutivo de Escritorio & Pad 'C-Suite'",
    line: "institucional",
    lineName: "Línea Institucional",
    lineLogo: LINE_LOGOS.institucional,
    tagline: "Dotación refinada para oficinas de presidencia y despachos",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Incluye desk pad en cuero de gran formato con base antideslizante de microfibra, bandeja de vaciado y estuche de instrumentos de escritura.",
    specs: {
      material: "Cuero vacuno curtido al aceite",
      curtido: "Vegetal firme",
      dimensiones: "Desk Pad: 80 cm × 45 cm",
      herrajes: "Sin elementos metálicos cortantes",
      forro: "Gamuza antideslizante en la base",
      personalizacion: "Logotipo institucional en esquina superior"
    },
    badge: "Línea Institucional",
    features: ["Base antideslizante", "Cuero liso ideal para escritura", "Set de 3 piezas"]
  },

  // =========================================================================
  // 5. LÍNEA PREMIUM (Fotos reales de taller)
  // =========================================================================
  {
    id: "el-pr-01",
    name: "Portafolio Insignia Bogotá–Montréal",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Estructura arquitectónica con acabado a mano y espacio acolchado de 16\"",
    image: "fotos/Premium/Gemini_Generated_Image_azsaxvazsaxvazsa.jpg",
    gallery: [
      "fotos/Premium/Gemini_Generated_Image_azsaxvazsaxvazsa.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "La cumbre del oficio marroquinero de ELICER. Elaborado en cuero plena flor curtido vegetal seleccionado grano a grano, compartimento para laptop de hasta 16\", herrajes en latón macizo forjado y costuras reforzadas a doble aguja por maestros artesanos.",
    specs: {
      material: "Cuero vacuno plena flor 100% colombiano de primera selección",
      curtido: "Vegetal lento en fosa libre de cromo",
      dimensiones: "40 cm × 30 cm × 8.5 cm",
      herrajes: "Latón macizo forjado a mano",
      forro: "Gamuza natural suave al tacto",
      personalizacion: "Placa interna numerada y monograma frontal a fuego"
    },
    badge: "Línea Premium",
    features: ["Laptop 16\" acolchada", "Herrajes de latón macizo forjado", "Placa de taller numerada"]
  },
  {
    id: "el-pr-02",
    name: "Tote Atelier de Cuero Esculpido",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Volumen arquitectónico limpio y caída natural de cuero flexible",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Una silueta atemporal que equilibra peso, ligereza y resistencia. Desarrolla una pátina lustrosa única que documenta el paso de los años con autenticidad.",
    specs: {
      material: "Cuero vacuno semigraso encerado de 2.2 mm",
      curtido: "Artesanal con ceras naturales",
      dimensiones: "38 cm × 36 cm × 12 cm",
      herrajes: "Remaches ocultos en bronce satinado",
      forro: "Reverso de cuero pulido a la cera de abejas",
      personalizacion: "Etiqueta interna personalizada y monograma exterior"
    },
    badge: "Línea Premium",
    features: ["Sin forro sintético", "Asas al hombro anatómicas", "Pátina profunda con los años"]
  }
];

// Sanitizador defensivo de entradas de texto
function sanitizeInputText(input, maxLength = 150) {
  if (typeof input !== "string") return "";
  // Elimina caracteres de control y no imprimibles (\x00-\x1F y \x7F) para evitar inyecciones de protocolo
  return input
    .replace(/[\x00-\x1F\x7F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

// Generador de enlace a WhatsApp enfocado en cotización directa
function getWhatsAppProductLink(product, customNote = "") {
  if (!product || typeof product !== "object") return "#";
  
  const cleanName = sanitizeInputText(product.name || "", 80);
  const cleanLine = sanitizeInputText(product.lineName || "", 50);
  const cleanRef = sanitizeInputText(product.id || "", 30).toUpperCase();
  const cleanNote = sanitizeInputText(customNote, 150);

  let msg = `Hola ELICER,%0A%0AMe comunico desde la vitrina virtual para *solicitar una cotización y tiempos de elaboración* de la siguiente pieza:%0A%0A`;
  msg += `*• Pieza:* ${encodeURIComponent(cleanName)}%0A`;
  msg += `*• Línea Oficial:* ${encodeURIComponent(cleanLine)}%0A`;
  msg += `*• Referencia:* ${encodeURIComponent(cleanRef)}%0A`;

  if (cleanNote.length > 0) {
    msg += `*• Personalización / Requerimiento:* ${encodeURIComponent(cleanNote)}%0A`;
  }

  msg += `%0A¿Podrían brindarme la información de cotización y opciones de personalización? Gracias.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`;
}

// Generador de enlace para Ventas al por Mayor / Corporativo
function getWhatsAppWholesaleLink(inquiryType = "Ventas al por Mayor") {
  const cleanInquiry = sanitizeInputText(inquiryType, 80) || "Ventas al por Mayor";
  
  let msg = `Hola ELICER,%0A%0AMe comunico para solicitar información y catálogo para *${encodeURIComponent(cleanInquiry)}* (Línea Institucional / Dotaciones / Regalos Corporativos / Clubes):%0A%0A`;
  msg += `*• Tipo de consulta:* ${encodeURIComponent(cleanInquiry)}%0A`;
  msg += `*• Deseo cotizar:* Piezas en cuero personalizadas con logotipo empresarial / volumen para empresa o club.%0A%0A`;
  msg += `Quedo atento/a para recibir su propuesta y asesoría de taller. Muchas gracias.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`;
}
