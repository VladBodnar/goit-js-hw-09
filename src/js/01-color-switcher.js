const bodyRef = document.querySelector('body');
const startBtn = bodyRef.children[1];
const stopBtn = bodyRef.children[2];
bodyRef.style.textAlign = "center";
startBtn.style.marginTop = "300px";
startBtn.style.width = "80px";
startBtn.style.height = "40px";
stopBtn.style.marginTop = "300px";
stopBtn.style.width = "80px";
stopBtn.style.height = "40px";


stopBtn.disabled = true;


let timerId = null;

const start = () => {  
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    console.log(bodyRef.style.backgroundColor);
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const stop = () => {
  clearInterval(timerId); 
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
