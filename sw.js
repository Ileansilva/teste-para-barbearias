const CACHE="barbearia-premium-v1";
const FILES=["./","./index.html","./agendar.html","./css/style.css","./css/premium-v2.css","./js/app.js","./js/booking.js","./assets/favicon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>{})));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{if(e.request.method==="GET")e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
