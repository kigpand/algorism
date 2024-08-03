// 버블 정렬 버전
function bubbleSortSolution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// 선택 정렬 버전
function selectionSortSolution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }

    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(bubbleSortSolution([1, 2, 3, -3, -2, 5, 6, -6]));
console.log(selectionSortSolution([1, 2, 3, -3, -2, 5, 6, -6]));
