function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

const pets = [
    {
        name: "Charlie",
        breed: "Golden Retriever",
        image: "images/dog.jpg"
    },
    {
        name: "Milo",
        breed: "British Shorthair",
        image: "images/cat.jpg"
    }
];

// Get the container
const petList = document.getElementById('pet-list');

// Loop through pets and add to the page
for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    petList.innerHTML += `
            <div class="pet">
                <img src="${pet.image}" alt="Cute ${pet.breed}">
                <p>${pet.name} - ${pet.breed}</p>
                <button onclick="adoptPet()">Adopt Now</button>
            </div>
        `;
}
