self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('kitchen-store-v2').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/main.css',
        '/script.js',
        '/manifest.json'
        // Add more assets here
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
