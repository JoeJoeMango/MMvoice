var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(dialogflow);

app.use((err, req, res, next) => {
	console.log('err', err.message);
	res
		.status(500)
		.end('Error');
});
//HELLO

var port = 3000;
app.listen(port, () => {
	console.log("listening on port:  " + port);
});
