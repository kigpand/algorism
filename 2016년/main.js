function solution(a, b) {
    var answer = new Date(2016, a - 1, b).toString().substring(0, 3).toUpperCase();
    return answer;
}

console.log(solution(5, 24));