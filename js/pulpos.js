//Variables, constantes, consola (log, info, warn, error)

//Declaracion de variables moderna
//Alcance a nivel de bloque
let pulpo_mundial = "Paul";

//Declaracion de variables clásica
//Alcance a nivel de función
var pulpo_voice = "Timoty";

console.log(pulpo_mundial);

for (let i=0; i<10; i++){
    console.log(i);
}

//Hacer un llamado a la variable i produciria error ya que
//solo existe dentro del ciclo for si es definido con let
//console.log(i); = Error

for (var i=0; i<10; i++){
    console.log(i);
}

//En cambio al definir i como var es posible llamarla desde
//afuera del ciclo

console.log(i);

//Al desarrollar un programa en JS es buena practica quitar
//los logs

console.info("Informacion");

console.warn("Cuidado");

console.error("Error");

//Assert es como un IF pero para poner cosas en la consola es
//bueno para automatizar pruebas
//Si es verdadero, no pone nada
//Caso contrario, dice que fallo la asercion

console.assert(true)

//En JS triple igual sirve para comparar que el valor y tipo
//de dato sean iguales

console.assert(1 === 1);
console.assert(true === 1);
console.assert(true == 1);

alert("Alerta");

const nombre = prompt("Esto pide un nombre en string");

console.log("¡Hola, "+nombre+"!");

const hunger = confirm("¿Tienes hambre?");

//Funciones tradicionales
function comer(){
    const comida = "Picadillo";
    console.log(comida);
    return true;
}

const comida = comer;
if (hunger){
    alert("Ya mero es la hora de la comida.");
    comida();
} else {
    alert("Tienes que comer bien aunque no tengas hambre");
}

comer();

//Funciones modernas
const anon = () => console.log("Anonoimo");

anon();

const platillo_fuerte = (platillo) => {
    console.log("El "+platillo+" está delicioso");
}

platillo_fuerte("Tamal Oaxaqueño");
platillo_fuerte();

//Arreglos

const menu = ["Papa al horne", "Arrachera","Tamales"];

console.log(menu);

//In itera sobre los indices del arreglo
for (let p in menu){
    //P es igual al indice del arreglo (0,1,2,etc.)
    console.log(menu[p]);
}

//Of obtiene los elementos de un arreglo
for (let p of menu){
    //P es igual al elemento del arreglo (Papa al horno, arrachera, etc.)
    console.log(p);
}

menu[10] = "Pasta";
console.log(menu);

menu.length = 2;
console.log(menu);

menu.push("Pizza");
console.log(menu);

//Arreglos asociativos
menu["Postre"] = "Ate con queso";
console.log(menu);

//HTML dinámico con eventos
const boton = document.getElementById("boton_imagen");

boton.onclick = () => {
    console.log("Click!");
    document.getElementById("contenedor_imagen").innerHTML = 
        '<img src="media/pulpo.jpg" alt="Imagen de un pulpo enojado">';
}