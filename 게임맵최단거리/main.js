function solution(maps) {
    const row = maps.length;
    const column = maps[0].length;
    let answer = -1;

    let visited = Array.from({ length: row }, () => Array(column).fill(false));

    let queue = [[0, 0, 1]];
    let count = 0;
    const xPos = [-1, 0, 1, 0];
    const yPos = [0, 1, 0, -1];

    while( queue.length > count ) {
        const pos = queue[count];
        count += 1;

        if (pos[0] == row - 1 && pos[1] == column - 1) {
            answer = pos[2];
            break;
        }

        if (!visited[pos[0]][pos[1]]) {
            visit(pos[0], pos[1], pos[2]);
        }
    }

    function visit(x, y, count) {
        visited[x][y] = true;

        for (let i = 0; i < xPos.length; i++) {
            const movedX = x + xPos[i];
            const movedY = y + yPos[i];

            if (movedX >= 0 && movedX < row && movedY >= 0 && movedY < column && !visited[movedX][movedY] && maps[movedX][movedY] == 1) {
                queue.push([x + xPos[i], y + yPos[i], count + 1]);
            }
        }
    }
    
    return answer;
}


// const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];

console.log(solution(maps));