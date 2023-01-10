function solution(letters, k) {
    let answer = [];
    const sort = letters.split('').sort((a, b) => a < b ? 1 : -1);
    const array = letters.split('');
    const maps = new Map();
    for (let i = 0; i < k; i++) {
        const result = array.find((item) => item === sort[i]);
        maps.set(array.indexOf(result), result);
    }
    
    answer = [...maps].sort().map((item) => item[1]);
    return answer.join('');
}

const letters = 'zbgaj';
const k = 3;
console.log(solution(letters, k));
