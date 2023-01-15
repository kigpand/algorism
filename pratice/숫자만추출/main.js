function solution(str) {
    let answer = 0;
    const arr = str.split('');

    for (let i = 0; i <arr.length; i++) {
        if (!isNaN(Number(arr[i]))) {
            answer += arr[i];
        }
    }

    return Number(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));