var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
  var info= '';
  dataFile.friends.forEach(function(item){
    info +=`
    <li>
    <h2>${item.name}</h2>
    <p>${item.summary}</p>
    </li>



    `;
  });
  res.send(`
    <h1>CSGEEKS</h1>
    ${info}

    `);
});
var Server = app.listen(app.get('port'), function(){
  console.log('listen to port '+app.get('port'));
});




//var http = require('http');
//var myServer = http.createServer(function(req, res){
//  res.writeHead(200,{"Content-Type":"text/html"});
//  res.write('<h1>connection meetups</h1>');
//  res.end();
//});
//myServer.listen(3000);
//console.log('go to port 3000');
