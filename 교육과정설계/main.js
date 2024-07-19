function solution(exam, user) {
  const arr = [];
  for (let str of exam) {
    for (let i = 0; i < user.length; i++) {
      if (user[i] === str) arr.push({ exam: str, index: i });
    }
  }

  let result = "";
  for (let i of arr.sort((a, b) => a.index - b.index)) {
    result += i.exam;
  }

  return result === exam ? "YES" : "NO";
}

console.log(solution("CBA", "CDBAGE"));
