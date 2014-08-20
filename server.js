var express = require('express');
var partials = require('express-partials');
var http = require('http');
var app = express();

//app.use(partials());
//require('./routes/map-routes')(app);

  app.use(express.static(__dirname + '/'));

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/onepage.html');
  });


var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server runnning on port 3000');
});


  // app.get('/home', function(req, res) {
  //   res.sendFile(__dirname + '/app/partials/home.html');
  // });

  // app.get('/filters', function(req, res) {
  //   res.sendFile(__dirname + '/app/partials/filters.html');
  // });

  // app.get('/map', function(req, res) {
  //   res.sendFile(__dirname + '/app/partials/map.html');
  // });