var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('<h1>Connection meet</h1>');
});
var Server = app.listen(3000, function(){
  console.log('listen to port 3000');
});




//var http = require('http');
//var myServer = http.createServer(function(req, res){
//  res.writeHead(200,{"Content-Type":"text/html"});
//  res.write('<h1>connection meetups</h1>');
//  res.end();
//});
//myServer.listen(3000);
//console.log('go to port 3000');
