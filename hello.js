var http = require('http')
 ,  fs = require('fs');


fs.readFile('./split.html', function(err, html) {
	http.createServer(function(request, response) {
		response.writeHead("this is head");
		response.write("Hello World");
		// setTimeout(function() {
		// 	response.write("running done");
		// 	response.end();
		// }, 5000);
	}).listen(8080);


}


console.log('Listening on port 8080...');