self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('kitchen-store-v3').then(function(cache) {
      return cache.addAll([
        '/',
        '/main.html',
        '/main.css',
        '/main.js',
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
