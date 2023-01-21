function solution(text) {
  const maps = setItem();
  const textArr = text.split(" ");
  let answer = "";
  for (let i = 0; i < textArr.length; i++) {
    const text = textArr[i].toLowerCase();
    if (text === "one" && textArr[i + 1]) continue;
    answer += maps.get(text);
  }

  return answer;
}

function setItem() {
  const map = new Map();
  map.set("one", "일");
  map.set("two", "이");
  map.set("three", "삼");
  map.set("four", "사");
  map.set("five", "오");
  map.set("six", "육");
  map.set("seven", "칠");
  map.set("eight", "팔");
  map.set("nine", "구");
  map.set("ten", "십");
  map.set("eleven", "십일");
  map.set("twelve", "십이");
  map.set("thirteen", "십삼");
  map.set("fourteen", "십사");
  map.set("fifteen", "십오");
  map.set("sixteen", "십육");
  map.set("seventeen", "십칠");
  map.set("eighteen", "십팔");
  map.set("nineteen", "십구");
  map.set("twenty", "이십");
  map.set("thirty", "삼십");
  map.set("forty", "사십");
  map.set("fifty", "오십");
  map.set("sixty", "육십");
  map.set("seventy", "칠십");
  map.set("eighty", "팔십");
  map.set("ninety", "구십");
  map.set("hundred", "백");
  map.set("hundreds", "백");

  return map;
}

// const text = "one HUNDRED twenty two";
const text = "NINETY nine";

console.log(solution(text));
