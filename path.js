import Graph from './graph.js';
import Vertex from './vertex.js';
import Queue from './queue.js';

function createKnightsBoard(size = 8) {
  const knightsBoard = new Graph();

  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, -2],
    [-1, -2],
    [1, 2],
    [-1, 2],
  ];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const vertex = new Vertex(`${i}-${j}`);
      moves.forEach((move) => {
        const x = move[0] + i;
        const y = move[1] + j;
        if (x >= 0 && x < size && y >= 0 && y < size) {
          vertex.addAdjacentVertex(`${x}-${y}`);
        }
      });
      knightsBoard.addVertex(vertex);
    }
  }

  return knightsBoard;
}

// format for source and destination => "i-j"
function knightMoves(source, destination) {
  const path = [];
  const board = createKnightsBoard();
  // board.logAdjacencyList();

  const queue = new Queue();
  const sourceVertex = board.getVertex(source);
  sourceVertex.setDistance(0);
  queue.enqueue(sourceVertex);

  while (!queue.isEmpty()) {
    const vertex = queue.dequeue();
    if (vertex.vertexName === destination) break;
    vertex.adjacentVertices.forEach((vertexName) => {
      const currentVertex = board.getVertex(vertexName);
      if (currentVertex.distanceFromSource !== null) return;
      currentVertex.setPredecessor(vertex.vertexName);
      currentVertex.setDistance(vertex.getDistance() + 1);
      queue.enqueue(currentVertex);
    });
  }

  function constructPathFrom(vertexName) {
    const currentVertex = board.getVertex(vertexName);
    path.unshift(currentVertex.vertexName);
    if (currentVertex.getDistance() === 0) return;
    constructPathFrom(currentVertex.predecessorVertex);
  }

  constructPathFrom(destination);

  console.log(`start position: ${source}`);
  console.log(`destination: ${destination}`);
  console.log('========================');
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((pos) => console.log(pos));
}

knightMoves('2-1', '7-6');
// start position: 2-1
// destination: 7-6
// ========================
// You made it in 4 moves! Here's your path:
// 2-1
// 4-2
// 6-3
// 5-5
// 7-6
