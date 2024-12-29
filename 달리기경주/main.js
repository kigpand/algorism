function solution(players, callings) {
  /** 플레이어의 등번호 */
  const playerMap = new Map();
  /** 플레이어의 현재 등수 */
  const levelmap = new Map();

  players.forEach((name, idx) => {
    playerMap.set(name, idx);
    levelmap.set(idx, name);
  });

  callings.forEach((calling) => {
    const levelCount = playerMap.get(calling);
    const prevPlayer = levelmap.get(levelCount - 1);
    levelmap.set(levelCount - 1, calling);
    levelmap.set(levelCount, prevPlayer);
    playerMap.set(prevPlayer, levelCount);
    playerMap.set(calling, levelCount - 1);
  });

  return [...levelmap.values()];
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

console.log(solution(players, callings));
