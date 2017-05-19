// Export a "route" function to support request routing.
function route(pathname, handle){
    console.log("About to route a request for '" + pathname + "'");
    if (typeof handle[pathname] == 'function'){
        // Adding "()" after a variable that represents a function will execute it.
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}

exports.route = route;