function solution(value) {
  const splitValue = value.split("");
  const result = [];
  for (let i = 0; i < splitValue.length; i++) {
    // '(' 문자일 경우 결과 배열에 추가
    if (splitValue[i] === "(") {
      result.push(splitValue[i]);
    } else {
      // ')' 문자일 경우에 이미 배열에 아무것도 존재하지않는다면 괄호의 쌍이 안맞는것이기때문에 'NO'반환. length > 0보다 크면 쌍이 있으므로 기존배열에서 pop
      if (result.length === 0) return "NO";
      result.pop();
    }
  }

  // 루프문을 이슈없이 빠져나왔을 때 result에 length가 0보다 크면 아직 정리되지 않은 '(' 괄호가 있으므로 'NO', 0이면 모두 정리됬으므로 'YES'반환
  return result.length > 0 ? "NO" : "YES";
}

console.log(solution("(()(()))()"));
