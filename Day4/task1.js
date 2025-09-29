

/*
Task:
1. For the given start state of array change to final state
start -> ["november","march","december","july"]
final ->["july","june","december","january"]
*/

let start = ["november","march","december","july"];
// let final = ["july","june","december","january"];
console.log(start);

console.log(`Deleted from the last ${start.pop()}`);
console.log(start);

console.log(`Pushed to the last ${start.push("january")}`);
console.log(start);

console.log(`Remove first element ${start.shift()}`);
console.log(start);

console.log(`Remove first element ${start.shift()}`);
console.log(start);

console.log(`Unshift first element ${start.unshift("june")}`);
console.log(start);

console.log(`Unshift first element ${start.unshift("july")}`);
console.log(start);

