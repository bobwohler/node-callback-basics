// We can alternatively condense the syntax
// for passing functions by using anonymous functions
// which simply avoid the separate definition of the "say"
// function and pass everything inline.
function execute(someFunction, value){
    someFunction(value);
}

execute(function(word){console.log(word)},"Hello");