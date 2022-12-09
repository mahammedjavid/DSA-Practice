// !Linear Search
// let arr = [1, 2, 3, 4, 5, 6];
// let find = 7;
// let pos = undefined;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === find) {
//     pos = i;
//     console.log(pos);
//   }
// }
// if (!pos) {
//   alert("Doesn't Exist");
// }

// !Binary Search
// let arr = [1, 2, 3, 5, 8, 6];
// arr = arr.sort();
// console.log(arr);
// let find = 8;
// let start = 0;
// let end = arr.length - 1;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] == find) {
//     console.log(mid);
//     break;
//   } else if (arr[mid] > find) {
//     end = mid;
//   } else {
//     start = mid + 1;
//   }
// }

// !Selection sort (Acending)

// let data = [100, 5, 2, 7, 12, 9];

// function SelectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minItemAtIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       //? Comparing 100 with rest of the elements and set the index at "minItemAtIndex"
//       if (arr[j] < arr[minItemAtIndex]) {
//         minItemAtIndex = j;
//       }
//     }

//     let temp = arr[minItemAtIndex];
//     arr[minItemAtIndex] = arr[i];
//     arr[i] = temp;
//   }
// }
// SelectionSort(data);
// console.log(data);

// !Selection sort (Decending)
// let data = [100, 5, 2, 7, 12, 9];

// function SelectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let maxItemAtIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       //? Comparing 100 with rest of the elements and set the index at "minItemAtIndex"
//       if (arr[j] > arr[maxItemAtIndex]) {
//         maxItemAtIndex = j;
//       }
//     }

//     let temp = arr[maxItemAtIndex];
//     arr[maxItemAtIndex] = arr[i];
//     arr[i] = temp;
//   }
// }
// SelectionSort(data);
// console.log(data);

// !Insertion sort

// let data = [100, 3, 7, 1, 2, 9, 5];

// function InertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > currentVal) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = currentVal;
//   }
// }
// InertionSort(data);
// console.log(data);

// !Anagram Check

// function AnagramCheck(str1, str2) {
//   let obj = {};
//   if (str1.length != str2.length) {
//     return false;
//   }
//   for (let ch of str1) {
//     obj[ch] = (obj[ch] || 0) + 1;
//   }
//   // console.log(obj);
//   for (let ch2 of str2) {
//     if (!obj[ch2]) {
//       // console.log(obj[ch2]);
//       return false;
//     }
//     obj[ch2]--;
//   }
//   // console.log(obj);
//   return true;
// }
// console.log(AnagramCheck("rac", "carr"));

// !Palindrome Check

// function Palindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       console.log(false);
//       return false;
//     }
//   }
//   console.log(true);
//   return true;
// }
// Palindrome("javid");

// !Maximum occurance

// let str = "bxxdes";
// let obj = {};
// let maxKey = 0;
// for (let i = 0; i < str.length; i++) {
//   // console.log(str[i]);
//   let key = str[i];
//   // console.log(obj[key]);
//   if (!obj[key]) {
//     obj[key] = 1;
//   } else {
//     obj[key]++;
//   }

//   if (maxKey == 0 || obj[key] > obj[maxKey]) {
//     maxKey = key;
//   }
// }
// console.log(maxKey);

// !Return Duplicates

let arr = [2, 6, 2, 3, 1, 5, 5];
let obj = {};
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    console.log(arr[i]); // returns duplicate array
  } else {
    newArr.push(arr[i]); // adding unique values
    obj[arr[i]] = arr[i];
  }
}
console.log(newArr);
