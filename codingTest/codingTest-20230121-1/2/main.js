function solution(bombs) {
  let bombsSort = bombs.sort();

  let count = 0;
  let time = 0;

  for (let i = 0; i < bombsSort.length; i++) {
    if (bombsSort[count] - time <= 0) break;
    if (count === bombsSort.length) break;

    count += 1;
    time += 1;
  }

  return count;
}

const bombs = [2, 1, 1, 4];
solution(bombs);
