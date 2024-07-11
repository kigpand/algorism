function solution(str) {
  const arr = [];
  let result = 0;
  for (let x of str) {
    if (!isNaN(Number(x))) {
      arr.push(x);
    } else {
      if (result === 0) {
        const first = Number(arr.pop());
        const second = Number(arr.pop());
        if (x === "+") result = first + second;
        if (x === "-") result = first - second;
        if (x === "*") result = first * second;
        if (x === "/") result = first / second;
      } else {
        const item = Number(arr.pop());
        if (x === "+") result = result + item;
        if (x === "-") result = result - item;
        if (x === "*") result = result * item;
        if (x === "/") result = result / item;
      }
    }
  }

  return result;
}

console.log(solution("352*72-/+"));
