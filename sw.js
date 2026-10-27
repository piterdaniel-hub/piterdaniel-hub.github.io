// Version : change ce numéro à chaque grosse mise à jour du site
const VERSION = "v11";
const CACHE_PAGES = "pages-" + VERSION;
const CACHE_STATIQUE = "statique-" + VERSION;
const CACHE_IMAGES = "images-" + VERSION;
const TOUS_LES_CACHES = [CACHE_PAGES, CACHE_STATIQUE, CACHE_IMAGES];

const PAGES = [
  "/", "/index.html", "/projets.html", "/projet.html", "/apprendre.html",
  "/galerie.html", "/outils.html", "/a-propos.html", "/contact.html",
  "/article1.html", "/confidentialite.html", "/offline.html",
  "/en/", "/es/", "/pt/"
];
const STATIQUES = [
  "/style.css", "/lecons.js", "/galerie.js", "/projets-data.js",
  "/publications.js", "/assistant.js", "/manifest.json"
];
const IMAGES = ["/icon-192.png", "/icon-512.png"];

// Pages de service : jamais mises en mémoire
const IGNORER = ["/sw.js", "/diagnostic.html", "/photos.html"];

const DELAI_PAGES = 4000;
const DELAI_STATIQUE = 3000;
const MAX_IMAGES = 60;

// ===== Installation : on prépare les fichiers essentiels =====
self.addEventListener("install", function (e) {
  e.waitUntil(
    Promise.all([
      remplir(CACHE_PAGES, PAGES),
      remplir(CACHE_STATIQUE, STATIQUES),
      remplir(CACHE_IMAGES, IMAGES)
    ])
  );
  self.skipWaiting();
});

async function remplir(nom, liste) {
  const cache = await caches.open(nom);
  await Promise.all(liste.map(function (url) {
    return cache.add(url).catch(function () {});
  }));
}

// ===== Activation : on supprime les anciennes versions =====
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(
        noms.filter(function (n) { return TOUS_LES_CACHES.indexOf(n) === -1; })
            .map(function (n) { return caches.delete(n); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

// ===== Outils =====
function avecDelai(promesse, ms) {
  return new Promise(function (resolve, reject) {
    var minuteur = setTimeout(function () { reject(new Error("delai")); }, ms);
    promesse.then(
      function (v) { clearTimeout(minuteur); resolve(v); },
      function (err) { clearTimeout(minuteur); reject(err); }
    );
  });
}

// Réseau d'abord ; si lent ou coupé, on utilise la copie gardée
async function reseauDabord(requete, nomCache, delai) {
  const cache = await caches.open(nomCache);
  try {
    const rep = await avecDelai(fetch(requete), delai);
    if (rep && rep.ok) cache.put(requete, rep.clone());
    return rep;
  } catch (erreur) {
    const copie = await cache.match(requete, { ignoreSearch: true });
    if (copie) return copie;
    return fetch(requete);
  }
}

// Images : d'abord la mémoire, sinon le réseau
async function imageDabord(requete) {
  const cache = await caches.open(CACHE_IMAGES);
  const copie = await cache.match(requete);
  if (copie) return copie;
  const rep = await fetch(requete);
  if (rep && rep.ok) {
    cache.put(requete, rep.clone());
    limiter(CACHE_IMAGES, MAX_IMAGES);
  }
  return rep;
}

async function limiter(nom, max) {
  const cache = await caches.open(nom);
  const cles = await cache.keys();
  if (cles.length > max) {
    await cache.delete(cles[0]);
    return limiter(nom, max);
  }
}

// ===== Réponses aux demandes =====
self.addEventListener("fetch", function (e) {
  const requete = e.request;
  if (requete.method !== "GET") return;

  const url = new URL(requete.url);
  if (url.origin !== location.origin) return;
  if (IGNORER.indexOf(url.pathname) !== -1) return;

  const accept = requete.headers.get("accept") || "";
  const estPage = requete.mode === "navigate" || accept.indexOf("text/html") !== -1;
  const estImage = requete.destination === "image" || /\.(jpe?g|png|gif|webp|svg|ico)$/i.test(url.pathname);

  if (estPage) {
    e.respondWith(
      reseauDabord(requete, CACHE_PAGES, DELAI_PAGES).catch(function () {
        return caches.match("/offline.html");
      })
    );
  } else if (estImage) {
    e.respondWith(imageDabord(requete));
  } else {
    e.respondWith(reseauDabord(requete, CACHE_STATIQUE, DELAI_STATIQUE));
  }
});
