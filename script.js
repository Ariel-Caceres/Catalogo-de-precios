
import { productos } from "./productos.js"

const contenedor = document.getElementById("productos");
const input = document.getElementById("input");
const subir = document.getElementById("subir");
const botones = document.querySelectorAll(".filtros button");


const onChangeHanlder = () => {
    input.addEventListener("input", (e) => {
        let palabra = e.target.value
        let productosEncontrados = productos.filter(p =>
            p.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(palabra.toLowerCase())
        )
        renderProductos(productosEncontrados);
        if (productosEncontrados.length == 0) {
            contenedor.innerHTML =
                `
        <div class="no-results">
        <p>No se encontraron productos...</p>
        <span onclick="volver()">Volver</span>
        </div>
        
       
`
        }
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                input.blur()
            }
        })

    })
}

window.volver = () => {
    input.value = "";
    renderProductos(productos);
    botones.forEach(b => b.classList.remove("activo"))
};
const toggleSubir = () => {
    subir.style.display = window.scrollY > 1800 ? "flex" : "none"
}

const conversor = {
    "herramientas": "🔧",
    "griferia": "💧",
    "hogar-deco": "🏠",
    "bici-y-moto": "🏍",
    "iluminacion": "💡"

}
console.log(conversor["herramientas"]);


function renderProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(p => {
        if (p.precio !== 0) {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
        <div class="img-box" >
        <img src="${p.img}" alt="${p.nombre}">
        </div>
        
        <h3 class="nombre">${p.nombre}</h3>
        <span class="rubro"> ${p.rubro.toUpperCase()}${conversor[p.rubro]}</span>
        <span class="precio-name">Precio:</span>
        <span  class="precio">$${p.precio}</span>
`;

            contenedor.appendChild(card);
        }

    });
}
// console.log(productos.filter(p => p.precio == 0));


botones.forEach(btn => {
    btn.addEventListener("click", () => {
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




window.addEventListener("scroll", toggleSubir)
window.addEventListener("load", toggleSubir)


renderProductos(productos);
onChangeHanlder()

