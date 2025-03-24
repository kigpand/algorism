function solution(grade) {
  let answer = [];

  const students = grade
    .map((value, i) => {
      return { value, i };
    })
    .sort((a, b) => b.value - a.value);

  const ranks = new Array(grade.length);
  let current = 1;
  for (let i = 0; i < students.length; i++) {
    if (i > 0 && students[i].value !== students[i - 1].value) {
      current = i + 1;
    }
    ranks[students[i].i] = current;
  }

  return answer;
}

const grade = [2, 2, 1];
solution(grade);
