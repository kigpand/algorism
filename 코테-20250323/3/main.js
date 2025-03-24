function solution(n, m, k) {
  let answer = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  answer[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let w = 1; w <= k; w++) {
        if (j - w >= 0) {
          answer[i][j] = (answer[i][j] + answer[i - 1][j - w]) % 1000007;
        }
      }
    }
  }
  return answer[n][m];
}

console.log(solution(3, 6, 3));
console.log(solution(10, 6, 5));
console.log(solution(50, 100, 100));
