var fs = require('fs');

var p = process.argv[2];
var e = process.argv[3];


fs.readdir(p, function(err, list) {
   list.filter(function(file) {
    if (file.substring(file.lastIndexOf('.') +1) === e) {
    console.log(file);
    }	
  });
});

