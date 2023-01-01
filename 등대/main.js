function solution(n, lighthouse) {
    var answer = 0;
    const map = new Map();

    for( let house of lighthouse) {
        if (map.get(house[0])) {
            map.set(house[0], [...map.get(house[0]), house[1]]);
        } else {
            map.set(house[0], [house[1]]);
        }

        if (map.get(house[1])) {
            map.set(house[1], [...map.get(house[1]), house[0]]);
        } else {
            map.set(house[1], [house[0]]);
        }
    }

    map.forEach((value, key) => {
        if (value.length > 1 && getValueLength(value, map)) {
            answer += 1;
        }
    })

    return answer;
}

function getValueLength(value, map) {
    let flag = true;
    value.forEach((item) => {
        if (map.get(item).length > value.length) flag = false;
    });

    return flag;
}

const lighthouse = 		[[1, 2], [1, 3], [1, 4], [1, 5], [5, 6], [5, 7], [5, 8]]
const n = 8;

console.log(solution(n, lighthouse));