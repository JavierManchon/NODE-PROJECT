document.addEventListener('DOMContentLoaded', function() {
    fetchVideogames();
    document.getElementById('videogameForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addVideogame();
    });
});

async function fetchVideogames() {
    const response = await fetch('http://localhost:3000/videogames'); 
    const videogames = await response.json();
    const videogamesList = document.getElementById('videogamesList');
    videogamesList.innerHTML = '';
    console.log(videogames)
    videogames.forEach(videogame => {
        const videogameCard = `<div class="videogameCard">
                                <h3 class="videogame-name">${videogame.name}</h3>
                                <img src="${videogame.picture}" alt="Imagen del videojuego ${videogame.name}" class="videogame-image">
                                <p class="videogame-date"><span class="bold">Año de lanzamiento:</span> ${videogame.date}</p>
                                <p class="videogame-rating"><span class="bold">Nota:</span> ${videogame.rating}</p>
                                <p class="videogame-duration"><span class="bold">Duración:</span> ${videogame.duration}h</p>
                                <p class="videogame-genre"><span class="bold">Género:</span> ${videogame.genre}</p>
                            </div>`;
        videogamesList.insertAdjacentHTML('beforeend', videogameCard);
        const lastVideogameCard = videogamesList.lastElementChild;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteVideogame(videogame._id));
        lastVideogameCard.appendChild(deleteButton);
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

async function deleteVideogame(id) {
    try {
        await fetch(`http://localhost:3000/videogames/${id}`, {
            method: 'DELETE',
        });
        fetchVideogames();
    } catch (error) {
        console.error('Error deleting videogame:', error);
    }
}