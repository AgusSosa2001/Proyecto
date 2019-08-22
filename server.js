var express = require('express');
var server = express();
var path = require('path');

server.get('/', function(req, res){
//  res.status(200).send('Hola mundo!');
return res.sendFile(path.join(__dirname, '/dist/index.html'));
});

server.get('/contact', function(req, res){
    res.status(200).send('Hola contacto!');
});

server.get('/profile', function(req, res){
    res.status(200).send('Hola profile!');
});

server.listen(process.env.PORT || 8080, function(){
    console.log('Server online en el puerto 8000');
});