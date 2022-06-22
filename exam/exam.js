function solution(answers) {
    let answer = [];
    let num1 = [1,2,3,4,5];
    let num2 = [2,1,2,3,2,4,2,5];
    let num3 = [3,3,1,1,2,2,4,4,5,5];
    let numList = [0, 0, 0];

    for(let i = 0; i<answers.length; i++) {
        if (num1[i % num1.length] === answers[i]) numList[0] = numList[0] + 1;
        if (num2[i % num2.length] === answers[i]) numList[1] = numList[1] + 1;
        if (num3[i % num3.length] === answers[i]) numList[2] = numList[2] + 1;
    }

    let max = Math.max(numList[0], numList[1], numList[2]);
    numList.forEach((num, i) => {
        if (num === max) {
            answer.push(i + 1);
        }
    });

    if (answer.length > 1) answer.sort();

    return answer;
}

const answers = [1,3,2,4,2];
console.log(solution(answers));