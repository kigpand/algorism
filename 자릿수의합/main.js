function solution(number, arr) {
  let max = 0;
  let result;
  for (let i = 0; i < number; i++) {
    const addNum = String(arr[i])
      .split("")
      .reduce((a, b) => Number(a) + Number(b));
    if (max < addNum) {
      max = addNum;
      result = arr[i];
    }
    if (max === addNum) {
      max = arr[i] > result ? addNum : max;
      result = arr[i] > result ? arr[i] : result;
    }
  }

  return result;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
