function solution(s) {
    var answer = [];
    
    for(let i = 0; i < s.length; i++) {
        const array = [];
        const countNum = i + 1;
        let count = 1;

        for(let j = 0; j<s.length; j+=countNum) {
            if (s.substring(j, j+countNum) === s.substring(j + countNum, j + countNum + countNum)) {
                count++;
            } else {
                if (count !== 1) {
                    array.push(count);
                    count = 1;
                }
                array.push(...s.substring(j, j+countNum).split(''));
            }
        }

        answer.push(array.length);
    }

    return Math.min(...answer);
}

console.log(solution("xababcdcdababcdcd"));