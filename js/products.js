/**
 * ELICER — Catálogo de Piezas, Líneas Oficiales y Logos
 * Colecciones activas: Clásica, Sport, Marroquinería y Premium
 */

const WHATSAPP_PHONE = "15148858825"; // Número oficial de WhatsApp (+1 514 885-8825)

// Mapeo de Logos Oficiales en Alta Definición y Recorte Centrado
const LINE_LOGOS = {
  principal: "fotos/Logos/emblema_circle.jpg",
  premium: "fotos/Logos/emblema_circle.jpg",
  clasica: "fotos/Logos/emblema_circle.jpg",
  sport: "fotos/Logos/emblema_sport_deportiva.jpg",
  marroquineria: "fotos/Logos/emblema_marroquineria_institucional.jpg"
};

// Configuración de Identidad Dinámica de Marca por Línea
const LINE_BRANDING = {
  all: {
    name: "ELICER",
    subtitle: "Jorge Eliecer Gómez",
    tagline: "Colección General de Oficio Artesanal",
    logo: "fotos/Logos/emblema_circle.jpg",
    badge: "Colección Oficial",
    desc: "Explora la totalidad de piezas de calzado y marroquinería creadas por nuestro taller entre Colombia y Canadá."
  },
  clasica: {
    name: "ELICER CLÁSICA",
    subtitle: "Jorge Eliecer Gómez",
    tagline: "Línea Clásica • Calzado Formal & Alta Zapatería",
    logo: "fotos/Logos/emblema_circle.jpg",
    badge: "Línea Clásica Oficial",
    desc: "Zapatos formales de corte Oxford, Blucher y Rivera en cueros finos con suelas de cuero grupón y Stanfort."
  },
  sport: {
    name: "ELICER SPORT",
    subtitle: "Sports Shoes & Accessories",
    tagline: "Línea Sport • Calzado Casual, Nobuck & Suelas Confort",
    logo: "fotos/Logos/emblema_sport_deportiva.jpg",
    badge: "Línea Sport Oficial",
    desc: "Calzado urbano contemporáneo en cuero nobuck, montana y floter con suelas Falg, Falk, Junior P.U. y Carlo Spanso."
  },
  marroquineria: {
    name: "ELICER MARROQUINERÍA",
    subtitle: "Premium Footwear & Accessories",
    tagline: "Línea Marroquinería • Tradición, Pátina & Oficio",
    logo: "fotos/Logos/emblema_marroquineria_institucional.jpg",
    badge: "Línea Marroquinería Oficial",
    desc: "Billeteras bifold de perfil plano, tarjeteros biselados al fuego, bolsos y cinturones macizos de montura en 4 mm."
  },
  premium: {
    name: "ELICER PREMIUM",
    subtitle: "Jorge Eliecer Gómez",
    tagline: "Línea Premium • Botas & Zapatos de Autor en Cuero Crosta y Pátinas",
    logo: "fotos/Logos/emblema_circle.jpg",
    badge: "Insignia Emblemática",
    desc: "Nuestra máxima expresión en calzado y talabartería. Botas atelier, pátinas difuminadas a mano, cuero crosta y suelas EVA italianas y de cuero grupón."
  }
};

const PRODUCTS_DATA = [
  // =========================================================================
  // 1. LÍNEA CLÁSICA (Fotos reales de taller)
  // =========================================================================
  {
    id: "el-cl-01",
    name: "Zapato Blucher en Cuero Napa Miel Difuminado — Suela Stanfort",
    line: "clasica",
    lineName: "Línea Clásica",
    lineLogo: LINE_LOGOS.clasica,
    tagline: "Acabado artesanal difuminado a mano en tono miel cálido con suela Stanfort antideslizante",
    image: "fotos/Clasica/napa-miel-difuminado-suela-stanfort.jpg",
    gallery: [
      "fotos/Clasica/napa-miel-difuminado-suela-stanfort.jpg"
    ],
    description: "Diseño clásico y versátil confeccionado en cuero vacuno Napa seleccionado. Destaca por su pátina artesanal difuminada al alcohol en tonos miel dorados, forro completo en badana suave y suela Stanfort que garantiza tracción y durabilidad.",
    specs: {
      material: "Cuero vacuno Napa flor suave de primera calidad",
      curtido: "Vegetal flexible con acabado difuminado a mano",
      suela: "Stanfort antideslizante con cerco pespunteado",
      forro: "Cuero badana natural transpirable y antibacterial",
      personalizacion: "Monograma grabado en bajo relieve en la plantilla"
    },
    badge: "Línea Clásica",
    features: ["Pátina artesanal difuminada a mano", "Suela Stanfort resistente al desgaste", "Forro en badana genuina"]
  },
  {
    id: "el-cl-02",
    name: "Zapato Sheraton Bicolor Coñac y Café con Vivo Azul — Suela Stanfort",
    line: "clasica",
    lineName: "Línea Clásica",
    lineLogo: LINE_LOGOS.clasica,
    tagline: "Sofisticada combinación en cuero Sheraton coñac/café con detalles y vivo azul",
    image: "fotos/Clasica/sheraton-conac-cafe-azul-suela-stanfort.jpg",
    gallery: [
      "fotos/Clasica/sheraton-conac-cafe-azul-suela-stanfort.jpg"
    ],
    description: "Una distinguida pieza de autor con silueta Sheraton. Combina cuero vacuno tono coñac y café chocolate con un delicado vivo azul en el ribete. Montado sobre suela Stanfort con vira pespunteada para un uso diario elegante.",
    specs: {
      material: "Cuero Sheraton de poro cerrado con apliques en contraste",
      curtido: "Curtición noble de alta densidad",
      suela: "Stanfort ejecutiva con cerco artesanal",
      forro: "Badana natural con plantilla confort",
      personalizacion: "Grabado de iniciales en talón o plantilla"
    },
    badge: "Línea Clásica",
    features: ["Diseño bicolor coñac/café con detalle azul", "Cerco pespunteado reforzado", "Silueta Sheraton clásica"]
  },
  {
    id: "el-cl-03",
    name: "Zapato Formal Clásico con Doble Suela Spanso & Cuero Grupón",
    line: "clasica",
    lineName: "Línea Clásica",
    lineLogo: LINE_LOGOS.clasica,
    tagline: "Construcción artesanal de alta zapatería con entresuela Spanso amortiguada y piso en cuero grupón",
    image: "fotos/Clasica/suela-spanso-suela-cuero-grupon.jpg",
    gallery: [
      "fotos/Clasica/suela-spanso-suela-cuero-grupon.jpg"
    ],
    description: "Zapato de etiqueta confeccionado bajo los más exigentes estándares de la zapatería tradicional. Incorpora una innovadora entresuela Spanso que absorbe el impacto de cada paso, combinada con un piso macizo de cuero grupón legítimo.",
    specs: {
      material: "Cuero vacuno plena flor lustrado a mano",
      curtido: "Vegetal tradicional de poro fino",
      suela: "Combinación de entresuela Spanso y suela de cuero grupón",
      forro: "Badana vacuno libre de químicos irritantes",
      personalizacion: "Sello de taller e iniciales en el arco de la suela"
    },
    badge: "Alta Zapatería",
    features: ["Piso en cuero grupón macizo", "Entresuela Spanso de confort prolongado", "Lustre tradicional de gala"]
  },
  {
    id: "el-cl-04",
    name: "Zapato Rivera Negro Repujado — Forro Badana & Suela Cuero Grupón",
    line: "clasica",
    lineName: "Línea Clásica",
    lineLogo: LINE_LOGOS.clasica,
    tagline: "Grabado repujado de textura fina sobre cuero negro con suela de cuero grupón artesanal",
    image: "fotos/Clasica/zapato-rivera-negro-repujado-suela-cuero-grupon.jpg",
    gallery: [
      "fotos/Clasica/zapato-rivera-negro-repujado-suela-cuero-grupon.jpg"
    ],
    description: "Silueta Rivera con grabado repujado en panel superior que aporta carácter y sofisticación única. Suela en auténtico cuero grupón curtido al tanino con tacón reforzado y forro interno en badana suave.",
    specs: {
      material: "Cuero vacuno negro con repujado geométrico fino",
      curtido: "Vegetal firme con tinte negro profundo",
      suela: "Cuero grupón legítimo con tapa de tacón antideslizante",
      forro: "Badana vacuno 100% transpirable",
      personalizacion: "Grabado de iniciales en bajorrelieve"
    },
    badge: "Línea Clásica",
    features: ["Repujado artesanal de textura exclusiva", "Suela de cuero grupón cosida", "Interior forrado en badana"]
  },
  {
    id: "el-cl-05",
    name: "Zapato Rivera Negro Liso — Forro Cuero Badana & Suela Cuero Grupón",
    line: "clasica",
    lineName: "Línea Clásica",
    lineLogo: LINE_LOGOS.clasica,
    tagline: "Silueta sobria y formal en cuero negro liso impecable con genuina suela de cuero grupón",
    image: "fotos/Clasica/zapato-rivera-negro-liso-suela-cuero-grupon.jpg",
    gallery: [
      "fotos/Clasica/zapato-rivera-negro-liso-suela-cuero-grupon.jpg"
    ],
    description: "El zapato formal definitivo para ceremonias, juntas directivas y ocasiones de máxima etiqueta. Confeccionado en cuero vacuno negro liso impecable, con forro completo de badana y suela de cuero grupón con cantos sellados al fuego.",
    specs: {
      material: "Cuero vacuno flor liso seleccionado de lustre satinado",
      curtido: "Curtición vegetal clásica al tanino",
      suela: "Cuero grupón de alta densidad con acabado artesanal",
      forro: "Badana vacuno ultra suave",
      personalizacion: "Grabado en la vira interna o plantilla"
    },
    badge: "Línea Clásica",
    features: ["Acabado liso satinado de etiqueta", "Suela de cuero grupón tradicional", "Máxima durabilidad y distinción"]
  },

  // =========================================================================
  // 2. LÍNEA SPORT (Fotos reales de taller)
  // =========================================================================
  {
    id: "el-sp-01",
    name: "Zapato Sport en Nobuck Gris con Nudo Náutico — Suela Falg",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Acabado terciopelo en nobuck gris con cordonera de nudo marinero y suela Falg ligera",
    image: "fotos/sport/nobuck-gris-nudo-suela-falg.jpg",
    gallery: [
      "fotos/sport/nobuck-gris-nudo-suela-falg.jpg"
    ],
    description: "Calzado contemporáneo confeccionado en cuero vacuno Nobuck de tacto aterciopelado tono gris neutro. Detalle artesanal de nudo marinero en la cordonera y montado sobre una suela Falg ultraligera que amortigua cada paso en la ciudad.",
    specs: {
      material: "Cuero vacuno Nobuck gamuzado de poro abierto",
      curtido: "Vegetal flexible con tratamiento antipolvo",
      suela: "Falg ultraligera de tracción urbana y absorción de impacto",
      forro: "Textil transpirable de alta resistencia",
      personalizacion: "Grabado de iniciales en la lengüeta de cuero"
    },
    badge: "Línea Sport",
    features: ["Cuero Nobuck tacto terciopelo", "Cordonera con nudo náutico de diseño", "Suela Falg extra liviana"]
  },
  {
    id: "el-sp-02",
    name: "Zapato Casual Sheranton Coñac con Contrastes Azul — Suela Bicolor TR",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Fusión sport-casual en cuero Sheranton tono coñac con ribetes azul marino y suela TR bicolor",
    image: "fotos/sport/sheranton-conac-azul-suela-bicolor-tr.jpg",
    gallery: [
      "fotos/sport/sheranton-conac-azul-suela-bicolor-tr.jpg"
    ],
    description: "Pieza dinámica con estética de taller. Confeccionada en cuero vacuno Sheranton tono coñac miel, realzado con vivos en cuero azul marino y una suela de termocaucho (TR) bicolor diseñada para máxima flexibilidad y agarre.",
    specs: {
      material: "Cuero vacuno Sheranton flexible con contrastes en azul",
      curtido: "Vegetal botánico con ceras de lustre",
      suela: "Termocaucho (TR) bicolor resistente a la abrasión",
      forro: "Badana natural combinada con tejido antitranspirante",
      personalizacion: "Grabado de iniciales en lateral exterior o plantilla"
    },
    badge: "Línea Sport",
    features: ["Combinación de tonos coñac y azul", "Suela TR bicolor antideslizante", "Ajuste anatómico para uso diario"]
  },
  {
    id: "el-sp-03",
    name: "Zapato Sport en Cuero Floter Coñac — Suela Junior P.U.",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Textura granulada Floter en tono coñac con suela de poliuretano (P.U.) de pisada suave",
    image: "fotos/sport/zapato-cuero-floter-conac-suela-junior-pu.jpg",
    gallery: [
      "fotos/sport/zapato-cuero-floter-conac-suela-junior-pu.jpg"
    ],
    description: "Diseñado para quienes buscan confort ininterrumpido sin renunciar a la elegancia del cuero natural. El cuero Floter ofrece una textura suave al tacto y gran resistencia al quiebre, montado sobre una suela inyectada Junior P.U. que aísla las irregularidades del pavimento.",
    specs: {
      material: "Cuero vacuno Floter de grano natural abatanado",
      curtido: "Curtido al cromo ecológico libre de metales pesados",
      suela: "Poliuretano Junior P.U. inyectado flexible",
      forro: "Cuero badana suave microventilado",
      personalizacion: "Monograma grabado en la talonera"
    },
    badge: "Línea Sport",
    features: ["Cuero Floter texturizado antirasguños", "Suela Junior P.U. de alta amortiguación", "Plantilla anatómica removible"]
  },
  {
    id: "el-sp-04",
    name: "Zapato Casual Cuero Montana Miel — Suela Carlo Spanso Confort",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Resistencia rústica en cuero Montana tono miel con entresuela Carlo Spanso anatómica",
    image: "fotos/sport/zapato-cuero-montana-miel-suela-carlo-spanso.jpg",
    gallery: [
      "fotos/sport/zapato-cuero-montana-miel-suela-carlo-spanso.jpg"
    ],
    description: "Robusto y con personalidad. Confeccionado en cuero vacuno Montana en tono miel con efecto pull-up que envejece con una pátina inigualable. La suela Carlo Spanso proporciona un lecho acolchado para caminar durante todo el día.",
    specs: {
      material: "Cuero vacuno Montana engrasado de calibre grueso",
      curtido: "Vegetal graso resistente a la humedad",
      suela: "Carlo Spanso de ingeniería ergonómica antifatiga",
      forro: "Badana genuina con refuerzo en el talón",
      personalizacion: "Grabado de nombre o iniciales en la pala"
    },
    badge: "Línea Sport",
    features: ["Cuero Montana de alta durabilidad", "Suela Carlo Spanso ergonómica", "Efecto pátina que mejora con el tiempo"]
  },
  {
    id: "el-sp-05",
    name: "Zapato Sport Derby Napa Negro Brillante — Suela Stanfort",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Versatilidad de día y noche en cuero Napa negro pulido con suela Stanfort deportiva",
    image: "fotos/sport/zapato-napa-negro-brillante-suela-stanfort.jpg",
    gallery: [
      "fotos/sport/zapato-napa-negro-brillante-suela-stanfort.jpg"
    ],
    description: "El equilibrio exacto entre el calzado formal y el sport urbano. Confeccionado en cuero Napa negro lustrado que resalta por su brillo impecable, combinado con una base Stanfort flexible apta para jornadas activas.",
    specs: {
      material: "Cuero vacuno Napa plena flor brillante",
      curtido: "Vegetal satinado con ceras de lustre",
      suela: "Stanfort deportiva con cerco reforzado",
      forro: "Cuero badana 100% natural",
      personalizacion: "Personalización en la plantilla interna"
    },
    badge: "Línea Sport",
    features: ["Lustre brillante de alta presencia", "Suela Stanfort de gran flexibilidad", "Forro en badana suave"]
  },
  {
    id: "el-sp-06",
    name: "Zapato Derby Sport Nobuck Gris — Suela Falk",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Estilo contemporáneo en cuero nobuck gris ceniza con suela ergonómica Falk",
    image: "fotos/sport/zapato-nobuck-gris-suela-falk.jpg",
    gallery: [
      "fotos/sport/zapato-nobuck-gris-suela-falk.jpg"
    ],
    description: "Una silueta moderna y cosmopolita. La finura del Nobuck en tono gris ceniza se combina con pespuntes artesanales precisos y una suela Falk de goma ligera de excelente respuesta en suelo urbano.",
    specs: {
      material: "Cuero vacuno Nobuck de fibra densa",
      curtido: "Tratamiento repelente a manchas ligeras",
      suela: "Falk de goma ultraliviana vulcanizada",
      forro: "Textil transpirable antimicrobial",
      personalizacion: "Grabado a láser en lengüeta"
    },
    badge: "Línea Sport",
    features: ["Tono gris ceniza combinable", "Suela Falk de máxima ligereza", "Tacto aterciopelado de primera calidad"]
  },
  {
    id: "el-sp-07",
    name: "Zapato Sport Sheranton Negro — Forro Badana & Suela Spanso",
    line: "sport",
    lineName: "Línea Sport",
    lineLogo: LINE_LOGOS.sport,
    tagline: "Confort urbano premium en cuero Sheranton negro profundo con interior en badana natural",
    image: "fotos/sport/zapato-sheranton-negro-suela-spanso.jpg",
    gallery: [
      "fotos/sport/zapato-sheranton-negro-suela-spanso.jpg"
    ],
    description: "Calzado sobrio en cuero vacuno Sheranton negro satinado. Su interior forrado totalmente en badana de cordero/res ofrece un calce de guante, apoyado por una suela Spanso diseñada para aliviar la presión plantar.",
    specs: {
      material: "Cuero vacuno Sheranton negro de grano compacto",
      curtido: "Vegetal homogéneo de alta solidez al color",
      suela: "Spanso de confort activo",
      forro: "Cuero badana suave absorbente",
      personalizacion: "Iniciales grabadas en bajorrelieve en lengüeta"
    },
    badge: "Línea Sport",
    features: ["Totalmente forrado en badana", "Suela Spanso antifatiga", "Diseño versátil para trabajo y descanso"]
  },

  // =========================================================================
  // 3. LÍNEA MARROQUINERÍA (Fotos reales de taller)
  // =========================================================================
  // -------------------------------------------------------------------------
  // CINTURONES TRENTO & SISTEMA AUTOMÁTICO RATCHET
  // -------------------------------------------------------------------------
  {
    id: "el-mq-tb-01",
    name: "Cinturón Clásico Trento en Cuero Café Chocolate con Pasador Grabado",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Cuero plena flor chocolate de 35 mm con hebilla de perno níquel satinado y pasador grabado Trento",
    image: "fotos/Marroquineria/catalogo/cinturon-trento-cuero-chocolate-clasico.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-trento-cuero-chocolate-clasico.jpg",
      "fotos/Marroquineria/catalogo/cinturon-automatico-cuero-negro-texturizado.jpg"
    ],
    description: "Cinturón artesanal de la colección Trento confeccionado en cuero vacuno plena flor tono café chocolate profundo con pespunte perimetral reforzado. Destaca por su montura con aplique en cuero caramelo contrastante, pasador en cuero repujado con el ciervo y sello heráldico 'TRENTO', y hebilla rectangular clásica en acabado níquel satinado. Una pieza robusta y distinguida para uso formal o casual.",
    specs: {
      material: "Cuero vacuno plena flor curtido vegetal (calibre 3.8 mm)",
      curtido: "Curtición vegetal en tanino natural con cantos bruñidos",
      dimensiones: "Ancho: 35 mm | Talla adaptada a la medida del cliente (28 a 46)",
      herrajes: "Hebilla clásica de perno rectangular en níquel satinado antialérgico",
      detalles: "Pasador repujado con sello Trento y refuerzo contrastante",
      personalizacion: "Grabado de iniciales en la cara interna de la correa"
    },
    badge: "Colección Trento",
    features: ["Cuero macizo plena flor 35 mm", "Hebilla clásica níquel satinado", "Pasador en cuero grabado 'TRENTO'"]
  },
  {
    id: "el-mq-tb-02",
    name: "Cinturón Automático Ratchet Trento en Cuero Graneado Negro",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Sistema de microajuste interno sin perforaciones con hebilla gunmetal e inserto negro esmaltado",
    image: "fotos/Marroquineria/catalogo/cinturon-automatico-ratchet-cuero-negro-esmaltado.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-automatico-ratchet-cuero-negro-esmaltado.jpg",
      "fotos/Marroquineria/catalogo/cinturon-automatico-ratchet-cuero-negro-mecanismo.jpg"
    ],
    description: "Cinturón ejecutivo de precisión elaborado en cuero vacuno negro de grano fino (tacto floter) con forro interior en carnaza suave tono taupe. Incorpora sistema automático ratchet con riel dentado oculto que ofrece más de 30 microposiciones para un calce perfecto sin agujeros visibles ni deformaciones por tensión. Hebilla rectangular en aleación gunmetal con inserto central negro brillante y palanca de desenganche rápido.",
    specs: {
      material: "Cuero vacuno graneado de textura firme y flexible",
      sistema: "Mecanismo automático ratchet con cremallera interior oculta (sin huecos)",
      dimensiones: "Ancho: 35 mm estándar ejecutivo | Correa recortable a medida",
      herrajes: "Hebilla rectangular gunmetal con aplique esmaltado negro y gatillo de liberación rápida",
      forro: "Interior reforzado en piel nobuk/carnaza taupe con riel de alta resistencia",
      personalizacion: "Grabado de iniciales a calor en la puntera interior"
    },
    badge: "Ajuste Ratchet",
    features: ["Microajuste sin perforaciones (30+ puntos)", "Hebilla gunmetal con inserto esmaltado", "Talla recortable a la medida exacta"]
  },
  {
    id: "el-mq-tb-03",
    name: "Cinturón Ejecutivo Automático Café Espresso Trento",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Cuero napa lisa café oscuro con hebilla automática maciza gunmetal y ajuste milimétrico",
    image: "fotos/Marroquineria/catalogo/cinturon-automatico-cuero-espresso-hebilla-solida.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-automatico-cuero-espresso-hebilla-solida.jpg",
      "fotos/Marroquineria/catalogo/cinturon-automatico-cuero-espresso-hebilla-cepillada.jpg"
    ],
    description: "Sofisticado cinturón masculino en cuero vacuno napa lisa plena flor tono café espresso oscuro con cantos bruñidos a mano y pespunte a tono. Su mecanismo automático sin orificios preserva la superficie del cuero intacta a lo largo del tiempo, mientras que su hebilla de placa maciza en acabado gunmetal satinado aporta un diseño limpio, moderno y de alta distinción en reuniones y eventos de negocios.",
    specs: {
      material: "Cuero vacuno napa lisa plena flor tono café espresso",
      sistema: "Cierre automático de presión milimétrico de liberación suave",
      dimensiones: "Ancho: 35 mm | Microajuste continuo sin perforaciones",
      herrajes: "Placa maciza gunmetal cepillada con tratamiento antihuellas",
      estructura: "Alma reforzada antitorsión y cantos pulidos con cera botánica",
      personalizacion: "Monograma grabado en bajo relieve en el reverso"
    },
    badge: "Línea Ejecutiva",
    features: ["Cuero napa liso café espresso", "Hebilla automática maciza gunmetal", "Sistema libre de perforaciones anti-desgaste"]
  },
  // -------------------------------------------------------------------------
  // BILLETERAS & TARJETEROS ARTESANALES (COLECCIÓN TRENTO & MODULAR)
  // -------------------------------------------------------------------------
  {
    id: "el-mq-tb-04",
    name: "Billetera & Tarjetero Vertical Ejecutivo 'Québec'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Formato vertical ergonómico con visor transparente para licencia y ranuras extendidas",
    image: "fotos/Marroquineria/catalogo/tarjetero-vertical-ejecutivo-cafe-cerrado.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/tarjetero-vertical-ejecutivo-cafe-cerrado.jpg",
      "fotos/Marroquineria/catalogo/tarjetero-vertical-ejecutivo-cafe-abierto.jpg"
    ],
    description: "Pensada para el viajero y profesional que requiere portar identificación visible y múltiples tarjetas sin deformar su prenda. Confeccionada en cuero tono tabaco con visor de policarbonato para licencia de conducir o credencial de Quebec/Colombia.",
    specs: {
      material: "Cuero vacuno semigraso tono tabaco envejecido",
      curtido: "Vegetal tradicional al tanino",
      dimensiones: "12.5 cm × 8.8 cm × 1.2 cm",
      herrajes: "Visor transparente irrompible de alta claridad",
      forro: "Microfibra técnica antidesgaste",
      personalizacion: "Grabado personalizado en solapa exterior o interior"
    },
    badge: "Edición Internacional",
    features: ["Visor para identificación rápida", "Formato vertical anatómico", "Aloja hasta 10 tarjetas"]
  },
  {
    id: "el-mq-tb-05",
    name: "Billetera Slim Money Clip Trento 'Cuir Noir'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Clip central de resorte metálico y acceso exterior para tarjetas de uso frecuente",
    image: "fotos/Marroquineria/catalogo/billetera-money-clip-trento-negro-cerrada.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/billetera-money-clip-trento-negro-cerrada.jpg",
      "fotos/Marroquineria/catalogo/billetera-money-clip-trento-negro-abierta.jpg"
    ],
    description: "La alternativa más compacta y ligera para llevar billetes sujetos firmemente por una barra de resorte niquelada central y tarjetas dispuestas en ranuras de acceso instantáneo. Sello de autenticidad Trento grabado en la portada.",
    specs: {
      material: "Cuero flor de curtición vegetal negro profundo",
      curtido: "Al extracto de quebracho",
      dimensiones: "10.8 cm × 7.8 cm × 0.9 cm (Ultra Slim)",
      herrajes: "Barra clip de resorte en acero niquelado de alta tensión",
      forro: "Ranuras en cuero genuino sin forros sintéticos",
      personalizacion: "Grabado de iniciales en la esquina exterior"
    },
    badge: "Ultra Slim",
    features: ["Clip de resorte en acero niquelado", "Grosor menor a 1 cm", "Diseño de bolsillo frontal"]
  },
  {
    id: "el-mq-tb-06",
    name: "Billetera Modular Money Clip con Tarjetero Deslizable Miel",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Innovador sistema 2-en-1 con clip para billetes y tarjetero extraíble microperforado",
    image: "fotos/Marroquineria/catalogo/billetera-clip-tarjetero-deslizable-miel.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/billetera-clip-tarjetero-deslizable-miel.jpg"
    ],
    description: "Doble funcionalidad para cualquier ocasión. Utilízala como billetera completa con clip central de acero para efectivo o extrae el tarjetero frontal microperforado cuando solo necesites tus tarjetas esenciales para una reunión o cena ligera.",
    specs: {
      material: "Cuero vacuno tono miel con textura microperforada piqué",
      curtido: "Vegetal flexible enriquecido",
      dimensiones: "11.0 cm × 8.2 cm × 1.4 cm",
      herrajes: "Clip metálico de alta resistencia y remaches invisibles",
      forro: "Textil transpirable y cuero acoplado",
      personalizacion: "Monograma grabado en el tarjetero extraíble"
    },
    badge: "Diseño Modular 2 en 1",
    features: ["Tarjetero deslizable independiente", "Clip de billetes niquelado", "Textura micro-punzonada de lujo"]
  },
  {
    id: "el-mq-tb-07",
    name: "Billetera Modular Money Clip con Tarjetero Deslizable Rojo Carmín",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Audacia de color y textura piqué en cuero carmín con tarjetero extraíble",
    image: "fotos/Marroquineria/catalogo/billetera-clip-tarjetero-deslizable-rojo-carmin.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/billetera-clip-tarjetero-deslizable-rojo-carmin.jpg"
    ],
    description: "Una declaración de estilo personal confeccionada en cuero teñido en masa tono carmín terracota. Incorpora el mismo ingenioso módulo desmontable frontal y clip interior cromado.",
    specs: {
      material: "Cuero genuino flor teñido carmín terracota",
      curtido: "Curtición vegetal noble de tacto sedoso",
      dimensiones: "11.0 cm × 8.2 cm × 1.4 cm",
      herrajes: "Clip central articulado en acero brillante",
      forro: "Cuero al tono y refuerzos textiles interiores",
      personalizacion: "Grabado a fuego de iniciales en solapa interna"
    },
    badge: "Edición de Autor",
    features: ["Color carmín terracota vibrante", "Módulo tarjetero desacoplable", "Organización rápida de efectivo"]
  },

  // -------------------------------------------------------------------------
  // CINTURONES FORMALES REVERSIBLES & EJECUTIVOS
  // -------------------------------------------------------------------------
  {
    id: "el-mq-cr-01",
    name: "Cinturón Reversible Formal Negro & Hebilla Giratoria Gunmetal",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Mecanismo giratorio 360° en acabado grafito pulido con cuero liso de alta costura",
    image: "fotos/Marroquineria/catalogo/cinturon-reversible-formal-cuero-negro-hebilla-giratoria.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-reversible-formal-cuero-negro-hebilla-giratoria.jpg"
    ],
    description: "La cumbre de la practicidad ejecutiva. Un mecanismo de giro en la hebilla permite alternar entre dos tonos de cuero legítimo en un segundo. Pasadores y cantos pulidos con cera italiana.",
    specs: {
      material: "Cuero vacuno flor de 3.5 mm de montura",
      curtido: "Vegetal en fosa de curtido lento",
      dimensiones: "Ancho: 35 mm | Longitud: Adaptada a la talla del cliente (28 a 46)",
      herrajes: "Hebilla reversible giratoria en zamak acabado gunmetal satinado",
      forro: "Doble cara en cuero genuino sin almas sintéticas",
      personalizacion: "Grabado de iniciales en la puntera interior"
    },
    badge: "Reversible 360°",
    features: ["Hebilla giratoria reversible", "Doble tono para traje o pantalón casual", "Corte a la medida exacta del cliente"]
  },
  {
    id: "el-mq-cr-02",
    name: "Cinturón Reversible Azul Marino & Pespunte 'JO\'S'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Elegancia náutica en azul noche con pespunte perimetral blanco y hebilla moleteada",
    image: "fotos/Marroquineria/catalogo/cinturon-reversible-azul-marino-hebilla-moleteada.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-reversible-azul-marino-hebilla-moleteada.jpg"
    ],
    description: "Diseño para sastrería contemporánea y pantalones claros o azul medianoche. Pespunte blanco contrastante a doble aguja y hebilla giratoria con textura moleteada táctil.",
    specs: {
      material: "Cuero vacuno teñido en masa tono azul marino y reverso tabaco",
      curtido: "Vegetal con ceras impermeabilizantes",
      dimensiones: "Ancho: 35 mm | Talla personalizada de 30 a 44",
      herrajes: "Hebilla giratoria con cilindro moleteado en acabado peltre",
      forro: "Estructura reversible 100% cuero natural",
      personalizacion: "Monograma grabado en bajo relieve"
    },
    badge: "Línea Marroquinería",
    features: ["Tono azul marino profundo", "Pespunte artesanal a contraste", "Hebilla con textura táctil antideslizante"]
  },
  {
    id: "el-mq-cr-03",
    name: "Cinturón Reversible Café Microtextura Hebilla 'JEG'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Sello personal de Jorge Eliecer Gómez grabado en hebilla con cuerpo microtexturado",
    image: "fotos/Marroquineria/catalogo/cinturon-reversible-cafe-microtextura-hebilla-jeg.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-reversible-cafe-microtextura-hebilla-jeg.jpg"
    ],
    description: "Firma directa del maestro artesano. Hebilla grabada con el monograma de taller 'JEG' montada sobre un cuero café con gofrado microtexturado que resiste rayones y otorga una apariencia moderna y exclusiva.",
    specs: {
      material: "Cuero vacuno grabado micropunto y reverso liso cognac",
      curtido: "Vegetal botánico de alta firmeza",
      dimensiones: "Ancho: 35 mm | Largo a medida",
      herrajes: "Hebilla reversible con grabado láser 'JEG' acabado plata satinada",
      forro: "Cuero plena flor acoplado",
      personalizacion: "Ajuste de perforaciones personalizado a la silueta"
    },
    badge: "Firma Jorge Eliecer Gómez",
    features: ["Monograma JEG de maestro talabartero", "Superficie microtexturada anti-rayones", "Sistema reversible giratorio"]
  },
  {
    id: "el-mq-cr-04",
    name: "Cinturón Reversible Café Oscuro Clásico",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Brillo satinado natural de cuero caoba con hebilla rectangular en níquel cepillado",
    image: "fotos/Marroquineria/catalogo/cinturon-reversible-cafe-oscuro-liso-clasico.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-reversible-cafe-oscuro-liso-clasico.jpg"
    ],
    description: "El cinturón indispensable en cualquier guardarropa masculino. Líneas puras, cuero caoba de lustre suave y hebilla giratoria reversible en níquel cepillado que complementa trajes formales y calzado de cuero café o negro.",
    specs: {
      material: "Cuero vacuno flor suave café caoba y negro azabache",
      curtido: "Vegetal libre de sustancias agresivas",
      dimensiones: "Ancho: 35 mm | Tallas 30 a 44",
      herrajes: "Hebilla giratoria en aleación niquelada satinada",
      forro: "Construcción integral de dos caras en cuero",
      personalizacion: "Grabado a calor en cara interna"
    },
    badge: "Línea Marroquinería",
    features: ["Clásico de vestir atemporal", "Cantos bruñidos a mano", "Hebilla de níquel cepillado"]
  },
  {
    id: "el-mq-cr-05",
    name: "Cinturón Reversible Cognac Miel con Doble Pespunte",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Calidez artesanal con doble costura ornamental perimetral y pátina dorada",
    image: "fotos/Marroquineria/catalogo/cinturon-reversible-cognac-miel-pespunte-doble.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-reversible-cognac-miel-pespunte-doble.jpg"
    ],
    description: "Destaca por su luminosa tonalidad coñac y el detalle talabartero de doble pespunte perimetral en hilo encerado. La hebilla giratoria permite utilizar la cara lisa café o la cara miel según la ocasión.",
    specs: {
      material: "Cuero vacuno curtido al aceite color cognac y reverso café oscuro",
      curtido: "Vegetal tradicional a la grasa animal y vegetal",
      dimensiones: "Ancho: 35 mm | Elaborado a la longitud exacta requerida",
      herrajes: "Hebilla reversible de doble pasador con acabado gunmetal",
      forro: "Estructura 100% cuero flor",
      personalizacion: "Monograma grabado a fuego"
    },
    badge: "Línea Marroquinería",
    features: ["Doble costura perimetral reforzada", "Tono cognac de alta luminosidad", "Rotación suave de 360 grados"]
  },
  {
    id: "el-mq-cr-06",
    name: "Cinturón Reversible Pátina Ejecutiva 'JGS'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Pátina lustrosa estilo atelier con hebilla de lujo grabada 'JGS'",
    image: "fotos/Marroquineria/catalogo/cinturon-reversible-patina-ejecutiva-hebilla-jgs.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-reversible-patina-ejecutiva-hebilla-jgs.jpg"
    ],
    description: "Tratamiento de color degradado y brillo de espejo obtenido mediante frotado manual con ceras de carnauba. Su hebilla reversible lleva el grabado de autor 'JGS', reflejando el lujo sutil de la marroquinería europea.",
    specs: {
      material: "Cuero plena flor curtido vegetal con pátina frotada a mano",
      curtido: "Vegetal con anilinas naturales aplicadas con esponja",
      dimensiones: "Ancho: 35 mm | Tallas 30 a 44",
      herrajes: "Hebilla giratoria grabada en peltre brillante",
      forro: "Reverso de cuero negro azabache",
      personalizacion: "Grabado de iniciales en bajo relieve"
    },
    badge: "Pátina Atelier",
    features: ["Pátina artesanal con cera de carnauba", "Hebilla grabada de edición especial", "Reverso negro para trajes de gala"]
  },
  {
    id: "el-mq-cr-07",
    name: "Cinturón Textura Diamante Fibra de Carbono",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Modernidad geométrica con gofrado micro-diamante negro y hebilla gunmetal",
    image: "fotos/Marroquineria/catalogo/cinturon-textura-fibra-carbono-diamante-negro.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-textura-fibra-carbono-diamante-negro.jpg"
    ],
    description: "Inspirado en la textura técnica de la fibra de carbono y el corte diamante. Ideal para profesionales y amantes del diseño moderno que buscan romper la monotonía del cinturón liso tradicional sin perder elegancia.",
    specs: {
      material: "Cuero vacuno grabado diamante en bajo relieve",
      curtido: "Curtición vegetal de poro apretado",
      dimensiones: "Ancho: 35 mm | Ajustable a cualquier talla",
      herrajes: "Hebilla giratoria rectangular en acero grafito mate",
      forro: "Cuero liso negro de respaldo",
      personalizacion: "Grabado en solapa interior"
    },
    badge: "Línea Marroquinería",
    features: ["Patrón geométrico diamante", "Resistente al roce diario", "Hebilla en tono gunmetal grafito"]
  },
  {
    id: "el-mq-cr-08",
    name: "Cinturón Cuero Grabado Picado Trento Miel",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Grabado punteado en cuero tostado con hebilla de pasador grabada Trento Ciervo",
    image: "fotos/Marroquineria/catalogo/cinturon-cuero-grabado-picado-trento-miel.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-cuero-grabado-picado-trento-miel.jpg"
    ],
    description: "Textura táctil picada en cuero color miel cálido. Hebilla en tono plata envejecida que luce el grabado de la cornamenta del ciervo Trento, evocando la naturaleza y el patrimonio artesanal canadiense-colombiano.",
    specs: {
      material: "Cuero vacuno flor con picado decorativo y reverso encerado",
      curtido: "Vegetal en extracto de corteza de mimosa",
      dimensiones: "Ancho: 38 mm (Ancho casual/jean) | Tallas 30 a 44",
      herrajes: "Hebilla de un solo perno grabada con ciervo Trento",
      forro: "Cuero natural al tono",
      personalizacion: "Monograma grabado en la trabilla de cuero"
    },
    badge: "Línea Trento",
    features: ["Ancho casual de 38 mm para jeans o chinos", "Hebilla grabada con ciervo Trento", "Tacto rugoso de cuero picado"]
  },

  // -------------------------------------------------------------------------
  // CINTURONES ARTESANALES, CASUALES & DAMA
  // -------------------------------------------------------------------------
  {
    id: "el-mq-ca-02",
    name: "Cinturón Bicolor Miel con Franja Central Marrón",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Arquitectura multicapa en cuero tostado con inserción central marrón y pespunte visto",
    image: "fotos/Marroquineria/catalogo/cinturon-artesanal-bicolor-miel-franja-marron.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-artesanal-bicolor-miel-franja-marron.jpg"
    ],
    description: "Elaborado mediante la superposición y pespunteado de una franja central en cuero chocolate sobre una base de cuero miel tostado. Pasador de cuero con sutil grabado en relieve de alas y hebilla rectangular en peltre cepillado.",
    specs: {
      material: "Cuero vacuno en dos tonos: miel tostado y café chocolate",
      curtido: "Vegetal firme de talabartería",
      dimensiones: "Ancho: 38 mm | Talla personalizada",
      herrajes: "Hebilla clásica en peltre cepillado con pasador grabado",
      forro: "Cuero descarne natural suave",
      personalizacion: "Grabado en bajo relieve en el pasador"
    },
    badge: "Artesanal de Taller",
    features: ["Construcción multicapa bicolor", "Pasador con grabado de alas estilizadas", "Hebilla clásica rectangular en peltre"]
  },
  {
    id: "el-mq-ca-03",
    name: "Cinturón Trenzado Elástico con Punteras de Cuero 'EG'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Flexibilidad anatómica total en cordón trenzado chocolate con sello de autor Jorge Eliecer Gómez",
    image: "fotos/Marroquineria/catalogo/cinturon-trenzado-elastico-punteras-cuero-eg.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-trenzado-elastico-punteras-cuero-eg.jpg"
    ],
    description: "Comodidad sin precedentes que se adapta milimétricamente al movimiento del cuerpo sin necesidad de agujeros fijos. Terminado con puntera y pasador en cuero cognac con el monograma 'EG' grabado y hebilla pavonada satinada.",
    specs: {
      material: "Fibras elásticas trenzadas de alta densidad y cuero vacuno graso",
      curtido: "Punteras en cuero curtido vegetal",
      dimensiones: "Ancho: 35 mm | Longitud elástica autoajustable (S, M, L, XL)",
      herrajes: "Hebilla maciza de un perno pavonada oscura",
      forro: "Estructura transpirable trenzada",
      personalizacion: "Grabado de iniciales en la puntera de cuero"
    },
    badge: "Firma Jorge Eliecer Gómez",
    features: ["Ajuste milimétrico sin agujeros predefinidos", "Punteras de cuero con sello de autor EG", "Máximo confort en movimiento"]
  },
  {
    id: "el-mq-ca-04",
    name: "Cinturón Grabado Textura Reptil / Cocodrilo Café",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Presencia imponente en relieve exótico caimán con hebilla plateada rectangular",
    image: "fotos/Marroquineria/catalogo/cinturon-textura-reptil-cocodrilo-cafe.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-textura-reptil-cocodrilo-cafe.jpg"
    ],
    description: "Cuero vacuno moldeado en placa de grabado cocodrilo con realce en las crestas y tono marrón café profundo. Combina fuerza visual y elegancia masculina clásica con hebilla cromada de cantos pulidos.",
    specs: {
      material: "Cuero vacuno plena flor con grabado en calor textura reptil",
      curtido: "Vegetal estructurado",
      dimensiones: "Ancho: 35 mm | Tallas 30 a 44",
      herrajes: "Hebilla rectangular pulida en acabado cromado brillante",
      forro: "Cuero natural al tono con pespunte perimetral",
      personalizacion: "Monograma grabado en la punta interior"
    },
    badge: "Línea Marroquinería",
    features: ["Relieve de placas cocodrilo de alta definición", "Hebilla cromada pulida de alto brillo", "Estructura firme que no pierde rigidez"]
  },
  {
    id: "el-mq-ca-05",
    name: "Cinturón Fino de Dama Amarillo Mostaza con Hebilla Dorada",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Silueta estilizada de 20 mm en cuero suave tono mostaza con hebilla dorada curva",
    image: "fotos/Marroquineria/catalogo/cinturon-fino-dama-mostaza-hebilla-dorada.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-fino-dama-mostaza-hebilla-dorada.jpg"
    ],
    description: "El toque de luminosidad ideal para acentuar vestidos camiseros, blazers o pantalones de tiro alto. Confeccionado en cuero vacuno ultra flexible teñido en un cálido tono mostaza ocre con hebilla de baño dorado brillante de líneas orgánicas.",
    specs: {
      material: "Cuero vacuno flor flexible tono mostaza ocre",
      curtido: "Vegetal con anilinas naturales",
      dimensiones: "Ancho: 20 mm (Perfil fino para dama) | Tallas XS, S, M, L",
      herrajes: "Hebilla ovalada curva con baño dorado brillante",
      forro: "Cuero natural suave",
      personalizacion: "Grabado a fuego de iniciales en la puntera"
    },
    badge: "Colección Femenina",
    features: ["Ancho fino de 20 mm para cintura o cadera", "Hebilla dorada de silueta fluida", "Color mostaza cálido de tendencia"]
  },
  {
    id: "el-mq-ca-06",
    name: "Cinturón Fino de Dama Negro con Pespunte Camel & Hebilla Redonda",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Contraste refinado en cuero negro con pespunte camel y hebilla circular dorada",
    image: "fotos/Marroquineria/catalogo/cinturon-fino-dama-negro-pespunte-contraste.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-fino-dama-negro-pespunte-contraste.jpg"
    ],
    description: "Diseñado para convertirse en el básico de lujo de cualquier armario femenino. La costura en hilo camel sobre el cuero negro azabache resalta la precisión artesanal, complementada por una hebilla circular en latón dorado.",
    specs: {
      material: "Cuero vacuno suave negro azabache con hilo contrastante",
      curtido: "Vegetal botánico",
      dimensiones: "Ancho: 20 mm | Tallas XS, S, M, L a medida",
      herrajes: "Hebilla circular en latón dorado con perno fino",
      forro: "Cuero flor negro pulido",
      personalizacion: "Monograma en punta interior"
    },
    badge: "Colección Femenina",
    features: ["Hebilla circular dorada minimalista", "Pespunte perimetral en hilo camel", "Versatilidad día y noche"]
  },

  // -------------------------------------------------------------------------
  // BOLSOS, MORRALES 'LAUREN' & ESTUCHES DE AUTOR
  // -------------------------------------------------------------------------
  {
    id: "el-mq-bl-02",
    name: "Estuche Térmico Doble para Botellas en Cuero Cocodrilo & Miel",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Portabotellas dual con hombrera ergonómica y combinación cocodrilo negro y cuero miel",
    image: "fotos/Marroquineria/catalogo/estuche-doble-botellas-cuero-cocodrilo-negro-miel.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/estuche-doble-botellas-cuero-cocodrilo-negro-miel.jpg"
    ],
    description: "Para transportar con máxima seguridad y distinción dos botellas de cerveza artesanal, vino o destilados. Cuerpo estructurado en cuero grabado cocodrilo negro brillante, correa de hombro ajustable en cuero miel y hombrera anatómica con pespunte en hilo blanco.",
    specs: {
      material: "Cuero grabado cocodrilo negro y cuero graso miel",
      curtido: "Vegetal mixto para estructura y flexibilidad",
      dimensiones: "Capacidad para 2 botellas (Alto: 26 cm | Ancho: 19 cm | Fondo: 10 cm)",
      herrajes: "Remaches y pasadores en latón macizo",
      forro: "Aislamiento térmico interior acolchado",
      personalizacion: "Monograma grabado en la hombrera de cuero"
    },
    badge: "Línea Marroquinería",
    features: ["Capacidad dual para dos botellas", "Hombrera acolchada en cuero miel", "Interior con divisor protector"]
  },
  {
    id: "el-mq-bl-04",
    name: "Bolso Mochila Convertible 'Lauren' Verde Menta Pastel",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Versatilidad de hombro o espalda en cuero floter menta con mosquetón frontal dorado",
    image: "fotos/Marroquineria/catalogo/bolso-mochila-dama-menta-pastel-mosqueton-lauren.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/bolso-mochila-dama-menta-pastel-mosqueton-lauren.jpg"
    ],
    description: "Diseño convertible que pasa de bolso de hombro a mochila en un solo movimiento. Presenta un refrescante tono verde menta pastel en cuero floter graneado, cierre frontal de mosquetón dorado decorativo y las insignias de autor 'Lauren' y 'EG Marroquinería'.",
    specs: {
      material: "Cuero vacuno floter graneado tono verde menta pastel",
      curtido: "Vegetal botánico flexible",
      dimensiones: "Alto: 30 cm | Ancho: 25 cm | Fondo: 11 cm",
      herrajes: "Mosquetón de lujo y broches imantados con acabado oro brillante",
      forro: "Microfibra suave y compartimento interior con cremallera",
      personalizacion: "Grabado en la correa de hombro"
    },
    badge: "Línea LAUREN by EG",
    features: ["Convertible de bolso de hombro a mochila", "Mosquetón de cierre dorado de alta orfebrería", "Tonalidad menta pastel exclusiva"]
  },
  {
    id: "el-mq-bl-05",
    name: "Bolso Mochila Convertible 'Lauren' Azul Cielo Pastel",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Frescura y serenidad en cuero floter azul cielo con correa multiposición",
    image: "fotos/Marroquineria/catalogo/bolso-mochila-dama-azul-cielo-lauren-eg.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/bolso-mochila-dama-azul-cielo-lauren-eg.jpg"
    ],
    description: "Una silueta romántica y funcional en tono azul cielo claro. El cuero floter flexible entrega una caída suave y resistente al roce cotidiano, con herrajes dorados de joyería y acabados pulidos a mano.",
    specs: {
      material: "Cuero vacuno floter seleccionado tono azul cielo",
      curtido: "Vegetal ecológico",
      dimensiones: "Alto: 30 cm | Ancho: 25 cm | Fondo: 11 cm",
      herrajes: "Plaqueta dorada 'LAUREN' y argollas en latón brillante",
      forro: "Forro interior textil peinado antidesgarro",
      personalizacion: "Monograma grabado en solapa interior"
    },
    badge: "Línea LAUREN by EG",
    features: ["Tono azul cielo sereno y moderno", "Uso dual: mochila o bolso de mano", "Acabados de lujo garantizados de por vida"]
  },
  {
    id: "el-mq-01",
    name: "Billetera Verde de Doble Vista",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Diseño bifold exclusivo con doble vista en cuero vacuno suave",
    image: "fotos/Marroquineria/billetera-verde-doble-vista.webp",
    gallery: [
      "fotos/Marroquineria/billetera-verde-doble-vista.webp"
    ],
    description: "Confeccionada a mano en cuero suave de curtición vegetal con acabado verde olivo. Diseñada con arquitectura interior de doble vista para organizar billetes, documentos y tarjetas con la máxima elegancia sin abultar.",
    specs: {
      material: "Cuero vacuno flor suave tono verde olivo",
      curtido: "Vegetal botánico en fosa tradicional",
      dimensiones: "11.5 cm × 9 cm × 1.2 cm (Cerrada)",
      herrajes: "Construcción 100% cuero integral sin broches expuestos",
      forro: "Forro interior textil peinado de alta densidad",
      personalizacion: "Grabado de iniciales a fuego en solapa interior"
    },
    badge: "Línea Marroquinería",
    features: ["Doble vista organizadora", "Cuero flor verde olivo", "Perfil ultra delgado"]
  },
  {
    id: "el-mq-02",
    name: "Colección de Portapasaportes & Documentos 'Vuelo'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Seguridad y distinción artesanal en cada viaje internacional",
    image: "fotos/Marroquineria/coleccion-portapasaportes.webp",
    gallery: [
      "fotos/Marroquineria/coleccion-portapasaportes.webp"
    ],
    description: "Estuches protectores de pasaporte en variedad de tonos nobles. Aloja pasaportes, pases de abordar, tarjetas de crédito y documentos de viaje esenciales en un solo formato elegante.",
    specs: {
      material: "Cuero vacuno plena flor y semigraso encerado",
      curtido: "Vegetal libre de cromo",
      dimensiones: "14.5 cm × 10.5 cm × 0.8 cm",
      herrajes: "Cierre magnético invisible ultrafino",
      forro: "Textil satinado antidesgaste",
      personalizacion: "Monograma frontal y sello de coordenadas"
    },
    badge: "Línea Marroquinería",
    features: ["Apta para múltiples pasaportes", "Ranura para boletos de avión", "Monograma a fuego"]
  },
  {
    id: "el-mq-03",
    name: "Bolso Lateral & Canguro Hombre en Cuero Floter Miel",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Ergonomía urbana y porte masculino en cuero floter graneado miel",
    image: "fotos/Marroquineria/bolso-lateral-canguro-hombre-floter-miel.webp",
    gallery: [
      "fotos/Marroquineria/bolso-lateral-canguro-hombre-floter-miel.webp",
      "fotos/Marroquineria/bolso-lateral-canguro-hombre-floter-negro.webp"
    ],
    description: "Bolso cruzado de silueta contemporánea para hombre, confeccionado artesanalmente en cuero vacuno floter de tacto flexible y textura graneada. Equipado con correa graduable de alta resistencia y múltiples compartimentos con cremalleras de deslizamiento suave.",
    specs: {
      material: "Cuero vacuno floter plena flor tono miel natural",
      curtido: "Vegetal flexible con aceites nutricionales",
      dimensiones: "28 cm × 18 cm × 7 cm",
      herrajes: "Hebillas y pasadores en zamak níquel envejecido",
      forro: "Lona resinada impermeable de alto tráfico",
      personalizacion: "Grabado a fuego de iniciales en solapa frontal"
    },
    badge: "Línea Marroquinería",
    features: ["Cuero floter flexible y resistente", "Correa regulable ergonómica", "Compartimentos de fácil acceso"]
  },
  {
    id: "el-mq-04",
    name: "Bolso Lateral & Canguro Hombre en Cuero Floter Negro",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Sobriedad absoluta y funcionalidad diaria en cuero negro azabache",
    image: "fotos/Marroquineria/bolso-lateral-canguro-hombre-floter-negro.webp",
    gallery: [
      "fotos/Marroquineria/bolso-lateral-canguro-hombre-floter-negro.webp",
      "fotos/Marroquineria/bolso-lateral-canguro-hombre-floter-miel.webp"
    ],
    description: "Pieza ergonómica diseñada para llevar cruzada al pecho o a la espalda. El cuero floter negro brinda una presencia sobria y elegante, combinando comodidad y protección para pertenencias personales, billetera, smartphone y llaves.",
    specs: {
      material: "Cuero vacuno floter calibre 1.4 mm tono negro",
      curtido: "Vegetal botánico de bajo impacto ambiental",
      dimensiones: "28 cm × 18 cm × 7 cm",
      herrajes: "Cremalleras y argollas en acero pavonado oscuro",
      forro: "Textil antidesgarro de alta densidad",
      personalizacion: "Placa o bajo relieve de monograma artesanal"
    },
    badge: "Línea Marroquinería",
    features: ["Diseño anatómico al cuerpo", "Cremalleras reforzadas de uso continuo", "Acabado negro mate sobrio"]
  },
  {
    id: "el-mq-05",
    name: "Bandolera Crossbody Jeep Buluo en Cuero Floter Miel",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Estructura vertical refinada con solapa protectora para trabajo y ciudad",
    image: "fotos/Marroquineria/bolso-lateral-hombre-buluo-floter-miel.webp",
    gallery: [
      "fotos/Marroquineria/bolso-lateral-hombre-buluo-floter-miel.webp",
      "fotos/Marroquineria/bolso-lateral-hombre-buluo-floter-negro.webp"
    ],
    description: "Bolso vertical de arquitectura ejecutiva con solapa frontal de cierre magnético. Amplia capacidad interior ideal para tablet, libreta de notas, billetera y dispositivos, elaborada con cuero floter tono miel que resalta la textura viva del material.",
    specs: {
      material: "Cuero vacuno floter de tacto graso seleccionado",
      curtido: "Curtición mixta vegetal para flexibilidad y resistencia",
      dimensiones: "26 cm × 22 cm × 6.5 cm",
      herrajes: "Broches imantados ocultos y mosquetones giratorios",
      forro: "Forro interior satinado con divisor acolchado",
      personalizacion: "Monograma grabado en solapa de cuero"
    },
    badge: "Línea Marroquinería",
    features: ["Apto para tablets de hasta 11 pulgadas", "Solapa con broche magnético de precisión", "Correa tejida reforzada en cuero"]
  },
  {
    id: "el-mq-06",
    name: "Bandolera Crossbody Jeep Buluo en Cuero Floter Negro",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Distinción monocromática ejecutiva en cuero graneado profundo",
    image: "fotos/Marroquineria/bolso-lateral-hombre-buluo-floter-negro.webp",
    gallery: [
      "fotos/Marroquineria/bolso-lateral-hombre-buluo-floter-negro.webp",
      "fotos/Marroquineria/bolso-lateral-hombre-buluo-floter-miel.webp"
    ],
    description: "Versión en cuero negro integral de la bandolera ejecutiva. Un accesorio infalible para el profesional moderno que busca practicidad, ligereza y el porte inconfundible del cuero genuino hecho a mano.",
    specs: {
      material: "Cuero genuino flor graneada negra",
      curtido: "Vegetal al cromo de grano homogéneo",
      dimensiones: "26 cm × 22 cm × 6.5 cm",
      herrajes: "Herrajes gunmetal grafito mate",
      forro: "Microfibra resistente al roce continuo",
      personalizacion: "Grabado sutil al calor o foil plateado"
    },
    badge: "Línea Marroquinería",
    features: ["Acabado monocromático sobrio", "Múltiples bolsillos organizadores", "Diseño compacto de gran capacidad"]
  },
  {
    id: "el-mq-07",
    name: "Bolso Canguro Dama 'Panter' en Cuero Floter Negro",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Curvatura estilizada de alta marroquinería femenina para uso cruzado",
    image: "fotos/Marroquineria/bolso-canguro-dama-floter-negro-panter.webp",
    gallery: [
      "fotos/Marroquineria/bolso-canguro-dama-floter-negro-panter.webp",
      "fotos/Marroquineria/bolso-canguro-dama-rosado-panter.webp"
    ],
    description: "Diseño ergonómico femenino en forma de medialuna fluida. Confeccionado en cuero vacuno floter negro de alta sedosidad, con correa ajustable para llevar como riñonera de cintura o cruzada al pecho estilo bandolera de tendencia.",
    specs: {
      material: "Cuero vacuno suave floter premium",
      curtido: "Vegetal con acabado tacto mantequilla",
      dimensiones: "30 cm × 15 cm × 8 cm",
      herrajes: "Cremallera dorada de diente pulido y mosquetones de lujo",
      forro: "Forro textil jacquard suave",
      personalizacion: "Insignia o grabado de iniciales personalizadas"
    },
    badge: "Línea Marroquinería",
    features: ["Silueta medialuna contemporánea", "Uso dual: cruzado al pecho o a la cintura", "Cremallera metálica dorada de lujo"]
  },
  {
    id: "el-mq-08",
    name: "Bolso Canguro Dama 'Panter' en Cuero Rosado",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Sensibilidad cromática pastel con la nobleza del cuero natural",
    image: "fotos/Marroquineria/bolso-canguro-dama-rosado-panter.webp",
    gallery: [
      "fotos/Marroquineria/bolso-canguro-dama-rosado-panter.webp",
      "fotos/Marroquineria/bolso-canguro-dama-floter-negro-panter.webp"
    ],
    description: "Un acento suave y sofisticado en tono rosa palo. Combina la frescura del diseño moderno con la artesanía de taller colombiano, brindando un balance perfecto entre versatilidad cotidiana y elegancia distintiva.",
    specs: {
      material: "Cuero flor vacuno teñido en masa tono rosa pastel",
      curtido: "Vegetal respetuoso con el medio ambiente",
      dimensiones: "30 cm × 15 cm × 8 cm",
      herrajes: "Herrajes en latón dorado satinado",
      forro: "Textil suave tono marfil",
      personalizacion: "Monograma en bajo relieve sutil"
    },
    badge: "Línea Marroquinería",
    features: ["Color exclusivo rosa suave", "Textura flexible y liviana", "Correa ajustable para cualquier postura"]
  },
  {
    id: "el-mq-09",
    name: "Bolso Canguro Dama 'Camaleón' en Cuero Floter Negro",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Toque vanguardista con vivo destellante y cuero negro flexible",
    image: "fotos/Marroquineria/bolso-canguro-dama-floter-negro-camaleon.webp",
    gallery: [
      "fotos/Marroquineria/bolso-canguro-dama-floter-negro-camaleon.webp",
      "fotos/Marroquineria/bolso-canguro-dama-floter-negro-panter.webp"
    ],
    description: "Pieza audaz que integra acentos tornasol sobre una estructura de puro cuero floter negro. Ideal para eventos nocturnos, viajes o salidas donde se busca practicidad sin renunciar al brillo sofisticado.",
    specs: {
      material: "Cuero vacuno graneado con acentos reflectivos tornasol",
      curtido: "Vegetal enriquecido con ceras",
      dimensiones: "29 cm × 14.5 cm × 7.5 cm",
      herrajes: "Cierre metálico de alta seguridad",
      forro: "Interior en microfibra aterciopelada",
      personalizacion: "Grabado a fuego artesanal"
    },
    badge: "Línea Marroquinería",
    features: ["Detalles con destello sutil", "Ultraliviano y seguro", "Bolsillo trasero antirrobo con cremallera"]
  },
  {
    id: "el-mq-10",
    name: "Estuche Porta Vinos en Cuero 'Sommelier'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Protección y elegancia rígida para botellas de colección",
    image: "fotos/Marroquineria/porta-vinos-1.webp",
    gallery: [
      "fotos/Marroquineria/porta-vinos-1.webp",
      "fotos/Marroquineria/porta-vinos-2.webp"
    ],
    description: "Confección cilíndrica de alta firmeza en cuero de gran calibre para transportar y obsequiar botellas de vino o destilados selectos. Cuenta con asa reforzada para un agarre cómodo y seguro.",
    specs: {
      material: "Cuero macizo de montura curtido vegetal",
      curtido: "Vegetal tradicional a la cera",
      dimensiones: "Alto: 36 cm | Diámetro: 9.5 cm",
      herrajes: "Hebilla y remaches en latón macizo cepillado",
      forro: "Gamuza natural absorbente de impactos",
      personalizacion: "Grabado de logotipo corporativo o nombre del coleccionista"
    },
    badge: "Línea Marroquinería",
    features: ["Estructura rígida antigolpes", "Asa de transporte en cuero macizo", "Ideal para regalo corporativo"]
  },
  {
    id: "el-mq-11",
    name: "Estuche Porta Vinos en Cuero Cognac Bison",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Textura rústica y cálida de cuero graso para botellas de gran reserva",
    image: "fotos/Marroquineria/bolso-vino-cuero-cognac-bison.webp",
    gallery: [
      "fotos/Marroquineria/bolso-vino-cuero-cognac-bison.webp",
      "fotos/Marroquineria/bolso-vino-broche-cuero-reptil.webp"
    ],
    description: "Estuche individual para botella en cuero graso tono cognac con textura tipo bisonte. Confeccionado con asa anatómica reforzada y costuras en hilo encerado grueso para resistir el peso y proteger la botella con estilo atemporal.",
    specs: {
      material: "Cuero semigraso vacuno textura bisonte",
      curtido: "Curtido al aceite vegetal natural",
      dimensiones: "Alto: 38 cm | Ancho: 10 cm",
      herrajes: "Remaches macizos en latón",
      forro: "Cuero descarne natural amortiguador",
      personalizacion: "Placa o grabado térmico de bodega o iniciales"
    },
    badge: "Línea Marroquinería",
    features: ["Cuero graso con pátina envolvente", "Asa de transporte integrada", "Protección térmica y física para vinos"]
  },
  {
    id: "el-mq-12",
    name: "Estuche Porta Vinos en Cuero Folia Camelei & Oro",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Edición de gala con acabado metalizado folia para regalos de distinción",
    image: "fotos/Marroquineria/bolso-vino-cuero-folia-camelei.webp",
    gallery: [
      "fotos/Marroquineria/bolso-vino-cuero-folia-camelei.webp",
      "fotos/Marroquineria/bolso-vino-cuero-folia-rojo-reptil.webp"
    ],
    description: "Una obra de arte para obsequios corporativos y celebraciones de gala. Cuero vacuno tratado con película metalizada folia dorada camelei que refleja la luz con gran suntuosidad, manteniendo la flexibilidad y consistencia del cuero legítimo.",
    specs: {
      material: "Cuero vacuno flor con tratamiento folia metalizada",
      curtido: "Vegetal de alta resistencia",
      dimensiones: "Alto: 37 cm | Diámetro base: 9.5 cm",
      herrajes: "Pespuntes finos en hilo de seda encerada",
      forro: "Reverso afelpado protector de etiquetas",
      personalizacion: "Cuño conmemorativo o logo corporativo"
    },
    badge: "Línea Marroquinería",
    features: ["Acabado folia brillante exclusivo", "Ideal para regalos y eventos corporativos", "Ajuste perfecto a botellas de 750 ml"]
  },
  {
    id: "el-mq-13",
    name: "Estuche Porta Vinos en Cuero Folia Rojo Reptil",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Fusión de grabado exótico y tonalidad rubí profunda de colección",
    image: "fotos/Marroquineria/bolso-vino-cuero-folia-rojo-reptil.webp",
    gallery: [
      "fotos/Marroquineria/bolso-vino-cuero-folia-rojo-reptil.webp",
      "fotos/Marroquineria/bolso-vino-broche-cuero-reptil.webp"
    ],
    description: "Intensidad visual y tacto tridimensional. El grabado tipo reptil con fondo rojizo y brillo controlado otorga una personalidad imponente, transformando cualquier botella en un regalo inolvidable.",
    specs: {
      material: "Cuero vacuno grabado en bajo relieve reptil con folia",
      curtido: "Curtido vegetal estructurado",
      dimensiones: "Alto: 38 cm | Diámetro base: 9.5 cm",
      herrajes: "Herrajes y remaches en bronce viejo",
      forro: "Gamuza natural protectora",
      personalizacion: "Monograma grabado en solapa de cierre"
    },
    badge: "Línea Marroquinería",
    features: ["Textura en relieve de alta definición", "Color rojo rubí elegante", "Estructura firme antigolpes"]
  },
  {
    id: "el-mq-14",
    name: "Estuche Porta Vinos Cuero Broche & Grabado Reptil",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Seguridad reforzada con broche metálico superior y textura reptiliana",
    image: "fotos/Marroquineria/bolso-vino-broche-cuero-reptil.webp",
    gallery: [
      "fotos/Marroquineria/bolso-vino-broche-cuero-reptil.webp",
      "fotos/Marroquineria/bolso-vino-cuero-folia-rojo-reptil.webp"
    ],
    description: "Diseñado para brindar el más alto nivel de seguridad al cuello de la botella. Incorpora un broche metálico superior con trabilla en cuero texturizado para sujetar firmemente botellas de diversas alturas.",
    specs: {
      material: "Cuero flor grabado patrón reptil",
      curtido: "Vegetal tradicional en fosa",
      dimensiones: "Alto: 39 cm | Diámetro base: 10 cm",
      herrajes: "Broche de presión en latón macizo",
      forro: "Cuero natural gamuzado",
      personalizacion: "Grabado a fuego de nombre en tira de broche"
    },
    badge: "Línea Marroquinería",
    features: ["Broche metálico de sujeción al cuello", "Textura reptil sobria", "Asa de agarre ergonómica"]
  },
  {
    id: "el-mq-15",
    name: "Estuche Porta Vinos Cuero Perforación Láser 'Martín'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Diseño calado de vanguardia tecnológica sobre cuero artesanal",
    image: "fotos/Marroquineria/bolso-vino-perforacion-laser-martin.webp",
    gallery: [
      "fotos/Marroquineria/bolso-vino-perforacion-laser-martin.webp",
      "fotos/Marroquineria/bolso-vino-menta-dulce-floter.webp"
    ],
    description: "Vanguardia técnica que une el corte láser con la marroquinería clásica. La celosía geométrica perforada permite apreciar la silueta y etiqueta de la botella mientras aporta ligereza y un estilo contemporáneo único.",
    specs: {
      material: "Cuero vacuno curtido firme de 2 mm",
      curtido: "Vegetal con corte de precisión láser",
      dimensiones: "Alto: 36 cm | Diámetro base: 9.5 cm",
      herrajes: "Costura de punto de talabartero con hilo encerado",
      forro: "Estructura de cuero abierto sin forro textil",
      personalizacion: "Corte láser de monograma o iniciales"
    },
    badge: "Línea Marroquinería",
    features: ["Patrón calado geométrico láser", "Visualización de etiqueta de botella", "Ultra transpirable y liviano"]
  },
  {
    id: "el-mq-16",
    name: "Estuche Porta Vinos en Cuero Menta Dulce",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Frescura botánica y modernidad en cuero floter tono menta pastel",
    image: "fotos/Marroquineria/bolso-vino-menta-dulce-floter.webp",
    gallery: [
      "fotos/Marroquineria/bolso-vino-menta-dulce-floter.webp"
    ],
    description: "Una propuesta fresca y luminosa para vinos blancos, rosados y espumosos. Elaborado en cuero floter suave en tono menta dulce con costuras precisas y cantos redondeados bruñidos a mano.",
    specs: {
      material: "Cuero floter liso y graneado tono menta",
      curtido: "Vegetal ecológico",
      dimensiones: "Alto: 37 cm | Diámetro base: 9.5 cm",
      herrajes: "Remaches y arandelas cromadas",
      forro: "Interior al tono en cuero suave",
      personalizacion: "Bajo relieve sutil con iniciales"
    },
    badge: "Línea Marroquinería",
    features: ["Color pastel contemporáneo", "Acabado suave de fácil limpieza", "Estructura cilíndrica protectora"]
  },
  {
    id: "el-mq-17",
    name: "Colección Llaveros en Cuero Graso & Doble Hebilla",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Talabartería en miniatura con herrajes macizos y cuero curtido al aceite",
    image: "fotos/Marroquineria/llavero-cuero-graso-doble-hebilla.webp",
    gallery: [
      "fotos/Marroquineria/llavero-cuero-graso-doble-hebilla.webp",
      "fotos/Marroquineria/llavero-cuero-graso-cafe-doble-pasador.webp",
      "fotos/Marroquineria/llavero-en-cuero-con-platina.webp"
    ],
    description: "Llaveros artesanales elaborados con retal selecto de cueros grasos de alto calibre. Cuentan con pasadores cosidos a mano, doble hebilla de sujeción y argollas de acero forjado para acompañar tus llaves toda la vida.",
    specs: {
      material: "Cuero graso vacuno 2.5 mm café y chocolate",
      curtido: "Vegetal al aceite tradicional",
      dimensiones: "12 cm × 2.8 cm",
      herrajes: "Hebillas dobles en acero y bronce macizo",
      forro: "Cuero macizo integral sin forros sintéticos",
      personalizacion: "Grabado de iniciales en tira de cuero"
    },
    badge: "Línea Marroquinería",
    features: ["Cuero graso que mejora con el uso", "Herrajes de doble hebilla maciza", "Argolla forjada de alta tenacidad"]
  },
  {
    id: "el-mq-18",
    name: "Llaveros Artesanales Cuero Miel Tejido a Mano",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Trenzado a mano y costuras ornamentales con la máxima calidez de taller",
    image: "fotos/Marroquineria/llavero-cuero-miel-tejido-a-mano.webp",
    gallery: [
      "fotos/Marroquineria/llavero-cuero-miel-tejido-a-mano.webp",
      "fotos/Marroquineria/llavero-cuero-miel-lujo-costura.webp",
      "fotos/Marroquineria/llavero-cuero-miel-graso-pasador.webp"
    ],
    description: "Piezas de orfebrería talabartera. Presentan trenzado manual en tiras de cuero miel encerado, terminaciones con pasadores en cuero natural y mosquetones de liberación rápida.",
    specs: {
      material: "Cuero vacuno suave teñido vegetal miel",
      curtido: "Vegetal botánico en tanino natural",
      dimensiones: "14 cm × 2.5 cm",
      herrajes: "Mosquetón giratorio y argolla reforzada",
      forro: "Estructura 100% trenzado de cuero",
      personalizacion: "Grabado a calor en pasador de cierre"
    },
    badge: "Línea Marroquinería",
    features: ["Trenzado artesanal minucioso", "Cuero miel suave y brillante", "Mosquetón resistente de liberación rápida"]
  },
  {
    id: "el-mq-19",
    name: "Set de Accesorios de Cuero Artesanal",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Conjunto coordinado de piezas indispensables de taller",
    image: "fotos/Marroquineria/set-accesorios-artesanal.webp",
    gallery: [
      "fotos/Marroquineria/set-accesorios-artesanal.webp"
    ],
    description: "Set exclusivo de marroquinería que reúne tarjetero biselado, llavero con mosquetón y organizador compacto. Cada pieza es pulida a mano con cera natural de abejas.",
    specs: {
      material: "Cuero vacuno flor curtición 100% vegetal",
      curtido: "Extracto de quebracho y mimosa",
      dimensiones: "Set multi-pieza en caja de presentación",
      herrajes: "Mosquetón y aros en aleación bronce mate",
      forro: "Estructura 100% cuero integral",
      personalizacion: "Iniciales grabadas en cada pieza del set"
    },
    badge: "Línea Marroquinería",
    features: ["Set multi-pieza coordinado", "Bordes bruñidos al fuego", "Empaque especial de taller"]
  },
  {
    id: "el-mq-20",
    name: "Set de Carteras & Equipaje de Viaje",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Equipaje de mano y bolsos marroquineros de alta costura",
    image: "fotos/Marroquineria/set-carteras-viaje.webp",
    gallery: [
      "fotos/Marroquineria/set-carteras-viaje.webp"
    ],
    description: "Diseño versátil para viajes cortos y traslados de negocios. Confeccionado en cuero vacuno con grano sobrio, asas estructurales acolchadas y costuras reforzadas de alta tenacidad.",
    specs: {
      material: "Cuero vacuno grano entero seleccionado",
      curtido: "Vegetal flexible con acentos al aceite",
      dimensiones: "Dimensiones ajustadas a estándar cabina de avión",
      herrajes: "Cremalleras YKK macizas con tiradores de cuero",
      forro: "Lona resinada de alta durabilidad",
      personalizacion: "Tag de viaje grabado y monograma frontal"
    },
    badge: "Línea Marroquinería",
    features: ["Amplia capacidad de almacenamiento", "Asas ergonómicas acolchadas", "Tag de viaje incluido"]
  },
  {
    id: "el-mq-21",
    name: "Alfombra de Piel de Vaca 'Blanco & Negro'",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Piel natural seleccionada con patrón bicolor sobrio y elegante",
    image: "fotos/Marroquineria/alfombra-vaca-blanco-negro.webp",
    gallery: [
      "fotos/Marroquineria/alfombra-vaca-blanco-negro.webp",
      "fotos/Marroquineria/alfombra-vaca-moteada.webp"
    ],
    description: "Pieza de acento para interiores de diseño. Piel vacuna 100% natural curtida al cromo y vegetal para mantener la suavidad original del pelo y garantizar nula pérdida de pelaje.",
    specs: {
      material: "Piel de vaca natural plena flor con pelaje",
      curtido: "Curtición especializada para peletería de alta gama",
      dimensiones: "Aprox. 2.00 m × 1.80 m (Medidas según silueta natural)",
      herrajes: "Sin elementos metálicos",
      forro: "Reverso de cuero natural afelpado antideslizante",
      personalizacion: "Sello de autenticidad impreso a fuego en el reverso"
    },
    badge: "Línea Marroquinería",
    features: ["100% Piel vacuna natural", "Pelaje suave y brillante", "Pieza única irrepetible"]
  },
  {
    id: "el-mq-22",
    name: "Alfombra de Piel de Vaca Moteada",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Acento de lujo orgánico con patrón moteado natural de colección",
    image: "fotos/Marroquineria/alfombra-vaca-moteada.webp",
    gallery: [
      "fotos/Marroquineria/alfombra-vaca-moteada.webp",
      "fotos/Marroquineria/alfombra-vaca-blanco-negro.webp"
    ],
    description: "Alfombra en piel de vaca natural con moteado característico de altos matices. Tratada artesanalmente con aceites nutricionales para conservar el brillo y la textura impecable durante años.",
    specs: {
      material: "Piel de vaca seleccionada a mano",
      curtido: "Conservación peletera ecológica",
      dimensiones: "Aprox. 2.10 m × 1.90 m",
      herrajes: "Sin partes metálicas",
      forro: "Cuero vacuno natural al reverso",
      personalizacion: "Certificado de pieza única y marca a fuego"
    },
    badge: "Línea Marroquinería",
    features: ["Patrón orgánico exclusivo", "Resistente al tráfico liviano", "Fácil mantenimiento"]
  },
  {
    id: "el-pr-ca-01",
    name: "Cinturón Pelo Natural de Vaca (Hair-on-Hide) con Ribete Cognac",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Exclusiva pieza de autor en piel natural con pelo, ribeteada a mano y hebilla forrada",
    image: "fotos/Marroquineria/catalogo/cinturon-pelo-natural-vaca-vaqueta-cognac.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/cinturon-pelo-natural-vaca-vaqueta-cognac.jpg"
    ],
    description: "Una auténtica joya talabartera. Confeccionado con pelo natural vacuno en patrón blanco y negro, enmarcado con ribete continuo en cuero vaqueta cognac y costura vista en hilo crudo. La hebilla está completamente forrada y cosida a mano en el mismo cuero noble.",
    specs: {
      material: "Piel natural de vaca con pelaje auténtico y cuero vaqueta cognac",
      curtido: "Curtición peletera fina y curtido vegetal en los ribetes",
      dimensiones: "Ancho: 35 mm | Longitud a medida del cliente",
      herrajes: "Hebilla maciza forrada a mano con cuero natural y perno metálico",
      forro: "Reverso de cuero vacuno suave libre de fricción",
      personalizacion: "Grabado de iniciales en la puntera de cuero"
    },
    badge: "Pieza Única de Autor",
    features: ["100% Pelo natural de vaca auténtico", "Hebilla forrada a mano en cuero cognac", "Ribete perimetral con costura artesanal"]
  },
  {
    id: "el-pr-bl-01",
    name: "Portabotellas de Lujo Baileys — Sello EG Marroquinería",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Vaqueta rústica miel con asa troquelada y sello térmico grabado de autor",
    image: "fotos/Marroquineria/catalogo/portabotellas-cuero-baileys-eg-marroquineria.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/portabotellas-cuero-baileys-eg-marroquineria.jpg"
    ],
    description: "Elegante funda cilíndrica de autor para botellas de crema irlandesa, licores finos o botellas de vino de 750 ml a 1 litro. Confeccionada en cuero vaqueta tono miel tostado con asa de transporte troquelada y el sello de garantía de maestro marroquinero 'EG Marroquinería'.",
    specs: {
      material: "Cuero vaqueta macizo de 2.2 mm de calibre tono miel",
      curtido: "Vegetal al tanino natural con ceras protectoras",
      dimensiones: "Alto: 38 cm | Diámetro base: 10 cm (Capacidad botella estándar)",
      herrajes: "Costuras de talabartería reforzadas en la base",
      forro: "Reverso de cuero natural absorbente de condensación",
      personalizacion: "Grabado térmico con logo de empresa o nombre del agasajado"
    },
    badge: "Edición Especial de Autor",
    features: ["Asa ergonómica troquelada", "Sello de taller EG Marroquinería grabado", "Ideal para regalo corporativo exclusivo"]
  },
  {
    id: "el-pr-bl-03",
    name: "Morral Ejecutivo de Dama en Cuero Nude 'Lauren' — EG Marroquinería",
    line: "marroquineria",
    lineName: "Línea Marroquinería",
    lineLogo: LINE_LOGOS.marroquineria,
    tagline: "Mochila de alta marroquinería en cuero arena con placa dorada Lauren y sello de autor EG",
    image: "fotos/Marroquineria/catalogo/morral-ejecutivo-dama-cuero-nude-lauren-eg.jpg",
    gallery: [
      "fotos/Marroquineria/catalogo/morral-ejecutivo-dama-cuero-nude-lauren-eg.jpg"
    ],
    description: "La perfecta conjunción entre la elegancia femenina y la funcionalidad ejecutiva. Confeccionada en cuero vacuno suave tono nude arena, con solapa amplia adornada con el monograma de taller 'EG Marroquinería', placa dorada pulida 'LAUREN', manija superior y correas de hombro regulables.",
    specs: {
      material: "Cuero vacuno suave plena flor tono nude / café claro",
      curtido: "Vegetal libre de cromo con tacto mantequilla",
      dimensiones: 'Alto: 34 cm | Ancho: 28 cm | Fondo: 12 cm (Apta para tablet o laptop 13 pulg)',
      herrajes: "Placa metálica con baño de oro pulido y mosquetones dorados",
      forro: "Textil satinado jacquard tono marfil con bolsillos organizadores",
      personalizacion: "Placa interna personalizada con nombre"
    },
    badge: "Línea LAUREN by EG",
    features: ["Espacio para tablet o laptop pequeña", "Placa dorada pulida Lauren", "Correas ergonómicas ajustables"]
  },

  // =========================================================================
  // 4. LÍNEA PREMIUM (Fotos reales de taller)
  // =========================================================================
  {
    id: "el-pm-01",
    name: "Bota Rivera en Cuero & Ante Café — Suela EVA Tractor",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Bota de alta gama combinando cuero Rivera y caña en ante café sobre suela EVA tractor",
    image: "fotos/Premium/bota-cuero-rivera-ante-cafe-suela-eva-tractor.jpg",
    gallery: [
      "fotos/Premium/bota-cuero-rivera-ante-cafe-suela-eva-tractor.jpg"
    ],
    description: "Imponente bota de autor con diseño de inspiración militar y acabados de lujo. La puntera y talonera en cuero Rivera en tono café tostado contrastan con la caña de ante sedoso. Montada sobre suela EVA tipo tractor de agarre supremo y peso mínimo.",
    specs: {
      material: "Cuero vacuno Rivera seleccionado y auténtico ante de textura afelpada",
      curtido: "Vegetal de grano entero con encerado manual",
      suela: "EVA Tractor dentada ultraligera con vira artesanal cosida",
      forro: "Badana completa térmica y transpirable",
      personalizacion: "Grabado de iniciales en el tirador o caña"
    },
    badge: "Edición Premium",
    features: ["Combinación de cuero Rivera y ante fino", "Suela EVA Tractor todoterreno", "Cosido de montura reforzado"]
  },
  {
    id: "el-pm-02",
    name: "Bota Atelier Difuminada Miel & Coñac — Suela Cuero Grupón",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Expresión suprema de pátina manual con degradé miel a coñac y suela de cuero grupón macizo",
    image: "fotos/Premium/botas-cuero-difuminado-miel-conac-suela-grupon.jpg",
    gallery: [
      "fotos/Premium/botas-cuero-difuminado-miel-conac-suela-grupon.jpg"
    ],
    description: "Obra maestra de talabartería y zapatería artesanal. El cuero curtido vegetal recibe múltiples capas de tinte aplicadas a mano hasta lograr una pátina que transita del miel dorado al coñac oscuro. Suela maciza de cuero grupón de calibre grueso con cantos encerados.",
    specs: {
      material: "Cuero vacuno flor grueso curtido vegetal",
      curtido: "Al tanino vegetal con pátina veneciana difuminada a mano",
      suela: "Cuero grupón macizo con tacón ensamblado en láminas de cuero",
      forro: "Badana de primera selección",
      personalizacion: "Grabado a fuego de monograma en el arco de la suela o caña"
    },
    badge: "Pieza de Autor",
    features: ["Pátina artesanal única e irrepetible", "Suela de cuero grupón de por vida", "Construcción tradicional de alta gama"]
  },
  {
    id: "el-pm-03",
    name: "Zapato Cuero Crosta Miel & Marrón — Suela EVA España",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Cuero Crosta noble con tintura bitono miel-marrón sobre liviana suela EVA importada España",
    image: "fotos/Premium/zapato-cuero-crosta-miel-marron-suela-eva-espana.jpg",
    gallery: [
      "fotos/Premium/zapato-cuero-crosta-miel-marron-suela-eva-espana.jpg"
    ],
    description: "Zapato artesanal elaborado sobre base de cuero Crosta de absorción profunda, teñido a mano en una armonía bitono miel y marrón café. La suela de formulación EVA importada de España otorga una ligereza incomparable.",
    specs: {
      material: "Cuero Crosta vacuno permeable a tinturas exclusivas",
      curtido: "Vegetal receptivo a pátinas de autor",
      suela: "EVA España de celda cerrada y ultra bajo peso",
      forro: "Badana natural con plantilla anatómica forrada",
      personalizacion: "Monograma grabado a calor en lengüeta"
    },
    badge: "Edición Premium",
    features: ["Cuero Crosta con tintura bitono manual", "Suela EVA importada de España", "Extrema ligereza y flexibilidad"]
  },
  {
    id: "el-pm-04",
    name: "Zapato Sevillano en Cuero Crosta Miel Difuminado",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Corte sevillano de gala en cuero crosta con difuminado dorado miel de acabado veneciano",
    image: "fotos/Premium/zapato-cuero-crosta-sevillano-miel-difuminado.jpg",
    gallery: [
      "fotos/Premium/zapato-cuero-crosta-sevillano-miel-difuminado.jpg"
    ],
    description: "Elegancia aristocrática en un corte sevillano estilizado. La piel Crosta es tratada con bálsamos y ceras de carnaúba para lograr un brillo profundo con efecto sombreado en cantos y puntera.",
    specs: {
      material: "Cuero Crosta de piel vacuna seleccionada a mano",
      curtido: "Curtición vegetal fina pulida al cepillo de crin",
      suela: "Suela de zapatería artesanal con vira perfilada",
      forro: "Badana fina color natural",
      personalizacion: "Iniciales grabadas en bajo relieve en la plantilla"
    },
    badge: "Línea Premium",
    features: ["Corte sevillano de líneas puras", "Difuminado dorado miel veneciano", "Acabado brillante con ceras naturales"]
  },
  {
    id: "el-pm-05",
    name: "Zapato Oxford Crosta Verde Esmeralda & Ante — Suela EVA Italiana",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Distinción de autor en cuero crosta teñido verde profundo con laterales de ante y suela EVA italiana",
    image: "fotos/Premium/zapato-cuero-crosta-verde-ante-suela-eva-italiana.jpg",
    gallery: [
      "fotos/Premium/zapato-cuero-crosta-verde-ante-suela-eva-italiana.jpg"
    ],
    description: "Una de las piezas más emblemáticas del taller. La atrevida y refinada tonalidad verde esmeralda sobre cuero Crosta se equilibra con inserciones laterales de ante suave y una suela EVA italiana esculpida.",
    specs: {
      material: "Cuero Crosta teñido al alcohol en verde esmeralda y ante fino",
      curtido: "Vegetal noble con aceites nutritivos",
      suela: "EVA Italiana ergonómica de perfil vanguardista",
      forro: "Badana vacuno con talonera acolchada",
      personalizacion: "Grabado de iniciales en la pala o talón"
    },
    badge: "Pieza de Autor",
    features: ["Tinte verde esmeralda exclusivo de taller", "Combinación textural con ante genuino", "Suela EVA Italiana de confort superior"]
  },
  {
    id: "el-pm-06",
    name: "Zapato Híbrido Gamuza & Napa Café — Suela Timberland",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Exquisita textura combinada de gamuza ante café con detalles en cuero napa y suela Timberland",
    image: "fotos/Premium/zapato-cuero-gamuza-ante-cafe-napa-suela-timberland.jpg",
    gallery: [
      "fotos/Premium/zapato-cuero-gamuza-ante-cafe-napa-suela-timberland.jpg"
    ],
    description: "Fusión de texturas nobles: la calidez de la gamuza ante café y la resistencia lisa del cuero Napa en cuello y puntera. Suela dentada tipo Timberland que entrega adherencia total sobre cualquier superficie.",
    specs: {
      material: "Gamuza / ante vacuno café chocolate y cuero Napa liso",
      curtido: "Curtido mixto flexible con tratamiento hidrófugo",
      suela: "Suela de caucho dentado estilo Timberland antideslizante",
      forro: "Badana completa transpirable",
      personalizacion: "Monograma grabado en la talonera"
    },
    badge: "Línea Premium",
    features: ["Contraste sensorial de gamuza y cuero napa", "Suela dentada Timberland de alta tracción", "Construcción reforzada en puntos de esfuerzo"]
  },
  {
    id: "el-pm-07",
    name: "Zapato Blucher Crosta Azul Rey Difuminado — Suela EVA Martin",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Coloración artística azul rey con sombras perimetrales sobre suela EVA Martin ultraliviana",
    image: "fotos/Premium/cuero-crosta-azul-difuminado-rey-suela-eva-martin.jpg",
    gallery: [
      "fotos/Premium/cuero-crosta-azul-difuminado-rey-suela-eva-martin.jpg"
    ],
    description: "Una declaración de estilo y audacia sartorial. Cuero Crosta teñido a mano en un vibrante tono azul rey con sombras difuminadas hacia los cantos. Montado sobre la exclusiva suela EVA Martin que ofrece ligereza extrema y pisada silenciosa.",
    specs: {
      material: "Cuero vacuno Crosta seleccionado para coloración especial",
      curtido: "Vegetal de tacto firme y pátina de alta definición",
      suela: "EVA Martin ultraligera y flexible",
      forro: "Cuero badana natural libre de cromo",
      personalizacion: "Grabado personalizado en lengüeta o plantilla"
    },
    badge: "Edición Especial",
    features: ["Pátina azul rey con sombras difuminadas", "Suela EVA Martin de máxima absorción", "Corte Blucher contemporáneo"]
  },
  {
    id: "el-pm-08",
    name: "Zapato Oxford Crosta Miel & Coñac Difuminado",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Pátina degradé miel tostado a coñac oscuro con picado brogue fino de alta costura",
    image: "fotos/Premium/cuero-crosta-miel-conac-difuminado.jpg",
    gallery: [
      "fotos/Premium/cuero-crosta-miel-conac-difuminado.jpg"
    ],
    description: "El clasicismo elevado al arte zapatero. Confección artesanal en cuero Crosta con perforado brogue milimétrico y un degradado de color que funde el miel cálido en la pala con el coñac profundo en la puntera y talón.",
    specs: {
      material: "Cuero Crosta plena flor de máxima pureza",
      curtido: "Curtido vegetal al tanino enriquecido con aceites botánicos",
      suela: "Suela artesanal con camellón reforzado y cantos pulidos a mano",
      forro: "Forro integral en badana suave",
      personalizacion: "Grabado de iniciales en la vira interna o plantilla"
    },
    badge: "Línea Premium",
    features: ["Picado brogue artesanal de precisión", "Difuminado continuo miel a coñac", "Lustre espejo aplicado a mano"]
  },
  {
    id: "el-pm-09",
    name: "Zapato Casual Cuero Encerado Azul Petróleo — Suela Timberland",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Cuero engrasado y encerado en tono azul profundo con suela dentada Timberland de máxima tracción",
    image: "fotos/Premium/zapato-cuero-encerado-azul-suela-timberland.jpg",
    gallery: [
      "fotos/Premium/zapato-cuero-encerado-azul-suela-timberland.jpg"
    ],
    description: "Resistente, sobrio y distintivo. El cuero vacuno encerado en tono azul petróleo repele la humedad y gana belleza con el uso. Su base de caucho dentada Timberland ofrece tracción insuperable en asfalto húmedo o adoquines.",
    specs: {
      material: "Cuero vacuno hidrófugo encerado en caliente",
      curtido: "Curtición grasa resistente al agua y polvo",
      suela: "Caucho vulcanizado tipo Timberland dentado",
      forro: "Badana y textil transpirable",
      personalizacion: "Monograma en bajorrelieve en la lengüeta"
    },
    badge: "Línea Premium",
    features: ["Cuero encerado azul impermeable", "Suela dentada Timberland para todo clima", "Costuras perimetrales reforzadas"]
  },
  {
    id: "el-pm-10",
    name: "Zapato Sneaker Atelier Cuero Napolitano Blanco — Suela Timberland",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Pureza y elegancia italiana en cuero napolitano blanco inmaculado montado sobre suela Timberland",
    image: "fotos/Premium/zapato-cuero-napolitano-blanco-suela-timberland.jpg",
    gallery: [
      "fotos/Premium/zapato-cuero-napolitano-blanco-suela-timberland.jpg"
    ],
    description: "El lujo minimalista en su máxima expresión. Confeccionado en cuero Napolitano de suavidad extrema en un blanco nítido y radiante, montado sobre una sólida base dentada Timberland en contraste que le otorga presencia y firmeza.",
    specs: {
      material: "Cuero vacuno Napolitano extra suave acabado blanco puro",
      curtido: "Vegetal refinado con película protectora antimanchas",
      suela: "Base Timberland de alto agarre y confort",
      forro: "Cuero badana ultra-suave acolchado",
      personalizacion: "Grabado sutil de iniciales en talón o plantilla"
    },
    badge: "Línea Premium",
    features: ["Cuero Napolitano blanco inmaculado", "Protección contra manchas y polvo", "Suela Timberland de contraste audaz"]
  },
  {
    id: "el-pm-11",
    name: "Zapato en Cuero & Gamuza Fumo — Suela Timberland",
    line: "premium",
    lineName: "Línea Premium",
    lineLogo: LINE_LOGOS.premium,
    tagline: "Tonalidad humo (fumo) en suave gamuza de alta gama combinada con suela robusta Timberland",
    image: "fotos/Premium/zapatos-cuero-gamuza-fumo-suela-timberland.jpg",
    gallery: [
      "fotos/Premium/zapatos-cuero-gamuza-fumo-suela-timberland.jpg"
    ],
    description: "Un zapato exclusivo en gamuza de primera selección en el sofisticado tono 'fumo' (gris humo / ceniza profundo). La riqueza de su textura aterciopelada contrasta armoniosamente con la suela Timberland, creando una pieza de gran carácter y confort.",
    specs: {
      material: "Piel de ante / gamuza vacuno de grano fino tono fumo",
      curtido: "Curtido flexible aterciopelado con sellador",
      suela: "Timberland de caucho termoplástico de máxima tracción",
      forro: "Badana transpirable acolchada",
      personalizacion: "Iniciales grabadas en lengüeta"
    },
    badge: "Línea Premium",
    features: ["Gamuza tono 'fumo' de textura excepcional", "Suela Timberland de pisada firme", "Interior acolchado para alto confort"]
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
