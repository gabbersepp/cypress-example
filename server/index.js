var express = require('express');
var app = express();
var index = 0;

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/jbtest/1', function (req, res) {
  res.send('<html><head><link rel="stylesheet" href="/jbtest/asd.css"></head></html>');
});

app.get('/jbtest/2', function (req, res) {
  res.send('<html><head><link rel="stylesheet" href="/jbtest/block.css"></head></html>');
});

app.get('/jbtest/asd.css', function (req, res) {
  res.set('Content-Type', 'text/css');
  console.log("send")
  res.send("/*" + index + "*/");
});


app.get('/jbtest/block.css', function (req, res) {
  res.set('Content-Type', 'text/css');
  console.log("no send")
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});