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

    if (request.url === "/hola"){ // Añade ruta /hola al sitio y sus contenidos que se definen a continuacion
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Hola mundo desde node</h1>');
        response.end();
    } else if (request.url === "/trivia" && request.method != "POST"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Dime algúnos datos curiosos</h1>');
        response.write('<form action="trivia" method="POST">');
        response.write('<fieldset>');
        response.write('<label for="DC1">Dato Curioso 1: </label><input type="text" name="DC1" id="DC1">');
        response.write('<br></br>');
        response.write('<label for="DC2">Dato Curioso 2: </label><input type="text" name="DC2" id="DC2">');
        response.write('</fieldset>');
        response.write('<br></br>');
        response.write('<input type="submit" value="¿Cuál es más curioso?">');
        response.write('</form>');
        response.end();
    } else if (request.url === "/trivia" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const dato_curioso1 = datos_completos.split('&')[0].split('=')[1];
            console.log(dato_curioso1);
            const dato_curioso2 = datos_completos.split('&')[1].split('=')[1];
            console.log(dato_curioso2);
            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="UTF-8"></head>');
            response.write('<h1>El más curioso es: </h1>');
            if (Math.floor(Math.random()*2) == 0) {
                response.write('<h2>'+dato_curioso1+'</h2>');
            } else {
                response.write('<h2>'+dato_curioso2+'</h2>');
            }
            return response.end();
        });
    } else {
        response.statusCode = 404; // Página de error cuando no se encuentra el sitio
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Error 404: La página no existe, deja de jugar con las ligas</h1>');
        response.end();
    }
    
});

server.listen(3000);