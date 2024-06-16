// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복회수가 1인 경우 생략합니다.

// 내 풀이
function solution(text) {
  const arr = [text[0]];
  let position = 0;
  let count = 0;

  for (item of text) {
    if (item === arr[position]) {
      count += 1;
    } else if (item !== arr[position]) {
      arr.push(count);
      arr.push(item);
      count = 1;
      position += 2;
    }
  }

  return arr.filter((item) => item !== 1).join("");
}

// 영상풀이
function solution(text) {
  let answer = "";
  let cnt = 1;
  // 마지막 문자 비교처리를 하기 위해
  text = text + " ";

  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] === text[i + 1]) cnt++;
    else {
      answer += text[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}

/**
 * 마지막에 filter처리를 하는 내 방식에 비해 처음부터 답을 연결하는
 * 영상에서 본 풀이의 방법이 실행속도 면에서 확연히 앞설듯 하다.
 */

console.log(solution("KKHSSSSSSSE"));
