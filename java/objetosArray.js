

class Producto {
    constructor(id, producto, modelo, precio) {
        this.id = id;
        this.producto = producto;
        this.modelo = modelo;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, "microprocesador", "intel core i3", 13000);
const producto2 = new Producto(2, "microprocesador", "intel core i5", 22500);
const producto3 = new Producto(3, "microprocesador", "intel core i7", 43500);
const producto4 = new Producto(4, "motherboard", "GIGABYTE H410", 12000);
const producto5 = new Producto(5, "motherboard", "MSI H510", 12500);
const producto6 = new Producto(6, "motherboard", "ASUS PRIME H510", 13000);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
//probar despues con un bucle que carge solo los productos
const carrito = [];

function comprar() {
    let repuesta = prompt("quiere ver los productos que tenemos en nuestro local?¡ si/no");
    if (repuesta == "si") {

        return true;
    } else {

        return false;
    }
}

// for(const i of productos){
//     console.log(i.id, i.modelo);
// }



function comprarProducto() {
    while (comprar()) {
        let productoSeleccionado = mostrarProducto();


        carrito.push(productoSeleccionado);

    }
}

function mostrarProducto() {
    let mostrar = "elija el codigo de los productos que quiera comprar\n";
    productos.forEach(producto => {
        mostrar += producto.id + "- " + producto.producto + " " + producto.modelo + " $" + producto.precio + "\n";
    })
    let repuesta = prompt(mostrar);
    return repuesta
}

// function carrito(){
//     const productoEncontrado = productos.find(producto=> producto.id == id);
//     alert(productoEncontrado);
// }
comprarProducto();

function mostrarCompra() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        let variable = carrito[i];
        const pedido = productos.find((e) => e.id == variable);
        total = total + pedido.precio;
        console.log("-" + pedido.producto, pedido.modelo + " $" + pedido.precio);
    }
    console.log("El monto total a abonar es de: $" + total);
}

console.log("los productos que sumo a su carrito son: ");
mostrarCompra();

