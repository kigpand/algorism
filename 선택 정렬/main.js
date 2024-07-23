function solution(arr) {
  // 배열의 첫번째부터 끝까지 반복
  for (let i = 0; i < arr.length; i++) {
    // index로 최소값 초기화(순서지정)
    let min = i;

    // i번째 index부터 loop
    for (let j = i + 1; j < arr.length; j++) {
      // i번째 index값이 j번 index의 값보다 크면 최소값 = j번째 index
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    // min이 i와 같지 않다면 최소값 index가 변경된 것이므로
    if (min !== i) {
      // i번 index의 값과 j번 index의 값을 교환한다.
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
