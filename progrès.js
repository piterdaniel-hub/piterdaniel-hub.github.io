(function () {
  var CLE = "lecons-lues";
  var liste = document.getElementById("liste-lecons");
  var champ = document.getElementById("recherche");
  if (!liste || !champ || typeof lecons === "undefined") return;
  var total = lecons.length;

  function lire() {
    try { return JSON.parse(localStorage.getItem(CLE)) || []; } catch (e) { return []; }
  }
  function ecrire(t) {
    try { localStorage.setItem(CLE, JSON.stringify(t)); } catch (e) {}
  }
  var lues = lire();

  // Carte de progression
  var carte = document.createElement("div");
  carte.className = "carte suivi";
  var titre = document.createElement("h3");
  titre.textContent = "Ta progression";
  var texte = document.createElement("p");
  var piste = document.createElement("div");
  piste.className = "piste";
  var rempli = document.createElement("div");
  rempli.className = "rempli";
  piste.appendChild(rempli);
  var effacer = document.createElement("button");
  effacer.type = "button";
  effacer.className = "lu-btn";
  effacer.textContent = "Tout effacer";
  carte.appendChild(titre);
  carte.appendChild(texte);
  carte.appendChild(piste);
  carte.appendChild(effacer);
  champ.parentNode.insertBefore(carte, champ);

  function maj() {
    var n = lues.filter(function (x) { return x >= 0 && x < total; }).length;
    texte.textContent = n + " leçon" + (n > 1 ? "s" : "") + " lue" + (n > 1 ? "s" : "") + " sur " + total;
    rempli.style.width = (total ? (n / total) * 100 : 0) + "%";
  }

  function decorer() {
    Array.prototype.forEach.call(liste.querySelectorAll("details.lecon"), function (d) {
      if (d.querySelector(".lu-btn")) return;
      var i = parseInt(d.id.replace("lecon-", ""), 10);
      var b = document.createElement("button");
      b.type = "button";
      b.className = "lu-btn";
      function etat() {
        var lue = lues.indexOf(i) !== -1;
        b.textContent = lue ? "✓ Lue (annuler)" : "Marquer comme lue";
        d.classList.toggle("lue", lue);
      }
      b.onclick = function () {
        var k = lues.indexOf(i);
        if (k === -1) lues.push(i); else lues.splice(k, 1);
        ecrire(lues);
        etat();
        maj();
      };
      etat();
      d.appendChild(b);
    });
  }

  effacer.onclick = function () {
    if (!window.confirm("Effacer toute ta progression ?")) return;
    lues = [];
    ecrire(lues);
    Array.prototype.forEach.call(liste.querySelectorAll(".lu-btn"), function (b) {
      b.parentNode.removeChild(b);
    });
    decorer();
    maj();
  };

  // Les leçons sont recréées à chaque recherche ou filtre : on les décore à nouveau
  new MutationObserver(decorer).observe(liste, { childList: true });
  decorer();
  maj();
})();
