const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
avg = 0;
for (let numing of numbers){
    avg = avg + numing;
}

avg = avg / numbers.length;

console.log(avg);

const texter = require("fs");
const texting = "Este texto es parte de la prueba del laboratorio 8";

texter.writeFileSync("Lab8.txt",texting);

//Insertar ultimo problema