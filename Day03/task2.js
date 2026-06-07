

// 2. WAP to check whether the character at the given index is in lower case or not -> Hello SPRK -> index = 5 -> o -> lower case



let str = "Hello World";
let use = str.slice(4,5);


if(use.toUpperCase() == use){
    console.log(`Uppercase ${use}`);
}else{
    console.log(`Lower case ${use}`);
}

console.log(`${use}`);
// console.log(`String at index ${str.indexOf} is in lower case` );