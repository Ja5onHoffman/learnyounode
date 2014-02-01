var http = require('http');

http.get(process.argv[2], function(res) {
	var a = [];
	res.on("data", function(d) {
		a.push(d);
	});
	res.on("end", function(){
		console.log(a.join("").length);
		console.log(a.join("").toString());
	}).setEncoding("utf8");
})