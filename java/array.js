//mostrar la tercer posicion
//const array1 = [1, 2, 3, 4];
//console.log(array1[2]);

//for (let i = 0; i < array1.length; i++) { //array.length sirve para agregar todos los valores del array sin saberlos
//console.log(array1[i]);
//}
//console.log( array1.length ); //cantidad de elementos
//array1.push(5); //agregar elemento al array
//console.log( array1.length ); // mostrar elemento

//ejemplo: Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));