var db = require('./db.js');

var User = require('./user.js');

var freewind = new User({
	name: "Freewind",
	admin: true
});

db.connect();

freewind.save(function(err) {
	if(err) throw err;

	console.log('User saved');
	
	db.close();
});

