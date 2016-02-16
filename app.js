var express = require('express');
var app = express();
app.set('view engine', 'jade');

var port = 8080

app.get('/', function (req, res) {
  res.render('index')
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});