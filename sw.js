const CACHE_NAME = 'sikloernyo-offline-cache';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data_a.js',
  './data_b.js'
];

self.addEventListener('install', e => {
  self.skipWaiting(); // Azonnal aktiválja az új Service Workert
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim()); // Azonnal átveszi az irányítást
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Hálózat elsődleges: ha van net és sikeres a letöltés, 
        // csendben frissítjük vele az offline gyorsítótárat is.
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Ha hiba van (nincs internet), akkor odaadjuk az offline verziót
        return caches.match(e.request);
      })
  );
});