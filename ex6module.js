var fs = require('fs');

module.exports = function(dir, extension, callback) {
	var fileList = [];
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}
   list.filter(function(file) {
    if (file.indexOf('.') !== -1 && file.substring(file.lastIndexOf('.') +1) === extension) {
    console.log(file);
    fileList.push(file);
    	}
  	});
   callback(null, fileList);
	});
}
