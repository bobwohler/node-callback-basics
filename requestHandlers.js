// To support non-blocking operations, leverage the "child_process" module's 
// "exec" operation.
var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called.");

    // The right way to return content to avoid blocking operations.
    // What exec() does is, it executes a shell command from within Node.js. 
    // In this example, we are going to use it to get a list of all files 
    // in the current directory ("ls -lah"), allowing us to display this 
    // list in the browser of a user requesting the /start URL.
    exec("ls -lah", function (error, stdout, stderr){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });    
}

function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

function help(response){
    console.log("Request handler 'help' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Append 'start' or 'upload' to interact.");
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.help = help;