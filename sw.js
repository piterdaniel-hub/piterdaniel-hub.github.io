const CACHE = "rwagaza-v9";
const FICHIERS = [
  "/", "/index.html", "/projets.html", "/projet.html", "/apprendre.html",
  "/galerie.html", "/outils.html", "/a-propos.html", "/contact.html", "/article1.html",
  "/style.css", "/lecons.js", "/galerie.js", "/projets-data.js",
  "/publications.js", "/assistant.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(FICHIERS.map(function (f) {
        return c.add(f).catch(function () {});
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(noms.filter(function (n) { return n !== CACHE; })
        .map(function (n) { return caches.delete(n); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(function (rep) {
      var copie = rep.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copie); });
      return rep;
    }).catch(function () {
      return caches.match(e.request).then(function (r) {
        return r || caches.match("/index.html");
      });
    })
  );
});
