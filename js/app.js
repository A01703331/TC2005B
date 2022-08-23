const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routers = require('./routes/trivia.routes.js')

app.use(bodyParser.urlencoded({extended: false}));

app.use('/trivia', routers); // Crea ruta /trivia (Sería localhost:3000/trivia/)

// Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Permite avanzar la peticion hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('¡Segundo Middleware!');
    next(); //Manda la respuesta
});

app.use('/hola/lalo', (request, response, next) => { //l ocalhost:3000/hola/lalo
    response.send('¡Hola Lalo!');
});

app.use('/hola', (request, response, next) => { // localhost:3000/hola/ (Las rutas más genéricas o donde haya bifuricaciones deberían ir hasta después de las más específicas)
    response.send('¡Hola desde la ruta "/hola"!');
});

app.use((request, response, next) => { // La forma en que funcionan los middlewares es que siguen avanzando, ya que si no nadan, se hunden
    console.log('Otro middleware sin reiniciar!');
    response.status(404);
    response.send('¡Página no encontrada!'); //Manda la respuesta
});

app.use((request, response, next) =>{
    console.log('¡Tercer Middleware!');
});

app.listen(3000);