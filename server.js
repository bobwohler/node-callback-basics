var http = require("http");

// The condensed syntax below represents an
// anyonymous function (the parameters to the createServer call).
// This is the equivalent of breaking it out into a separate
// onRequest style function definition that createServer might execute.

http.createServer(function(request, response){
    console.log("Request received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

console.log("Server has started");