var express         = require('express'),
	fs              = require('fs'),
	passport        = require('passport'),
	mongoose        = require('mongoose'),
	http 			= require('http'),
	app 			= express(),
	server 			= require('http').createServer(app),
	config 			= require('./config/environment'),
	auth 			= require('./config/middlewares/authorization'),
	models_path 	= __dirname + '/app/models',
	routes_path 	= __dirname + '/app/routes';


fs.readdirSync(models_path).forEach(function (file) {
	require(models_path + '/' + file);
});

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || 'localhost');

require('./config/express')(app, config, passport);
require('./config/passport')(passport, config);

// fs.readdirSync(routes_path).forEach(function (file) {
// 	require(routes_path + '/' + file)(app, passport, auth);
// });

mongoose.createConnection(config.db);
server.listen(app.get('port'), app.get('ipaddr'), function(){
	console.log('Express server listening on IP/hostname: "' + app.get('ipaddr') + '" and port: "' + app.get('port') + '"');
});