(function () {
  var reponses = [
    { mots: ["bonjour", "salut", "hello", "bonsoir"], texte: "Bonjour ! Je suis l'assistant de Rwagaza Tech Solution. Pose-moi une question sur le site." },
    { mots: ["projet", "realisation"], texte: "Tu peux voir mes projets sur la page Projets.", lien: "projets.html", nom: "Voir les projets" },
    { mots: ["apprendre", "cours", "tutoriel", "serveur", "algorithme", "code", "programmation"], texte: "Les articles et explications sont sur la page Apprendre.", lien: "apprendre.html", nom: "Aller à Apprendre" },
    { mots: ["qui", "daniel", "propos", "fondateur"], texte: "Daniel est le fondateur de Rwagaza Tech Solution. Son profil est sur la page À propos.", lien: "a-propos.html", nom: "Voir À propos" },
    { mots: ["contact", "contacter", "whatsapp", "mail", "facebook", "joindre"], texte: "Tu peux me contacter directement sur WhatsApp.", lien: "https://wa.me/243970521444", nom: "Ouvrir WhatsApp" }
  ];
  var defaut = "Je n'ai pas bien compris. Essaie : projets, apprendre, qui est Daniel, ou contact.";

  function normaliser(t) {
    return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  var css = document.createElement("style");
  css.textContent =
    ".ia-bouton{position:fixed;left:16px;bottom:16px;z-index:60;background:#ffa500;color:#111;border:0;font-weight:bold;padding:12px 18px;border-radius:30px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.5)}" +
    ".ia-panneau{position:fixed;left:16px;bottom:72px;z-index:60;width:min(340px,calc(100% - 32px));max-height:60vh;display:none;flex-direction:column;background:#1a1a1c;border:1px solid #ffa500;border-radius:14px;overflow:hidden}" +
    ".ia-panneau.ouvert{display:flex}" +
    ".ia-titre{background:#ffa500;color:#111;font-weight:bold;padding:10px 14px}" +
    ".ia-messages{padding:12px;overflow-y:auto;flex:1;font-size:.95rem}" +
    ".ia-msg{margin:6px 0;padding:8px 12px;border-radius:12px;max-width:90%}" +
    ".ia-bot{background:#2b2b2e;color:#f2f2f2}" +
    ".ia-moi{background:#ffa500;color:#111;margin-left:auto}" +
    ".ia-choix{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 8px}" +
    ".ia-choix button{background:transparent;color:#ffa500;border:1px solid #ffa500;border-radius:16px;padding:4px 10px;cursor:pointer}" +
    ".ia-saisie{display:flex;border-top:1px solid #2b2b2e}" +
    ".ia-saisie input{flex:1;background:#0c0c0d;color:#fff;border:0;padding:12px;font-size:1rem}" +
    ".ia-saisie button{background:#ffa500;border:0;padding:0 16px;font-weight:bold;cursor:pointer}";
  document.head.appendChild(css);

  var bouton = document.createElement("button");
  bouton.className = "ia-bouton";
  bouton.textContent = "🤖 Assistant";

  var panneau = document.createElement("div");
  panneau.className = "ia-panneau";

  var titre = document.createElement("div");
  titre.className = "ia-titre";
  titre.textContent = "Assistant Rwagaza Tech";

  var messages = document.createElement("div");
  messages.className = "ia-messages";

  var choix = document.createElement("div");
  choix.className = "ia-choix";

  var saisie = document.createElement("div");
  saisie.className = "ia-saisie";
  var champ = document.createElement("input");
  champ.placeholder = "Écris ta question...";
  var envoyer = document.createElement("button");
  envoyer.textContent = "OK";
  saisie.appendChild(champ);
  saisie.appendChild(envoyer);

  panneau.appendChild(titre);
  panneau.appendChild(messages);
  panneau.appendChild(choix);
  panneau.appendChild(saisie);
  document.body.appendChild(panneau);
  document.body.appendChild(bouton);

  function ajouter(texte, classe, lien, nom) {
    var m = document.createElement("div");
    m.className = "ia-msg " + classe;
    m.textContent = texte;
    if (lien) {
      m.appendChild(document.createElement("br"));
      var a = document.createElement("a");
      a.href = lien;
      a.textContent = nom;
      a.style.color = "#ffa500";
      if (lien.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      m.appendChild(a);
    }
    messages.appendChild(m);
    messages.scrollTop = messages.scrollHeight;
  }

  function repondre(question) {
    var q = normaliser(question);
    for (var i = 0; i < reponses.length; i++) {
      for (var j = 0; j < reponses[i].mots.length; j++) {
        if (q.indexOf(reponses[i].mots[j]) !== -1) {
          ajouter(reponses[i].texte, "ia-bot", reponses[i].lien, reponses[i].nom);
          return;
        }
      }
    }
    ajouter(defaut, "ia-bot");
  }

  function poser(texte) {
    if (!texte.trim()) return;
    ajouter(texte, "ia-moi");
    repondre(texte);
    champ.value = "";
  }

  ["Projets", "Apprendre", "Qui est Daniel ?", "Contact"].forEach(function (t) {
    var b = document.createElement("button");
    b.textContent = t;
    b.onclick = function () { poser(t); };
    choix.appendChild(b);
  });

  envoyer.onclick = function () { poser(champ.value); };
  champ.onkeydown = function (e) { if (e.key === "Enter") poser(champ.value); };
  bouton.onclick = function () { panneau.classList.toggle("ouvert"); };

  ajouter("Bonjour ! Je suis l'assistant du site. Que veux-tu savoir ?", "ia-bot");
})();
