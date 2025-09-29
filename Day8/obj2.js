// Add values in object
student = {
  full_name: "SPRK Tech",
};

console.log(student);

student.age = 25;
let gender = "gender";
student[gender] = "Female";

student["marks"] = 50;
console.log("Adding Key value pair to object");
console.log(student);


// Update values in object 
student.marks = 85;
console.log("Updating obj ");
console.log(student);
// Delete values in object

delete student.marks;
delete student.vehicle;

student.marks = [65, 85, 90, 60, 30];

console.log(student);
console.log(student.marks);
console.log(student.marks[5]);
console.log(student.marks[0]);
console.log(student.marks[2]);

console.log("Students marks");
let add =  0;
for(let mark of student.marks){
    console.log(mark);
    add += mark;
}

avg = add / student.marks.length;

student.marksSum = add; 
student.avgSum = avg;

console.log(student);




