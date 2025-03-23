function solution(S) {
  let result = 0;
  let numbersSum = 0;

  for (let item of S) {
    numbersSum += Number(item);
  }

  for (let i = 0; i < S.length; i++) {
    let currentItem = Number(S[i]);

    for (let j = 0; j <= 9; j++) {
      if (j === currentItem) continue;
      let newSum = numbersSum - currentItem + j;

      if (newSum % 3 === 0) {
        result++;
      }
    }
  }

  if (numbersSum % 3 === 0) {
    result++;
  }

  return result;
}

console.log(solution("23"));
console.log(solution("0081"));
