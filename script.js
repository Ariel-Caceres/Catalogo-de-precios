
import { productos } from "./productos.js"

const contenedor = document.getElementById("productos");
const carritoDiv = document.getElementById("carrito");
const itemsDiv = document.getElementById("items");
const totalSpan = document.getElementById("total");
const cantidadSpan = document.getElementById("cantidad");
const input = document.getElementById("input");
const subir = document.getElementById("subir");


const onChangeHanlder = () => {
    input.addEventListener("input", (e) => {
        let palabra = e.target.value

        let productosEncontrados = productos.filter(p =>
            p.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(palabra.toLowerCase())
        )
        renderProductos(productosEncontrados);
        if (productosEncontrados.length == 0) {
            contenedor.innerHTML = `<span style="text-align:center">No se encontraron productos..</span>`
        }
    })
}
onChangeHanlder()



function renderProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(p => {
        if (p.precio !== 0) {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
        <div class="img-box">
        <img src="${p.img}" alt="${p.nombre}">
        </div>
        
        <h3 class="nombre">${p.nombre}</h3>
        <p>Rubro: ${p.rubro}</p>
        <span >Precio:</span>
        <span  class="precio">$${String(p.precio)}</span>
        `;

            contenedor.appendChild(card);
        }

    });
}
{/* <p class="codigo">Código: ${p.id}</p>   */ }
// <button onclick="agregar(${p.id})">Agregar</button>


const botones = document.querySelectorAll(".filtros button");

// render inicial
renderProductos(productos);

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        // estado visual
        botones.forEach(b => b.classList.remove("activo"));
        btn.classList.add("activo");

        const rubro = btn.dataset.rubro;

        if (rubro === "todos") {
            renderProductos(productos);
        } else {
            const filtrados = productos.filter(
                p => p.rubro === rubro
            );
            renderProductos(filtrados);
        }
    });
});


const toggleSubir = () => {
    subir.style.display = window.scrollY > 1800 ? "flex" : "none"
}

window.addEventListener("scroll", toggleSubir)
window.addEventListener("load", toggleSubir)



function agregar(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    itemsDiv.innerHTML = "";
    let total = 0;

    carrito.forEach((p, i) => {
        total += p.precio;
        itemsDiv.innerHTML += `
      <div class="item">
        <span>${p.nombre}</span>
        <button onclick="quitar(${i})">❌</button>
      </div>
    `;
    });

    totalSpan.textContent = total;
    cantidadSpan.textContent = carrito.length;
}

function quitar(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// document.getElementById("carrito-btn").onclick = () => {
//     carritoDiv.classList.toggle("oculto");
// };

// document.getElementById("vaciar").onclick = () => {
//     carrito = [];
//     actualizarCarrito();
// };

