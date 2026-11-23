export const prerender = false;

import type { APIRoute } from 'astro';
import { getCloudflareEnv } from '../../../lib/siteConfig';

const ALLOWED_TYPES = ['image/webp', 'image/jpeg', 'image/png'];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return new Response(JSON.stringify({ error: 'No se ha proporcionado ningún archivo' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(JSON.stringify({ error: 'Tipo de archivo no permitido. Solo se aceptan WEBP, JPEG o PNG.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (file.size > MAX_SIZE) {
      return new Response(JSON.stringify({ error: 'El archivo excede el tamaño máximo permitido de 5 MB.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generar un nombre limpio y seguro
    const originalName = file.name || 'archivo';
    const cleanBase = originalName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9.]/g, '-')
      .replace(/-+/g, '-');

    const extMatch = cleanBase.match(/\.([a-z0-9]+)$/i);
    const ext = extMatch ? extMatch[1] : (file.type === 'image/webp' ? 'webp' : file.type === 'image/png' ? 'png' : 'jpg');
    const baseWithoutExt = cleanBase.replace(/\.[^/.]+$/, '');
    const cleanFilename = `${baseWithoutExt.slice(0, 40)}-${Date.now()}.${ext}`;

    const env = await getCloudflareEnv((locals as any)?.runtime);
    const r2 = env?.LUISA_MEDIA;

    if (!r2 || typeof r2.put !== 'function') {
      return new Response(JSON.stringify({ error: 'Bucket R2 (LUISA_MEDIA) no disponible en este entorno.' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const buffer = await file.arrayBuffer();
    await r2.put(cleanFilename, buffer, {
      httpMetadata: {
        contentType: file.type
      }
    });

    const publicUrl = `https://media.luisacofrades.com/${cleanFilename}`;

    return new Response(JSON.stringify({
      success: true,
      url: publicUrl,
      filename: cleanFilename
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Error al procesar la subida' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
