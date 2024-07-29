function solution(arr, num) {
  // 0번째 배열분터 순회
  for (let i = 0; i < arr.length; i++) {
    // undefined로 swap 변수 초기화
    let swap;

    // j의 순회에서 i를 빼준 이유는 i만큼 이미 정렬이 완료된 값들이 존재하기 때문.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // j번째 값이 j + 1번째 값보다 크면 최소값이 아니므로 swap진행
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }

    if (!swap) break;
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15], 6));
