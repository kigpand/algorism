function solution(n) {
    let min = Number.MAX_VALUE;
    for(let i=1; i<=n; i++) {
        if (n % i === 1 && i < min) min = i;
    }
    return min;
}

console.log(solution(10));