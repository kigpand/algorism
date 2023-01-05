function solution(k, d) {
    let answer = 0;

    for(let i = 0; i <= d; i+=k) {
        console.log(Math.sqrt(d**2 - i**2))
    }

    return answer;
}

const k = 2;
const d = 4;
solution(k, d);