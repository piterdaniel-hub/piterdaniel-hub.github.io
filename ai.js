(function () {
  var SITE = window.SITE || {};
  var URL_IA = SITE.urlIA;
  if (!URL_IA) return;

  var vieuxBouton = document.querySelector(".ia-bouton");
  var vieuxPanneau = document.querySelector(".ia-panneau");
  if (vieuxBouton) vieuxBouton.style.display = "none";
  if (vieuxPanneau) vieuxPanneau.style.display = "none";

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  }

  var historique = [];
  var occupe = false;

  var bouton = el("button", "ia-bouton", "🧠 Assistant IA");
  bouton.type = "button";
  var panneau = el("div", "ia-panneau");
  var titre = el("div", "ia-titre");
  titre.appendChild(el("div", null, "Assistant IA de Rwagaza Tech"));
  var fermer = el("button", null, "✕");
  fermer.type = "button";
  fermer.setAttribute("aria-label", "Fermer");
  fermer.style.cssText = "background:transparent;border:0;font-size:1.1rem;cursor:pointer;";
  titre.appendChild(fermer);

  var messages = el("div", "ia-messages");
  var pied = el("div", "ia-choix");
  var wa = el("a", null, "Parler à Daniel sur WhatsApp");
  wa.href = "https://wa.me/" + (SITE.whatsapp || "243967811702");
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.style.cssText = "color:#ffa500;font-size:.9rem;";
  pied.appendChild(wa);

  var saisie = el("div", "ia-saisie");
  var champ = el("input");
  champ.placeholder = "Pose ta question...";
  var envoyer = el("button", null, "OK");
  envoyer.type = "button";
  saisie.appendChild(champ);
  saisie.appendChild(envoyer);

  panneau.appendChild(titre);
  panneau.appendChild(messages);
  panneau.appendChild(pied);
  panneau.appendChild(saisie);
  document.body.appendChild(panneau);
  document.body.appendChild(bouton);

  function ajouter(texte, classe) {
    var m = el("div", "ia-msg " + classe);
    m.style.whiteSpace = "pre-wrap";
    m.textContent = texte;
    messages.appendChild(m);
    messages.scrollTop = messages.scrollHeight;
    return m;
  }

  ajouter("Bonjour ! Je suis l'assistant IA du site (une intelligence artificielle, pas Daniel). Je peux répondre à tes questions et t'orienter. Pour un devis ou un paiement, Daniel te répond sur WhatsApp.", "ia-bot");

  function poser(texte) {
    texte = texte.trim();
    if (!texte || occupe) return;
    ajouter(texte, "ia-moi");
    champ.value = "";
    historique.push({ role: "user", content: texte.slice(0, 600) });
    occupe = true;
    var attente = ajouter("...", "ia-bot");
    var controle = new AbortController();
    var minuteur = setTimeout(function () { controle.abort(); }, 25000);

    fetch(URL_IA, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: historique.slice(-10) }),
      signal: controle.signal
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.reponse) {
          attente.textContent = d.reponse;
          historique.push({ role: "assistant", content: d.reponse });
        } else {
          attente.textContent = "Je n'ai pas pu répondre pour le moment. Écris à Daniel sur WhatsApp.";
          historique.pop();
        }
      })
      .catch(function () {
        attente.textContent = "Connexion impossible pour le moment. Écris à Daniel sur WhatsApp.";
        historique.pop();
      })
      .then(function () {
        clearTimeout(minuteur);
        occupe = false;
        messages.scrollTop = messages.scrollHeight;
      });
  }

  envoyer.onclick = function () { poser(champ.value); };
  champ.onkeydown = function (e) { if (e.key === "Enter") poser(champ.value); };
  bouton.onclick = function () { panneau.classList.toggle("ouvert"); };
  fermer.onclick = function () { panneau.classList.remove("ouvert"); };
})();
