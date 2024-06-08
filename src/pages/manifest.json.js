import { title, description } from '../../metadata.json';

const icons = [
  {
    src: '/favicon.svg',
    purpose: 'maskable any',
    sizes: 'any',
    type: 'image/svg+xml'
  }, {
    src: '/android-chrome-192x192.png',
    sizes: '192x192',
    type: 'image/png'
  }, {
    src: '/android-chrome-512x512.png',
    sizes: '512x512',
    type: 'image/png'
  }
]

export async function GET() {
  const body = {
    name: title,
    short_name: 'tap',
    description,
    icons,
    start_url: '/',
    background_color: '#6200ee',
    display: 'standalone',
    scope: '/',
    theme_color: '#6200ee'
  };

  return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
      }
  });
}