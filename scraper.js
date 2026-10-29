import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://luisacofrades.com';
const WP_API_PAGES = 'https://public-api.wordpress.com/wp/v2/sites/luisacofrades.com/pages?per_page=100';
const WP_API_POSTS = 'https://public-api.wordpress.com/wp/v2/sites/luisacofrades.com/posts?per_page=100';
const ASSETS_DIR = path.join(__dirname, 'assets');
const OUTPUT_FILE = path.join(__dirname, 'data.json');

const client = axios.create({
  timeout: 20000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
  }
});

// Helper para limpiar textos HTML
function cleanHtml(rawHtml) {
  if (!rawHtml) return '';
  const $ = cheerio.load(rawHtml);
  return $('body').text().replace(/\s+/g, ' ').trim();
}

// Helper para descargar archivos binarios
async function downloadAsset(fileUrl, subfolder = '') {
  try {
    if (!fileUrl || !fileUrl.startsWith('http')) return null;
    const urlObj = new URL(fileUrl);
    let filename = path.basename(urlObj.pathname);
    
    // Normalizar nombre de archivo si contiene caracteres raros
    filename = decodeURIComponent(filename).replace(/[^a-zA-Z0-9._-]/g, '_');
    if (!filename || filename === '_') {
      filename = `asset_${Date.now()}`;
    }

    const targetDir = subfolder ? path.join(ASSETS_DIR, subfolder) : ASSETS_DIR;
    await fs.ensureDir(targetDir);
    const targetPath = path.join(targetDir, filename);

    if (await fs.pathExists(targetPath)) {
      return path.relative(__dirname, targetPath);
    }

    const response = await client.get(fileUrl, { responseType: 'arraybuffer' });
    await fs.writeFile(targetPath, response.data);
    console.log(`[Descargado]: ${filename}`);
    return path.relative(__dirname, targetPath);
  } catch (err) {
    console.warn(`[Aviso descarga]: No se pudo descargar ${fileUrl} (${err.message})`);
    return null;
  }
}

async function runScraper() {
  console.log('==================================================');
  console.log(' INICIANDO FASE 1: EXTRACCIÓN Y SCRAPING DE DATOS');
  console.log(` Objetivo: ${BASE_URL}`);
  console.log('==================================================\n');

  await fs.ensureDir(ASSETS_DIR);

  const finalData = {
    metadata: {
      siteName: "Luisa Cofrades Pacheco",
      tagline: "Psicología para vivir",
      extractedAt: new Date().toISOString(),
      sourceUrl: BASE_URL,
      wpApiVersion: "wp/v2"
    },
    contacto: {
      titular: "Luisa Cofrades Pacheco",
      profesion: "Psicóloga General Sanitaria y Psicoterapeuta",
      telefono: "+34 675 80 99 74",
      telefonoLimpio: "34675809974",
      email: "contacto@luisacofrades.com",
      ubicaciones: [
        {
          sede: "Salamanca",
          direccion: "Calle del Prior 5-7, 1º B",
          codigoPostal: "37002",
          ciudad: "Salamanca",
          mapsUrl: "https://maps.app.goo.gl/StfS44aCLH8NWewG6"
        },
        {
          sede: "Zamora",
          direccion: "Roelos de Sayago",
          provincia: "Zamora",
          mapsUrl: "http://goo.gl/Mr6WuY"
        }
      ],
      redesSociales: {
        twitter: "https://twitter.com/LCofrades",
        telegram: "https://luisacofrades.com/donde-encontrarme/?share=telegram"
      }
    },
    branding: {
      logo: null,
      banner: null,
      icon: null
    },
    sobreMi: {
      titulo: "",
      subtitulo: "Psicología para vivir",
      perfil: "",
      acreditaciones: [
        "Psicóloga Sanitaria Acreditada",
        "Psicóloga y psicoterapeuta",
        "Especialista en EMDR (Miembro de la Asociación EMDR España)",
        "Especialista en Terapia Sensoriomotriz",
        "Perito judicial psicológico acreditada en los juzgados y en el Tribunal Superior de Justicia de Castilla y León",
        "Docente externa del Máster en Psicología General Sanitaria de la Universidad de Salamanca"
      ],
      trayectoria: ""
    },
    servicios: [],
    documentos: [],
    posts: [],
    imagenes: []
  };

  const detectedImages = new Set();
  const detectedDocs = new Set();

  // 1. Scraping HTML de la Home con Cheerio para Capturar Branding y Menús
  console.log('1. Analizando página principal (Home) vía Cheerio...');
  try {
    const homeResponse = await client.get(BASE_URL);
    const $home = cheerio.load(homeResponse.data);

    // Extraer Logo
    const logoImg = $home('img.site-logo').first();
    const logoUrl = logoImg.attr('src') || logoImg.attr('data-orig-file');
    if (logoUrl) {
      console.log(`-> Logo encontrado: ${logoUrl}`);
      const localLogo = await downloadAsset(logoUrl, 'branding');
      finalData.branding.logo = { originalUrl: logoUrl, localPath: localLogo };
      detectedImages.add(logoUrl);
    }

    // Extraer Banner
    const bannerImg = $home('.site-header img, article img').first();
    const bannerUrl = bannerImg.attr('src');
    if (bannerUrl) {
      console.log(`-> Banner encontrado: ${bannerUrl}`);
      const localBanner = await downloadAsset(bannerUrl, 'branding');
      finalData.branding.banner = { originalUrl: bannerUrl, localPath: localBanner };
      detectedImages.add(bannerUrl);
    }

    // Extraer favicon / avatar
    const iconImg = $home('link[rel="icon"], img.avatar').first();
    const iconUrl = iconImg.attr('href') || iconImg.attr('src');
    if (iconUrl) {
      const localIcon = await downloadAsset(iconUrl, 'branding');
      finalData.branding.icon = { originalUrl: iconUrl, localPath: localIcon };
    }

    // Detectar enlaces a PDFs en la Home
    $home('a[href*=".pdf"]').each((_, el) => {
      const href = $home(el).attr('href');
      const text = $home(el).text().trim() || 'Documento PDF';
      if (href && !detectedDocs.has(href)) {
        detectedDocs.add(href);
        finalData.documentos.push({ titulo: text, url: href, fuente: 'home' });
      }
    });

  } catch (err) {
    console.warn(`Aviso en scraping de Home: ${err.message}`);
  }

  // 2. Extracción mediante la REST API de WordPress (/pages)
  console.log('\n2. Consultando páginas a través de la WordPress REST API...');
  let pages = [];
  try {
    const pagesRes = await client.get(WP_API_PAGES);
    pages = pagesRes.data;
    console.log(`-> ${pages.length} páginas recuperadas exitosamente.`);
  } catch (err) {
    console.error(`Error consultando API de páginas: ${err.message}`);
  }

  for (const page of pages) {
    const slug = page.slug;
    const rawTitle = page.title?.rendered || '';
    const cleanTitle = rawTitle.replace(/&nbsp;/g, ' ').replace(/&#8211;/g, '-').trim();
    const rawContent = page.content?.rendered || '';
    const cleanContent = cleanHtml(rawContent);

    // Cheerio para procesar imágenes y documentos embebidos en el contenido de cada página
    const $page = cheerio.load(rawContent);

    // Buscar imágenes dentro del contenido
    $page('img').each((_, img) => {
      let src = $page(img).attr('src') || $page(img).attr('data-orig-file');
      if (src && !src.includes('gravatar') && !src.includes('pixel') && !detectedImages.has(src)) {
        detectedImages.add(src);
      }
    });

    // Buscar documentos PDF dentro del contenido
    $page('a[href*=".pdf"]').each((_, a) => {
      const href = $page(a).attr('href');
      const title = $page(a).text().trim() || cleanTitle;
      if (href && !detectedDocs.has(href)) {
        detectedDocs.add(href);
        finalData.documentos.push({
          titulo: title,
          url: href,
          paginaOrigen: cleanTitle,
          slug
        });
      }
    });

    // Clasificación de la página
    if (slug === 'soy' || slug === '' || page.id === 22 || cleanTitle.toLowerCase().includes('quiénes somos')) {
      finalData.sobreMi.titulo = cleanTitle;
      finalData.sobreMi.perfil = cleanContent;
    } else if (
      slug.includes('politica') || 
      slug.includes('proteccion-de-datos') ||
      slug.includes('enlaces') ||
      slug.includes('posts')
    ) {
      // Páginas legales o utilitarias
      // se pueden referenciar en metadatos si se desea
    } else if (slug.includes('donde-encontrarme') || slug.includes('salamanca') || slug.includes('zamora')) {
      // Enriquecer datos de contacto si hay detalles
      if (!finalData.contacto.detallesUbicacion) finalData.contacto.detallesUbicacion = [];
      finalData.contacto.detallesUbicacion.push({
        slug,
        titulo: cleanTitle,
        texto: cleanContent
      });
    } else {
      // Es un Servicio o Solución Terapéutica
      finalData.servicios.push({
        id: page.id,
        slug,
        titulo: cleanTitle,
        urlOriginal: page.link,
        extracto: cleanContent.slice(0, 220) + '...',
        contenidoCompleto: cleanContent,
        rawHtml: rawContent
      });
    }
  }

  // 3. Extracción de Artículos / Posts de Blog
  console.log('\n3. Consultando artículos/posts de blog vía WordPress REST API...');
  try {
    const postsRes = await client.get(WP_API_POSTS);
    const posts = postsRes.data;
    console.log(`-> ${posts.length} artículos encontrados.`);
    for (const post of posts) {
      const cleanTitle = post.title?.rendered?.replace(/&nbsp;/g, ' ').replace(/&#8211;/g, '-').trim() || '';
      const cleanContent = cleanHtml(post.content?.rendered || '');
      finalData.posts.push({
        id: post.id,
        slug: post.slug,
        titulo: cleanTitle,
        fecha: post.date,
        urlOriginal: post.link,
        resumen: cleanContent.slice(0, 200) + '...',
        contenidoCompleto: cleanContent
      });
    }
  } catch (err) {
    console.warn(`Aviso posts API: ${err.message}`);
  }

  // 4. Descarga de todas las imágenes detectadas a ./assets/
  console.log(`\n4. Descargando ${detectedImages.size} imágenes encontradas...`);
  for (const imgUrl of detectedImages) {
    const local = await downloadAsset(imgUrl, 'media');
    finalData.imagenes.push({
      urlOriginal: imgUrl,
      localPath: local
    });
  }

  // 5. Descarga opcional de documentos PDF encontrados
  console.log(`\n5. Descargando ${finalData.documentos.length} documentos PDF detectados...`);
  for (const doc of finalData.documentos) {
    const local = await downloadAsset(doc.url, 'documentos');
    doc.localPath = local;
  }

  // 6. Guardado del JSON final
  await fs.writeJSON(OUTPUT_FILE, finalData, { spaces: 2 });

  console.log('\n==================================================');
  console.log(' FASE 1 COMPLETADA CON ÉXITO');
  console.log(`  - Archivo generado: ${OUTPUT_FILE}`);
  console.log(`  - Carpeta de activos: ${ASSETS_DIR}`);
  console.log(`  - Total de servicios clasificados: ${finalData.servicios.length}`);
  console.log(`  - Total de artículos de blog: ${finalData.posts.length}`);
  console.log(`  - Total de documentos PDF: ${finalData.documentos.length}`);
  console.log(`  - Total de imágenes descargadas: ${finalData.imagenes.length}`);
  console.log('==================================================\n');
}

runScraper().catch((err) => {
  console.error('Error fatal durante la extracción:', err);
  process.exit(1);
});

