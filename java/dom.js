//leer una etiqueta del body
// let pepe = document.getElementById("prueba");
// alert(pepe.innerHTML);
//cambiar el contenido de una etiqueta
// pepe.innerText = "super esto si funciona";
// alert(pepe.innerHTML);

// let contenedor = document.getElementById("prueba");
// crear etiquedas dentro de un contenedor
// contenedor.innerHTML = "<h2>hola esto es una prieba</h2>";
// contenedor.innerHTML = "<button>Comprar</button>";

// container.className = “container row”
//Resultado en el DOM
// <div id=”contenedor” class=“container row”>
//     <h2>Hola mundo!</h2>
// </div>

// // Crear nodo de tipo Elemento, etiqueta p
// let parrafo = document.createElement("p");
// // Insertar HTML interno
// parrafo.innerHTML = "<h2>¡Hola Ezequielsito!</h2>"; 
// // Añadir el nodo Element como hijo de body
// document.body.append(parrafo);

// //Elminando el propio elemento
// let eliminado = document.getElementById("prueba");
// eliminado.remove();
 
  let titulo = document.createElement("t");
  titulo.innerHTML = "<h1>IF-COMPUTACION</h1>"
  document.body.append(titulo);

let contenedor = document.createElement("div");
let card = document.createElement("div");
let foto = document.createElement("picture");
let producto = document.createElement("h2");
let precio = document.createElement("h2");
let conbtn = document.createElement("div");
let boton = document.createElement("button");

contenedor.setAttribute('id','contenedor');
card.setAttribute('id','card');
foto.setAttribute('id','foto');
producto.setAttribute('id','producto');
precio.setAttribute('id','precio');
conbtn.setAttribute('id','nonbtn');
boton.setAttribute('id','boton');

contenedor.innerHTML = "contenedor";
card.innerHTML = "card";
foto.innerHTML = "foto";
producto.innerHTML = "producto";
precio.innerHTML = "precio";
conbtn.innerHTML = "conboton";
boton.innerHTML = "boton";

document.body.appendChild(contenedor);
document.body.appendChild(card);
document.body.appendChild(foto);
document.body.appendChild(producto);
document.body.appendChild(precio);
document.body.appendChild(conbtn);
document.body.appendChild(boton);










// var secondP = document.createElement('p');
// secondP.setAttribute('id','secondPara');
// console.log(secondP.id);