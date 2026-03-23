const productos = [
    { id: 1, nombre: "Tequila Blanco", precio: 470.00, img: "img/productos/Tequila_blanco.jpeg" },
    { id: 2, nombre: "Tequila Reposado", precio: 730.00, img: "img/productos/Tequila_reposado.jpeg" },
    { id: 3, nombre: "Tequila Añejo", precio: 959.00, img: "img/productos/Tequila_añejo.jpeg" },
    { id: 4, nombre: "Kit Degustación", precio: 600.00, img: "img/productos/Kit_de_degustacion.jpeg" },
    { id: 5, nombre: "Copas Tequileras", precio: 200.00, img: "img/productos/Copas_tequileras.jpg" },
    { id: 6, nombre: "Edición Especial", precio: 2365.00, img: "img/productos/Tequila_edicion_especial.jpeg" }
];

const catalogo = document.getElementById("catalogo");

productos.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto");

    tarjeta.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;

    catalogo.appendChild(tarjeta);
});