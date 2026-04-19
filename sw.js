const CACHE_NAME = 'sikloernyo-v7.0'; // Új verziószám a cache névben
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data_a.js',
  './data_b.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', e => {
  // Régi cache verziók törlése a frissítés kényszerítéséhez
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(e.request);
      })
  );
});