export const prerender = false;

import type { APIRoute } from 'astro';
import { getSiteConfig, saveSiteConfig } from '../../../lib/siteConfig';

export const GET: APIRoute = async () => {
  try {
    const config = await getSiteConfig();
    return new Response(JSON.stringify(config), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate'
      }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Error al obtener la configuración' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ error: 'Cuerpo de petición inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const updated = await saveSiteConfig(body);
    return new Response(JSON.stringify({ success: true, config: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Error al guardar la configuración' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
