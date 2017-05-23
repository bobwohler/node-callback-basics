// Leverage our new server module for startup.
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// Create an object to hold the route handler mappings to
// avoid hardcoding the mappings in the router itself.
var handle = {} // New object
// Add elements for each route and the function that should be invoked
// to handle it.
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/help"] = requestHandlers.help;

// Pass the handle object so downstream the router can get it.
server.start(router.route, handle);