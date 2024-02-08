// API https://rickandmortyapi.com/

// récupère chaque élément du document HTML avec l'ID "characters-container"
const charactersContainer = document.getElementById("characters-container");
// boucle forEach pour itérer sur chaque élément du tableau characters + actions
data.characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";
    // Affichage des données
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
        <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
    `;
    // Utilisée pour ajouter l'élément card en tant qu'enfant de l'élément charactersContainer
    charactersContainer.appendChild(card);
});