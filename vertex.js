export default class Vertex {
  constructor(vertexName, distance = null, predecessor = null) {
    this.vertexName = vertexName;
    this.adjacentVertices = [];
    this.distanceFromSource = distance;
    this.predecessorVertex = predecessor;
  }

  setDistance(distance) {
    this.distanceFromSource = distance;
  }

  getDistance() {
    return this.distanceFromSource;
  }

  setPredecessor(predecessor) {
    this.predecessorVertex = predecessor;
  }

  addAdjacentVertex(vertexName) {
    this.adjacentVertices.push(vertexName);
  }
}
