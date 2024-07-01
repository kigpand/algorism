function solution(number, arr) {
  // max value
  let max = 0;
  // 뒤집은 숫자들의 배열
  const itemArr = [];
  for (i of arr) {
    const num = Number(String(i).split("").reverse().join(""));
    if (max < num) max = num;
    if (num !== 1) {
      itemArr.push(num);
    }
  }

  console.log(itemArr);
  const result = func(max, itemArr);
  console.log(result);
}

// 알고리즘
function func(n, itemArr) {
  let resultArr = [...itemArr];
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      // 해당 반복문은 i값의 배수 즉, 소수가 아닌 수들을 찾는 루프문이다.
      // 그러므로 j값은 소수가 아니다.
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
        // j값이 소수가 아니므로 resultArr에서 해당 값을 찾아내어 제거한다. 그러면 소수 배열이 완성된다.
        const result = resultArr.find((item) => item === j);
        resultArr = resultArr.filter((item) => item !== result);
      }
    }
  }

  return resultArr;
}

solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]);
