const bodyRef = document.querySelector('body');
console.log(bodyRef);

const startBtn = bodyRef.children[1];
const stopBtn = bodyRef.children[2];
let timerId = null;

const start = () => {
  startBtn.removeEventListener('click', start);
  stopBtn.addEventListener('click', stop);
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    console.log(bodyRef.style.backgroundColor);
  }, 1000);
};

const stop = () => {
  clearInterval(timerId);
  startBtn.addEventListener('click', start);
};

startBtn.addEventListener('click', start);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
