// Helpers y tipos de configuración dinámica para luisacofrades.com

async function getWorkersEnv(): Promise<any> {
  try {
    // @ts-ignore
    const cf = await import('cloudflare:workers');
    return cf?.env || null;
  } catch {
    return null;
  }
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  collegiateNumber?: string;
  healthRegistry?: string;
  bio: string;
  photoUrl: string;
  tags?: string[];
  citaLink?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  badge?: string;
  icon?: string;
  pdfUrl?: string;
}

export interface TarifItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  tag?: string;
  modality?: string;
  description: string;
  highlight?: boolean;
}

export interface SiteConfig {
  banner: {
    active: boolean;
    message: string;
    linkText?: string;
    linkUrl?: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    badge: string;
    registryNotice: string;
    ctaText: string;
    ctaLink: string;
    ctaSecondaryText: string;
    ctaSecondaryLink: string;
    phoneText: string;
    imageUrl: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    luisaName: string;
    luisaRole: string;
    luisaRegNotice: string;
    luisaBio1: string;
    luisaBio2: string;
    luisaBadges: string[];
    centroBadge: string;
    centroTitle: string;
    centroSubtitle: string;
    quienesSomosTitle: string;
    quienesSomosText: string;
    formacionTitle: string;
    formacionText: string;
    supervisionTitle: string;
    supervisionText: string;
  };
  team: TeamMember[];
  servicios: ServiceItem[];
  tarifas: {
    badge: string;
    title: string;
    titleHighlight: string;
    durationNotice: string;
    subtitle: string;
    items: TarifItem[];
  };
  citaYContacto: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bookingStepsDescription: string;
    questionnaireTitle: string;
    questionnaireDesc: string;
    questionnaireQuote: string;
    questionnaireUrl: string;
    availabilityTitle: string;
    availabilityNotice: string;
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappMessage: string;
    email: string;
    address: string;
    addressDetails: string;
    schedule: string;
    cancellationPolicy: string;
    mapsUrl: string;
    fachadaTitle: string;
    fachadaText: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  images: {
    hero: string;
    luisaProfile: string;
    banner: string;
    banner2: string;
    fachada: string;
    logo: string;
  };
  // Compatibilidad hacia atrás
  tarifs?: {
    individual: string;
    pareja: string;
    isabel: string;
    ingles: string;
    supervision: string;
  };
  bookingSteps?: {
    description: string;
  };
}

export const DEFAULT_CONFIG: SiteConfig = {
  banner: {
    active: false,
    message: '',
    linkText: '',
    linkUrl: ''
  },
  hero: {
    title: 'Psicología para vivir',
    titleHighlight: 'centro de Luisa Cofrades',
    subtitle: '¿Cómo podemos ayudarte? Equipo especializado en trauma y experiencias adversas con consulta en Salamanca Centro y atención online. Mirada sistémica, humanista e integrativa.',
    badge: 'Psicóloga Sanitaria Colegiada · Especialista en EMDR y Trauma',
    registryNotice: 'Centro Sanitario Reconocido Junta CyL · N.º 37-C22-0544 · Col. BI05747 (COP)',
    ctaText: 'Solicitar primera consulta',
    ctaLink: '#contacto',
    ctaSecondaryText: 'Ver tarifas',
    ctaSecondaryLink: '#tarifas',
    phoneText: '675 80 99 74',
    imageUrl: '/assets/media/tacita.jpeg'
  },
  about: {
    title: 'Sobre',
    titleHighlight: 'mí',
    subtitle: 'Acompañamiento clínico integral con una mirada sistémica, humanista e integrativa, rigor científico y calidez humana en cada proceso terapéutico.',
    luisaName: 'Luisa Cofrades Pacheco',
    luisaRole: 'Especialista EuroPsy en Psicoterapia · Psicóloga Sanitaria Colegiada N.º BI05747 (COP)',
    luisaRegNotice: 'Centro Sanitario Reconocido Junta de Castilla y León · N.º 37-C22-0544',
    luisaBio1: 'Entiendo la psicoterapia como un encuentro profundamente humano y seguro. Un lugar de calma y confidencialidad donde detener el ritmo acelerado del día a día, respirar y ser escuchado con respeto, sin juicios ni etiquetas.',
    luisaBio2: 'Desarrollo mi intervención clínica desde una mirada sistémica, humanista e integrativa, aunando el rigor neurofisiológico de la Terapia EMDR con el cuidado del vínculo terapéutico. Pionera en Salamanca en la aplicación de la Caja de Arena (Sand Play) para niños y adultos con trauma complejo.',
    luisaBadges: [
      'Colegiada N.º BI05747 (COP)',
      'Reg. Sanitario CyL: 37-C22-0544',
      'Especialista EuroPsy',
      'Asociación EMDR España',
      'Docente colaboradora Máster USAL'
    ],
    centroBadge: 'El Centro · Psicología para Vivir',
    centroTitle: 'Un espacio seguro de calma, rigor y crecimiento',
    centroSubtitle: 'Equipo especializado en trauma y experiencias adversas con consulta presencial en Salamanca y atención terapéutica online.',
    quienesSomosTitle: '¿Quiénes Somos? y Espacio Terapéutico',
    quienesSomosText: 'Psicología para vivir es un espacio seguro, diseñado para que te sientas en calma desde el primer momento. Somos un equipo especializado en trauma y experiencias adversas, liderado por Luisa Cofrades. Integramos diferentes corrientes para ofrecerte un tratamiento a medida, siempre desde el rigor científico y la calidez humana.',
    formacionTitle: 'Formación y Educación',
    formacionText: 'Impartimos formación especializada para grupos y empresas en áreas clave como buenos hábitos, resolución de conflictos, motivación, prevención de adicciones, escuela de padres y comunicación. Adaptamos nuestros talleres para aportar herramientas prácticas y transformadoras.',
    supervisionTitle: 'Supervisión Clínica',
    supervisionText: 'Ofrecemos espacios de supervisión para otros profesionales de la psicología. Un acompañamiento clínico riguroso para analizar casos, resolver bloqueos terapéuticos y seguir creciendo en la práctica profesional con la mirada puesta en el abordaje del trauma.'
  },
  team: [
    {
      id: 'mari-paz',
      name: 'Mari Paz Palau Urbón',
      role: 'Psicóloga General Sanitaria · N.º Col. CL-05542',
      collegiateNumber: 'CL-05542',
      healthRegistry: '',
      bio: 'Psicóloga General Sanitaria. Licenciada en Psicología por la Universidad Pontificia de Salamanca. Terapeuta EMDR y amplia experiencia en terapia cognitivo-conductual. Creo en una psicología cercana y humana, en la que cada persona pueda encontrar un espacio seguro donde sentirse escuchada, comprendida y acompañada. Por eso, quiero ofrecerte un lugar en el que puedas parar, conectar contigo, dar espacio a lo que sientes y, sobre todo, aprender a cuidarte. Un espacio para ti, a tu ritmo.',
      photoUrl: '/assets/media/paz_urbon.jpeg',
      tags: ['Terapeuta EMDR', 'Licenciada UPSA', 'Terapia Cognitivo-Conductual'],
      citaLink: '#contacto'
    },
    {
      id: 'alba-rodriguez',
      name: 'Alba Rodríguez Marcos',
      role: 'Psicóloga General Sanitaria · N.º Col. CL-05594',
      collegiateNumber: 'CL-05594',
      healthRegistry: '',
      bio: 'Soy graduada en psicología por la Universidad Pontificia de Salamanca. Cuento con una experiencia en terapia familiar, individual e infantil. A lo largo de mi trayectoria también he acompañado a personas y familias que conviven con enfermedades degenerativas y demencias y con sus dificultades en el día a día. Pienso que acompañar empieza por la escucha y el respeto, ayudando a cada persona a comprender y gestionar aquello que le genera incomodidad. Mi objetivo es ofrecer un espacio seguro, sin juicios y lleno de magia, donde los adultos, las familias y los más pequeños puedan sentirse escuchados, comprendidos y acompañados. Cada paso juntos nos ayuda a crecer.',
      photoUrl: '/assets/media/alba.jpeg',
      tags: ['Graduada UPSA', 'Terapia Familiar e Infantil', 'Acompañamiento y Demencias'],
      citaLink: '#contacto'
    }
  ],
  servicios: [
    {
      id: 'emdr',
      title: 'Terapia EMDR',
      tagline: 'Trauma y Bloqueos',
      desc: 'Método psicoterapéutico avalado por la OMS para reprocesar experiencias traumáticas, duelos no resueltos, fobias y recuerdos dolorosos enquistados.',
      badge: 'Acreditada OMS',
      icon: 'brain',
      pdfUrl: '/assets/documentos/quecc81-es-emdr.pdf'
    },
    {
      id: 'sand-play-therapy',
      title: 'Sand Play Therapy (Caja de Arena)',
      tagline: 'Terapia Simbólica y Trauma',
      desc: 'Método psicoterapéutico proyectivo y no verbal que facilita el procesamiento de experiencias complejas y trauma emocional mediante miniaturas simbólicas en bandeja de arena.',
      badge: 'Pionera Salamanca',
      icon: 'box'
    },
    {
      id: 'ansiedad-panico',
      title: 'Ansiedad y Ataques de Pánico',
      tagline: 'Regulación Somática',
      desc: 'Comprensión del sistema de alerta corporal, reestructuración cognitiva y herramientas de autorregulación somática para desactivar la hiperactivación y el miedo.',
      badge: 'Frecuente',
      icon: 'activity'
    },
    {
      id: 'familiar',
      title: 'Psicoterapia familiar sistémica',
      tagline: 'Vínculos Familiares',
      desc: 'Con este enfoque se entiende a la familia como un sistema interconectado, donde lo que le sucede a un miembro afecta a todos los demás.',
      badge: 'Enfoque Sistémico',
      icon: 'sparkles'
    },
    {
      id: 'adultos-pareja',
      title: 'Psicoterapia de Adultos y Pareja',
      tagline: 'Relaciones y Vínculos',
      desc: 'Acompañamiento en momentos de incertidumbre, crisis de relación, rupturas dolorosas, problemas de comunicación y reconexión afectiva genuina.',
      badge: 'Afectiva',
      icon: 'users'
    },
    {
      id: 'autoestima-duelo',
      title: 'Autoestima, Duelo y Resiliencia',
      tagline: 'Autoconcepto y Sanación',
      desc: 'Sanar pérdidas significativas, trascender la autocrítica destructiva y consolidar un diálogo interno compasivo, firme y constructivo.',
      badge: 'Resiliencia',
      icon: 'heart'
    },
    {
      id: 'neuropsicologia',
      title: 'Neuropsicología: Evaluación y Neurorehabilitación',
      tagline: 'Daño Cerebral y Memoria',
      desc: 'Evaluación neuropsicológica de memoria, atención, lenguaje y funciones ejecutivas. Intervención mediante programas individualizados de neurorehabilitación y estimulación. Atención especializada a daño cerebral, deterioro mental y enfermedades neurodegenerativas para favorecer la autonomía y calidad de vida.',
      badge: 'Nueva Área',
      icon: 'brain'
    },
    {
      id: 'peritajes',
      title: 'Peritajes Psico-Jurídicos',
      tagline: 'Evaluación Forense Oficial',
      desc: 'Informes y peritajes psicológicos rigurosos con ratificación judicial en juzgados y en el Tribunal Superior de Justicia de Castilla y León.',
      badge: 'Judicial TSJ',
      icon: 'scale'
    }
  ],
  tarifas: {
    badge: 'Claridad y Transparencia',
    title: 'Tarifas y',
    titleHighlight: 'Honorarios de Consulta',
    durationNotice: 'Todas las sesiones duran 50 minutos',
    subtitle: 'Precios claros para cada modalidad de acompañamiento, sin cuotas ocultas ni compromisos de permanencia.',
    items: [
      {
        id: 'individual',
        name: 'Sesión individual',
        price: '75 €',
        duration: '50 minutos',
        tag: 'Individual',
        modality: 'Presencial en Salamanca u Online',
        description: 'Intervención psicoterapéutica individualizada para adultos, adolescentes, trauma (EMDR), duelo y regulación emocional.',
        highlight: false
      },
      {
        id: 'pareja',
        name: 'Sesión de pareja',
        price: '90 €',
        duration: '50 minutos',
        tag: 'Relaciones y Vínculos',
        modality: 'Presencial o por videoconsulta',
        description: 'Espacio neutral y mediador para abordar crisis de relación, comunicación no violenta, rupturas y reconexión afectiva.',
        highlight: true
      },
      {
        id: 'isabel',
        name: 'Sesión con Isabel',
        price: '90 €',
        duration: '50 minutos',
        tag: 'Equipo Clínico',
        modality: 'Atención clínica personalizada',
        description: 'Atención psicoterapéutica especializada y cercana con Isabel, orientada a tus necesidades y objetivos terapéuticos.',
        highlight: false
      },
      {
        id: 'ingles',
        name: 'Sesión en inglés',
        price: '85 €',
        duration: '50 minutos',
        tag: 'English Therapy',
        modality: 'In-person in Salamanca or Online',
        description: 'Psicoterapia individual en inglés para pacientes internacionales o personas que prefieran expresarse en lengua inglesa.',
        highlight: false
      },
      {
        id: 'supervision',
        name: 'Supervisión',
        price: '100 €',
        duration: '50 minutos',
        tag: 'Profesionales',
        modality: 'Para psicólogos y terapeutas',
        description: 'Supervisión de casos clínicos para profesionales de la psicología, abordaje del trauma, apego y orientación terapéutica integradora.',
        highlight: false
      }
    ]
  },
  citaYContacto: {
    badge: 'Proceso de Acogida',
    title: 'Pasos obligatorios para coordinar tu cita',
    titleHighlight: 'tu cita',
    subtitle: 'La consulta presencial se ubica en la Calle del Prior, número 5-7, 1º B (Salamanca). Las sesiones tienen una duración de 50 minutos. En la primera sesión se evalúa el caso clínico y se establecen los objetivos.',
    bookingStepsDescription: 'La consulta presencial se ubica en la Calle del Prior, número 5-7, 1º B (Salamanca). Las sesiones tienen una duración de 50 minutos (75 €). En la primera sesión se evalúa el caso clínico y se establecen los objetivos terapéuticos.',
    questionnaireTitle: 'Rellenar cuestionario previo',
    questionnaireDesc: 'Antes de iniciar el proceso, te invitamos a completar este formulario confidencial de acogida.',
    questionnaireQuote: 'Para agilizar temas de facturación y aprovechar al máximo el tiempo de sesión.',
    questionnaireUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSchCicLOpw2Lt_aJ6FGr4VvUC5wAxPSjW_PoVJtpWAE_4jkMg/viewform',
    availabilityTitle: 'Disponibilidad horaria',
    availabilityNotice: 'Indica si tu disponibilidad es de mañanas, tardes o flexible. En función de esto y tu motivo de consulta se te asignará el profesional que mejor pueda responder a tu demanda.',
    phone: '+34675809974',
    phoneFormatted: '+34 675 80 99 74',
    whatsapp: '34675809974',
    whatsappMessage: 'Hola, me gustaría solicitar información para concertar una cita. Mi disponibilidad es: ',
    email: 'info@luisacofrades.com',
    address: 'Calle del Prior 5-7, 1º B · 37002 Salamanca',
    addressDetails: 'Centro Sanitario Reconocido Junta CyL: 37-C22-0544',
    schedule: 'Lunes a Viernes de 9:00 a 20:00 (Con cita previa)',
    cancellationPolicy: 'Política de cancelaciones: Cualquier cancelación o cambio de cita debe comunicarse con al menos 24 horas de antelación. En caso contrario, se abonará el importe íntegro de la sesión.',
    mapsUrl: 'https://maps.app.goo.gl/StfS44aCLH8NWewG6',
    fachadaTitle: 'Identifica nuestra cristalera al llegar',
    fachadaText: 'Nuestra entrada cuenta con la cristalera corporativa con motivos florales en Calle del Prior 5-7, 1º B (Salamanca), junto a la Plaza Mayor. Un acceso discreto, accesible y diseñado para tu comodidad y privacidad.'
  },
  seo: {
    metaTitle: 'Psicología para vivir centro de Luisa Cofrades.',
    metaDescription: '¿Cómo podemos ayudarte? Equipo especializado en trauma y experiencias adversas con consulta en Salamanca y atención online.'
  },
  images: {
    hero: '/assets/media/tacita.jpeg',
    luisaProfile: '/assets/media/luisa_sinperro.jpeg',
    banner: '/assets/media/Luisa_Banner.jpeg',
    banner2: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=80',
    fachada: '/assets/media/logo_flores.jpg',
    logo: '/assets/branding/cropped-logo-simbolo404x.png'
  },
  tarifs: {
    individual: '75 €',
    pareja: '90 €',
    isabel: '90 €',
    ingles: '85 €',
    supervision: '100 €'
  },
  bookingSteps: {
    description: 'La consulta presencial se ubica en la Calle del Prior, número 5-7, 1º B (Salamanca). Las sesiones tienen una duración de 50 minutos (75 €). En la primera sesión se evalúa el caso clínico y se establecen los objetivos terapéuticos.'
  }
};

/**
 * Obtiene la configuración del sitio desde el KV LUISA_CONFIG bajo la clave 'site_config'.
 * Realiza un deep merge seguro con DEFAULT_CONFIG para garantizar cero caídas.
 */
export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const cfEnv = await getWorkersEnv();
    const kv = cfEnv?.LUISA_CONFIG;
    if (!kv || typeof kv.get !== 'function') {
      return DEFAULT_CONFIG;
    }

    const raw = await kv.get('site_config');
    if (!raw) {
      return DEFAULT_CONFIG;
    }

    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (!parsed || typeof parsed !== 'object') {
      return DEFAULT_CONFIG;
    }

    // Merge profundo y seguro
    return {
      banner: {
        ...DEFAULT_CONFIG.banner,
        ...(parsed.banner || {})
      },
      hero: {
        ...DEFAULT_CONFIG.hero,
        ...(parsed.hero || {})
      },
      about: {
        ...DEFAULT_CONFIG.about,
        ...(parsed.about || {})
      },
      team: Array.isArray(parsed.team) && parsed.team.length > 0 ? parsed.team : DEFAULT_CONFIG.team,
      servicios: Array.isArray(parsed.servicios) && parsed.servicios.length > 0 ? parsed.servicios : DEFAULT_CONFIG.servicios,
      tarifas: {
        ...DEFAULT_CONFIG.tarifas,
        ...(parsed.tarifas || {}),
        items: Array.isArray(parsed.tarifas?.items) && parsed.tarifas.items.length > 0
          ? parsed.tarifas.items
          : DEFAULT_CONFIG.tarifas.items
      },
      citaYContacto: {
        ...DEFAULT_CONFIG.citaYContacto,
        ...(parsed.citaYContacto || {})
      },
      seo: {
        ...DEFAULT_CONFIG.seo,
        ...(parsed.seo || {})
      },
      images: {
        ...DEFAULT_CONFIG.images,
        ...(parsed.images || {})
      },
      // Sincronización de retrocompatibilidad
      tarifs: {
        ...DEFAULT_CONFIG.tarifs,
        ...(parsed.tarifs || {})
      },
      bookingSteps: {
        ...DEFAULT_CONFIG.bookingSteps,
        ...(parsed.bookingSteps || {})
      }
    };
  } catch (err) {
    console.error('Error al recuperar site_config de Cloudflare KV:', err);
    return DEFAULT_CONFIG;
  }
}

/**
 * Guarda la configuración completa del sitio en el KV LUISA_CONFIG.
 */
export async function saveSiteConfig(newConfig: Partial<SiteConfig>): Promise<SiteConfig> {
  const current = await getSiteConfig();
  
  const merged: SiteConfig = {
    banner: {
      ...current.banner,
      ...(newConfig.banner || {})
    },
    hero: {
      ...current.hero,
      ...(newConfig.hero || {})
    },
    about: {
      ...current.about,
      ...(newConfig.about || {})
    },
    team: Array.isArray(newConfig.team) ? newConfig.team : current.team,
    servicios: Array.isArray(newConfig.servicios) ? newConfig.servicios : current.servicios,
    tarifas: {
      ...current.tarifas,
      ...(newConfig.tarifas || {}),
      items: Array.isArray(newConfig.tarifas?.items) ? newConfig.tarifas.items : current.tarifas.items
    },
    citaYContacto: {
      ...current.citaYContacto,
      ...(newConfig.citaYContacto || {})
    },
    seo: {
      ...current.seo,
      ...(newConfig.seo || {})
    },
    images: {
      ...current.images,
      ...(newConfig.images || {})
    },
    tarifs: {
      ...current.tarifs,
      ...(newConfig.tarifs || {})
    },
    bookingSteps: {
      ...current.bookingSteps,
      ...(newConfig.bookingSteps || {})
    }
  };

  const cfEnv = await getWorkersEnv();
  const kv = cfEnv?.LUISA_CONFIG;
  if (!kv || typeof kv.put !== 'function') {
    throw new Error('KV LUISA_CONFIG no disponible en el runtime para persistir los cambios.');
  }

  await kv.put('site_config', JSON.stringify(merged));
  return merged;
}

/**
 * Restaura la configuración a los valores por defecto (DEFAULT_CONFIG).
 */
export async function resetSiteConfig(): Promise<SiteConfig> {
  const cfEnv = await getWorkersEnv();
  const kv = cfEnv?.LUISA_CONFIG;
  if (!kv || typeof kv.put !== 'function') {
    throw new Error('KV LUISA_CONFIG no disponible en el runtime para restaurar los cambios.');
  }

  await kv.put('site_config', JSON.stringify(DEFAULT_CONFIG));
  return DEFAULT_CONFIG;
}
