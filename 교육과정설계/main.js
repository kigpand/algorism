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

console.log(solution("CBA", "CDBAGE"));
