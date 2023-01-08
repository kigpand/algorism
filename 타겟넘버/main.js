// function solution(numbers, target) {
//     let answer = 0;
//     let count = 0;

//     dfs(0, 0);

//     function dfs(number, item) {
//         if (number >= numbers.length) {
//             if (count === target) answer += 1;
//             count = 0;
//             return;
//         }

//         if (flag) {
//             count += numbers[number];

//             dfs(number + 1, true);
//             dfs(number + 1, false);
//         } else {
//             count -= numbers[number];

//             dfs(number + 1, true);
//             dfs(number + 1, false);
//         }
//     }
//     return answer;
// }

function solution(numbers, target) {
    let answer = 0;
    
    let sum = 0;
    let count = 0;

    dfs(count, sum);

    function dfs(count, sum) {
        if (count >= numbers.length) {
            if (sum === target) answer += 1;
            sum = 0;
            return;
        }
        
        dfs(count + 1, sum + numbers[count]);
        dfs(count + 1, sum - numbers[count]);
    }
    return answer;
}

// const numbers = [1, 1, 1, 1, 1];
const numbers= [4, 1, 2, 1];
const target = 4;
console.log(solution(numbers, target));