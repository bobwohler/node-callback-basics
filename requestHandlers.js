function start(){
    console.log("Request handler 'start' was called.");
    // The wrong way to return content:
    return "Hello Start";
}

function upload(){
    console.log("Request handler 'upload' was called.");
    // The wrong way to return content:
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;