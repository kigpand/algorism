// function solution(exam, user) {
//   const arr = [];
//   for (let str of exam) {
//     for (let i = 0; i < user.length; i++) {
//       if (user[i] === str) arr.push({ exam: str, index: i });
//     }
//   }

//   let result = "";
//   for (let i of arr.sort((a, b) => a.index - b.index)) {
//     result += i.exam;
//   }

//   return result === exam ? "YES" : "NO";
// }

function solution(exam, user) {
  let result = "";
  for (let userItem of user) {
    // exam을 배열형식으로 만들고 해당 배열 내부에 현재 userItem과 같은 값이 있을경우 result에 해당 결과를 더한다.
    const find = exam.split("").find((str) => str === userItem);
    if (find) result += find;

    // result의 길이와 exam의 길이가 같다면 바로 반환을시켜준다. result와 exam의 길이가 다르다면 애초에 정답은 NO일 수밖에 없으니까.
    if (result.length === exam.length) return result === exam ? "YES" : "NO";
  }

  // result는 user를 루프하면서 해당 user가 기입한 순서대로 exam에서 찾으므로 찾은 순서대로 저장이 된다.
  return result === exam ? "YES" : "NO";
}

// 강의 풀이
// function solution(need, plan) {
//   let answer = "YES";
//   let queue = need.split("");
//   for (let x of plan) {
//     // includes를 사용해서 find와 비교해 메모리 낭비가 줄었음.
//     // plan을 돌면서 현재 plan 배열값을 need가 가지고 있을경우 실행
//     if (queue.includes(x)) {
//       // 현재 plan 값이 need의 첫번째 값이 아닐 경우 순서가 틀렸다는 것이므로 바로 NO 반환
//       if (x !== queue.shift()) return "NO";
//     }
//   }

//   // 루프문을 다 돌았을때 남은 배열이 있다면 모두 있는게 아니므로 NO값을 반환한다.
//   if (queue.length > 0) return "NO";
//   return answer;
// }

console.log(solution("CBA", "CDBAGE"));
