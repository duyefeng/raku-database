var http = require('http');
var rakuDatabase = require("./database/raku-database"); 

var myDatabase = [];
rakuDatabase.init('./database.example.json',function(result){
  myDatabase = result;
});





http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
    myDatabase[0].open();
    myDatabase[0].connect();
    myDatabase[0].close();
}).listen(4444);
