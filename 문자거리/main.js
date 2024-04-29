// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
function solution(s, t) {
  const arr = s.split("");
  let tNum = arr.findIndex((item) => item === t);
  const result = arr.map((item, i) => {
    if (i === tNum) return 0;
    if (i <= tNum) return tNum - i;
    if (i >= tNum) {
      const newArr = arr.slice(i, arr.length);
      const newNum = newArr.findIndex((item) => item === t);
      if (newNum - i < tNum - i) {
        tNum = newNum;
        return newNum - i;
      } else {
        return tNum - i;
      }
    }
  });
  console.log(result);
}

solution("teachermode", "e");
