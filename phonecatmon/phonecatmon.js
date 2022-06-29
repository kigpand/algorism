function solution(nums) {
    var answer = 0;
    const len = nums.length / 2;
    const set = new Set(nums);
    const array = [...set];

    answer = len <= array.length ? len : array.length;
    return answer;
}

const nums = [3,1,2,3];
console.log(solution(nums));