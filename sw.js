const CACHE_NAME = 'sikloernyo-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data_a.js',
  './data_b.js'
];

// Telepítéskor elmentjük a fájlokat
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Lekéréskor (amikor net nélkül vagyunk), a cache-ből adjuk vissza
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});