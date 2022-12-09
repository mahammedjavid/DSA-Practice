//!Array Item Inserting
let data = [1, 12, 34, 4, 5, 67];

// let position = 2;
// let el = 20;
// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     data[i + 1] = data[i]; //
//     if (i === position) {
//       data[i] = el;
//     }
//   }
// }
// console.log(data);

// !Array Item delete

// let posi = 2;
// for (let i = posi; i < data.length - 1; i++) {
//   data[i] = data[i + 1];
// }
// data.length = data.length - 1;
// console.log(data);

// !Array search

// let posi = 2;

// for (let i = 0; i < data.length; i++) {
//   if (i == posi) {
//     // to search through value  data[i]===el
//     console.log(data[i]);
//     break;
//   }
// }

// !Merge Array using 2 forLoop

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 0];
// let mergeArray = [];

// for (let i = 0; i < arr.length; i++) {
//   mergeArray[i] = arr[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   mergeArray[arr.length + i] = arr2[i];
// }
// console.log(mergeArray);

// ! Array sorting (Bubble sort)

// let arr = [6, 7, 10, 2, 5, 1, 8, 9, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// !Recurssion

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// !Indirect Recursion

// function Four() {
//   console.log("Solved");
// }

// function Three() {
//   Four();
// }
// function Two() {
//   Three();
// }
// function One() {
//   Two();
// }

// One();

// !Tail and head Recursion and Debugger

// function inrement(val) {
//   console.log(val);  // Head recursion
//   if (val > 0) {
//     inrement(val - 1);
//   }
//    console.log(val);    //Trail recursion
// }
// inrement(5);

// !Reversing array using recursion

// let temp;
// let newArr = [1, 3, 5, 6, 2, 5];
// function reverse(data, start, end) {
//   console.log(data);
//   if (start <= end) {
//     temp = data[start];
//     data[start] = data[end];
//     data[end] = temp;
//     reverse(data, start + 1, end - 1);
//   }
// }

// reverse(newArr, 0, newArr.length - 1);

// let str = "helloasjfauv";
// let rev = "";
// for (let i = 0; i < str.length; i++) {
//   rev =
//     str[0].toUpperCase() +
//     str.slice(1, str.length - 1) +
//     str[str.length - 1].toUpperCase();
// }
// console.log(rev);
