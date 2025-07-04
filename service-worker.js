const CACHE_NAME = "alarm-clock-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/alarm logo.png",
  "/alarm 512.png",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
