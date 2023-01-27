
function solution(board) {
    let count = 0;

    for(let i = 0; i<board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const length = board[i].length - 1;
            if (j === 0 && board[i][j] === board[i][j + 1] === board[i][j + 3]) {
                count += 1;
            }
            if (j === length && board[i][j] === board[i][j - 1] === board[i][j - 3]) {
                count += 1;
            }
            if (j > 0 && j < length ) {
                if (board[i][j] === board[i][j - 1] === board[i][j + 2]) {
                    count += 1;
                }
                if (board[i][j] === board[i][j + 1] === board[i][j - 2]) {
                    count += 1;
                }
            }
            if (j > 3 && board[i][j] === board[i][j - 1] === board[i][j - 3]) {
                count += 1;
            }
            if (j < length - 2 && board[i][j] === board[i][j + 1] === board[i][j + 3]) {
                count += 1;
            }
        }
    }
    
    return count;
}

const board = [[1, 1, 4, 3], [3, 2, 1, 4], [3, 1, 4, 2], [2, 1, 3, 3]];
console.log(solution(board));