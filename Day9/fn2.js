
// function with parameters

function additionTwo(a = 0, b = 0){
    sum = a + b;
    console.log(`Addition of ${a}, ${b}  = ${sum}`);
}
function addition(c, a = 0, b = 0){ 
    // We can also give default values to parameters so if no argument is passed while calling it will take default value
    sum = a + b;
    console.log(`Addition of ${a}, ${b}, ${c}  = ${sum}`);
}

additionTwo(10, 2);
additionTwo();

addition(6, 5, 4);
addition(10);

