function solution(sizes) {
    let wMax = 0;
    let hMax = 0;

    sizes.map((size) => {
        if (size[1] > size[0]) {
            let temp = size[1];
            size[1] = size[0];
            size[0] = temp;
        }

        if (size[0] > wMax) wMax = size[0];
        if (size[1] > hMax) hMax = size[1];
    });

    return wMax * hMax;
}

const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
console.log(solution(sizes));