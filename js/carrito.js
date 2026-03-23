let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

function eliminarProducto(id) {
    carrito = carrito.filter(p => p.id !== id);
    actualizarCarrito();
}

function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    calcularTotal();
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    carrito.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("item-carrito");

        item.innerHTML = `
            <span>${producto.nombre} (${producto.cantidad} pieza${producto.cantidad > 1 ? 's' : ''})</span>
            <span>$${producto.precio * producto.cantidad}</span>
            <button onclick="eliminarProducto(${producto.id})">X</button>
        `;

        lista.appendChild(item);
    });
}

function calcularTotal() {
    let subtotal = 0;

    carrito.forEach(producto => {
        subtotal += producto.precio * producto.cantidad;
    });

    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("iva").textContent = iva.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

document.getElementById("vaciar").addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});

mostrarCarrito();
calcularTotal();