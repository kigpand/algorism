function solution(arr) {
  // 원본 배열 정렬용 배열 생성
  const sortingArr = [...arr];
  // 정답
  const result = [];

  // 배열 오름차순으로 정렬한 뒤 비교해서 같은 값이 아니면 해당 위치가 바뀐 위치이므로 result에 추가.
  sortingArr.sort().forEach((value, i) => {
    if (value !== arr[i]) result.push(i + 1);
  });
  return result;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
