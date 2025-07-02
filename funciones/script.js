let index = 0;
const slides = document.querySelectorAll('.carousel .slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) slide.classList.add('active');
  });
}

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Auto-slide
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

showSlide(index);



// Inicializar carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Capturar botones
const botones = document.querySelectorAll(".btn-comprar");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const precio = parseInt(boton.dataset.precio);

    const producto = { nombre, precio };

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`Agregaste "${nombre}" al carrito`);
  });
});
