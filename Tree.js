// !Tree
// ? Binary Tree: it has only 2 node for every parent node
// ? Binary Search tree right child must be greater than root and left child must be smaller than root child

class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isTreeEmpty() {
    return this.root === null;
  }
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, val) {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return val;
    } else {
      if (root.value > val) {
        return this.search(root.left, val);
      } else {
        return this.search(root.right, val);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  beadthFirstSearchTraversing(root) {
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.log(current.value);
    }
  }

  minValue(root) {
    if (!root.left) {
      console.log(root.value);
      return root.value;
    } else {
      this.minValue(root.left);
    }
  }
  maxValue(root) {
    if (!root.right) {
      console.log(root.value);
      return root.value;
    } else {
      this.maxValue(root.right);
    }
  }

  removeData(val) {
    this.root = this.deleteNode(this.root, val);
  }
  deleteNode(root, val) {
    if (root === null) {
      return null;
    }
    if (val < root.value) {
      root.left = this.deleteNode(root.left, val);
    } else if (val > root.value) {
      root.right = this.deleteNode(root.right, val);
    } else {
      if (!root.left && root.right) {
        return root.value;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

let oneBst = new BST();
oneBst.makeTree(20);
oneBst.makeTree(12);
oneBst.makeTree(8);
oneBst.makeTree(18);
oneBst.makeTree(30);
oneBst.makeTree(22);
oneBst.makeTree(32);
// oneBst.maxValue(oneBst.root);
// oneBst.removeData(12);
// oneBst.beadthFirstSearchTraversing(oneBst.root);
oneBst.preOrder(oneBst.root);
// oneBst.inOrder(oneBst.root);
// oneBst.postOrder(oneBst.root);
// console.log(oneBst.search(oneBst.root, 11));
console.log(oneBst);
