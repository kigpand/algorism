function solution(board, moves) {
    var answer = 0;
    const array = [];
    moves.forEach((move, i) => {
        const result = board.find((item) => item[move - 1] > 0);
        if (result) {
            array.push(result[move - 1]);
            result[move - 1] = 0;

            if (array[array.length - 1] === array[array.length - 2]) {
                array.pop();
                array.pop();
                answer += 2;
            }
        }
    });
    
    return answer;
}

const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
const move = [1,5,3,5,1,2,1,4];

console.log(solution(board, move));