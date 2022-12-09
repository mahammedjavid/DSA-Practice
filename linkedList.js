// nodeOne = {
//     value : value,
//     next : next node adress,

//     nodeTwo = {
//         value : value,
//         next:  next
//     }
// }

class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.size = 1;
    this.tail = this.head;
  }

  appendNode(nodeValue) {
    let newNode = {
      value: nodeValue,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter += 1;
    }
  }

  deleteNode(el) {
    this.size--;
    let count = 1;
    if (el == 1) {
      this.head = this.head.next;
    } else {
      let lead = this.head;
      while (count < el - 1) {
        lead = lead.next;
        count++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      //   console.log(nextNode);
    }
  }

  insert(index, el) {
    this.size++;
    let counter = 1;
    let currentNode = this.head;
    while (counter < index - 1) {
      counter += 1;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: el,
      next: nextNode,
    };
  }

  search(val) {
    let result = "Not found";
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === val) {
        loop = false;
        result = lead;
      }
    }
    console.log(result);
  }
}

let oneLinkedList = new LinkedList(10);
// oneLinkedList.appendNode(20);
// oneLinkedList.appendNode(30);
// oneLinkedList.appendNode(40);
// oneLinkedList.appendNode(50);
// oneLinkedList.appendNode(60);
// oneLinkedList.appendNode(70);
// oneLinkedList.insert(2, 8);
// oneLinkedList.search(80);
// oneLinkedList.deleteNode(1);
// oneLinkedList.insert(2, 9999);
// oneLinkedList.traversing();
// oneLinkedList.deleteNode();
// oneLinkedList.traversing();
console.log(oneLinkedList);
