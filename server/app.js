var express = require('express');
var epsilon = require('../data/data.json');

var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    console.log("hello");
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getEpsilon', function(request, response){
    console.log("Data?");
    response.send(epsilon);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});



module.exports = app;