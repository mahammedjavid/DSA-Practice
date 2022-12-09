// !Stack Operations

// let data = [];
// let currentSize = data.length;
// let maxSize = 2;

// function push(newValue) {
//   if (currentSize >= maxSize) {
//     alert("Max stack size reached");
//   } else {
//     data[currentSize] = newValue;
//     currentSize++;
//   }
// }
// function pop() {
//   if (currentSize > 0) {
//     currentSize--;
//     data.length = data.length - 1;
//   } else {
//     alert("Stack is already empty");
//   }
// }
// push(10);
// push(20);
// push(10);

// console.log(data);

// ! Reversre Strig in stack

// let data = [];
// let currentSize = data.length;

// function push(newValue) {
//   data[currentSize] = newValue;
//   currentSize++;
// }
// function pop() {
//   if (currentSize > 0) {
//     let RemovedElement = data[currentSize - 1];
//     currentSize--;
//     data.length = data.length - 1;

//     return RemovedElement;
//   } else {
//     alert("Stack is already empty");
//   }
// }

// function reverse(item) {
//   for (let i = 0; i < item.length; i++) {
//     push(item[i]);
//   }
//   for (let i = 0; i < item.length; i++) {
//     item[i] = pop();
//   }
// }
// let str = "string";
// let arr = str.split("");
// reverse(arr);
// console.log(arr.join(""));

// ! Stack in class

class Stack {
  item = [];
  currentSize = this.item.length;
  constructor(size) {
    this.maxSize = size;
  }
  push(val) {
    if (this.currentSize >= this.maxSize) {
      alert("stack full");
    } else {
      this.item[this.currentSize] = val;
      this.currentSize++;
    }
  }
  pop() {
    this.currentSize--;
    this.item.length = this.currentSize;
  }

  display() {
    console.log(this.item);
  }
}

const newStack = new Stack(5);
newStack.push(2);
newStack.push(10);
newStack.push(1);

newStack.pop();
newStack.pop();

console.log(newStack);
// newStack.display();
