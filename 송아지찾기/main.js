function solution(s, e) {
  let answer = 0;
  let pos = Array.from({ length: 10001 }, () => 0);
  let fo = Array.from({ length: 10001 }, () => 0);
  let arr = [];
  arr.push(s);
  pos[s] = 1;
  fo[s] = 0;
  while (arr.length) {
    let x = arr.shift();
    for (let i of [x - 1, x + 1, x + 5]) {
      if (i === e) return fo[x] + 1;
      if (i > 0 && i <= 10000 && pos[i] === 0) {
        pos[i] = 1;
        arr.push(i);
        fo[i] = fo[x] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(8, 3));
