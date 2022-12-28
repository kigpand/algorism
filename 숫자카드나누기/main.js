let getGCD = (num1, num2) => {

    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 

    return num1;
}

function solution(arrayA, arrayB) {
    var answer = 0;
    let aMax = arrayA[0];
    let bMax = arrayB[0];

    for (let i = 0; i< arrayA.length; i++) {
        aMax = getGCD(aMax, arrayA[i]);
        bMax = getGCD(bMax, arrayB[i]);
    }

    aMax = aMax === 1 ? 0 : aMax;
    bMax = bMax === 1 ? 0 : bMax;

    if (arrayA.every((item) => item % bMax !== 0)) answer = Math.max(answer, bMax);
    if (arrayB.every((item) => item % aMax !== 0)) answer = Math.max(answer, aMax);

    return answer;
}

const arrayA = [10, 20];
const arrayB = 	[5, 17];

solution(arrayA, arrayB);