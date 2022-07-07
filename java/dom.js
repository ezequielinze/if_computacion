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
        boton.append("comprar");
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

        }
    }
    // creamos boton carrito
    const botonCarrito = document.getElementById("botonCarrito");
    botonCarrito.innerHTML = "<button>Carrito</button>";
    // creamos eventos 
    botonCarrito.addEventListener("click", mostrarCarrito)
}

mostramosProducto()

// mostramos carrito cuando hace click
function mostrarCarrito() {
    // dejar pagina limpia
    // const limpiarPagina = document.getElementById("contenedor");
    // limpiarPagina.innerHTML = "";
    const limpiarCarrito = document.getElementById("productosCarrito");
    limpiarCarrito.innerHTML = "";

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
    // // creamos boton volver
    const botonVolver = document.getElementById("contenedor");
    botonVolver.innerHTML = "<button>Volver</button>";
    // creamos eventos 
    botonVolver.addEventListener("click", mostramosProducto)

}

// -eliminar carrito
// -hacer setiten
// -hacer json



















