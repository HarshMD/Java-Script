
// Create a function -> Takes a number and x iteration display table of number till x iteration

function itera(num, iter){
    
    for(let i=1; i<=iter; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

itera(5, 20);