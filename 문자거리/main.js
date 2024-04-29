// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
function solution(s, t) {
  const arr = s.split("");

  let targetIndex = arr.indexOf(t);
  const result = arr.map((item, index) => {
    if (index <= targetIndex) return targetIndex - index;
    const nextTargetIndex = arr.indexOf(t, targetIndex + 1);
    if (Math.abs(nextTargetIndex - index) <= Math.abs(targetIndex - index)) {
      targetIndex = nextTargetIndex;
      return Math.abs(nextTargetIndex - index);
    }
    return Math.abs(targetIndex - index);
  });

  return result;
}

console.log(solution("teachermode", "e"));
