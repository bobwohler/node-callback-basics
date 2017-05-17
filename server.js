var http = require("http");

// the onRequest custom function will write out "request received"
// each time an http request is received.
function onRequest(request, response){
    console.log("Request received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end(); 
}

// Will write out "server has started" ONLY when the webs server
// first starts.
http.createServer(onRequest).listen(8888);
console.log("Server has started");