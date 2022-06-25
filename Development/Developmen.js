function solution(progresses, speeds) {
    let answer = [];
    const list = [];

    progresses.forEach((item, i) => {
        list.push(Math.ceil((100 - item) / speeds[i]));;
    });

    let max = 0;
    list.forEach((item) => {
        if (item > max) {
            answer.push(1);
            max = item;
        } else {
            answer[answer.length - 1]++;
        }
    });
    
    return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
console.log(solution(progresses, speeds));