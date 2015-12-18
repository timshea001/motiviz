var client = require('twilio')('AC7dd897518024fb91deddae07c1418e1a', 'a10c4d279cc9c5bcedfae668eb8bb67b');
var express    = require('express');
var app        = express();
var mongoose = require('mongoose');
var contact = require('./models/contacts');
var lyric = require('./models/lyrics');
mongoose.connect('mongodb://localhost/motiviz');


var contact = new Contact()
	
var newUser = new Contact({
	number: '9144861276'
,	active: true
});
newUser.save(function(err, newUser) {
	if (err) return console.error(err);
	console.log(newUser);
	});	
});


