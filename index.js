var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.get('/add', function (req, res) {
  res.send('Adding numbers together');
});

app.get('/subtract', function (req, res) {
  res.send('Subtracting numbers from eachother');
});

app.get('/division', function (req, res) {
  res.send('Dividing numbers by eachother');
});

app.get('/multiplication', function (req, res) {
  res.send('Multiplying numbers together');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
