function solution(k, tangerine) {
    let answer = 0;
    let itemCount = 0;
    const map = new Map();

    tangerine.forEach((item) => {
        if (map.get(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    });

    const sortMap = [...map].sort((a, b) => b[1] - a[1]);
    sortMap.forEach((item) => {
        if (k - itemCount > 0) {
            itemCount += item[1];
            answer += 1;
        }
    })

    return answer;
}

const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
const k = 4;

console.log(solution(k, tangerine));