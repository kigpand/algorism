function solution(length, num) {
  // 입력받은 길이만큼 배열 생성
  let arr = Array.from(Array(length), (_, index) => index + 1);

  // 정답
  let result = 0;

  // 배열의 length가 0이 되기 전까지 loop
  while (arr.length) {
    // 3이 되는 위치값을 찾기 위해 2번 루프를 돌며 3이 아닌 값을 배열의 뒤로 옮긴다.
    // 루프문으로 찾는 이유는 3번쨰 값을 제거하고 나서 처음위치로 초기화되는것이 아닌 그 다음 위치부터 다시 3번째 값을 찾아야하기 떄문.
    for (let i = 1; i < num; i++) arr.push(arr.shift());

    // 3번쨰 위치 값 제거
    arr.shift();

    // 배열의 길이가 1이면 마지막 값이므로 해당 값을 반환
    if (arr.length === 1) result = arr.pop();
  }

  return result;
}

console.log(solution(8, 3));
