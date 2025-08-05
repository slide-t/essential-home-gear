const CACHE_NAME = 'kitchen-store-v7.2';
const URLS_TO_CACHE = [
  '/essentialkitchen-culinary/', // root for GitHub Pages
  '/essentialkitchen-culinary/index.html',
  '/essentialkitchen-culinary/computers.html',
  '/essentialkitchen-culinary/main.css',
  '/essentialkitchen-culinary/script.js',
  '/essentialkitchen-culinary/manifest.json',
  '/essentialkitchen-culinary/footer.html',
  '/essentialkitchen-culinary/footer-dropdown.js',
  '/essentialkitchen-culinary/footer.css',
  '/essentialkitchen-culinary/images',
  // Add images or other static assets here
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activate event (clean old caches)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request).catch(() => {
        // Optional fallback (e.g., offline.html)
        return caches.match('/essentialkitchen-culinary/index.html');
      });
    })
  );
});
