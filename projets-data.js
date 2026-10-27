var projets = [
  {
    id: "site-web",
    titre: "Création de site web professionnel",
    cat: "Service",
    icone: "🌐",
    resume: "Un site clair, rapide et lisible sur téléphone, pour présenter ton activité et recevoir des messages directement sur WhatsApp.",
    pour: "Entrepreneurs, commerçants, associations, écoles et particuliers qui veulent être visibles sur Internet.",
    points: [
      "Des pages claires : accueil, présentation, services et contact",
      "Un affichage adapté au téléphone, à la tablette et à l'ordinateur",
      "Des boutons WhatsApp et e-mail pour que tes clients te contactent facilement",
      "La mise en ligne avec une adresse web",
      "Les bases du référencement pour apparaître sur Google",
      "Des explications pour comprendre comment fonctionne ton site"
    ],
    etapes: [
      { t: "Échange", x: "Tu me parles de ton activité, de tes objectifs et de ce que tu veux montrer." },
      { t: "Plan", x: "Je te propose la structure du site et les contenus à publier." },
      { t: "Réalisation", x: "Je construis le site et je te montre l'avancement." },
      { t: "Mise en ligne", x: "Je publie le site et je t'explique les bases pour le faire évoluer." }
    ],
    faq: [
      { q: "Combien ça coûte ?", r: "Le prix dépend du nombre de pages et de tes besoins. Écris-moi sur WhatsApp et je te donne un devis clair." },
      { q: "Combien de temps faut-il ?", r: "Cela dépend de ton projet. On fixe le délai ensemble avant de commencer." },
      { q: "Puis-je modifier le site moi-même ?", r: "Je t'explique les bases pour modifier les textes et les images." }
    ]
  },
  {
    id: "application",
    titre: "Site installable comme une application",
    cat: "Service",
    icone: "📱",
    resume: "Ton site devient une icône sur l'écran d'accueil, s'ouvre en plein écran et se charge plus vite, comme une vraie application.",
    pour: "Entreprises et projets qui veulent que leurs clients retrouvent leur site en un seul geste.",
    points: [
      "Une icône sur l'écran d'accueil du téléphone",
      "Une ouverture en plein écran, sans la barre du navigateur",
      "Un chargement plus rapide grâce à la mémoire du navigateur",
      "Une installation en quelques secondes, sans boutique d'applications",
      "Un fonctionnement sur Android avec Chrome"
    ],
    etapes: [
      { t: "Analyse", x: "On regarde ton site ou ton idée et ce que l'application doit faire." },
      { t: "Préparation", x: "Je prépare l'icône, le nom et les réglages de l'application." },
      { t: "Installation", x: "Je configure le site pour qu'il soit installable." },
      { t: "Test", x: "On vérifie ensemble que tout marche sur ton téléphone." }
    ],
    faq: [
      { q: "Est-ce une vraie application du Play Store ?", r: "C'est une application web installable depuis le navigateur. Elle peut ensuite être préparée pour le Google Play Store si tu le souhaites." },
      { q: "Faut-il refaire mon site ?", r: "Pas forcément. Un site existant peut souvent être adapté. Écris-moi pour qu'on regarde ton cas." }
    ]
  },
  {
    id: "accompagnement",
    titre: "Accompagnement pour débutants en informatique",
    cat: "Formation",
    icone: "🎓",
    resume: "Un parcours simple pour comprendre l'ordinateur, Internet et la programmation, pas à pas, avec des exemples concrets.",
    pour: "Toute personne qui débute : élèves, étudiants, adultes en reconversion ou simples curieux.",
    points: [
      "Des explications en mots simples, sans jargon inutile",
      "Des exercices pratiques après chaque notion",
      "Une bibliothèque de 65 leçons accessibles sur le site",
      "Des conseils pour choisir quoi apprendre en premier",
      "Des réponses à tes questions sur WhatsApp"
    ],
    etapes: [
      { t: "Ton niveau", x: "On voit d'où tu pars et ce que tu veux apprendre." },
      { t: "Ton programme", x: "Je te propose un ordre logique de leçons." },
      { t: "La pratique", x: "Tu appliques avec de petits exercices." },
      { t: "Ton projet", x: "Tu réalises quelque chose de concret que tu peux montrer." }
    ],
    faq: [
      { q: "Je suis totalement débutant, est-ce possible ?", r: "Oui. On commence par les bases : comment fonctionne un ordinateur, puis la logique, puis le code." },
      { q: "Faut-il un ordinateur ?", r: "Pas obligatoirement. On peut commencer avec un téléphone." }
    ],
    action: { texte: "Ouvrir les leçons", lien: "apprendre.html" }
  },
  {
    id: "guide-reseau",
    titre: "Guide : le réseau informatique de A à Z",
    cat: "Guide",
    image: "1790267074737.jpg",
    resume: "Un guide complet avec exercices pratiques pour comprendre, configurer, sécuriser et optimiser un réseau.",
    pour: "Étudiants, techniciens débutants et passionnés qui veulent maîtriser les bases des réseaux.",
    points: [
      "Les notions essentielles du réseau",
      "La configuration pas à pas",
      "La sécurité et les bonnes pratiques",
      "L'optimisation des performances",
      "Des études de cas réels",
      "Des exercices pratiques pour s'entraîner"
    ],
    etapes: [
      { t: "Contact", x: "Écris-moi pour connaître la disponibilité et le format du guide." },
      { t: "Choix", x: "On convient de la meilleure façon de te le remettre." },
      { t: "Lecture", x: "Tu avances à ton rythme, chapitre par chapitre." },
      { t: "Pratique", x: "Tu fais les exercices pour fixer les notions." }
    ],
    credit: "Auteur : Russell Eyenga, YaipDev Group.",
    faq: [
      { q: "Pour quel niveau ?", r: "Le guide va de la théorie à la pratique, avec des notions de base et des cas concrets." },
      { q: "Comment l'obtenir ?", r: "Écris-moi sur WhatsApp pour la disponibilité et les conditions." }
    ]
  },
  {
    id: "article-algorithme",
    titre: "Maîtrise algorithme, la programmation et le code",
    cat: "Article",
    image: "1790524879550.jpg",
    resume: "De débutant à développeur : comprendre les algorithmes, la programmation et le code, étape par étape.",
    pour: "Toute personne qui veut comprendre la logique avant d'écrire ses premières lignes de code.",
    points: [
      "Ce qu'est un algorithme, avec des exemples",
      "Ce qu'est la programmation",
      "Ce qu'est le code et dans quels langages on l'écrit",
      "Un point de départ pour toutes les autres leçons"
    ],
    etapes: [
      { t: "Lire", x: "Tu lis l'article, qui explique les trois notions de base." },
      { t: "Comprendre", x: "Tu retiens les idées avec les exemples." },
      { t: "Pratiquer", x: "Tu passes aux leçons et aux exercices du site." }
    ],
    faq: [
      { q: "Par où continuer après l'article ?", r: "Passe à la page Apprendre : 65 leçons classées par thème, avec recherche." }
    ],
    action: { texte: "Lire l'article", lien: "article1.html" }
  }
];
