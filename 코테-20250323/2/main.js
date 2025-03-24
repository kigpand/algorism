class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function solution(N, bus_stop) {
  let answer = Array.from({ length: N }, () => Array(N).fill(Infinity));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const queue = new Queue();
  for (const [r, c] of bus_stop) {
    const row = r - 1;
    const col = c - 1;
    queue.enqueue([row, col]);
    answer[row][col] = 0;
  }

  while (!queue.isEmpty()) {
    const [x, y] = queue.dequeue();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (answer[nx][ny] > answer[x][y] + 1) {
          answer[nx][ny] = answer[x][y] + 1;
          queue.enqueue([nx, ny]);
        }
      }
    }
  }
  return answer;
}

const N = 3;
const bus_stop = [[1, 2]];
console.log(solution(N, bus_stop));
