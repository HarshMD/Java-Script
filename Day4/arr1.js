let names = ["Arjun", "Shiva", "Abdul", "Shoiab"];

console.log(`Names are ${names}`);
console.log(`Names are ${typeof names}`);
console.log(`Names at index 1 ${names[1]}`);
console.log(`Names at index 1 ${typeof names[1]}`);

console.log(`Size of ${names.length}`);

let info =  ["Abdul Gani", 25, "Male", 62.5];
console.log(`Names are = ${info[1]}`);
console.log(`Age = ${info[1]}`);
console.log(`Gender = ${info[2]}`);
console.log(`Weight = ${info[3]}`);

info[1] = ++info[1];
console.log(`Updated age = ${info[1]}`);

info[0] = "Aachal Tiwari";
info[2] = "Female";

console.log(`Array = ${info}`);

