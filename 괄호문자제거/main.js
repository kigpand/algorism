function solution(str) {
  const result = [];
  for (s of str) {
    // 괄호가 닫힐때
    if (s === ")") {
      // pop()은 배열에서 마지막 요소 제거후 제거한 값 반환. 제거한 값이 '('과 같지 않을 경우 '('만날때까지 계속 삭제. -> 괄호안의 값 모두 삭제
      while (result.pop() !== "(");
    } else {
      result.push(s);
    }
  }

  return result.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
