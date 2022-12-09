// Bubble sort

let arr = [1, 5, 2, 7, 3, 8, 9, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

//! Selection dort

// for (let i = 0; i < arr.length; i++) {
//   let maxValueIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] > arr[maxValueIndex]) {
//       maxValueIndex = j;
//     }
//   }

//   let temp = arr[maxValueIndex];
//   arr[maxValueIndex] = arr[i];
//   arr[i] = temp;
// }
// console.log(arr);

// !Insertion Sort

// let arr2 = [2, 1, 34, 5, 3, 1, 1, 435, 6, 5];
// for (let i = 1; i < arr2.length; i++) {
//   let currValue = arr2[i];
//   let j = i - 1;
//   while (j >= 0 && arr2[j] > currValue) {
//     arr2[j + 1] = arr2[j];
//     j--;
//   }
//   arr2[j + 1] = currValue;
// }
// console.log(arr2);
