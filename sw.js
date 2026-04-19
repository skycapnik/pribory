// Минимальный service worker для PWA
// Его задача — просто существовать, чтобы Android разрешил установку

const CACHE_NAME = "pribory-v1";

self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
    // Pass-through, без кэширования — чтобы модель всегда была свежая
});
