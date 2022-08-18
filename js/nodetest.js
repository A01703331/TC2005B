const filesys = require('fs');
filesys.writeFileSync('Hola.txt','Hola desde node');

console.log("Hola desde node");

const arrmatey= [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let number of arrmatey){
    //setTimeout(funcion, t)
    //Ejecuta funcion cuando el tiempo pasado es igual a t
    setTimeout(() => {
        console.log(number);
    
    }, number);
}

const http = require('http');

const server = http.createServer((request, response) => {
    //Obtener la URL de petición
    console.log(request.url);
    //Obtener la IP de la petición
    console.log(request.socket.remoteAddress);

    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Hola mundo desde node</h1>');
    response.end();
});

server.listen(3000);