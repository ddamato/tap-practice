import { title, description } from '../../metadata.json';

const icons = [
  {
    src: '/favicon.svg',
    purpose: 'maskable any',
    sizes: 'any',
    type: 'image/svg+xml'
  }, {
    src: '/album-art/index.png',
    sizes: '1000x1000',
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
    background_color: '#141e23',
    display: 'standalone',
    scope: '/',
    theme_color: '#f5bc00'
  };

  return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
      }
  });
}