
// 일반 풀이
function solution(a, b) {
    let answer = a.concat(b);
    return answer.sort();
}

// 투포인터 알고리즘 사용
function solution(a, b) {
    let answer = [];

    // p1, p2 두개의 포인터
    let p1 = 0;
    let p2 = 0;

    // 해당하는 포인터가 두 포인터의 값을 비교하면서 점차 숫자를 채워나감
    // 시간 복잡도 O(n) -> n은 두배열 길이
    // 정렬이 되어있어야함.
    while(p1 < a.length && p2 < b.length) {
        if (a[p1] < b[p2]) {
            answer.push(a[p1]);
            p1++;
        } 
        if (b[p2] < a[p1]) {
            answer.push(b[p2]);
            p2++;
        }
        if (a[p1] === b[p2]) {
            answer.push(a[p1]);
            answer.push(b[p2]);
            p1++;
            p2++;
        }
    }

    while(p1 < a.length) {
        answer.push(a[p1]);
        p1++;
    }

    while(p2 < b.length) {
        answer.push(b[p2]);
        p2++;
    }

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));