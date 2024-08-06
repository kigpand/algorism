function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j > -0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(solution([11, 7, 5, 6, 10, 9]));
// console.log(solution([4, 3, 2, 1, 5, -5, 20, 17]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(insertionSort([1, 2, 3, 4, 5]));
