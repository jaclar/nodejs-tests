var http = require('http');
var url = require('url');


function start(router, handle){
	http.createServer(function (request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		router(pathname,handle,response);
	}).listen(8124);

	console.log("Server has started at: http://localhost:8124/");
}

exports.start = start;
