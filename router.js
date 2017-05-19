// Export a "route" function to support request routing.
function route(pathname, handle){
    console.log("About to route a request for '" + pathname + "'");
    if (typeof handle[pathname] == 'function'){
        // Adding "()" after a variable that represents a function will execute it.
        // NOTE: using "return" is the wrong way to return content:
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        // NOTE: using "return" is the wrong way to return content:
        return "404 Not Found";
    }
}

exports.route = route;