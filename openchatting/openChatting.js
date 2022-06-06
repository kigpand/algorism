function solution(record) {
    var answer = [];
    const array = []
    const map = new Map;

    record.forEach((v) => {
        const item = v.split(' ');
        if (item[0] === 'Enter') {
            array.push({ uuid: item[1], state: '님이 들어왔습니다.'});
            map.set(item[1], item[2]);
        } else if (item[0] === 'Leave') {
            array.push({ uuid: item[1], state: '님이 나갔습니다.'});
        } else {
            map.set(item[1], item[2]);
        }
        
    });

    answer = array.map((v) => {
        return map.get(v.uuid) + v.state;
    })

    return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
console.log(solution(record));