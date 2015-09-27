var express = require('express');
var app = express();
var path = require('path');
var db = require('./Data/kid');
var mongoose = require('mongoose');


app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect("mongodb://localhost/kid", function(err) {
	console.log("Connected");
});





var kidMod = mongoose.model('kid');

var kid1 = new kidMod({name: "John", age: "15", gender: "Male", email: "John@gmail.com", pw: "123"});
var kid2 = new kidMod({name: "Alice", age: "17", gender: "Female", email: "Ailce@hotmail.com", pw: "123"})

kid2.save(function (err) {
	if (err) return null;
});

kid1.save(function (err) {
	if (err) return null;
});
app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname+'/split.html'));

  // mongoose.model('kid').find(function(err, kid){
  // 	if (kid.name = "Alice") {
  // 		res.send(kid);
  // 	}
  	//res.send(kid);
  
  kidMod.find({name: "Alice"}, function(err, kid) {
  	res.send(kid);
  });

});


app.listen(8080);
console.log("Running on 8080")
console.log(__dirname);

