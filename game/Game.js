const playBtn = document.querySelector('#play');
const overlay = document.querySelector('.running');
const content = document.querySelector('.game-execution');

const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.media-list img');
let currentIndex = 0;
let autoChange;

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

playBtn.addEventListener("click", toggleMenu);
function toggleMenu() {                                                     //shows or hides navigation menu
  document.querySelector(".running").classList.toggle("show");
}

overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    overlay.classList.remove("show");
  }
});


function showImage(index) {
  const newSrc = thumbnails[index].src;
  setTimeout(() => {
    mainImg.src = newSrc;
  }, 300);

  thumbnails.forEach(img => img.classList.remove('active'));
  thumbnails[index].classList.add('active');
  currentIndex = index;
}

function startAutoChange() {
  autoChange = setInterval(() => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showImage(currentIndex);
  }, 3000);
}

// Evento de click en miniaturas
thumbnails.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    clearInterval(autoChange);
    showImage(i);
  });
});

showImage(0);
startAutoChange();



tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 1️⃣ Quita 'active' de todos los botones y contenidos
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // 2️⃣ Activa el botón clickeado
    button.classList.add('active');

    // 3️⃣ Busca el contenido correspondiente usando data-tab
    const targetId = button.getAttribute('data-tab');
    const targetContent = document.getElementById(targetId);
    targetContent.classList.add('active');
  });
});