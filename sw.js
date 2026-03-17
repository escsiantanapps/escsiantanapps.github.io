const CACHE_NAME = 'relawan-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Menginstal Service Worker dan menyimpan file ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Mengambil data dari cache jika sedang offline/koneksi lambat
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
