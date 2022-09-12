const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
avg = 0;
for (let numing of numbers){
    avg = avg + numing;
}

avg = avg / numbers.length;

console.log(avg);

const texter = require("fs");
var texting = "Este texto es parte de la prueba del laboratorio 8\n";



var result = Math.floor((Math.random() * (10 - 1 + 1)) + 1)
var answer = Math.floor((Math.random() * (10 - 0 + 1)) + 0)

var texting = texting + "Aleatorio A tiene un numero pensado entre el 1 y el 10... ¿Podrá Aleatorio B adivinarlo?";

if (answer == 0){
    var texting = texting + "\nB:...";
}
else {
    var texting = texting + "\nB: Pienso que la respuesta es " + answer + ".";
}

if (answer == result){
    var texting = texting + "\nA: ¡Correcto! La respuesta era " + result + ".";
  }
else if (answer == 0){
    var texting = texting + "\nA: Al menos responde algo B... La respuesta era " + result + ".";
}
else {
    var texting = texting + "\nA: ¡Incorrecto! La respuesta era " + result + ".";
}

texter.writeFileSync("Lab8.txt",texting);
