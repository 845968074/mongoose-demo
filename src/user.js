var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
    admin: Boolean
});

// the collection's name is `users`
var User = mongoose.model('User', userSchema);

module.exports = User;