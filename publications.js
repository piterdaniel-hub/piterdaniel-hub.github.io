var publications = [
  {
    titre: "Guide : le réseau informatique de A à Z",
    description: "Notions essentielles, configuration, sécurité et études de cas réels.",
    image: "1790267074737.jpg",
    categorie: "Guide",
    lien: "projet.html?id=guide-reseau"
  },
  {
    titre: "Les types de serveurs",
    description: "Les 9 principaux types de serveurs expliqués simplement.",
    image: "1000028658.jpg",
    categorie: "Apprendre",
    lien: "apprendre.html?q=serveur"
  },
  {
    titre: "Maîtrise algorithme, la programmation & le code",
    description: "De débutant à développeur.",
    image: "1790524879550.jpg",
    categorie: "Article",
    lien: "article1.html"
  }
];

(function () {
  var conteneur = document.getElementById("liste-publications");
  if (!conteneur) return;
  publications.forEach(function (p) {
    var a = document.createElement("a");
    a.className = "carte carte-lien";
    a.href = p.lien;

    var im = document.createElement("img");
    im.src = p.image;
    im.alt = p.titre;
    im.loading = "lazy";
    im.onerror = function () { im.style.display = "none"; };

    var e = document.createElement("span");
    e.className = "etiquette";
    e.textContent = p.categorie;

    var h = document.createElement("h3");
    h.textContent = p.titre;

    var d = document.createElement("p");
    d.textContent = p.description;

    var plus = document.createElement("span");
    plus.className = "plus";
    plus.textContent = "Ouvrir →";

    a.appendChild(im);
    a.appendChild(e);
    a.appendChild(h);
    a.appendChild(d);
    a.appendChild(plus);
    conteneur.appendChild(a);
  });
})();
