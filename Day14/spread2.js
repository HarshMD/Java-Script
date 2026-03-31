let student = {
    name: "Demo Demo",
    marks: [20, 30, 60, 90],
};

console.log(student);
let studentcopy = {...student, rollNo:30};
console.log(student);
console.log(studentcopy);

let arr = [3, 19, 30, 9, 1];


let obj = {...arr};
console.log(obj);

console.log({..."Hello"});

