// Ajoute chaque nouvelle publication EN HAUT de la liste.
const publications = [
  {
    titre: "Les types de serveurs",
    description: "Les 9 principaux types de serveurs expliqués simplement.",
    image: "1000028658.jpg",
    categorie: "Apprendre",
    lien: "apprendre.html",
    bouton: "Voir"
  },
  {
    titre: "Maîtrise algorithme, la programmation & le code",
    description: "De débutant à développeur.",
    image: "1790524879550.jpg",
    categorie: "Article",
    lien: "article1.html",
    bouton: "Lire l'article"
  }
];

const conteneur = document.getElementById("liste-publications");
publications.forEach(function (p) {
  conteneur.innerHTML += `
    <div class="carte">
      <img src="${p.image}" alt="${p.titre}">
      <span class="etiquette">${p.categorie}</span>
      <h3>${p.titre}</h3>
      <p>${p.description}</p>
      <a class="bouton" href="${p.lien}">${p.bouton}</a>
    </div>`;
});
