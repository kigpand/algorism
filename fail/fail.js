function solution(N, stages) {
    var answer = [];
    let stageItems = [...stages];
    const map = new Map();

    for(let i = 1; i<=N; i++) {
        const result = stageItems.filter((stage) => stage >= i);
        const items = stageItems.filter((state) => state === i);

        map.set(i, items.length ? items.length / result.length : 0);
    }

    const result = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    answer = [...result.keys()];
    return answer;
}

const stages = [4,4,4,4,4];
const N = 4;

console.log(solution(N, stages));