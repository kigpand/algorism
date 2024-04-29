// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
function solution(s, t) {
  const arr = s.split("");

  // 첫번째 t값 위치
  let targetIndex = arr.indexOf(t);

  const result = arr.map((item, index) => {
    // 현재 index가 t값보다 작을경우
    if (index <= targetIndex) return targetIndex - index;

    // 현재 index가 클 경우 다음 t값 위치 변수
    const nextTargetIndex = arr.indexOf(t, targetIndex + 1);

    // 현재 위치가 다음 t값 위치보다 멀 경우 t값 위치 수정
    if (Math.abs(nextTargetIndex - index) <= Math.abs(targetIndex - index)) {
      targetIndex = nextTargetIndex;
      return Math.abs(nextTargetIndex - index);
    }
    return Math.abs(targetIndex - index);
  });

  return result;
}

console.log(solution("teachermode", "e"));
