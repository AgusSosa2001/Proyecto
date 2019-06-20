var express = require('express');
var server = express();

server.get('/', function(req, res){
    res.status(200).send('Hola mundo!');
});

server.get('/contact', function(req, res){
    res.status(200).send('Hola contacto!');
});

server.get('/profile', function(req, res){
    res.status(200).send('Hola profile!');
});

server.listen(8000, function(){
    console.log('Server online en el puerto 8000');
});