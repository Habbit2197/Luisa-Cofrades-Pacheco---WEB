# Gabinete de Psicología - Luisa Cofrades Pacheco

Sitio web oficial y plataforma digital de última generación desarrollada para el gabinete de psicología clínica y psicoterapia de **Luisa Cofrades Pacheco** (Salamanca y Zamora).

Migrado desde WordPress hacia una arquitectura **Jamstack** ultrarrápida, segura y optimizada para SEO médico y conversión de pacientes.

---

## 🚀 Tecnologías

- **[Astro](https://astro.build/)**: Framework web con arquitectura basada en islas (cero JavaScript innecesario).
- **[Tailwind CSS](https://tailwindcss.com/)**: Diseño visual ergonómico con paleta terapéutica (Salvia y tonos arena).
- **[Framer Motion](https://www.framer.com/motion/)**: Micro-animaciones fluidas de entrada en el Hero interactivo.
- **[Cloudflare Pages](https://pages.cloudflare.com/)**: Infraestructura y entrega global Edge CDN (sub-35ms TTFB, coste 0€/mes).
- **[Plus Jakarta Sans](https://fontsource.org/fonts/plus-jakarta-sans)**: Tipografía moderna autohospedada 100% conforme a RGPD.

---

## 📁 Estructura del Proyecto

```text
├── public/
│   ├── assets/              # Identidad visual, fotografías clínicas y guías PDF (EMDR)
│   ├── _headers             # Cabeceras HTTP de seguridad (HSTS, CSP, caché)
│   ├── _routes.json         # Rutas de bypass para CDN en Cloudflare Pages
│   └── robots.txt           # Indexación de motores de búsqueda
├── src/
│   ├── components/
│   │   ├── HeroMotion.tsx   # Animación escalonada interactiva
│   │   ├── HeroSection.astro# Sección principal de bienvenida
│   │   ├── ServicesGrid.astro# Catálogo de terapias y especialidades
│   │   ├── Testimonials.astro# Muro minimalista de vivencias de pacientes
│   │   └── Footer.astro     # Sedes, contacto y acreditaciones sanitarias
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML, SEO Open Graph y Schema.org JSON-LD
│   └── pages/
│       └── index.astro      # Página principal completa
├── scraper.js               # Script de extracción automatizado de WordPress
├── data.json                # Datos catalogados extraídos de la web original
├── astro.config.mjs         # Configuración del compilador Astro
├── tailwind.config.mjs      # Paleta de colores personalizada
└── wrangler.toml            # Configuración de despliegue en Cloudflare Pages
```

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción (directorio dist/)
npm run build

# Previsualizar en local con el emulador Edge de Cloudflare (Wrangler)
npm run preview

# Desplegar en Cloudflare Pages vía terminal
npm run deploy
```

---

## 🏥 Acreditaciones y Contacto

- **Titular:** Luisa Cofrades Pacheco
- **Especialidades:** Terapia EMDR (Asociación EMDR España), Terapia Sensoriomotriz, Trauma y Duelo.
- **Sedes:** 
  - Salamanca: Calle del Prior 5-7, 1º B (37002)
  - Zamora: Roelos de Sayago
- **Teléfono de cita previa:** [+34 675 80 99 74](tel:+34675809974)
- **Web Oficial:** [luisacofrades.com](https://luisacofrades.com)
