function solution(queue1, queue2) {
    const array = [...queue1, ...queue2];
    const max = (array.reduce((a, b) => a + b)) / 2;
    let startNum = 0;
    let endNum = queue1.length;
    let totalNum = queue1.reduce((a, b) => a + b);
    let count = 0;
    
    while (count <= array.length * 2) {
        if (totalNum < max) {
            totalNum += array[endNum];
            endNum++;
        } else if (totalNum > max) {
            totalNum -= array[startNum];
            startNum++;
        } else if (totalNum === max) {
            return count;
        }
        count++;
    }


    return -1;
}

const queue1 = [1, 1];
const queue2 = [1, 5];

solution(queue1,queue2);