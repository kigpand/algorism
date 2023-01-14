function solution(arr) {
    let answer = 0;

    // 좌, 우 좌표 확인용 배열
    const dx = [-1, 0, 1, 0];

    // 위, 아래 좌표 확인용 배열
    const dy = [0, 1, 0, -1];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            
            // 상하좌우 중 하나라도 높은 값이 있는지 확인을 위한 flag
            let flag = true;

            // 상하좌우 비교구문
            for (let n = 0; n < dx.length; n++) {
                
                // 좌우 확인 값
                const nx = i + dx[n];

                // 상하 확인 값
                const ny = j + dy[n];

                // nx, ny가 0보다 같거나 커고 arr.length보다 작아야 배열안에 있는 값이므로 비교 필요. 
                // arr[nx][ny]가 arr[i][j]보다 크다면 현재의 값보다 상하좌우중 하나의 값이 크므로 flag = false
                if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] >= arr[i][j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) answer += 1;
        }
    }

    return answer;
}


 let arr=[[5, 3, 7, 2, 3], 
 [3, 7, 1, 6, 1],
 [7, 2, 5, 3, 4],
 [4, 3, 6, 4, 1],
 [8, 7, 3, 5, 2]];
console.log(solution(arr));