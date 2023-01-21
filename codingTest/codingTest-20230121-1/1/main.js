function solution(sentence) {
  var answer = "";
  const str = regExp(sentence);
  console.log(str.toLowerCase());
  const set = new Set(
    str
      .toLowerCase()
      .split("")
      .filter((item) => item !== " ")
      .sort()
  );
  const strArr = [...set];

  let count = 0;
  for (let i = 97; i <= 122; i++) {
    if (strArr[count] === String.fromCharCode(i)) {
      count++;
    } else {
      answer += String.fromCharCode(i);
    }
  }
  return answer === "" ? "perfect" : answer;
}

function regExp(str) {
  var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  if (reg.test(str)) {
    return str.replace(reg, "");
  } else {
    return str;
  }
}

const sentence =
  //   "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam";

  "Jackdaws love my big sphinx of quartz";

console.log(solution(sentence));
