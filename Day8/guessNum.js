
let random = Math.floor(Math.random() * 100) + 1;

console.log(random);
let guess = 45;

for(let i = 0; i<=10; i++){
    if(guess<=random){
        console.log("The number is higher than guessed number");
        break;
    }
    else if(guess>=random){
        console.log("The number is lower than guessed number");
        break;
    }
    else if(guess == random){
        console.log("You guessed right and the number was: ", random);
        break;
    }
    else{
        console.log("Invalid number");
        break;
    }
}