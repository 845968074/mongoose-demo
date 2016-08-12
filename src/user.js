var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User= new Schema({
    ID:Number,
	name: String,
    Password: String,
    emil:String
});
var Users = mongoose.model('users', User);

module.exports = Users;
