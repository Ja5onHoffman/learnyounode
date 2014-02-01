var listFiles = require('./ex6module.js');

var dir = process.argv[2];
var extension = process.argv[3];

listFiles(dir, extension, function(err, list) {
	if (err) {
		console.log("There was an error");
	} 

})








