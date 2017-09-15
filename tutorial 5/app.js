var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);


app.use(require('./routers/index'));
app.use(require('./routers/friends'));


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
