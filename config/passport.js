var mongoose 			= require('mongoose');
var	passport 			= require('passport');
var	LocalStrategy 		= require('passport-local').Strategy;
// var	FacebookStrategy 	= require('passport-facebook').Strategy;
// var	TwitterStrategy 	= require('passport-twitter').Strategy;
// var	GoogleStrategy 		= require('passport-google').Strategy;
var User 				= mongoose.model('User');
// var configAuth 			= require('./auth.js');

module.exports = function(passport) {

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

	// passport.use(new FacebookStrategy({
	// 		clientID: configAuth.facebookAuth.clientID,
	// 		clientSecret: configAuth.facebookAuth.clientSecret,
	// 		callbackURL: configAuth.facebookAuth.callbackURL,
	// 		passReqToCallback: true
	// 	}, function(req, token, refreshToken, profile, done) {
	// 			console.log('profile', profile);
	// 			User.findOne({
	// 				'firstName': profile.name.givenName
	// 			}, function(err, user) {
	// 			if (err) {
	// 				return done(err);
	// 			}
	// 			if (!user) {
	// 				user = new User({
	// 				username: profile.displayName,
	// 				firstName: profile.name.givenName,
	// 				lastName: profile.name.familyName,
	// 				email: profile.emails[0].value,
	// 				gender: profile.gender,
	// 				provider: "facebook",
	// 				facebook: profile._json
	// 			});
	// 			user.save(function(err) {
	// 				if (err) {
	// 					done(err);
	// 				}
	// 				return done(err, user);
	// 			});
	// 		} else {
	// 			user.facebook = profile._json;
	// 			user.save(function(err) {
	// 				if (err) {
	// 					done(err);
	// 				}
	// 				return done(err, user);
	// 			});
	// 		}
	// 	});
	// }));
	// passport.use(new TwitterStrategy({
	// 	consumerKey: configAuth.twitterAuth.consumerKey,
	// 	consumerSecret: configAuth.twitterAuth.consumerSecret,
	// 	callbackURL: configAuth.twitterAuth.callbackURL,
	// 	passReqToCallback: true
	// }, function(req, token, refreshToken, profile, done) {
	// 	if (req.user) {
	// 		User.findById(req.user).exec(function(err, user) {
	// 			var twitter;
	// 				if (err) {
	// 					return done(err);
	// 				}
	// 				if (!user) {
	// 					return done(null, false, {
	// 						message: 'Unknown user'
	// 					});
	// 				}
	// 				if (user) {
	// 					twitter = {
	// 					id: profile._json.id,
	// 					name: profile._json.name,
	// 					screen_name: profile._json.screen_name,
	// 					profile_image_url: profile._json.profile_image_url
	// 				};
	// 				user.twitter = twitter;
	// 				user.save(function(err, user) {
	// 					if (err) {
	// 						return done(err);
	// 					}
	// 					return done(null, user);
	// 				});
	// 			}
	// 		});
	// 	} else {
	// 		console.log('profile', profile);
	// 		User.findOne({
	// 			'twitter.id': profile.id
	// 		}, function(err, user) {
	// 			if (err) {
	// 				return done(err);
	// 			}
	// 			if (!user) {
	// 				return done(null, false, {
	// 					message: 'Unknown user'
	// 				});
	// 			} else {
	// 				done(err, user);
	// 			}
	// 		});
	// 	}
	// }));

	// passport.use(new GoogleStrategy({
	// 	returnURL: configAuth.googleAuth.returnURL,
	// 	realm: configAuth.googleAuth.realm,
	// 	passReqToCallback: true
	// 	}, function(req, identifier, profile, done) {
	// 		profile.id = url.parse(identifier).query.substring(3);
	// 		profile.username = profile.emails[0].value.split("@")[0];
	// 		User.findOne({
	// 			'email': profile.emails[0].value
	// 		}, function(err, user) {
	// 		if (err) {
	// 			return done(err);
	// 		}
	// 		if (!user) {
	// 			user = new User({
	// 			username: profile.username,
	// 			email: profile.emails[0].value,
	// 			firstName: profile.name.givenName,
	// 			lastName: profile.name.familyName,
	// 			provider: "google",
	// 			google: profile
	// 		});
	// 		user.save(function(err) {
	// 			if (err) {
	// 				done(err);
	// 			}
	// 			return done(err, user);
	// 		});
	// 	} else {
	// 		user.google = profile;
	// 		user.save(function(err) {
	// 			if (err) {
	// 				done(err);
	// 			}
	// 			return done(err, user);
	// 			});
	// 		}
	// 	});
	// }));


	// passport.use(new LocalStrategy(
	// 	function(username, password, done) {
	// 		User.findOne({ username: username }, function (err, user) {
	// 			if (err) { return done(err); }
	// 			if (!user) {
	// 				return done(null, false, { message: 'Incorrect username.' });
	// 			}
	// 			if (user.password != password) {
	// 				return done(null, false, { message: 'Incorrect password.' });
	// 			}
	// 			return done(null, user);
	// 		});
	// 	}
	// ));
};