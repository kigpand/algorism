function solution(numbers) {
    var answer = [];
    const set = new Set();

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            set.add(numbers[i] + numbers[j]);
        }
    }

    answer = [...set];
    answer.sort(function(a, b) {
        return a - b;
      });

    return answer;
}

const numbers = [5,0,2,7];
console.log(solution(numbers));