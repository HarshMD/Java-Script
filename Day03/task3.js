

// 3. Good or bad string -> If string starts with uppercase and have length more than 5 characters then display good string


let str = "Hello World";
let use = str.slice(0,1);

if(use.toUpperCase() == use && str.length > 5){
    console.log(`Good String`);
}else{
    console.log(`Bad String`);  
}

console.log(`${use}`);
// console.log(`String at index ${str.indexOf} is in lower case` );