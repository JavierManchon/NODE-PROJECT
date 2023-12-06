document.addEventListener('DOMContentLoaded', function() {
    fetchVideogames();
    document.getElementById('videogameForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addVideogame();
    });
});

async function fetchVideogames() {
    const response = await fetch('http://localhost:3000/videogames'); // Ajusta esta ruta a tu API
    const videogames = await response.json();
    const videogamesList = document.getElementById('videogamesList');
    videogamesList.innerHTML = '';
    console.log(videogames)
    videogames.forEach(videogame => {
        const videogameCard = `<div class="videogameCard">
                                <h3>${videogame.name}</h3>
                                <img src="${videogame.picture}" alt="Imagen del videojuego ${videogame.name}" class="videogame-image">
                                <p>Año de lanzamiento: Año ${videogame.date}</p>
                                <p>Nota: ${videogame.rating}</p>
                                <p>Duración: ${videogame.duration}h</p>
                                <p>Género: ${videogame.genre}</p>
                            </div>`;
        videogamesList.innerHTML += videogameCard;
    });
}

async function addVideogame() {
    const videogameData = {
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        rating: document.getElementById('rating').value,
        duration: document.getElementById('duration').value,
        genre: document.getElementById('genre').value
    };

    await fetch('http://localhost:3000/videogames', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(videogameData),
    });

    fetchVideogames();
}