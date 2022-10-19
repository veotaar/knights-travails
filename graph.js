export default class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  logAdjacencyList() {
    this.vertices.forEach((vertex) => {
      console.log(`${vertex.vertexName} => ${vertex.adjacentVertices}`);
    });
  }

  getVertex(vertexName) {
    return this.vertices.find((vertex) => vertex.vertexName === vertexName);
  }
}
