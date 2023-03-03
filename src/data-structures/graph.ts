import Queue from "./queue";

class Graph {
  vertices: Set<string>;
  edges: Map<string, Array<string>>;
  constructor() {
    this.vertices = new Set();
    this.edges = new Map();
  }
  addVertex(vertex: string) {
    this.vertices.add(vertex);
    this.edges.set(vertex, []);
  }
  addEdge(source: string, target: string) {
    this.edges.get(source)?.push(target);
    this.edges.get(target)?.push(source);
  }
  getConnectedVertices(vertex: string): Array<string> {
    return this.edges.get(vertex) || [];
  }
  bfs(): Array<string> {
    const root = this.vertices.keys().next().value;
    if (!root) return [];
    const queue = new Queue(); // 存储未访问到的节点
    const result: Array<string> = [];
    const visited = new Set();
    queue.enqueue(root);
    visited.add(root);
    while (!queue.isEmpty()) {
      const curr = queue.dequeue();
      result.push(curr);
      const nexts = this.getConnectedVertices(curr);
      nexts.forEach((vertex) => {
        if (!visited.has(vertex)) {
          queue.enqueue(vertex);
          visited.add(vertex);
        }
      });
    }
    return result;
  }
  dfs(): Array<string> {
    const root = this.vertices.keys().next().value;
    if (!root) return [];
    const result: Array<string> = [];
    const visited = new Set();
    const traversal = (vertices: Array<string>) => {
      vertices.forEach((vertex) => {
        if (!visited.has(vertex)) {
          result.push(vertex);
          visited.add(vertex);
          const nexts = this.getConnectedVertices(vertex);
          traversal(nexts);
        }
      });
    };
    traversal([root]);
    return result;
  }
  print() {
    const result = Array.from(this.vertices)
      .map((vertex) => {
        // A -> B C D
        const connectedVertices = this.getConnectedVertices(vertex);
        return `${vertex} -> ${connectedVertices}`;
      })
      .join("\n");
    console.log(result);
  }
}

var graph = new Graph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B"); 
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

// graph.print();
const bfs = graph.bfs();
console.log(bfs);
const dfs = graph.dfs();
console.log(dfs);
