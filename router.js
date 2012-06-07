function router(pathname, handle, response){
	console.log("About to route " + pathname);
	if(typeof(handle[pathname]) === 'function'){
		handle[pathname](response);
	} else{
		console.log("Couldn't find handler for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();

	}
}

exports.router = router;
