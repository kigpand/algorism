function solution(array) {
  const sortArr = array.sort();
  const map = new Map();

  for (let i = 1; i < sortArr.length; i++) {
    for (let j = 1; j <= sortArr[i].length; j++) {
      const item = sortArr[i].substr(0, j);
      const result = map.get(item);
      if (result) {
        map.set(item, result + 1);
      } else {
        map.set(item, 1);
      }
    }
  }

  const answerArr = [...map.entries()];
  let answer = "";
  for (let i = 0; i < answerArr.length; i++) {
    if (i !== 0) {
      answer += "\n";
    }
    for (let j = 0; j < answerArr[i].length; j++) {
      answer += answerArr[i][j];
      if (j !== answerArr[i].length - 1) {
        answer += " ";
      }
    }
  }

  return answer;
}

const array = ["6", "ada", "bean", "adam", "ace", "be", "ac"];

console.log(solution(array));
