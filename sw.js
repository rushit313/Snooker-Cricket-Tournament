const CACHE_NAME = 'sncm-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/tournament.html',
  '/manifest.json',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          // Cache new requests on the fly (optional but good for external libs)
          if (e.request.url.startsWith('http')) {
             // We don't cache Supabase API calls, only assets
             if (!e.request.url.includes('supabase.co')) {
                cache.put(e.request, fetchRes.clone());
             }
          }
          return fetchRes;
        });
      });
    }).catch(() => caches.match('/index.html'))
  );
});
