var http = require("http");
var url = require("url");

// Export a "start" function that can leveraged by other modules.
// "start" now accepts a route also.
function start(route, handle){
    // the onRequest custom function will write out "request received"
    // each time an http request is received.
    function onRequest(request, response){
        // Parse the url to identify where to route the request.
        var pathname = url.parse(request.url).pathname;

        console.log("Request for '" + pathname + "' received");

        // Pass the http response variable to the function to promote
        // non-blocking operations.
        route(pathname, handle, response);

    }

    // Will write out "server has started" ONLY when the webserver
    // first starts.
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;