const CACHE_NAME = 'sikloernyo-cache-v1.2'; // Frissítve v1.1-ről
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data_a.js',
  './data_b.js',
  './assets/app_icon.png' // Az ikont is add hozzá a listához!
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('install', event => {
  self.skipWaiting(); // Azonnal aktiválódik az új verzió, nem vár a bezárásra
  // ... a többi kódod (urlsToCache, stb.)
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});