self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});
