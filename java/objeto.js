//mi proyecto va a ser referido a un e-commerce de computacion 
//objeto creado con las propiedades de una computadora
//no esta completo, use una sola propiedad para mostrar que entendi la clase
class cpu {
    constructor(armado) {
        this.microprocesador = armado.microprocesador;
        //this.motherboard = armado.motherboard;
        //this.memoriaram = armado.memoriaram;
        //this.discoduro = armado.discoduro;
        //this.discosolido = armado.discoduro;
        //this.placavideo = armado.placavideo;
        //this.fuente = armado.fuente;
        //this.gabinete = armado.gabinete;
        //this.cooler = armado.cooler;
        //this.monitor = armado.monitor;
        //this.teclado = armado.teclado;
        //this.mouse = armado.mouse;
    }
    //metodo que guarda en la variable lo que el usuario elige para su compra
    tupedido() {
        switch (this.microprocesador) {
            case "1":
                this.microprocesador = "microprocesador intel celeron"
                break;
            case "2":
                this.microprocesador = "microprocesador intel pentium"
                break;
            case "3":
                this.microprocesador = "microprocesador intel core i3"
                break;
            case "4":
                this.microprocesador = "microprocesador intel core i5"
                break;
            case "5":
                this.microprocesador = "microprocesador intel core i7"
                break;
        }
        //muestra lo que el usuario compro
        alert("tu pedido va a ser armado con estos componentes: \n" + "- " + this.microprocesador + "\n gracias por elegirnos");

    }
}
//funcion saludo
const saludo = (saludo) => { alert("hola, bienvenido a if_computacion"); }


//creamos un nuevo objeto
let cpu1 = new cpu(microprocesador = "");
//variable creada para que el bucle salga si elige la opcion correcta si no vuelve a preguntar
let esc = true;
saludo();
//bucle para pedir al cliente lo que decea
while (esc == true) {
    cpu1.microprocesador = prompt("elija la opcion de microprocesador que desea agregar al carrito: \n 1- intel celeron, \n 2- intel pentium, \n 3- intel core i3, \n 4- intel core i5, \n 5- intel core i7");
    if (cpu1.microprocesador == "1" || cpu1.microprocesador == "2" || cpu1.microprocesador == "3" || cpu1.microprocesador == "4" || cpu1.microprocesador == "5") {
        esc = false;
    }
    else {
        alert("error, vuelva a intentarlo");
    }

}
//con la variable cargada llamamos al metodo para que corrobore que eligio
cpu1.tupedido();




//cpu1.motherboard = prompt("ingrese mother");
//cpu1.memoriaram = prompt("ingrese ram");
//cpu1.discoduro = prompt("ingrese dds");
