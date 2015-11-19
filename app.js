var port = (process.env.VCAP_APP_PORT || 3000);
var express = require("express");
var sentiment = require('sentiment');
var twitter = require('ntwitter');

var DEFAULT_TOPIC = "IBM";

// defensiveness against errors parsing request bodies...
process.on('uncaughtException', function (err) {
	console.log('Caught exception: ' + err.stack);
});

var app = express();
// Configure the app web container
app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port);
console.log("Server listening on port " + port);

});