var fs = require('fs');

var filename = process.argv[2];
var f = fs.readFileSync(filename);
var str = f.toString().split('\n');

console.log(str.length - 1);