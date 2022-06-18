function solution(a, b) {
    var answer = 0;
    a.map((item, i) => {
        answer += item * b[i];
    });
    return answer;
}

const a = [1,2,3,4];
const b = [-3,-1,0,2];

console.log(solution(a, b));