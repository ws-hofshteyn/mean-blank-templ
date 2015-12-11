var express 			= require('express'),
	session 			= require('express-session'),
	compression 		= require('compression'),
	favicon       		= require('serve-favicon'),
	cookieParser 		= require('cookie-parser'),
	bodyParser 			= require('body-parser'),
	methodOverride 		= require('method-override'),
	morgan 				= require('morgan'),
	path 				= require('path'),
	mongoStore 			= require('connect-mongo')(session);

module.exports = function(app, config, passport) {
	var env;
	env = process.env.NODE_ENV || 'development';
	app.set('showStackError', true);
	if ('production' === env) {
	}
	if ('development' === env) {
		console.log('Configuring development environment');
		// app.use(errorHandler());
		app.locals.pretty = true;
	}
	// app.use(helpers(config.app.name));
	app.use(express["static"](path.join(__dirname, "../public")));
	app.use(cookieParser());
	app.use(morgan("dev"));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(methodOverride());
	app.use(session({
		secret: "secret key",
		saveUninitialized: true,
		resave: true,
		store: new mongoStore({
			url: config.db,
			collection: "sessions"
		})
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(compression());
};
