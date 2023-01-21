function solution(bomb, box, K) {
  var answer = Number.MAX_SAFE_INTEGER;
  bomb.forEach((item) => {
    const checkArray = new Array(bomb.length).fill(false);
    let count = 0;
    checkArray.forEach((array) => {
      if (!array) {
        count += 1;
        check(item, bomb, box, K, checkArray);
      }
    });
    if (answer > count) answer = count;
  });
  return answer;
}

function check(item, bomb, box, K, checkArray) {
  rightK(item, bomb, box, K, checkArray);
  leftK(item, bomb, box, K, checkArray);
  topK(item, bomb, box, K, checkArray);
  bottomK(item, bomb, box, K, checkArray);
}

function rightK(item, bomb, box, K, checkArray) {
  for (let i = 1; i <= K; i++) {
    const arr = [item[0] + i, item[1]];

    for (let i = 0; i < box.length; i++) {
      if (box[i][0] === arr[0] && box[i][1] === arr[1]) continue;
    }

    for (let i = 0; i < bomb.length; i++) {
      if (bomb[i][0] === arr[0] && bomb[i][1] === arr[1] && !checkArray[i]) {
        checkArray[i] = true;
        check(arr, bomb, box, K, checkArray);
      }
    }
  }
}

function leftK(item, bomb, box, K, checkArray) {
  for (let i = 1; i <= K; i++) {
    const arr = [item[0] - i, item[1]];

    for (let i = 0; i < box.length; i++) {
      if (box[i][0] === arr[0] && box[i][1] === arr[1]) continue;
    }

    for (let i = 0; i < bomb.length; i++) {
      if (bomb[i][0] === arr[0] && bomb[i][1] === arr[1] && !checkArray[i]) {
        checkArray[i] = true;
        check(arr, bomb, box, K, checkArray);
      }
    }
  }
}
function topK(item, bomb, box, K, checkArray) {
  for (let i = 1; i <= K; i++) {
    const arr = [item[0], item[1] + i];

    for (let i = 0; i < box.length; i++) {
      if (box[i][0] === arr[0] && box[i][1] === arr[1]) continue;
    }

    for (let i = 0; i < bomb.length; i++) {
      if (bomb[i][0] === arr[0] && bomb[i][1] === arr[1] && !checkArray[i]) {
        checkArray[i] = true;
        check(arr, bomb, box, K, checkArray);
      }
    }
  }
}

function bottomK(item, bomb, box, K, checkArray) {
  for (let i = 1; i <= K; i++) {
    const arr = [item[0], item[1] - i];

    for (let i = 0; i < box.length; i++) {
      if (box[i][0] === arr[0] && box[i][1] === arr[1]) continue;
    }

    for (let i = 0; i < bomb.length; i++) {
      if (bomb[i][0] === arr[0] && bomb[i][1] === arr[1] && !checkArray[i]) {
        checkArray[i] = true;
        check(arr, bomb, box, K, checkArray);
      }
    }
  }
}

const bomb = [
  [3, 1],
  [0, 1],
  [5, 1],
  [0, 4],
  [4, 4],
  [5, 3],
];
const box = [
  [1, 1],
  [2, 2],
];

const K = 3;

console.log(solution(bomb, box, K));
