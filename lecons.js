var lecons = [
  // ===== Bases =====
  { c:"Bases", t:"Qu'est-ce qu'un ordinateur ?", x:"Un ordinateur est une machine qui reçoit des données, les traite grâce à des instructions et produit un résultat. Il est composé de matériel (hardware) et de logiciels (software)." },
  { c:"Bases", t:"Le processeur (CPU)", x:"Le processeur est le cerveau de l'ordinateur : il exécute les instructions des programmes. Sa vitesse se mesure en gigahertz (GHz) et le nombre de cœurs indique combien de tâches il peut gérer en même temps." },
  { c:"Bases", t:"La mémoire RAM", x:"La RAM est la mémoire de travail : elle garde temporairement les programmes et les données en cours d'utilisation. Quand l'appareil s'éteint, son contenu disparaît." },
  { c:"Bases", t:"Stockage : disque dur et SSD", x:"Le stockage conserve tes fichiers même quand l'appareil est éteint. Le SSD est plus rapide et plus résistant aux chocs que le disque dur classique (HDD)." },
  { c:"Bases", t:"Le système d'exploitation", x:"C'est le logiciel principal qui fait le lien entre le matériel et les programmes. Windows, Android, macOS, Linux et iOS en sont des exemples." },
  { c:"Bases", t:"Bit et octet", x:"Un bit est la plus petite information possible : 0 ou 1. Un octet regroupe 8 bits. Un kilo-octet vaut environ 1 000 octets et un méga-octet environ 1 million." },
  { c:"Bases", t:"Le système binaire", x:"Les ordinateurs ne comprennent que 0 et 1. Les textes, les images et les sons sont tous convertis en suites de bits." },
  { c:"Bases", t:"Fichiers et extensions", x:"L'extension à la fin du nom indique le type de fichier : .jpg pour une image, .pdf pour un document, .html pour une page web, .mp4 pour une vidéo." },
  { c:"Bases", t:"Logiciel et application", x:"Un logiciel est un programme qui exécute une tâche. Une application est un logiciel conçu pour un usage précis, souvent sur téléphone." },
  { c:"Bases", t:"Sauvegarder ses données", x:"Sauvegarder, c'est garder une copie de ses fichiers ailleurs. Une bonne habitude : avoir au moins deux copies, dont une en dehors de l'appareil." },

  // ===== Programmation =====
  { c:"Programmation", t:"Qu'est-ce qu'un algorithme ?", x:"Un algorithme est une suite d'instructions claires et ordonnées pour résoudre un problème. Une recette de cuisine est un bon exemple d'algorithme." },
  { c:"Programmation", t:"Le pseudo-code", x:"Écrire un algorithme en phrases simples avant de coder aide à bien réfléchir. Une fois la logique claire, on la traduit dans un langage de programmation." },
  { c:"Programmation", t:"Les variables", x:"Une variable est une boîte nommée qui stocke une valeur : un nombre, un texte, etc. On peut la lire et la modifier pendant que le programme tourne." },
  { c:"Programmation", t:"Les types de données", x:"Les principaux types sont : le nombre entier, le nombre décimal, le texte (chaîne de caractères) et le booléen, qui vaut vrai ou faux." },
  { c:"Programmation", t:"Les conditions", x:"Une condition permet au programme de choisir : si une situation est vraie, il fait une action, sinon il en fait une autre. C'est la structure « si... alors... sinon »." },
  { c:"Programmation", t:"Les boucles", x:"Une boucle répète une action plusieurs fois sans réécrire le code. Elle s'arrête quand un nombre de tours est atteint ou quand une condition change." },
  { c:"Programmation", t:"Les fonctions", x:"Une fonction est un bloc de code réutilisable avec un nom. On l'écrit une fois et on l'appelle autant de fois que nécessaire." },
  { c:"Programmation", t:"Les tableaux (listes)", x:"Un tableau range plusieurs valeurs dans une seule variable, par exemple une liste de noms. Chaque valeur a une position, appelée indice." },
  { c:"Programmation", t:"Le débogage", x:"Déboguer, c'est trouver et corriger les erreurs (bugs). Lis le message d'erreur, teste une petite partie à la fois et vérifie tes hypothèses." },
  { c:"Programmation", t:"Les langages de programmation", x:"Python, JavaScript, Java ou C sont des langages. Chacun a ses points forts : Python est apprécié des débutants, JavaScript fait vivre les sites web." },
  { c:"Programmation", t:"Compilateur et interpréteur", x:"Ce sont des outils qui traduisent ton code en langage compréhensible par la machine. Le compilateur traduit tout avant l'exécution, l'interpréteur le fait ligne par ligne." },
  { c:"Programmation", t:"La programmation orientée objet", x:"Elle organise le code en objets qui ont des propriétés (ce qu'ils sont) et des actions (ce qu'ils font). Cela rend les gros projets plus faciles à organiser." },

  // ===== Web =====
  { c:"Web", t:"Internet et le Web", x:"Internet est le réseau mondial qui relie les machines. Le Web est un service qui fonctionne sur Internet : il permet d'afficher des pages et des sites." },
  { c:"Web", t:"Le HTML", x:"Le HTML est le langage qui décrit la structure d'une page : titres, paragraphes, images et liens. C'est le squelette du site." },
  { c:"Web", t:"Le CSS", x:"Le CSS gère l'apparence : couleurs, tailles, espaces et mise en page. C'est lui qui habille le squelette HTML." },
  { c:"Web", t:"Le JavaScript", x:"Le JavaScript rend une page interactive : menus, formulaires, animations, assistants. Il s'exécute directement dans le navigateur." },
  { c:"Web", t:"Le navigateur web", x:"Chrome, Firefox ou Safari sont des navigateurs. Ils lisent le HTML, le CSS et le JavaScript d'un site, puis affichent la page à l'écran." },
  { c:"Web", t:"L'URL", x:"L'URL est l'adresse d'une page web. Elle contient le protocole (https), le nom de domaine (par exemple monsite.com) et le chemin vers la page." },
  { c:"Web", t:"Nom de domaine et hébergement", x:"Le nom de domaine est l'adresse de ton site. L'hébergement est l'endroit, sur un serveur, où sont stockés ses fichiers." },
  { c:"Web", t:"Un site responsive", x:"Un site responsive s'adapte automatiquement à la taille de l'écran : téléphone, tablette ou ordinateur. C'est indispensable aujourd'hui." },
  { c:"Web", t:"Les balises HTML", x:"Une balise est un mot entre chevrons. Par exemple h1 pour un grand titre, p pour un paragraphe, a pour un lien et img pour une image." },
  { c:"Web", t:"Le référencement (SEO)", x:"Le SEO aide Google à comprendre et à montrer ton site. Il repose sur des titres clairs, des descriptions précises et des contenus utiles." },
  { c:"Web", t:"Les cookies", x:"Un cookie est un petit fichier que le navigateur garde pour mémoriser des informations : connexion, langue, préférences. Certains servent aussi à suivre la navigation, d'où les messages de consentement." },
  { c:"Web", t:"Le cache", x:"Le cache est une copie temporaire de données gardée pour charger plus vite la prochaine fois. Quand une page semble ancienne, vider le cache ou recharger peut régler le problème." },

  // ===== Réseaux =====
  { c:"Réseaux", t:"Qu'est-ce qu'un réseau informatique ?", x:"Un réseau relie plusieurs appareils pour qu'ils échangent des données et partagent des ressources : fichiers, imprimantes, connexion Internet." },
  { c:"Réseaux", t:"LAN et WAN", x:"Un LAN est un réseau local : maison, bureau ou école. Un WAN couvre une grande zone, et Internet est le plus grand WAN du monde." },
  { c:"Réseaux", t:"L'adresse IP", x:"Chaque appareil connecté a une adresse IP, un numéro qui l'identifie sur le réseau, par exemple 192.168.1.10. C'est comme une adresse postale pour les données." },
  { c:"Réseaux", t:"Le routeur", x:"Le routeur relie ton réseau local à Internet et dirige les données vers le bon appareil. La box Internet de la maison joue ce rôle." },
  { c:"Réseaux", t:"Le Wi-Fi", x:"Le Wi-Fi est une technologie qui relie les appareils à un réseau grâce aux ondes radio, sans câble. Plus on s'éloigne de la borne, plus le signal faiblit." },
  { c:"Réseaux", t:"Le modèle client-serveur", x:"Le client est l'appareil qui demande (ton téléphone). Le serveur est la machine qui répond (le site). La plupart des services Internet fonctionnent ainsi." },
  { c:"Réseaux", t:"Les protocoles", x:"Un protocole est un ensemble de règles de communication. HTTP sert à échanger des pages web, et TCP/IP découpe les données en paquets pour les transporter." },
  { c:"Réseaux", t:"Le switch (commutateur)", x:"Le switch relie plusieurs appareils d'un réseau local par câble et envoie les données uniquement à l'appareil concerné." },
  { c:"Réseaux", t:"Les types de serveurs", x:"Il existe des serveurs de base de données, de fichiers, DNS, d'application, d'impression, de messagerie, web, proxy et de jeux. Chacun offre un service précis." },
  { c:"Réseaux", t:"Le DNS", x:"Le DNS fonctionne comme un annuaire : il traduit le nom d'un site (monsite.com) en adresse IP que les machines comprennent." },
  { c:"Réseaux", t:"Le cloud", x:"Le cloud, c'est utiliser des serveurs distants via Internet pour stocker des fichiers ou exécuter des services, au lieu de tout garder sur son appareil." },

  // ===== Sécurité =====
  { c:"Sécurité", t:"Des mots de passe solides", x:"Choisis un mot de passe long (12 caractères ou plus), différent pour chaque compte. Un gestionnaire de mots de passe t'aide à tous les retenir." },
  { c:"Sécurité", t:"La double authentification", x:"Elle ajoute une deuxième preuve d'identité, par exemple un code reçu sur ton téléphone. Même si ton mot de passe est volé, ton compte reste protégé." },
  { c:"Sécurité", t:"Le phishing (hameçonnage)", x:"Le phishing est un faux message qui imite une vraie entreprise pour voler tes informations. Ne clique pas sur les liens suspects et vérifie toujours l'expéditeur." },
  { c:"Sécurité", t:"Le HTTPS et le cadenas", x:"Le HTTPS chiffre les échanges entre toi et le site, pour que personne ne puisse les lire en chemin. Le cadenas ne prouve pas qu'un site est honnête, seulement que la connexion est protégée." },
  { c:"Sécurité", t:"Les mises à jour", x:"Les mises à jour corrigent des failles de sécurité et des bugs. Les installer régulièrement protège ton téléphone et ton ordinateur." },
  { c:"Sécurité", t:"Installer des logiciels fiables", x:"Télécharge tes applications depuis les boutiques officielles ou les sites des éditeurs. Les logiciels piratés ou de sources inconnues contiennent souvent des virus." },
  { c:"Sécurité", t:"Le pare-feu", x:"Le pare-feu filtre les connexions qui entrent et sortent d'un appareil ou d'un réseau selon des règles. Il bloque les accès non autorisés." },
  { c:"Sécurité", t:"Le VPN", x:"Un VPN crée un tunnel chiffré entre ton appareil et un serveur. Il protège tes échanges sur un Wi-Fi public, mais il ne te rend pas invisible pour autant." },

  // ===== Outils =====
  { c:"Outils", t:"Git et GitHub", x:"Git suit l'historique des modifications d'un projet. GitHub est un site qui héberge ces projets en ligne, permet de les partager et, comme ici, de publier un site gratuitement." },
  { c:"Outils", t:"L'éditeur de code", x:"Un éditeur de code, comme Visual Studio Code, aide à écrire du code avec des couleurs et des suggestions. Sur téléphone, on peut aussi modifier directement sur GitHub." },
  { c:"Outils", t:"Le terminal (ligne de commande)", x:"Le terminal permet de donner des ordres à l'ordinateur en écrivant des commandes. C'est un outil très utilisé par les développeurs et les administrateurs." },
  { c:"Outils", t:"Les API", x:"Une API est un pont qui permet à deux logiciels de communiquer. Par exemple, une application météo reçoit ses données grâce à une API." },
  { c:"Outils", t:"Les bases de données", x:"Une base de données stocke des informations de façon organisée : clients, produits, messages. Les applications y lisent et y écrivent en permanence." },
  { c:"Outils", t:"L'open source", x:"Un logiciel open source a un code public que chacun peut lire, utiliser et améliorer selon une licence. Linux et Firefox en sont de bons exemples." },
  { c:"Outils", t:"L'intelligence artificielle", x:"L'IA désigne des programmes entraînés sur de grandes quantités de données pour répondre ou créer du contenu. Ils peuvent se tromper : vérifie toujours les informations importantes." },

  // ===== IA =====
  { c:"IA", t:"Qu'est-ce qu'un prompt ?", x:"Un prompt est l'instruction que tu donnes à une IA. Plus il est clair, avec un contexte, un objectif et le format voulu, meilleure est la réponse." },
  { c:"IA", t:"Les erreurs de l'IA", x:"Une IA peut inventer des informations avec beaucoup d'assurance. Vérifie les faits importants, les chiffres et les sources avant de les utiliser ou de les publier." },
  { c:"IA", t:"Les outils d'IA au quotidien", x:"Il existe des assistants de discussion, des outils de recherche, de rédaction, de création d'images, de sons et de vidéos. Choisis l'outil selon ton besoin plutôt que de tous les essayer." },
  { c:"IA", t:"Automatiser avec le no-code", x:"Des outils no-code permettent d'enchaîner des tâches sans programmer : par exemple, enregistrer automatiquement chaque nouveau message dans un tableau. Ils font gagner du temps sur les tâches répétitives." },
  { c:"IA", t:"IA et données personnelles", x:"Ne colle jamais de mots de passe, de numéros de pièces d'identité ou d'informations privées dans un outil d'IA. Ce que tu écris peut être conservé ou traité par le service." }
];

(function () {
  var liste = document.getElementById("liste-lecons");
  var champ = document.getElementById("recherche");
  var zoneFiltres = document.getElementById("filtres");
  var compteur = document.getElementById("compteur");
  if (!liste || !champ || !zoneFiltres || !compteur) return;
  var categorie = "Tout";

  function normaliser(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function ouvrir(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.open = true;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function marquerFiltre(nom) {
    Array.prototype.forEach.call(zoneFiltres.children, function (b) {
      b.className = (b.textContent === nom) ? "actif" : "";
    });
  }

  function afficher() {
    var q = normaliser(champ.value);
    var n = 0;
    liste.innerHTML = "";
    lecons.forEach(function (l, i) {
      if (categorie !== "Tout" && l.c !== categorie) return;
      if (q && normaliser(l.t + " " + l.x).indexOf(q) === -1) return;
      n++;
      var d = document.createElement("details");
      d.className = "carte lecon";
      d.id = "lecon-" + i;
      var s = document.createElement("summary");
      s.textContent = (i + 1) + ". " + l.t;
      var p = document.createElement("p");
      p.textContent = l.x;
      var e = document.createElement("span");
      e.className = "etiquette";
      e.textContent = l.c;
      var a = document.createElement("a");
      a.className = "partage";
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "Partager sur WhatsApp";
      var lien = location.origin + "/apprendre.html#lecon-" + i;
      a.href = "https://wa.me/?text=" + encodeURIComponent(l.t + " : " + lien);
      d.appendChild(s);
      d.appendChild(p);
      d.appendChild(e);
      d.appendChild(a);
      liste.appendChild(d);
    });
    compteur.textContent = n + (n > 1 ? " leçons" : " leçon") + (categorie !== "Tout" ? " · " + categorie : "");
    if (n === 0) {
      liste.innerHTML = "<p class='sous-titre'>Aucune leçon trouvée. Essaie un autre mot.</p>";
    }
  }

  var cats = ["Tout"];
  lecons.forEach(function (l) { if (cats.indexOf(l.c) === -1) cats.push(l.c); });
  cats.forEach(function (c) {
    var b = document.createElement("button");
    b.textContent = c;
    b.onclick = function () {
      categorie = c;
      marquerFiltre(c);
      afficher();
    };
    zoneFiltres.appendChild(b);
  });
  marquerFiltre("Tout");

  var barre = document.createElement("div");
  barre.className = "filtres";
  function bouton(texte, action) {
    var b = document.createElement("button");
    b.textContent = texte;
    b.onclick = action;
    barre.appendChild(b);
  }
  bouton("Tout ouvrir", function () {
    Array.prototype.forEach.call(liste.querySelectorAll("details"), function (d) { d.open = true; });
  });
  bouton("Tout fermer", function () {
    Array.prototype.forEach.call(liste.querySelectorAll("details"), function (d) { d.open = false; });
  });
  bouton("🎲 Au hasard", function () {
    var i = Math.floor(Math.random() * lecons.length);
    categorie = "Tout";
    champ.value = "";
    marquerFiltre("Tout");
    afficher();
    ouvrir("lecon-" + i);
  });
  liste.parentNode.insertBefore(barre, liste);

  var debut = new Date(new Date().getFullYear(), 0, 0);
  var jourDeLAn = Math.floor((new Date() - debut) / 86400000);
  var iJour = jourDeLAn % lecons.length;
  var jour = document.createElement("div");
  jour.className = "carte jour";
  var etiq = document.createElement("span");
  etiq.className = "etiquette";
  etiq.textContent = "Leçon du jour";
  var tj = document.createElement("h3");
  tj.textContent = lecons[iJour].t;
  var pj = document.createElement("p");
  pj.textContent = lecons[iJour].x;
  jour.appendChild(etiq);
  jour.appendChild(tj);
  jour.appendChild(pj);
  champ.parentNode.insertBefore(jour, champ);

  champ.oninput = afficher;
  afficher();

  if (location.hash.indexOf("#lecon-") === 0) {
    ouvrir(location.hash.substring(1));
  }
})();
