function solution(n, v) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n - 1; i++) {
    const maxValue = Math.min(...v.slice(i + 1));
    if (v[i] - maxValue > max) {
      max = v[i] - maxValue;
    }
  }

  return max;
}

const n = 10;
// const v = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(n, v));
