function solution(friends, gifts) {
  /** 각 friends의 다음달 선물 결과값 */
  const results = [];
  /** friend 번호 mapping용 변수 */
  const mapping = new Map();

  /** 선물 지수 리스트 */
  const giftCountArr = new Array(friends.length).fill(0);

  /** 선물 내역 정리용 표 */
  const giftArr = Array.from({ length: friends.length }).map(() =>
    new Array(friends.length).fill(0)
  );

  // 정리한 표에서 friend의 위치를 파악하기 위해 입력받은 friend마다 번호 mapping set
  friends.forEach((name, idx) => {
    mapping.set(name, idx);
  });

  // 선물 리스트에서 0번째에 있으면 선물을 준 사람, 1번째에 있으면 선물을 받은 사람이다.
  // 정리한표에서 [[from(선물을 준 사람)], [to(선물을 받은 사람)]] 위치에 count 추가(결산).
  gifts.forEach((info) => {
    const [from, to] = info.split(" ");
    giftArr[mapping.get(from)][mapping.get(to)]++;
  });

  //friend 선물 지수 계산
  for (let i = 0; i < giftArr.length; i++) {
    //  해당 friend가 선물한 갯수 다 더하기
    giftCountArr[i] = giftArr[i].reduce((acc, cur) => (acc += cur), 0);

    // 다른 friend가 선물한 갯수 다 빼기
    for (let j = 0; j < giftArr.length; j++) {
      giftCountArr[i] -= giftArr[j][i];
    }
  }

  for (let i = 0; i < giftArr.length; i++) {
    let count = 0;
    for (let j = 0; j < giftArr[i].length; j++) {
      // i가 j와 같다면 현재 참조하고 있는 값이란 뜻이므로 continue로 동작 중단
      if (i === j) continue;
      if (giftArr[i][j] > giftArr[j][i]) count++;
      //   값이 같을 경우 선물 지수 비교해서 현재 값이 선물지수가 더 크면 count 증가
      if (
        giftArr[i][j] === giftArr[j][i] &&
        giftCountArr[i] > giftCountArr[j]
      ) {
        count++;
      }
    }
    results.push(count);
  }

  //   배열 중 가장 큰 값 반환
  return Math.max(...results);
}

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

console.log(solution(friends, gifts));
