/* sw.js */
const CACHE_NAME = 'sikloernyo-cache-v3.4'; // Növeld a verziószámot minden módosításkor!
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data_a.js',
  './data_b.js',
  './assets/app_icon.png', // Az ikont is add hozzá!
  './assets/stylish_paragliding_bg.png' // Új háttérkép
];

// Telepítés és fájlok gyorsítótárazása
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktiválás: a régi gyorsítótárak törlése és az irányítás azonnali átvétele
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim() // Azonnal átveszi az irányítást a nyitott ablakok felett
    ])
  );
});

// Értesítés fogadása a script.js-től
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Offline kiszolgálás
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});