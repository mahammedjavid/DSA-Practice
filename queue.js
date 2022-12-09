let arr = [];
let currentSize = arr.length;
let maxSize = 5;

function enqueue(val) {
  if (currentSize >= maxSize) {
    alert("Queue size is full");
  } else {
    arr[currentSize] = val;
    currentSize++;
  }
}
function dequeue() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  currentSize--;
  arr.length = currentSize;
}

function front() {
  if (currentSize > 0) {
    return arr[0];
  } else {
    alert("Stack is empty");
  }
}
function rear() {
  if (currentSize > 0) {
    return arr[currentSize - 1];
  } else {
    alert("Stack is empty");
  }
}
enqueue(1);
enqueue(2);
enqueue(3);
dequeue();
console.log(arr);
