function solution(encrypted_text, key, rotation) {
    let answer = '';
    const array = encrypted_text.split('');
    for (let i = 0; i < Math.abs(rotation); i++) {
        if (rotation > 0) {
            const item = array.shift();
            array.push(item);
        } else {
            const item = array.pop();
            array.unshift(item);
        }
    }

    const result = array.map((item, i) => {
        const num = item.charCodeAt(0) - (key[i].charCodeAt(0) - 96);
        if (num < 97) {
            return 122 - (key[i].charCodeAt(0) - item.charCodeAt(0));
        } else {
            return item.charCodeAt(0) - (key[i].charCodeAt(0) - 96);
        }
    });

    answer = result.map((item) => String.fromCharCode(item));
    return answer.join('');
}

const encrypted_text = 'qyyigoptvfb';
const key = 'abcdefghijk';
const rotation = 3;

console.log(solution(encrypted_text, key, rotation));