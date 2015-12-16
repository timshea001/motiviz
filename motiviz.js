var client = require('twilio')('AC7dd897518024fb91deddae07c1418e1a', 'a10c4d279cc9c5bcedfae668eb8bb67b');
var fs = require('fs');
var file = process.argv[2];
var quotes = process.argv[3];


fs.readFile(file, function (err, list) {
	var smsNums = list.toString().split('\n');
	for (var i = 0;i < smsNums.length - 1;i++) {
		client.sendMessage({

	    to:smsNums[i], 
	    from:'+19147522291',
	    body: "We can’t change the world until we change ourselves.” – Biggie Smalls" 
	}, function(err, responseData) { //this function is executed when a response is received from Twilio
	    if (err) {
	    	console.log(err); //troubleshooting
	    }
	    else {
	        console.log(responseData.to); 
	        console.log(responseData.body); 
	    	    }
		});

	}


})


