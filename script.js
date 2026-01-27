
import { productos } from "./productos.js"

const contenedor = document.getElementById("productos");
const input = document.getElementById("input");
const subir = document.getElementById("subir");
const botones = document.querySelectorAll(".filtros button");
const selectOrden = document.getElementById("selectOrden");
const wsp = document.getElementById("wsp");

// const productosBase = productos;
// let productosAMostrar = [...productosBase];

// let ordenActual = "ordenar"

// const onChangeHanlder = () => {
//     input.addEventListener("input", (e) => {
//         let palabra = e.target.value
//         let productosEncontrados = productos.filter(p =>
//             p.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(palabra.toLowerCase())
//         )
//         renderProductos(productosEncontrados);
//         if (productosEncontrados.length == 0) {
//             contenedor.innerHTML =
//                 `
//         <div class="no-results">
//         <p>No se encontraron productos...</p>
//         <span onclick="volver()">Volver</span>
//         </div>


// `
//         }
//         input.addEventListener("keydown", (e) => {
//             if (e.key === "Enter") {
//                 input.blur()
//             }
//         })

//     })
// }




// botones.forEach(btn => {
//     btn.addEventListener("click", () => {
//         botones.forEach(b => b.classList.remove("activo"));
//         btn.classList.add("activo");

//         const rubro = btn.dataset.rubro;

//         if (rubro === "todos") {
//             renderProductos(productos);
//         } else {
//             const filtrados = productos.filter(
//                 p => p.rubro === rubro
//             )
//             ordenFuncion(ordenActual, filtrados)
//         }
//     });
// });

// const ordenFuncion = (orden, lista) => {


//     if (orden == "ordenar") {
//         renderProductos(productos)
//     }
//     if (orden == "A-Z") {
//         const ordenado = lista.sort((a, b) => a.nombre.localeCompare(b.nombre))

//         renderProductos(ordenado)
//     }
//     if (orden == "precio-menor") {
//         const ordenado = lista.sort((a, b) => a.precio - b.precio)
//         renderProductos(ordenado)
//     }
//     if (orden == "precio-mayor") {
//         const ordenado = lista.sort((a, b) => b.precio - a.precio)
//         renderProductos(ordenado)
//     }

// }

// selectOrden.addEventListener("change", (e) => {
//     let ordenActual = e.target.value

//     ordenFuncion(ordenActual, productos)
// })


// ordenFuncion(ordenActual, productos)
// onChangeHanlder()

const conversor = {
    "herramientas": "🔧",
    "griferia": "💧",
    "hogar-deco": "🏠",
    "bici-y-moto": "🏍",
    "iluminacion": "💡"

}

const productosBase = productos.filter(p => p.esta == "si");
let productosAMostrar = [...productosBase];

let filtroRubro = "todos";
let textoBusqueda = "";
let ordenActual = "ordenar";

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
    if (lista.length == 0) {
        console.log("no");
        contenedor.innerHTML =
            `
        <div class="no-results">
        <p>No se encontraron productos...</p>
        <span onclick="volver()">Volver</span>
        </div>


`

    }
}


function aplicarFiltros() {
    let resultado = [...productosBase];

    // 🔹 filtro por rubro
    if (filtroRubro !== "todos") {
        resultado = resultado.filter(p => p.rubro === filtroRubro);
    }

    // 🔹 búsqueda
    if (textoBusqueda.trim() !== "") {
        resultado = resultado.filter(p =>
            p.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(textoBusqueda.toLowerCase())
        );
    }

    // 🔹 orden
    if (ordenActual === "A-Z") {
        resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    if (ordenActual === "precio-menor") {
        resultado.sort((a, b) => a.precio - b.precio);
    }

    if (ordenActual === "precio-mayor") {
        resultado.sort((a, b) => b.precio - a.precio);
    }

    productosAMostrar = resultado;
    renderProductos(productosAMostrar);
}


botones.forEach(btn => {
    btn.addEventListener("click", () => {
        botones.forEach(b => b.classList.remove("activo"));
        btn.classList.add("activo");

        filtroRubro = btn.dataset.rubro;
        aplicarFiltros();
    });
});


selectOrden.addEventListener("change", (e) => {
    ordenActual = e.target.value;
    aplicarFiltros();
});


input.addEventListener("input", (e) => {
    textoBusqueda = e.target.value;
    aplicarFiltros();
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        input.blur()
    }
})


window.volver = () => {
    textoBusqueda = "";

    // reset UI
    input.value = "";

    aplicarFiltros();
};



const toggleSubir = () => {

    subir.style.display = window.scrollY > 1800 ? "flex" : "none"
    wsp.style.display = window.scrollY > 200 ? "flex" : "none"
}


window.addEventListener("scroll", toggleSubir)
window.addEventListener("load", toggleSubir)

aplicarFiltros();

console.log(productosBase.length);
