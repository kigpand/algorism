function solution(n, array) {
  const rotate = rotateBox(n, array);
  let answer = "";
  for (let i = 0; i < rotate.length; i++) {
    if (i !== 0) {
      answer += "\n";
    }
    for (let j = 0; j < rotate[i].length; j++) {
      answer += rotate[i][j] + " ";
    }
  }

  return answer;
}

function rotateBox(n, box) {
  const maxLength = n - 1;

  const array = [];
  for (let i = 0; i < box.length; i++) {
    const row = [];
    for (let j = 0; j < box.length; j++) {
      row.push(0);
    }
    array.push(row);
  }

  for (let i = 0; i < box.length; i++) {
    for (let j = 0; j < box[i].length; j++) {
      nextRow = maxLength - j;
      nextCol = i;

      array[nextRow][nextCol] = box[i][j];
    }
  }

  return array;
}

// const array = [
//   ["1", "2", "3", "4"],
//   ["5", "6", "7", "8"],
//   ["9", "10", "11", "12"],
//   ["13", "14", "15", "16"],
// ];

const array = [
  ["i", "like", "dog"],
  ["i", "like", "cat"],
  ["i", "like", "bird"],
];

console.log(solution(3, array));
