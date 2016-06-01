var mongoose = require('mongoose');

module.exports = {
	connect: function() {
		mongoose.connect('mongodb://localhost/mongoose-demo');
	},
	close: function() {
		mongoose.connection.close();
	}
}