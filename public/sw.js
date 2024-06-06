const cacheName = 'v1';
const channel = new BroadcastChannel('sw-messages');

self.addEventListener('install', () => {
  console.info('Service Worker Installed');
});

self.addEventListener('activate', (ev) => {
  console.info('Service Worker Activated');
  ev.waitUntil(
    self.clients.claim(),
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((cache) => cache !== cacheName && caches.delete(cache)))
    })
  )
});

self.addEventListener('fetch', (ev) => {
  if (ev.request.headers.get('range')) return;
  const { url } = ev.request;
  ev.respondWith(
    fetch(ev.request).then((res) => {
      if (url.startsWith('http') && res.status === 200) {
        const clone = res.clone();
        caches.open(cacheName)
          .then((cache) => cache.put(ev.request, clone))
          .catch(() => {});
      }
      return res;
    }).catch(async () => await caches.match(ev.request) || new Response())
  )
});
