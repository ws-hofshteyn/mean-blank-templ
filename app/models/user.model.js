var mongoose 				= require('mongoose'),
	Schema 					= mongoose.Schema,
	passportLocalMongoose 	= require('passport-local-mongoose');


var User = new Schema({

	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	phone: {
		type: String,
		unique: true
	},
	created: {
		type: Date,
		"default": Date.now
	},
	permissions: {
		type: String
	},
	resetPasswordToken: {
    	type: String
	},
  	resetPasswordExpires: {
    	type: Date,
    	"default": new Date().setDate(new Date().getDate() + 90)
  	},
  	resetTime: {
  		type: String
  	},
  	newbee: {
  		type: Boolean,
  		"default": true 
  	}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

