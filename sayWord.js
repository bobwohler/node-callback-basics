// This will be the function that displays that displays the output.
// To execute this, the function itself will be passed to the execute
// function which will call this.
function say(word){
    console.log(word);
}

// To demonstrate the notion of passing a function as a parameter
// create an "execute" function and pass the core "say" function to it.
// Here, the parameters "someFunction" and "value" represent
// name of the function you'll call and the parameter you'll pass it
// i.e, say and "Hello".
function execute(someFunction, value){
    someFunction(value); //"someFunction" is the placeholder for "say"
}

// Call the execute function, passing the actual "say" function
// as a parameter.
// NOTE: the order of execution will be:
//      1. invoke execute
//      2. 
execute(say, "Hello");
