function solution(order) {
    let answer = 0;
    const sub = [];

    for(let i = 1; i <= order.length; i++) {
        if (i === order[answer]) {
            answer++;
        } else {
            if (sub[sub.length - 1] === order[answer]) {
                sub.pop();
                answer++;
                i = 0;
            } else {
                sub.push(i);
            }
        }
    }

    while(true) {
        if (sub.length === 0) return answer;
        
        if (sub[sub.length - 1] === order[answer]) {
            answer++;
            sub.pop();
        }  else {
            return answer;
        }
    }
}

const order = [5, 4, 3, 2, 1];
// const order = [4, 3, 1, 2, 5];
console.log(solution(order));