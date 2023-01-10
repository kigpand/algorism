function solution(exp1, exp2) {
    const exp1Arr = exp1.split(' + ');
    const exp2Arr = exp2.split(' + ');

    for (let i = 0; i < exp1Arr.length; i++) {
        const result = exp2Arr.find((item) => item === exp1Arr[i]);
        if (result) {
            const num = Number(result[0]) * 2;
            const replace = result.replace('3', num);
            updateArray(exp1Arr, result, replace);
            exp2Arr.splice(exp2Arr.indexOf(result), 1)
        }
    }

    const arr = exp1Arr.concat(exp2Arr);
    arr.sort((a, b) => Number(a[a.length - 1] < Number(b[b.length - 1]) ? 1 : -1));
    let answer = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        answer = answer + ' + ' + arr[i];
    }
    return answer;
}

function updateArray(myArr, prev, current) {
    const index = myArr.indexOf(prev);
    if (index !== -1) {
        myArr[index] = current;
    }
}

const exp1 = '2x^5 + 3x^3 + 2x^1';
const exp2 = '6x^6 + 4x^4 + 3x^3 + 2x^2';

console.log(solution(exp1, exp2));