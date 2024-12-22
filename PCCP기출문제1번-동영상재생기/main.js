function convertToSeconds(timeString) {
  const [minutes, seconds] = timeString.split(":").map(Number);

  return minutes * 60 + seconds;
}

function convertToTimeFormat(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const newMinntes = String(minutes).padStart(2, "0");
  const newSeconds = String(seconds).padStart(2, "0");

  return `${newMinntes}:${newSeconds}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const videoTime = convertToSeconds(video_len);
  let posTime = convertToSeconds(pos);
  const opStartTime = convertToSeconds(op_start);
  const opEndTime = convertToSeconds(op_end);

  commands.forEach((command) => {
    if (opStartTime <= posTime && posTime <= opEndTime) {
      posTime = opEndTime;
    }
    if (command === "next") {
      posTime = posTime + 10 > videoTime ? videoTime : posTime + 10;
      if (opStartTime <= posTime && posTime <= opEndTime) {
        posTime = opEndTime;
      }
    }
    if (command === "prev") {
      posTime = posTime - 10 < 0 ? 0 : posTime - 10;
      if (opStartTime <= posTime && posTime <= opEndTime) {
        posTime = opEndTime;
      }
    }
  });

  return convertToTimeFormat(posTime);
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]));
// console.log(
//   solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"])
// );
