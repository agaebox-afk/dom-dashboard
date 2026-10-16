const CACHE_NAME = 'dom-app-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './assets/avatar-agnieszka.png',
  './assets/avatar-marek.png',
  './assets/avatar-ania.png',
  './assets/avatar-pies.png',
  './assets/quote-card.png',
  './assets/icon-192.png',
  './assets/icon-512.png'
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
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // If fetching GitHub API, always bypass cache to get real-time database updates
  if (e.request.url.includes('api.github.com')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
