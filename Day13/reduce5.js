/*
1. Check if all element in array are multiple of 10 or not
[10,100,90,60,30];
// if else
*/


let arr = [10, 180, 20, 40, 60, 20];


// console.log("All elements of\n",
//     arr,
//     "are divisible by 10?",
//     arr.every((element) =>{
//         return element % 10 == 0;
//     })
// );



if(arr.every((element)=>element%10 == 0)){
    console.log("All elements are multiples of 10");
} else {
  console.log("Not all elements are multiples of 10");
}
