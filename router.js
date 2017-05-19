// Export a "route" function to support request routing.
function route(pathname, handle, response){
    console.log("About to route a request for '" + pathname + "'");
    if (typeof handle[pathname] == 'function'){
        // Adding "()" after a variable that represents a function will execute it.
        // Pass the response on to the handler to promote non-blocking operations.
        handle[pathname] (response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;