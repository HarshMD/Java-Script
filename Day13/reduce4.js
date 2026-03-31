// Flatten array to single dimension
let arr = [[20, 30], [3, 10, 5], [2], [-6]];
// 20 30 3 10 5 2 -6

let singleDim = arr.reduce((acc, curArr) => {
  console.log("Acc = ", acc);
  console.log("Curr Arr = ", curArr);
  return acc.concat(curArr);
}, []);

console.log("Single Dim Array = ", singleDim);

