var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
	if (err) {
		return "There was an error yo";
	} else {
		var len = data.split('\n').length - 1;
		console.log(len);
	}
});
