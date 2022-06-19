function solution(w, h) {
    var answer = 1;

    // 최대 공약수 구하는 공식
    let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

    // (w + h - (getGCD(w, h)) -> 대각선이 지나는 사각형의 갯수를 구하는 공식(사각형의 가로  + 사각형의 세로 - (가로,세로의 최대 공약수));
    answer = w * h - (w + h - (getGCD(w, h)));
    return answer;
}

const w = 8;
const h = 12;
console.log(solution(w, h));