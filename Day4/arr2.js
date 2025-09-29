// Methods of array -> fucntions
/*
1. push -> Insert at the end
2. pop -> Delete from end and return the deleted element
3. unshift -> add to start
4. shift -> Delete from start and return the deleted element
5. indexOf -> Return indes if element is present or -1 if not present
6. includes -> returns true if element is present or false
7. concat -> Join 2 arrays
8. reverse -> 
9. slice
10. splice
*/

let names = ["Rohit", "Shruti", "Shoeb", "Lalit"];

console.log(names);

console.log("After push new length is: ", names.push(50));
console.log(names);

console.log("Deleted element is: ", names.pop());
console.log(names);

console.log("Deleted element from start is: ", names.shift());
console.log(names);
console.log(names.unshift("Abdul"));
console.log(names);


