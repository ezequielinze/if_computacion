// objeto
class Producto {
    constructor(id, modelo, precio, img) {
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
        this.img = img;
    }
}
// array
const productos = [
    new Producto(1, "Microprocesador Intel Celeron", 9500, "./img/Microprocesador Intel Celeron.png"),
    new Producto(2, "Microprocesador Intel Core I5", 22500, "./img/Microprocesador Intel Core I5.png"),
    new Producto(3, "Microprocesador Intel Core I7", 48000, "./img/Microprocesador Intel Core I7.png"),
    new Producto(4, "Microprocesador Intel Pentium", 11000, "./img/Microprocesador Intel Pentium.png"),
    new Producto(5, "Microprocesador Intel Core i3", 13500, "./img/Procesador Intel Core i3.png"),
    new Producto(6, "motherboard asus prime h510", 13000, "./img/Motherboard Asus Prime H510M.png")
];
const carrito = [];




// creamos las card
function mostramosProducto() {
    const limpiarPagina = document.getElementById("contenedor");
    limpiarPagina.innerHTML = "";
    const limpiarCarrito = document.getElementById("productosCarrito");
    limpiarCarrito.innerHTML = "";
    for (i of productos) {
        // cremos elementos
        const card = document.createElement("div");
        const foto = document.createElement("img");
        const producto = document.createElement("h2");
        const precio = document.createElement("h3");
        // const conbtn = document.createElement("div");
        const boton = document.createElement("button");

        // para cargar id:
        //card.setAttribute('id','card');
        // agregamos clases
        card.className = "card";
        foto.className = "foto";
        producto.className = "producto";
        precio.className = "precio";
        // conbtn.className = "conbtn";
        boton.className = "boton";

        // agregamos contenido

        card.id = i.id;
        foto.src = i.img;
        producto.append(i.modelo);
        precio.append(i.precio);
        // conbtn.innerHTML = "conboton";
        boton.append("Agregar Carrito");
        boton.id = i.id;


        // agregamos nodos al div card
        card.append(foto, producto, precio, boton);

        // agregamos la card al div contenedor
        contenedor.append(card);

        // creamos eventos
        boton.addEventListener("click", repuestaCompra)
        // evento:
        function repuestaCompra() {
            const productoComprado = productos.find(producto => producto.id == boton.id);
            //  alert(productoComprado.id + " " + productoComprado.modelo + " $" + productoComprado.precio);        
            carrito.push(productoComprado);
            // cargamos al almasenamiento local
            jsonCargar()

            Toastify({

                text: 'AGREGASTE AL CARRITO: ' + productoComprado.modelo,

                duration: 3000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to right, 00054B, 00054B)",
                },
            }).showToast();

        }
    }



    // creamos boton carrito
    const botonCarrito = document.getElementById("botonCarrito");
    botonCarrito.innerHTML = "<button>Ver Carrito</button>";
    // creamos eventos 
    botonCarrito.addEventListener("click", mostrarCarrito)
}

llamarStorage()
mostramosProducto()

// mostramos carrito cuando hace click
function mostrarCarrito() {


    // dejar pagina limpia del contenedor
    const limpiarCarrito = document.getElementById("contenedor");
    limpiarCarrito.innerHTML = "";
    const limpiarCarrito2 = document.getElementById("botonCarrito");
    limpiarCarrito2.innerHTML = "";
    const productosCarrito = document.getElementById("productosCarrito");
    productosCarrito.innerHTML = "";

    carrito.forEach(producto => {
        //cremos los nodos

        const productoCarrito = document.createElement("h2");
        const precioCarrito = document.createElement("h2");

        // cargamos los nodos con el contenbido

        productoCarrito.append("-" + producto.modelo);
        precioCarrito.append("$" + producto.precio);

        // cargamos variables al id del html
        productosCarrito.append(productoCarrito, precioCarrito);

    })

    sumaTotal()

    // creamos boton volver y borrar
    const botonVolver2 = document.createElement("button");
    const botonBorrar2 = document.createElement("button");
    botonVolver2.append('volver');
    botonBorrar2.append('borrar carrito');
    contenedor.append(botonBorrar2, botonVolver2)
    // creamos eventos 
    botonVolver2.addEventListener("click", mostramosProducto)
    botonBorrar2.addEventListener("click", eliminarCarrito)

}

// eliminar storage
function eliminarCarrito() {



    localStorage.clear();
    //for para eliminar el carrito que es el que queda guardado
    let a = carrito.length;

    for (let i = 0; i < a; i++) {
        carrito.pop()
    }
    


    // dejar pagina limpia del contenedor
    const productosCarrito = document.getElementById("productosCarrito");
    productosCarrito.innerHTML = "";
}

// cargar los datos del carrito localStorage en json
function jsonCargar() {
    // // probando localstorage: deja guardado el modelo pero si agregas otro lo pisa
    // let carritolocal = localStorage.setItem("modelo", productoComprado.modelo)
    // // probando sessionstorage: deja guardado el modelo, si reinicias queda igual pero si cerras la paguina se elimina 
    // let carritosession = sessionStorage.setItem("modelo", productoComprado.modelo)
    // json pasa a estrin un array o valor
    let carritojson = JSON.stringify(carrito)
    // como string lo podemos cargar en localstorage para tener todos los datos del producto o los que necesitemso
    localStorage.setItem("modelo", carritojson)
}

// sumar al carrito los datos del localStorage
function llamarStorage() {
    // repuestaLocal: recibe el array en string
    let repuestaLocal = localStorage.getItem("modelo");
    // respuestaJson: volvemos el string a array
    let repuestaJson = JSON.parse(repuestaLocal);
    if (repuestaJson) {
        // recupero el array json y lo paso al array carrito
        repuestaJson.forEach(t => { carrito.push(t) })
    } else {
        // falta de agregar cosas
        console.log("no hay");
    }
}

function sumaTotal(){
    const total = carrito.reduce((a,b) => a + b.precio, 0)
     //cremos los nodo
     const sumaTotal = document.createElement("h2");
     
     // cargamos los nodos con el contenbido
     sumaTotal.append('El total de tu compra es: $' + total);
     
     // cargamos variables al id del html
     productosCarrito.append(sumaTotal);
}

// const miCompra = [
//     { nombre: 'Desarrollo Web', precio: 20000 },
//     { nombre: 'Javascript', precio: 18750 },
//     { nombre: 'ReactJS', precio: 27500 }
// ]

// const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
// console.log(total) // 66250




















