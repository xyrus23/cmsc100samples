//index.js
var express = require('express');
var app = express();

app.use(require('body-parser')());
app.use(require('method-override')());
app.use(require(__dirname + '/config/router')(express.Router()));

/*
app.route('/student')
	.get(function (req, res) {
		res.send('Get a student');
	})
	.post(function (req, res) {
		res.send('Add a student');
	})
	.put(function (req, res) {
		res.send('Update a student');
	});

app.route('/degree')
	.get(function (req, res) {
		res.send('Get a student');
	});
*/
var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

