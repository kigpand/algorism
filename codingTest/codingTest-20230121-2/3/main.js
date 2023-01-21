function solution(input) {
  let teamScore = [0, 0];
  let userArr = [];
  const texts = input.split("\n");

  let currentTeam = 0;
  let score = 0;
  for (let i = 1; i < texts.length; i++) {
    if (texts[i] === "=====") {
      teamScore[currentTeam] += score;
      score = 0;
      currentTeam = currentTeam === 0 ? 1 : 0;
      userArr = [];
    } else if (texts[i] === "bb") {
      score = onFourBall(userArr, score);
    } else if (texts[i] === "hr") {
      score += userArr.length + 1;
      userArr = [];
    } else {
      const result = hit(texts[i]);
      userArr = userArr
        .map((item) => {
          const base = item + result;
          if (base >= 4) {
            score += 1;
            return null;
          } else {
            return base;
          }
        })
        .filter((item) => item !== null);
      userArr.push(result);
    }
  }

  return `${teamScore[0]}:${teamScore[1]}`;
}

function onFourBall(userArr, score) {
  let ballScore = score;
  if (userArr.length === 3) {
    userArr.shift();
    ballScore += 1;
  }
  if (userArr.length === 2) {
    const result = userArr.find((item) => item === 1);
    if (result) {
      const isTwoBase = userArr[0];
      if (isTwoBase === 2) userArr[0] += 1;
      userArr[1] += 1;
    }
  }
  if (userArr.length === 1) {
    if (userArr[0] === 1) userArr[0] += 1;
  }
  userArr.push(1);

  return ballScore;
}

function hit(item) {
  switch (item) {
    case "h1":
      return 1;
    case "h2":
      return 2;
    case "h3":
      return 3;
  }
}

const inputs = [
  "=====",
  "h3",
  "=====",
  "bb",
  "h2",
  "bb",
  "=====",
  "bb",
  "hr",
  "=====",
  "=====",
  "=====",
  "h1",
  "bb",
  "bb",
  "bb",
  "=====",
  "h2",
  "h2",
  "=====",
  "=====",
  "hr",
  "=====",
  "h2",
  "bb",
  "bb",
  "hr",
  "=====",
];

console.log(solution(inputs));
