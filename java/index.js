//let nombre = prompt("ingresa tu nombre");


//while (nombre == "eze") {
//  alert("funsiona");
//  nombre = prompt("ingrese otro");
//}
//alert("no funsiona");

//let nro = 0;
//do {
//    nro = prompt("ingresa nro/salir = 100");
//    alert(nro);
//} while (nro != 100);
//alert("bye");


//if (nombre == "eze"){
//}else{
//    alert("tu no eres el dueño de la pc");
//}

//for (let i=0; i<=10; i++){
//    console.log(i)
//}


let nombre = "";
let color = "";
let ingresar = "si";
nombre = prompt("hola, como te llamas???")
alert("bienvenido " + nombre + " este es el oraculo de la web, te voy a desir el significado de los colores");

while (ingresar == "si") {
    ingresar = prompt("deceas seguir? si/no");
    if (ingresar == "si") {
        color = prompt("ingresa un color: azul/verde/rojo/amarillo/morado/naranja/blanco/negro");
        switch (color) {
            case "rojo":
                alert("Es un color que representa poder, atracción, energía y excitación, captando la atención del usuario. Intensifica el metabolismo del cuerpo siendo el color de la pasión, la sensualidad  y la seducción.");
                break;
            case "naranja":
                alert("El naranja combina la energía del rojo con la felicidad del amarillo. Asociado a la alegría, al sol brillante y al trópico. Representa entusiasmo, felicidad, atracción, creatividad,  determinación, éxito, ánimo y estímulo.");
                break;
            case "verde":
                alert("Es el color de la naturaleza y transmite valores ecológicos, es una ideología y un estilo de vida. Simboliza juventud, lealtad, esperanza y promesa, es el color de la victoria (corona de olivos) y la suerte (trébol), el color del mundo vegetariano. Trasmite tranquilidad y seguridad.");
                break;
            case "blanco":
                alert("El color de la pureza, cuanto más puro mayor perfección transmite. Es el color del nacimiento, de la resurrección, de la paz. No posee connotaciones negativas, siendo un color positivo, estimulante, luminoso y delicado que transmite la castidad, la inocencia y la verdad.");
                break;
            case "morado":
                alert("el color más singular, extravagante y misterioso que existe. Aporta la estabilidad del azul y la energía del rojo. Simboliza poder, lujo, ambición, realeza, riqueza, sabiduría, creatividad, independencia, dignidad, siendo el color favorito durante el Egipto de Cleopatra;  el misterioso color morado se asocia con la nobleza y la espiritualidad. Tiene un carácter especial, casi sagrado en la naturaleza: la lavanda, la orquídea, la lila, la violeta y otras flores son a menudo consideradas delicadas y preciosas. Color de la sexualidad pecaminosa, del sexo prohibido, del sexo desinhibido");
                break;
            case "negro":
                alert("Es la ausencia del color, sin ser un color es considerado como tal, adquiriendo simbolismos  como la profundidad del universo,  el fin de las cosas, la ausencia de la luz, la sombra y la oscuridad. Junto al violeta son los colores del misterio y la magia.")
                break;
            case "azul":
                alert("has respondido azul estás en lo cierto, Instagram, Facebook, Tumblr, Twitter y LinkedIn son redes sociales muy populares en la web, todas influyen sobre el crecimiento del tráfico web de forma exponencial y si observas todas ellas son azules");
                break;
            case "amarillo":
                alert("Color de los dioses y del sol, de la luz, del verano y del calor, es un color positivo. Se le asocian significados como diversión, acción, amabilidad, poder, voluntad, estímulo, fuerza, cercanía, atracción y afinidad; pero cuidado, es un color que también puede transmitir sentimientos negativos como el enojo, los celos, la mentira y la envidia.");
                break;
            default:
                alert("escribiste mal la consigna");
                break;
        }
    } else {
        alert("chau");
        ingresar = "no";
    }

}
alert("gracias");


