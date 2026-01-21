const productos = [
    {
        id: 1,
        nombre: "Candado dorado 50mm",
        precio: 1800,
        rubro: "herramientas",
        img: "imgs/herramientas/candado-dorado-50mm.jpeg"
    },
    {
        id: 2,
        nombre: "Cepillo de acero rojo",
        precio: 900,
        rubro: "herramientas",
        img: "imgs/herramientas/cepillo-de-acero-rojo.jpeg"
    },
    {
        id: 3,
        nombre: "Cuchara albañil 8\"",
        precio: 3100,
        rubro: "herramientas",
        img: "imgs/herramientas/cichara-albañol-8``.jpeg"
    },
    {
        id: 4,
        nombre: "Cinta 5mt Giantop",
        precio: 1400,
        rubro: "herramientas",
        img: "imgs/herramientas/cinta-5mt-giantop.jpeg"
    },
    {
        id: 5,
        nombre: "Cinta 10mt Giantop",
        precio: 4200,
        rubro: "herramientas",
        img: "imgs/herramientas/cinta-10m-giantop.jpeg"
    },
    {
        id: 6,
        nombre: "Destornillador 7pcs bolsa",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/dest-x7pc-bolsa .jpeg"
    },
    {
        id: 7,
        nombre: "Destornillador 6pcs taxi blister",
        precio: 2600,
        rubro: "herramientas",
        img: "imgs/herramientas/destor-6pc-taxi-blister.jpeg"
    },
    {
        id: 8,
        nombre: "Destornillador 21pcs",
        precio: 11700,
        rubro: "herramientas",
        img: "imgs/herramientas/destor-21pc.jpeg"
    },
    {
        id: 9,
        nombre: "Destornillador celular",
        precio: 2350,
        rubro: "herramientas",
        img: "imgs/herramientas/destor-celu.jpeg"
    },
    {
        id: 10,
        nombre: "Disco 115mm mayusta",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-115mm-mayusta.jpeg"
    },
    {
        id: 11,
        nombre: "Disco 180mm 24T madera",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-180mm-24ft-madera.jpeg"
    },
    {
        id: 12,
        nombre: "Disco 180mm 40T madera",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-180mm-40dt-madera.jpeg"
    },
    {
        id: 13,
        nombre: "Disco 180mm corte",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-180mm-corte.jpeg"
    },
    {
        id: 14,
        nombre: "Disco 180mm lija",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-180mm-lases.jpeg"
    },
    {
        id: 15,
        nombre: "Disco 180mm turbo",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-180mm-turbo.jpeg"
    },
    {
        id: 16,
        nombre: "Disco madera 24T 115mm",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-amdera-24-115mm.jpeg"
    },
    {
        id: 17,
        nombre: "Disco corte 4.5\" bisso",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-cirte-4.5-bisso.jpeg"
    },
    {
        id: 18,
        nombre: "Disco corte 115mm",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-corte-115mm.jpeg"
    },
    {
        id: 19,
        nombre: "Disco flap 100",
        precio: 850,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-flap-100.jpeg"
    },
    {
        id: 20,
        nombre: "Disco flap 120",
        precio: 850,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-flap-120.jpeg"
    },
    {
        id: 21,
        nombre: "Disco flap A-40",
        precio: 850,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-flap-a-40.jpeg"
    },
    {
        id: 22,
        nombre: "Disco láser 115mm",
        precio: 1800,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-lases-115mm.jpeg"
    },
    {
        id: 23,
        nombre: "Disco madera 30T bisso",
        precio: 3100,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-madera-30t-bisso.jpeg"
    },
    {
        id: 24,
        nombre: "Disco madera 40DT 115mm",
        precio: 1800,
        rubro: "herramientas",
        img: "imgs/herramientas/DISCO-MADERA-40DT-115MM.jpeg"
    },
    {
        id: 25,
        nombre: "Disco turbo 4.5\" bisso",
        precio: 2150,
        rubro: "herramientas",
        img: "imgs/herramientas/DISCO-TURBO-4.5-BISSO.jpeg"
    },
    {
        id: 26,
        nombre: "Disco turbo 115mm",
        precio: 1800,
        rubro: "herramientas",
        img: "imgs/herramientas/disco-turbo-115mm.jpeg"
    },
    {
        id: 28,
        nombre: "Eslinga remolque acero 8mm",
        precio: 9600,
        rubro: "herramientas",
        img: "imgs/herramientas/eslinga-remolue-acero-8mm.jpeg"
    },
    {
        id: 29,
        nombre: "Espátula 3\" BS45",
        precio: 1650,
        rubro: "herramientas",
        img: "imgs/herramientas/espatula-3``-bs45.jpeg"
    },
    {
        id: 30,
        nombre: "Espátula 4\" BS46",
        precio: 1800,
        rubro: "herramientas",
        img: "imgs/herramientas/espatula-4``-bs46.jpeg"
    },
    {
        id: 31,
        nombre: "Espátula 6\" BS48",
        precio: 2400,
        rubro: "herramientas",
        img: "imgs/herramientas/espatula-6``-bs48.jpeg"
    },
    {
        id: 32,
        nombre: "Formón x4pcs bolsa",
        precio: 6500,
        rubro: "herramientas",
        img: "imgs/herramientas/formon-x4pc-bolsa.900183.jpeg"
    },
    {
        id: 33,
        nombre: "Hidrolavadora",
        precio: 45000,
        rubro: "herramientas",
        img: "imgs/herramientas/hidrolabadora.jpeg"
    },
    {
        id: 34,
        nombre: "Inflador compresor auto azul",
        precio: 13500,
        rubro: "herramientas",
        img: "imgs/herramientas/inflador-compresor-caja-azul-1521.jpeg"
    },
    {
        id: 35,
        nombre: "Juego destector de billetes",
        precio: 3000,
        rubro: "herramientas",
        img: "imgs/herramientas/lapiz-detector-de-billete.jpeg"
    },
    {
        id: 36,
        nombre: "Lija 100-120-180-80 amarillo",
        precio: 350,
        rubro: "herramientas",
        img: "imgs/herramientas/lija-100-120-180-80-amarillo.jpeg"
    },
    {
        id: 37,
        nombre: "Llave 3 bocas SA220",
        precio: 1650,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-3-boca-y-saa220.jpeg"
    },
    {
        id: 38,
        nombre: "Llave Allen grande BS109",
        precio: 4200,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-alen-grande-bs109.jpeg"
    },
    {
        id: 39,
        nombre: "Llave Allen mediana BS110",
        precio: 4900,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-alen-mediana-bs110.jpeg"
    },
    {
        id: 40,
        nombre: "Llave Allen chica BS111",
        precio: 3600,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-allen-chica-bs111.jpeg"
    },
    {
        id: 41,
        nombre: "Llaves combinadas x8pcs",
        precio: 19500,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-combinada-x8pcs-bisso bs29.jpeg"
    },
    {
        id: 42,
        nombre: "Llaves combinadas x12pcs",
        precio: 26000,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-combinada-x12pcs-2589.jpeg"
    },
    {
        id: 43,
        nombre: "Llaves combinadas x14pcs",
        precio: 31500,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-combinada-x14pcs-2590.jpeg"
    },
    {
        id: 44,
        nombre: "Llave de impacto SD7001",
        precio: 0,
        rubro: "herramientas",
        img: "imgs/herramientas/llave-de-impacto-sd7001.jpeg"
    },
    {
        id: 45,
        nombre: "Martillo 500gr Bisso",
        precio: 7200,
        rubro: "herramientas",
        img: "imgs/herramientas/martillo-500gr bisso.jpeg"
    },
    {
        id: 46,
        nombre: "Martillo de fibra 80oz",
        precio: 4900,
        rubro: "herramientas",
        img: "imgs/herramientas/martillo-de-fibra-80oz.jpeg"
    },













    {

        id: 47,
        nombre: "Anafe Electrico",
        precio: 0,
        rubro: "cocina",
        img: "imgs/cocina/anafe-electrico.jpeg"
    },
    {
        id: 48,
        nombre: "Soporte de tv 15 22 zo11 om",
        precio: 32500,
        rubro: "hogar-deco",
        img: "imgs/hogar-deco/soporte-de-tv-15-33-zo11-om.jpeg"
    },
    {
        id: 49,
        nombre: "Soporte de tv 26 55 p7 om",
        precio: 28000,
        rubro: "hogar-deco",
        img: "imgs/hogar-deco/soporte-de-tv-26-55-p7-om.jpeg"
    },
    {
        id: 50,
        nombre: "Timbre con enchufe",
        precio: 8000,
        rubro: "hogar-deco",
        img: "imgs/hogar-deco/timbre-con-enchufe.jpeg"
    },
    {
        id: 50,
        nombre: "Timbre pila y pila",
        precio: 6300,
        rubro: "hogar-deco",
        img: "imgs/hogar-deco/timbre-pila-y-pila.jpeg"
    },
    {
        id: 51,
        nombre: "Linterna recargable caja verde",
        precio: 4700,
        rubro: "iluminacion",
        img: "imgs/iluminacion/linterna-recargable-caja-verde.jpeg"
    },
    {
        id: 52,
        nombre: "Luz de 60 led con usb",
        precio: 0,
        rubro: "iluminacion",
        img: "imgs/iluminacion/luz-de-60led-om-660-con.usb.jpeg"
    },
    {
        id: 53,
        nombre: "Panel 12w calido cuadrado redondo",
        precio: 3600,
        rubro: "iluminacion",
        img: "imgs/iluminacion/panel-12wts-calido-cuadrado-redondo.jpeg"
    },
    {
        id: 54,
        nombre: "Reflector 10w nivhus",
        precio: 4500,
        rubro: "iluminacion",
        img: "imgs/iluminacion/reflector-10w-nivhus.jpeg"
    },
    {
        id: 55,
        nombre: "Reflector 30w nivhus",
        precio: 7800,
        rubro: "iluminacion",
        img: "imgs/iluminacion/reflector-30w-nivhus.jpeg"
    },
    {
        id: 56,
        nombre: "Ducha de mano rory",
        precio: 6300,
        rubro: "griferia",
        img: "imgs/griferia/ducha-de-mano-rory.jpeg"
    },
    {
        id: 57,
        nombre: "Griferia f319",
        precio: 8500,
        rubro: "griferia",
        img: "imgs/griferia/griferia-f319.jpeg"
    },
    {
        id: 58,
        nombre: "Griferia ss 3009",
        precio: 30000,
        rubro: "griferia",
        img: "imgs/griferia/griferia-ss-3009.jpeg"
    },
    {
        id: 59,
        nombre: "Pico j acero inoxidable 900298",
        precio: 3800,
        rubro: "griferia",
        img: "imgs/griferia/pico-j-acero-inoxidable-900298.jpeg"
    },

    {
        id: 60,
        nombre: "Chaleco verde y naranja",
        precio: 1980,
        rubro: "bici-y-moto",
        img: "imgs/seguridad/chaleco-verde-y-naranja.jpeg"
    },
    {
        id: 61,
        nombre: "Parche kit x600",
        precio: 0,
        rubro: "bici-y-moto",
        img: "imgs/bici-y-moto/parche-kit-x600.jpeg"
    },
    {
        id: 62,
        nombre: "Parche numero 2",
        precio: 1800,
        rubro: "bici-y-moto",
        img: "imgs/bici-y-moto/parche-numero-2.jpeg"
    },
    {
        id: 63,
        nombre: "Parche numero 3",
        precio: 2400,
        rubro: "bici-y-moto",
        img: "imgs/bici-y-moto/parche-numero-3.jpeg"
    },
    {
        id: 64,
        nombre: "Parche numero 4",
        precio: 3000,
        rubro: "bici-y-moto",
        img: "imgs/bici-y-moto/parche-numero-4.jpeg"
    },
    {
        id: 65,
        nombre: "Parche solucion caja",
        precio: 7200,
        rubro: "bici-y-moto",
        img: "imgs/bici-y-moto/parche-solucion-caja.jpeg"
    }

];


const contenedor = document.getElementById("productos");
const carritoDiv = document.getElementById("carrito");
const itemsDiv = document.getElementById("items");
const totalSpan = document.getElementById("total");
const cantidadSpan = document.getElementById("cantidad");

let carrito = [];



function renderProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="img-box">
            <img src="${p.img}" alt="${p.nombre}">
          </div>

          <p class="codigo">Código: ${p.id}</p>
          <h3>${p.nombre}</h3>
          <p>Rubro: ${p.rubro}</p>
          <p>Precio: $${p.precio}</p>
          <button onclick="agregar(${p.id})">Agregar</button>
        `;

        contenedor.appendChild(card);
    });
}


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

document.getElementById("carrito-btn").onclick = () => {
    carritoDiv.classList.toggle("oculto");
};

document.getElementById("vaciar").onclick = () => {
    carrito = [];
    actualizarCarrito();
};

