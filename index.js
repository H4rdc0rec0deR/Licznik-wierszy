let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrease() {
  count -= 1;
  countEl.textContent = count;
}

let countStr = count + " - ";

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function reset() {
  saveEl.textContent = "";
  countEl.textContent = 0;
  count = 0;
}
