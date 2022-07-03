function solution(left, right) {
    var answer = 0;
    for(let i  = left; i<=right; i++) {
        let index = 1;
        let count = 0;
        while(index <= i) {
            if (i % index === 0) {
                count++;
            }
            index += 1;
        }

        answer = count % 2 === 0 ? answer + i : answer - i;
    }
    return answer;
}

const left = 13;
const right = 17;

console.log(solution(left, right));