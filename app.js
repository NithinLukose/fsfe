const http = require("http");

http.createServer(function(req,res){
	res.write("fsfe");
	res.end();

}).listen(3000);
console.log("server started");

