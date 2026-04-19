const CACHE_NAME = 'sikloernyo-v7.1'; // HA EZT ÁTÍROD, MINDENKI FRISSÜLNI FOG
const urlsToCache = [
  './index.html',
  './style.css?v=7.1',
  './script.js?v=7.1',
  './data_a.js?v=7.1',
  './data_b.js?v=7.1',
  './manifest.json?v=7.1'
];

self.addEventListener('install', e => {
  self.skipWaiting(); // Nem vár, azonnal települ
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Régi cache törlése:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Azonnal átveszi az irányítást minden nyitott fül felett
});

self.addEventListener('fetch', e => {
  // Hálózatot nézi meg először, ha nincs net, csak akkor adja a cache-t
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});