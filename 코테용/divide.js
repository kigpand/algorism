function solution(n, k) {
  let number = n % k;
  let count = 1;

  while (number !== 0) {
    number = (number * 10 + (n % k)) % k;
    count++;
  }
  return count;
}

console.log(solution(22, 9));
