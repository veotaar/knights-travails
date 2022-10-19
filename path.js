import Graph from './graph.js';
import Vertex from './vertex.js';

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
