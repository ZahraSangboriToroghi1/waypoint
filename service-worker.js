const CACHE_NAME = 'waypoint-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/editor.html',
  '/gallery.html',
  '/integrations.html',
  '/profile.html',
  '/settings.html',
  '/style.css',
  '/script.js',
  'https://cdnjs.cloudflare.com/ajax/libs/antd/4.24.14/antd.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/antd/4.24.14/antd.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});