var express = require('express');
var app = express();
var path = require('path');
var db = require('./Data/db');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/adult", function(err) {
	console.log("Connected");
});

mongoose.model('kid', {name: String});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname+'/split.html'));
  mongoose.model('kid').find(function(err, kid){
  	res.send(kid);
  });


});


app.listen(8080);
console.log("Running on 8080")
console.log(__dirname);

