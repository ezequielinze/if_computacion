//mi proyecto va a ser referido a un e-commerce de computacion 
//objeto creado con las propiedades de una computadora
//no esta completo, use una sola propiedad para mostrar que entendi la clase
// array que guarda lor productos seleccionados
const pedidocpu = [];
// array con los productos a eleguir para imprimir la factura
const componentes = ["microprocesador", "motherboard", "memoriaram", "discoduro", "discosolido", "placavideo", "fuente", "gabinete", "cooler", "monitor", "teclado", "mouse"]
// array para cargar los presios de los productos
const presiototal = [];
//variable para la suma 
let total = 0;

class cpu {
    constructor(armado) {
        this.microprocesador = armado.microprocesador;
        this.motherboard = armado.motherboard;
        this.memoriaram = armado.memoriaram;
        this.discoduro = armado.discoduro;
        this.discosolido = armado.discoduro;
        this.placavideo = armado.placavideo;
        this.fuente = armado.fuente;
        this.gabinete = armado.gabinete;
        this.cooler = armado.cooler;
        this.monitor = armado.monitor;
        this.teclado = armado.teclado;
        this.mouse = armado.mouse;
    }
    //metodo que guarda en la variable lo que el usuario elige para su compra
    tupedido() {


        //muestra lo que el usuario compro
        console.log("tu cpu va a ser armada con estos componentes:");
        for (let i = 0; i < pedidocpu.length; i++) {
            console.log(componentes[i] + ": " + pedidocpu[i]);
            total = presiototal[i] + total;
        }
        console.log("el presio total a pagar: $" + total);

    }
}



//funcion saludo
const saludo = (saludo) => { alert("hola, bienvenido a if_computacion"); }


//creamos un nuevo objeto
let cpu1 = new cpu(microprocesador = "", motherboard = "");
//variable creada para que el bucle salga si elige la opcion correcta si no vuelve a preguntar
let esc = true;
saludo();
//bucle para pedir al cliente lo que decea
while (esc == true) {
    cpu1.microprocesador = prompt("elija el microprocesador que desea agregar al carrito: \n - intel core i3 $13000, \n - intel core i5 $22500, \n - intel core i7 $43500");
    cpu1.microprocesador = cpu1.microprocesador.toUpperCase();
    if (cpu1.microprocesador == "INTEL CORE I3") {
        pedidocpu.push(cpu1.microprocesador);
        presiototal.push(13000);
        esc = false;
    } else if (cpu1.microprocesador == "INTEL CORE I5") {
        pedidocpu.push(cpu1.microprocesador);
        presiototal.push(22500);
        esc = false;
    } else if (cpu1.microprocesador == "INTEL CORE I7") {
        pedidocpu.push(cpu1.microprocesador);
        presiototal.push(43500);
        esc = false;
    }
    else {
        alert("error, vuelva a intentarlo");
    }
}
while (esc == false) {
    cpu1.motherboard = prompt("elija la motherboard que desea agregar al carrito: \n 1- gigabyte h410 $12000, \n 2- msi h510 $12500, \n 3- asus prime h510 $13000");
    cpu1.motherboard = cpu1.motherboard.toUpperCase();
    if (cpu1.motherboard == "GIGABYTE H410") {
        pedidocpu.push(cpu1.motherboard);
        presiototal.push(12000);
        esc = true;
    }
    else if (cpu1.motherboard == "MSI H510") {
        pedidocpu.push(cpu1.motherboard);
        presiototal.push(12500);
        esc = true;
    }
    else if (cpu1.motherboard == "ASUS PRIME H510") {
        esc = true;
        pedidocpu.push(cpu1.motherboard);
        presiototal.push(13000);
    }
    else {
        alert("error, vuelva a intentarlo");
    }
}
// while (esc == true) {
//     cpu1.memoriaram = prompt("elija la opcion de memoriaram que desea agregar al carrito: \n 1- kingston 4gb $4000, \n 2- kingston 8gb $5000, \n 3- kingston 16gb $7000");
//     cpu1.memoriaram = cpu1.memoriaram.toUpperCase();
//     if (cpu1.memoriaram == "KINGSTON 4GB" || cpu1.memoriaram == "KINGSTON 8GB" || cpu1.memoriaram == "KINGSTON 16GB") {
//         esc = false;
//         pedidocpu.push(cpu1.memoriaram);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == false) {
//     cpu1.discoduro = prompt("elija la opcion de discoduro que desea agregar al carrito: \n 1- 1tb $6000, \n 2- 2tb  $7500, \n 3- 3tb $9000");
//     cpu1.discoduro = cpu1.discoduro.toUpperCase();
//     if (cpu1.discoduro == "1TB" || cpu1.discoduro == "2TB" || cpu1.discoduro == "3TB") {
//         esc = true;
//         pedidocpu.push(cpu1.discoduro);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == true) {
//     cpu1.discosolido = prompt("elija la opcion de discosolido que desea agregar al carrito: \n 1- 120gb $4000, \n 2- 240gb $5500, \n 3- 480gb $7600");
//     cpu1.discosolido = cpu1.discosolido.toUpperCase();
//     if (cpu1.discosolido == "120GB" || cpu1.discosolido == "240GB" || cpu1.discosolido == "480GB") {
//         esc = false;
//         pedidocpu.push(cpu1.discosolido);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == false) {
//     cpu1.placavideo = prompt("elija la opcion de placavideo que desea agregar al carrito: \n 1- msi geforce 1gb $7500, \n 2- polit nvidia 2gb $9000, \n 3- powercolor rx550 4gb $27000");
//     cpu1.placavideo = cpu1.placavideo.toUpperCase();
//     if (cpu1.placavideo == "MSI GEFORCE 1GB" || cpu1.placavideo == "POLIT NVIDIA 2GB" || cpu1.placavideo == "POWERCOLOR RX550 4GB") {
//         esc = true;
//         pedidocpu.push(cpu1.placavideo);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == true) {
//     cpu1.fuente = prompt("elija la opcion de fuente que desea agregar al carrito: \n 1- 450w $6000, \n 2- 500w $7000, \n 3- 750w $12000");
//     cpu1.fuente = cpu1.fuente.toUpperCase();
//     if (cpu1.fuente == "450W" || cpu1.fuente == "500W" || cpu1.fuente == "750W") {
//         esc = false;
//         pedidocpu.push(cpu1.fuente);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == false) {
//     cpu1.gabinete = prompt("elija la opcion de gabinete que desea agregar al carrito: \n 1- aerocool zauro $7200, \n 2- aerocool atomic $10500, \n 3- thermal take v200 $12000");
//     cpu1.gabinete = cpu1.gabinete.toUpperCase();
//     if (cpu1.gabinete == "AEROCOOL ZAURO" || cpu1.gabinete == "AEROCOOL ATOMIC" || cpu1.gabinete == "THERMAL TAKE V200") {
//         esc = true;
//         pedidocpu.push(cpu1.gabinete);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == true) {
//     cpu1.cooler = prompt("elija la opcion de cooler que desea agregar al carrito: \n 1- intel socket 11sx $3500, \n 2- netmak 960 $3500, \n 3- aerocool master h411 $4300");
//     cpu1.cooler = cpu1.cooler.toUpperCase();
//     if (cpu1.cooler == "INTEL SOCKET 11SX" || cpu1.cooler == "NETMAK 960" || cpu1.cooler == "AEROCOOL MASTER H411") {
//         esc = false;
//         pedidocpu.push(cpu1.cooler);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == false) {
//     cpu1.monitor = prompt("elija la opcion de monitor que desea agregar al carrito: \n 1- led lg 20 $35000, \n 2- led lg 22 $37000, \n 3- led lg 24 $42000");
//     cpu1.monitor = cpu1.monitor.toUpperCase();
//     if (cpu1.monitor == "LED LG 20" || cpu1.monitor == "LED LG 22" || cpu1.monitor == "LED LG 24") {
//         esc = true;
//         pedidocpu.push(cpu1.monitor);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == true) {
//     cpu1.teclado = prompt("elija la opcion de teclado que desea agregar al carrito: \n 1- logitech usb $900, \n 2- genius usb $1200, \n 3- philips 6401 $4000");
//     cpu1.teclado = cpu1.teclado.toUpperCase();
//     if (cpu1.teclado == "LOGITECH USB" || cpu1.teclado == "GENIUS USB" || cpu1.teclado == "PHILIPS 6401") {
//         esc = false;
//         pedidocpu.push(cpu1.teclado);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }
// while (esc == false) {
//     cpu1.mouse = prompt("elija la opcion de mouse que desea agregar al carrito: \n 1- logitech m110 $660, \n 2- logitech m170 $1000, \n 3- logitech m35 $2700");
//     cpu1.mouse = cpu1.mouse.toUpperCase();
//     if (cpu1.mouse == "LOGITECH M110" || cpu1.mouse == "LOGITECH M170" || cpu1.mouse == "LOGITECH M35") {
//         esc = true;
//         pedidocpu.push(cpu1.mouse);
//     }
//     else {
//         alert("error, vuelva a intentarlo");
//     }
// }


//con la variable cargada llamamos al metodo para que corrobore que eligio
cpu1.tupedido();






