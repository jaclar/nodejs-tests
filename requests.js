var exec = require("child_process").exec;

function start(response){
	console.log("I'm request handler \"start\"");
	exec("ls -lah", function (error, stdout, stderr) {
		console.log("Exec: ls -lah");
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(stdout);
		response.end();
	});

}

function upload(respons){
	console.log("I'm request handler \"upload\"");
}

exports.start = start;
exports.upload = upload;
