const inputRef = document.querySelectorAll('input');
const submRef = document.querySelector('button');

const firstDelayRef = inputRef[0];
const stepDelayRef = inputRef[1];
const amountRef = inputRef[2];

amountRef.addEventListener('input', () => {});
firstDelayRef.addEventListener('input', () => {});
stepDelayRef.addEventListener('input', () => {});

function createObjekt(deleyObjekt, posicionObjekt) {
  const result = {
    delay: deleyObjekt,
    position: posicionObjekt,
  };
  console.log(result);
}

function createPromise(delay, step, amount, position) {
  delay = delay + step;
  position = position + 1;
  if (position > amount) {
    console.log('End');
    clearTimeout();
    return;
  }
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise(() => {
    setTimeout(() => {
      if (shouldResolve) {
        createObjekt(delay, position);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);

        console.log('resolve', position);
      } else {
        createObjekt(delay, position);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
      createPromise(delay, step, amount, position);
    }, delay);
  });
}
submRef.addEventListener('click', event => {
  event.preventDefault();
  console.log('start');

  const amountStart = Number(amountRef.value);
  const delayStart = Number(firstDelayRef.value);
  const stepDelayStart = Number(stepDelayRef.value);
  let positionStart = 0;
  createPromise(delayStart, stepDelayStart, amountStart, positionStart);
});
