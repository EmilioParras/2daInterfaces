const API_URL = "https://vj.interfaces.jima.com.ar/api/v2";
const MAIN_CONTENT = document.getElementById("main-content");
const LOADING = document.getElementById("loading");

function getGames(done) {
    fetch(API_URL)
        .then(response => response.json())
        .then(games => done(games));
}

function createCard(game) {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    gameCard.innerHTML = `
        <img src="${game.background_image}" alt="${game.name}">
    `;

    return gameCard;
}

function createSection(genreName) {
    const section = document.createElement("section");
    section.classList.add("games-section");

    section.innerHTML = `
        <h2>${genreName}</h2>
        <div class="carousel-section">
            <button class="btn-left">&#8249;</button>
            <div class="games-section" id="carousel-${genreName.toLowerCase()}">

            </div>
            <button class="btn-right">&#8250;</button>
        </div>
    `;

    return section;
}

getGames(games => {
    LOADING.style.display = "none";

    const genresMap = {};

    games.forEach(game => {
        game.genres.forEach(genre => {
            if (!genresMap[genre.name]) {
                genresMap[genre.name] = [];
            }
            genresMap[genre.name].push(game);
        });
    });

    Object.keys(genresMap).forEach(genreName => {
        const section = createSection(genreName);
        MAIN_CONTENT.appendChild(section);

        const carousel = section.querySelector(".carousel");
        const leftBtn = section.querySelector(".carousel-btn.left");
        const rightBtn = section.querySelector(".carousel-btn.right");

        // --- Limitar a 10 juegos por carrusel ---
        const gamesToShow = genresMap[genreName].slice(0, 7);

        gamesToShow.forEach(game => {
            carousel.appendChild(createCard(game));
        });

        // --- Navegación del carrusel ---
        const scrollAmount = 180; // ancho de card + gap
        leftBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
        rightBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
});
