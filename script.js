const data = {
    "characters": [
        {
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            "name": "Summer Smith",
            "status": "Alive",
            "species": "Human",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        }
    ]
}
// récupère chaque élément du document HTML avec l'ID "characters-container"
const charactersContainer = document.getElementById("characters-container");
// boucle forEach pour itérer sur chaque élément du tableau characters + actions
data.characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";
    charactersContainer.appendChild(card);
});