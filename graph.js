// ?-------Static Presentation-------
// !Adjecency Matrx Grpah
// let data = [
//   [0, 1, 1, 0],
//   [1, 0, 1, 1],
//   [1, 1, 0, 0],
//   [0, 1, 0, 0],
// ];
// console.log(data[3][2]);

// !Adjecency List Graph

// let data = {
//   A: ["B", "C"],
//   B: ["A", "B", "C", "D"],
//   C: ["A", "B"],
//   D: ["B"],
// };
// console.log(data.A);

//! Adjecency List graph

class Graph {
  constructor() {
    this.data = {};
  }

  addVertices(Node) {
    if (!this.data[Node]) {
      this.data[Node] = [];
    }
  }
  connectVertices(v1, v2) {
    if (!this.data[v1]) {
      this.addVertices(v1);
    }
    if (!this.data[v2]) {
      this.addVertices(v2);
    }
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((x) => x != v2);

    this.data[v2] = this.data[v2].filter((x) => x != v1);
  }

  removeVertices(vertex) {
    if (!this.data[vertex]) {
      return;
    }
    for (let item of this.data[vertex]) {
      this.removeEdge(vertex, item);
    }
    delete this.data[vertex];
  }
}

graphOne = new Graph();
graphOne.addVertices("A");
graphOne.addVertices("B");
graphOne.addVertices("C");
graphOne.addVertices("D");
graphOne.connectVertices("A", "B");
graphOne.connectVertices("A", "C");
graphOne.connectVertices("C", "B");
graphOne.connectVertices("B", "D");
// graphOne.removeEdge("A", "B");
graphOne.removeVertices("A");
// graphOne.connectVertices("A", "B");
console.log(graphOne);
