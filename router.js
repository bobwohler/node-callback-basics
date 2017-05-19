// Export a "route" function to support request routing.
function route(pathname, handle, response){
    console.log("About to route a request for '" + pathname + "'");
    if (typeof handle[pathname] == 'function'){
        // Adding "()" after a variable that represents a function will execute it.
        // NOTE: using "return" is the wrong way to return content:
        //
        // return handle[pathname]();
        //
        // Instead pass the response on to the handler
        handle[pathname] (response);
    } else {
        console.log("No request handler found for " + pathname);
        // NOTE: using "return" is the wrong way to return content:
        //
        //return "404 Not Found";
        //
        // Instead use the response that was passed in:
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;