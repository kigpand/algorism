function solution(n, lost, reserve) {
    var answer = 0;
    const lostArray = lost.filter((v) => !reserve.includes(v));
    let reserveArray = reserve.filter((v) => !lost.includes(v));

    for(let i = 1; i <= n; i++) {
        const lostItem = lostArray.find((item) => item === i);
        if (lostItem) {
            const leftItem = reserveArray.find((v) => v === i - 1);
            if (leftItem) {
                answer++;
                reserveArray = reserveArray.filter((v) => v !== i - 1);
            } else {
                const rightItem = reserveArray.find((v) => v === i + 1);
                if (rightItem) {
                    answer++;
                    reserveArray = reserveArray.filter((v) => v !== i + 1);
                }
            }
        } else {
            answer++;
        }
    }
    return answer;
}

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

console.log(solution(n, lost, reserve));