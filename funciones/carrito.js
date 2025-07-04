const contenedor = document.getElementById('carrito-container');
const total = document.getElementById('total');
const btnVaciar = document.getElementById('vaciar');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
  contenedor.innerHTML = '';
  let suma = 0;

  carrito.forEach(producto => {
    const item = document.createElement('div');
    item.classList.add('carrito-item');
    item.innerHTML = `
          <span>${producto.nombre}</span>
          <span>$${producto.precio}</span>
        `;
    contenedor.appendChild(item);
    suma += producto.precio;
  });

  total.textContent = `Total: $${suma}`;
}

btnVaciar.addEventListener('click', () => {
  localStorage.removeItem('carrito');
  carrito = [];
  mostrarCarrito();
  total.textContent = 'Carrito vacío';
});

mostrarCarrito();


