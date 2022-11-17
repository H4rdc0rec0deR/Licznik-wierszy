let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🐕",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let randomIndexOne = Math.floor(Math.random() * fighters.length);
  let randomIndexTwo = Math.floor(Math.random() * fighters.length);
  if (randomIndexOne === randomIndexTwo && randomIndexOne === fighters.length) {
    randomIndexOne -= 1;
    randomIndexTwo -= 2;
    stageEl.textContent =
      fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
  } else if (randomIndexOne === randomIndexTwo && randomIndexOne === 0) {
    randomIndexOne += 1;
    randomIndexTwo += 2;
    stageEl.textContent =
      fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
  } else if (randomIndexOne === randomIndexTwo) {
    randomIndexOne -= 1;
    randomIndexTwo += 1;
    stageEl.textContent =
      fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
  } else {
    stageEl.textContent =
      fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
  }
});
