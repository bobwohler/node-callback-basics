// To support non-blocking operations, leverage the "child_process" module's 
// "exec" operation.
var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called.");

    // Initialize the child_process exec function to empty.
    // var content = "empty";

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


/*    // The wrong way to return content:
    // To demonstrate, introduce a delay to demonstrate blocking and non-blocking operations.
    // NOTE: there is no "sleep" in javascript so a function is in order to 
    // essentially mimic some other operation occupying the single thread the 
    // node server uses.
    function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    // Call the sleep function defined above.
    sleep(10000);

    return content;
*/
}

function upload(response){
    console.log("Request handler 'upload' was called.");
    // The wrong way to return content:
    // return "Hello Upload";
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;