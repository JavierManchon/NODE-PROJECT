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
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('date', document.getElementById('date').value);
    formData.append('rating', document.getElementById('rating').value);
    formData.append('duration', document.getElementById('duration').value);
    formData.append('genre', document.getElementById('genre').value);
    formData.append('picture', document.getElementById('picture').files[0]);

    await fetch('http://localhost:3000/videogames', { 
        method: 'POST',
        body: formData,
    });

    fetchVideogames();
}