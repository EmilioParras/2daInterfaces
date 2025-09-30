const API_URL = "https://vj.interfaces.jima.com.ar/api/v2";
const MAIN_CONTAINER = document.getElementById('main-container');
const LOADING = document.getElementById('loading');

function getGames(done) {
    const games = fetch(API_URL);

    games
        .then(response => response.json()) 
        .then(games => {
            done(games)
        });
}

getGames(games => {
    LOADING.style.display = "none"; //Oculto el loading una vez que cargue.
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add("game-card");
        
        gameCard.innerHTML =`
        <img src="${game.background_image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>⭐ ${game.rating}</p>
        <p>${game.genres.map(g => g.name).join(", ")}</p>
        `;
        
        MAIN_CONTAINER.appendChild(gameCard);
    });
  });
 