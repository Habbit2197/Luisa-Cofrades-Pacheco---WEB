export interface SiteConfig {
  banner: {
    active: boolean;
    message: string;
    linkText?: string;
    linkUrl?: string;
  };
  tarifs: {
    individual: string;
    pareja: string;
    isabel: string;
    ingles: string;
    supervision: string;
  };
  hero: {
    subtitle: string;
    badge?: string;
  };
  bookingSteps: {
    description: string;
  };
  images: {
    hero: string;
    luisaProfile: string;
    banner: string;
  };
}

export const DEFAULT_CONFIG: SiteConfig = {
  banner: {
    active: false,
    message: '',
    linkText: '',
    linkUrl: ''
  },
  tarifs: {
    individual: '75 €',
    pareja: '90 €',
    isabel: '90 €',
    ingles: '85 €',
    supervision: '100 €'
  },
  hero: {
    subtitle: '¿Cómo podemos ayudarte? Equipo especializado en trauma y experiencias adversas con consulta en Salamanca Centro y atención online. Mirada sistémica, humanista e integrativa.',
    badge: 'Psicóloga Sanitaria Colegiada · Especialista en EMDR y Trauma'
  },
  bookingSteps: {
    description: 'La consulta presencial se ubica en la Calle del Prior, número 5-7, 1º B (Salamanca). Las sesiones tienen una duración de 50 minutos (75 €). En la primera sesión se evalúa el caso clínico y se establecen los objetivos terapéuticos.'
  },
  images: {
    hero: '/assets/media/tacita.jpeg',
    luisaProfile: '/assets/media/luisa_sinperro.jpeg',
    banner: '/assets/media/Luisa_Banner.jpeg'
  }
};

/**
 * Obtiene el entorno de Cloudflare de forma resiliente tanto en Worker runtime,
 * Astro locals, como en modo dev o fallback.
 */
export async function getCloudflareEnv(runtime?: any): Promise<any> {
  if (runtime?.env) return runtime.env;
  if (runtime?.LUISA_CONFIG) return runtime;
  try {
    const cf = await import('cloudflare:workers');
    if (cf?.env) return cf.env;
  } catch {
    // Fuera de workerd runtime
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env;
  }
  return null;
}

/**
 * Obtiene la configuración del sitio desde el KV LUISA_CONFIG bajo la clave 'site_config'.
 * Si el KV no existe o está vacío, devuelve DEFAULT_CONFIG garantizando cero caídas.
 */
export async function getSiteConfig(runtime?: any): Promise<SiteConfig> {
  try {
    const env = await getCloudflareEnv(runtime);
    const kv = env?.LUISA_CONFIG;
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

    return {
      ...DEFAULT_CONFIG,
      ...parsed,
      banner: {
        ...DEFAULT_CONFIG.banner,
        ...(parsed.banner || {})
      },
      tarifs: {
        ...DEFAULT_CONFIG.tarifs,
        ...(parsed.tarifs || {})
      },
      hero: {
        ...DEFAULT_CONFIG.hero,
        ...(parsed.hero || {})
      },
      bookingSteps: {
        ...DEFAULT_CONFIG.bookingSteps,
        ...(parsed.bookingSteps || {})
      },
      images: {
        ...DEFAULT_CONFIG.images,
        ...(parsed.images || {})
      }
    };
  } catch (err) {
    console.error('Error al recuperar site_config de Cloudflare KV:', err);
    return DEFAULT_CONFIG;
  }
}

/**
 * Guarda la configuración del sitio en el KV LUISA_CONFIG bajo la clave 'site_config'.
 */
export async function saveSiteConfig(newConfig: Partial<SiteConfig>, runtime?: any): Promise<SiteConfig> {
  const current = await getSiteConfig(runtime);
  const merged: SiteConfig = {
    ...current,
    ...newConfig,
    banner: {
      ...current.banner,
      ...(newConfig.banner || {})
    },
    tarifs: {
      ...current.tarifs,
      ...(newConfig.tarifs || {})
    },
    hero: {
      ...current.hero,
      ...(newConfig.hero || {})
    },
    bookingSteps: {
      ...current.bookingSteps,
      ...(newConfig.bookingSteps || {})
    },
    images: {
      ...current.images,
      ...(newConfig.images || {})
    }
  };

  const env = await getCloudflareEnv(runtime);
  const kv = env?.LUISA_CONFIG;
  if (!kv || typeof kv.put !== 'function') {
    throw new Error('KV LUISA_CONFIG no disponible en el runtime para persistir los cambios.');
  }

  await kv.put('site_config', JSON.stringify(merged));
  return merged;
}
