function solution(numbers, hand) {
    var answer = '';
    const list = [
        {num: 1, hand: 'L'},
        {num: 2, hand: ''},
        {num: 3, hand: 'R'},
        {num: 4, hand: 'L'},
        {num: 5, hand: ''},
        {num: 6, hand: 'R'},
        {num: 7, hand: 'L'},
        {num: 8, hand: ''},
        {num: 9, hand: 'R'},
        {num: '*', hand: 'L'},
        {num: 0, hand: ''},
        {num: '#', hand: 'R'}
    ];
    let left = list[9];
    let right = list[11];

    numbers.forEach((number) => {
        const result = list.find((v) => v.num === number);
        if (result.hand !== '') {
            answer += result.hand;
            if (result.hand === 'L') left = result;
            else right = result;
        } else {
            const leftCount = Math.abs(result.num - left.num);
            const rightCount = Math.abs(result.num - right.num);

            const leftDistance = leftCount === 1 || leftCount === 3 || leftCount === 8 ? 1 : 2;
            const  rightDistance = rightCount === 1 || rightCount === 3 || rightCount === 8 ? 1 : 2;

            if (leftDistance === rightDistance) {
                if (hand === 'right') {
                    answer += 'R';
                    right = result;
                } else {
                    answer += 'L';
                    left = result;
                }
            } else if (leftDistance < rightDistance) {
                answer += 'L';
                left = result;
            } else {
                answer += 'R';
                right = result;
            }
        }
    });

    return answer;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";
console.log(solution(numbers, hand));