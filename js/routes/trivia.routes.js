const express = require('express');

const router = express.Router();

router.get('/trivia', (request, response, next) => { //Crea ruta /trivia (Sería localhost:3000/trivia/trivia/)
    let html = "<!DOCTYPE html>" +
         '<head><meta charset="UTF-8"></head>' +
         '<h1>Dime algúnos datos curiosos</h1>' +
         '<form action="trivia" method="POST">' +
         '<fieldset>' +
         '<label for="DC1">Dato Curioso 1: </label><input type="text" name="DC1" id="DC1">' +
         '<br></br>' +
         '<label for="DC2">Dato Curioso 2: </label><input type="text" name="DC2" id="DC2">' +
         '</fieldset>' +
         '<br></br>' +
         '<input type="submit" value="¿Cuál es más curioso?">' +
         '</form>';
         response.send(html);
});

router.post('/trivia', (request, response, next) => { // Obtiene este recurso después de llamar el método post 
    console.log(request.body);
    if (Math.floor(Math.random()*2) == 0) {
        response.send('<h2>El dato más curioso es: '
        +request.body.DC1+'</h2>');
    } else {
        response.send('<h2>El dato más curioso es: '
        +request.body.DC2+'</h2>');
    }
        response.send(html);
});


module.exports = router; // Siempre poner hasta al final