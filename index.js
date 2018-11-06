'use strict';
// var express = require('express');
// var app = express();
// var path = require('path');
// var request = require('request');
// var bodyParser = require('body-parser');
//
// app.use((err, req, res, next) => {
// 	console.log('err', err.message);
// 	res
// 		.status(500)
// 		.end('Error');
// });
// //
//
// var port = 3000;
// app.listen(port, () => {
// 	console.log("listening on port:  " + port);
// });

const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color.length;
    // Respond with the user's lucky number and end the conversation.
    conv.close('Your lucky number is ' + luckyNumber);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
