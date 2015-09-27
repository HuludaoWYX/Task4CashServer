// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./Data/task');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
mongoose.createConnection("mongodb://localhost/kid", function(err) {
	console.log("Connected");
});
var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
var taskMod = mongoose.model('task');
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	taskMod.remove(function(err, p){
    if(err){ 
        throw err;
    } else{
        console.log('No Of Documents deleted:' + p);
    }
});
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.get('/task', function(req, res) {
	console.log("searching");
	taskMod.find(function (err, task) {
	  if (err){
	  	 return console.error(err);
	  }
	  res.send(task)


	});
	//console.log(toReturn);

});

router.post('/task', function(req, res){
	//handle storing task
	req.body.distance="1.3";
	console.log(req.body);

	var newTask= new taskMod(req.body);
	newTask.save(function (err) {
		if (err) { 
			console.log("save error");
		}
		else{
			console.log("save successful");
		}
	});
	res.json({message: 'success'});
});
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);