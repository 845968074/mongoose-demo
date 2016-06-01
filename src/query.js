var db = require('./db.js');

db.connect();

var User = require('./user.js');

User.find({}, function(err, users) {
	if (err) throw err;

    // object of all the users
    console.log("All users:");
    console.log(users);
});

User.find({name:"Freewind"}, function(err, user) {
	if(err) throw err;

	console.log("Specify User:");
	console.log(user);
});

User.find({name: "Non-existent-user"}, function(err, user) {
	if(err) throw err;

	console.log("Find Non-existent-user:");
	console.log(user);
});

User.findOne({name: "Non-existent-user"}, function(err, user) {
	if(err) throw err;

	console.log("Find Non-existent-user or null:");
	console.log(user);
});