const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.stop.disabled = true;
refs.start.addEventListener("click", startChange);
refs.stop.addEventListener("click", stopChange);

let intervalMain = null;

function startChange() {
  refs.start.disabled = true;
  refs.stop.disabled = !refs.start.disabled;
  intervalMain = setInterval(changeColor, 1000);
}

function stopChange() {
  refs.stop.disabled = true;
  refs.start.disabled = !refs.stop.disabled;
  clearInterval(intervalMain);
}

function changeColor() {
  refs.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
