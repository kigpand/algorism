function solution(board) {
  let xCount = 0;
  let oCount = 0;

  for (let row of board) {
    for (let cell of row) {
      if (cell === "X") xCount++;
      else if (cell === "O") oCount++;
    }
  }

  let currentPlayer = xCount <= oCount ? "X" : "O";

  return miniMax(board, currentPlayer === "X");
}

function getWinner(b) {
  const lines = [
    b[0],
    b[1],
    b[2], // 가로
    b[0][0] + b[1][0] + b[2][0], // 세로
    b[0][1] + b[1][1] + b[2][1],
    b[0][2] + b[1][2] + b[2][2],
    b[0][0] + b[1][1] + b[2][2], // 대각선
    b[0][2] + b[1][1] + b[2][0],
  ];
  if (lines.includes("XXX")) return "X";
  if (lines.includes("OOO")) return "O";
  return null;
}

function miniMax(b, isXTurn) {
  let winner = getWinner(b);
  if (winner) return winner;

  let moves = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (b[i][j] === ".") {
        let newBoard = b.map((row) => row.split(""));
        newBoard[i][j] = isXTurn ? "X" : "O";
        newBoard = newBoard.map((row) => row.join(""));
        moves.push(miniMax(newBoard, !isXTurn));
      }
    }
  }

  if (isXTurn) {
    return moves.includes("X") ? "X" : moves.includes("D") ? "D" : "O";
  } else {
    return moves.includes("O") ? "O" : moves.includes("D") ? "D" : "X";
  }
}

console.log(solution([".O.", ".OX", "X.."]));
console.log(solution(["OO.", ".X.", "OXX"]));
console.log(solution(["XOX", "OOO", "XX."]));
