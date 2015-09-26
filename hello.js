var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/split.html'));
});








app.listen(8080);
console.log("Running on 3000")
console.log(__dirname);