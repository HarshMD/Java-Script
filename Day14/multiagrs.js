// Function -> REST PARAMS More than one arguments (...)
// REST params should be our last parameter

function demo(num, ...args){
    console.log(num);
    console.log(args);
    console.log(typeof args);
}

demo(5, 0 , 3, 5 , 6);