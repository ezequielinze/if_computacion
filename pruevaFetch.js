// alert('hola')
const carrito = [];
const URL = 'data/productos.json'

fetch(URL)
    .then(res => res.json())
    .then(data => { productos(data) })
    .catch(err => { console.log('Hubo un error: '); })
    .finally(() => { console.log('Terminó el fetch') })

function productos(productos) {


    function mostramosProducto() {
        const limpiarPagina = document.getElementById("contenedor");
        limpiarPagina.innerHTML = "";
        const limpiarCarrito = document.getElementById("productosCarrito");
        limpiarCarrito.innerHTML = "";

        // cremos elementos
        productos.forEach(producto => {

            const card = document.createElement("div");
            const foto = document.createElement("img");
            const modelo = document.createElement("h2");
            const precio = document.createElement("h3");
            const conbtn = document.createElement("div");
            const boton = document.createElement("button");

            // para cargar id:
            //card.setAttribute('id','card');
            // agregamos clases
            card.className = "card";
            foto.className = "foto";
            modelo.className = "producto";
            precio.className = "precio";
            boton.className = "boton";


            // agregamos contenido
            card.id = producto.id;
            foto.src = producto.img;
            modelo.append(producto.modelo);
            precio.append(producto.precio);
            conbtn.innerHTML = "conboton";
            boton.append("Agregar Carrito");
            boton.id = producto.id;


            // agregamos nodos al div card
            card.append(foto, modelo, precio, boton);
            // productosCarrito.append(foto, modelo, precio);
            // agregamos la card al div contenedor
            contenedor.append(card);

            // creamos eventos
            boton.addEventListener("click", repuestaCompra)
            // evento:
            function repuestaCompra() {
                const productoComprado = productos.find(i => i.id == boton.id);
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

        })  //productos.forEach

        // creamos boton carrito
        const btnCarrito = document.createElement("button");
        btnCarrito.className = 'btn';
        btnCarrito.append('Ver Carrito');
        botonCarrito.append(btnCarrito)
        // creamos eventos 
        btnCarrito.addEventListener("click", mostrarCarrito)

    }// function mostramosProducto()

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

            // cargamos los nodos con el contenido
            productoCarrito.append("-" + producto.modelo);
            precioCarrito.append("$" + producto.precio);

            // cargamos el dom
            productosCarrito.append(productoCarrito, precioCarrito);

        })

        sumaTotal()

        // creamos boton volver y borrar
        const botonVolver2 = document.createElement("button");
        const botonBorrar2 = document.createElement("button");
        botonVolver2.append('volver');
        botonBorrar2.append('borrar carrito');
        botonVolver2.className = 'btn';
        botonBorrar2.className = 'btn';
        contenedor.append(botonBorrar2, botonVolver2)
        // creamos eventos 
        botonVolver2.addEventListener("click", mostramosProducto)
        botonBorrar2.addEventListener("click", eliminarCarrito)

        // boton confirmar compra
        const confirmarCompra = document.createElement('button');
        confirmarCompra.append('confirmar compra');
        confirmarCompra.className = 'btn';
        productosCarrito.append(confirmarCompra);
        confirmarCompra.addEventListener("click", cargarDatos)

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

    function cargarDatos() {
        productosCarrito.innerHTML = "";
        const msj = document.createElement('h2');
        msj.append('¡Hola! Para realizar la compra, ingresá a tu cuenta')
        msj.className = "sumaTotal";
        const noUsuario = document.createElement('button');
        const siUsuario = document.createElement('button');
        noUsuario.append('crear cuenta');
        siUsuario.append('ingresar');
        noUsuario.className = 'btn';
        siUsuario.className = 'btn';
        productosCarrito.append(msj, noUsuario, siUsuario);
        noUsuario.addEventListener("click", ingresarCuenta)
        siUsuario.addEventListener("click", ingresarCuenta)

    }

    function ingresarCuenta() {
        productosCarrito.innerHTML = "";
        const msj = document.createElement('h4');
        const input = document.createElement('input');
        const button = document.createElement('button');
        button.className = 'btn';
        msj.className = 'sumaTotal';
        msj.append('Ingresá tu e‑mail o usuario')
        button.append('continuar');
        productosCarrito.append(msj, input, button)
        
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

    function sumaTotal() {
        const total = carrito.reduce((a, b) => a + b.precio, 0)
        //cremos los nodo
        const sumaTotal = document.createElement("h2");

        sumaTotal.className = "sumaTotal";

        // cargamos los nodos con el contenbido
        sumaTotal.append('El total de tu compra es: $' + total);

        // cargamos variables al id del html
        productosCarrito.append(sumaTotal);
    }



}// function renderProducts(productos)