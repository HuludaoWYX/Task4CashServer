var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/kid');

var kidSchema = new Schema({
	name: {type: String, required: true},

	age: {type: String, required: true},
	gender: {type: String, required: true},
	bio: String,
	phoneNum: String,
	email: {type: String, required: true, unique: true},
	pw: {type: String, required: true},
	attitude: Number,
	punctual: Number,
	quality: Number
});

mongoose.model('kid', kidSchema);