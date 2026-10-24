var galerie = [
  { i:"1000035593.jpg", c:"IA", t:"Les meilleurs outils d'IA pour le marketing en 2026", x:"Une pyramide des outils d'IA utiles en marketing, classés par usage : assistants généraux, recherche et rédaction, productivité, développement et no-code, création de contenu, visuels et audio, automatisation. Les outils d'IA évoluent très vite : teste-les un par un et garde ceux qui te servent vraiment.", s:"Chief AI Leader" },
  { i:"1000035591.jpg", c:"Livres", t:"Apprendre et maîtriser le réseau informatique de A à Z", x:"Un guide complet avec exercices pratiques : notions essentielles, configuration pas à pas, sécurité et bonnes pratiques, optimisation des performances et études de cas réels.", s:"YaipDev Group, Russell Eyenga" },
  { i:"1000035592.jpg", c:"Livres", t:"Pirate informatique : débuter de 0 et devenez pro", x:"Un guide pour débuter de zéro en sécurité informatique : bases et fondamentaux, outils et techniques, sécurité et défense, exercices pratiques. La sécurité s'apprend d'abord pour protéger, dans le respect de la loi.", s:"YaipDev Group, Russell Eyenga", a:true },
  { i:"1000035582.jpg", c:"Livres", t:"Pirate informatique : une autre couverture", x:"Une autre version de la couverture du guide « Pirate informatique : débuter de 0 et devenez pro », pour apprendre la sécurité informatique pas à pas.", s:"YaipDev Group, Russell Eyenga", a:true },
  { i:"1000035599.jpg", c:"Inspiration", t:"Le code, vu de près", x:"Derrière chaque application, il y a des lignes de code écrites par quelqu'un qui a commencé comme toi. La curiosité est le premier outil d'un développeur.", s:"Auteur non précisé" },
  { i:"1000047360.jpg", c:"Formation", t:"Apprendre Microsoft Office Excel", x:"Formation pour apprendre Microsoft Office Excel, du 2 au 27 novembre 2026.", s:"Auteur non précisé" },
  { i:"1000035597.jpg", c:"Réseaux", t:"Définition de quelques sigles", x:"Un mémo des sigles que l'on rencontre partout : MTN, SMS, MMS, SIM, IMEI, Wi-Fi, GPS, USB, LAN, WAN, VPN, IP, DNS, HTTP et HTTPS, avec leur signification et leur rôle. Par exemple, le HTTPS est la version sécurisée du HTTP : il chiffre les données échangées avec un site.", s:"Auteur non précisé" },
  { i:"1000039704.jpg", c:"Carrière", t:"Les métiers de l'ingénierie informatique", x:"Un aperçu de 16 métiers avec leur salaire annuel moyen en dollars américains d'après l'infographie : de 70 000 USD (test et qualité) à 130 000 USD (IA et apprentissage automatique). Ce sont des ordres de grandeur : les salaires varient beaucoup selon le pays, l'expérience et l'entreprise.", s:"Auteur non précisé" },
  { i:"1000047366.jpg", c:"Sécurité", t:"Top des outils de cybersécurité", x:"Un panorama des logiciels et du matériel utilisés par les professionnels de la cybersécurité pour analyser, tester et protéger des systèmes.", s:"Alpha Security (@ALPHA__SECURITY)", a:true },
  { i:"1000038970.jpg", c:"Sécurité", t:"Boîte à outils de l'investigation numérique", x:"Les outils de l'investigation numérique, classés en trois familles : analyse de la mémoire, analyse du réseau, et analyse des fichiers et des métadonnées. Elle sert à comprendre ce qui s'est passé après un incident de sécurité, dans un cadre légal.", s:"Auteur non précisé", a:true },
  { i:"1000035581.jpg", c:"Sécurité", t:"Mobile pentest : la boîte à outils Android", x:"Une fiche récapitulative des outils utilisés pour tester la sécurité des applications Android : ADB, Frida, scrcpy, JADX, Apktool, Drozer, Radare2, Ghidra et d'autres.", s:"HexSec (hexsecteam)", a:true },
  { i:"1000039703.jpg", c:"Outils", t:"Les commandes Linux APT", x:"Les huit commandes essentielles du gestionnaire de paquets APT sur Debian et Ubuntu : rechercher, installer, supprimer, purger, mettre à jour, nettoyer et inspecter des logiciels. Lance d'abord « sudo apt update » avant d'installer quelque chose.", s:"Auteur non précisé" },
  { i:"1000039701.jpg", c:"Web", t:"Côté client, côté serveur", x:"Côté client : ce que le navigateur affiche (HTML, CSS, Bootstrap, JavaScript, jQuery). Côté serveur : ce qui travaille en coulisses (Python, Django, SQL, MySQL, MongoDB). Un développeur full stack maîtrise les deux côtés.", s:"Auteur non précisé" },
  { i:"1000046225.jpg", c:"Web", t:"Les types de champs HTML (input)", x:"Les types de champs d'un formulaire HTML : texte, mot de passe, case à cocher, couleur, date, heure, e-mail, fichier, nombre, curseur, recherche et bouton d'envoi. Un seul attribut, type, change complètement le champ.", s:"Auteur non précisé" },
  { i:"1000046226.jpg", c:"Web", t:"Le développement web en un schéma", x:"Front end (HTML, CSS, JavaScript), back end (PHP, Node.js, Java), bases de données (PostgreSQL, MySQL, MongoDB) et outils (Bootstrap, Tailwind CSS, jQuery) : toute la carte du développement web sur une seule image.", s:"Auteur non précisé" },
  { i:"1000046228.jpg", c:"Programmation", t:"if ou switch ?", x:"Un clin d'œil de programmeur : plusieurs « if » à la suite, c'est comme brancher chaque câble séparément. Un « switch » regroupe les cas dans une seule structure plus claire, pratique quand tu compares une valeur à de nombreux choix.", s:"Auteur non précisé" },
  { i:"1000035580.jpg", c:"Programmation", t:"Quel langage pour quel domaine ?", x:"Pour le web : HTML, CSS, JavaScript, TypeScript, PHP, SQL. Pour les logiciels : C, C++, Java, Python, C#, Swift, Kotlin, Rust, Go. Pour l'apprentissage automatique : Python, R, Julia, Scala et d'autres. Python apparaît dans les trois domaines.", s:"Auteur non précisé" },
  { i:"1000035595.jpg", c:"Programmation", t:"Hello, World ! en 12 langages", x:"Le programme « Hello, World ! », qui affiche un simple message, est le premier exercice classique. Compare son écriture en Python, Java, C, C++, JavaScript, TypeScript, Go, Rust, PHP, Ruby, Swift et Kotlin.", s:"Auteur non précisé" },
  { i:"1000035594.jpg", c:"Inspiration", t:"La pile d'un développeur moderne", x:"VS Code, HTML, CSS, JavaScript, TypeScript, Python, Go, Kotlin, React, Node.js, Express, MongoDB, Git, GitHub, Docker, Linux, SQL et terminal. Tu n'as pas besoin de tout apprendre d'un coup : avance un outil à la fois.", s:"Auteur non précisé" }
];

(function () {
  var liste = document.getElementById("liste-galerie");
  var champ = document.getElementById("recherche");
  var zoneFiltres = document.getElementById("filtres");
  var compteur = document.getElementById("compteur");
  if (!liste || !champ || !zoneFiltres || !compteur) return;
  var categorie = "Tout";

  function normaliser(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  // Agrandissement d'une image au toucher
  var fond = document.createElement("div");
  fond.className = "lightbox";
  var grande = document.createElement("img");
  fond.appendChild(grande);
  fond.onclick = function () { fond.className = "lightbox"; };
  document.body.appendChild(fond);

  function marquer(nom) {
    Array.prototype.forEach.call(zoneFiltres.children, function (b) {
      b.className = (b.textContent === nom) ? "actif" : "";
    });
  }

  function afficher() {
    var q = normaliser(champ.value);
    var n = 0;
    liste.innerHTML = "";
    galerie.forEach(function (g) {
      if (categorie !== "Tout" && g.c !== categorie) return;
      if (q && normaliser(g.t + " " + g.x + " " + g.c).indexOf(q) === -1) return;
      n++;
      var carte = document.createElement("article");
      carte.className = "carte";

      var im = document.createElement("img");
      im.className = "vignette";
      im.src = g.i;
      im.alt = g.t;
      im.loading = "lazy";
      im.onclick = function () {
        grande.src = g.i;
        grande.alt = g.t;
        fond.className = "lightbox ouvert";
      };

      var e = document.createElement("span");
      e.className = "etiquette";
      e.textContent = g.c;

      var h = document.createElement("h3");
      h.textContent = g.t;

      var p = document.createElement("p");
      p.textContent = g.x;

      carte.appendChild(im);
      carte.appendChild(e);
      carte.appendChild(h);
      carte.appendChild(p);

      if (g.a) {
        var w = document.createElement("p");
        w.className = "avert";
        w.textContent = "À but éducatif. Utilise ces outils uniquement sur tes propres appareils ou avec une autorisation écrite : tester un système sans accord est illégal.";
        carte.appendChild(w);
      }
      if (g.s) {
        var s = document.createElement("p");
        s.className = "source";
        s.textContent = "Source : " + g.s;
        carte.appendChild(s);
      }
      liste.appendChild(carte);
    });
    compteur.textContent = n + (n > 1 ? " images" : " image") + (categorie !== "Tout" ? " · " + categorie : "");
    if (n === 0) {
      liste.innerHTML = "<p class='sous-titre'>Aucun résultat. Essaie un autre mot.</p>";
    }
  }

  var cats = ["Tout"];
  galerie.forEach(function (g) { if (cats.indexOf(g.c) === -1) cats.push(g.c); });
  cats.forEach(function (c) {
    var b = document.createElement("button");
    b.textContent = c;
    b.onclick = function () { categorie = c; marquer(c); afficher(); };
    zoneFiltres.appendChild(b);
  });
  marquer("Tout");

  champ.oninput = afficher;
  afficher();
})();
