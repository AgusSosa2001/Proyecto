var express = require('express');
var server = express();
var path = require('path');
var port = process.env.PORT || 8080;

server.use(express.static(path.join(__dirname, '/dist/')));

server.get('/', function(req, res){
    res.status(200).send('Hola mundo!');
});

server.get('/contact', function(req, res){
    res.status(200).send('Hola contacto!');
});

server.get('/profile', function(req, res){
    res.status(200).send('Hola profile!');
});

server.listen(port, function(){
    console.log('Server online en el puerto '+ port);
});