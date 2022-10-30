import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputRef = document.querySelectorAll('input');
const submRef = document.querySelector('button');
const formRef = document.querySelector('form');
formRef.style = 'display:flex';

const firstDelayRef = inputRef[0];
const stepDelayRef = inputRef[1];
const amountRef = inputRef[2];

firstDelayRef.style = 'display:block';
stepDelayRef.style = 'display:block';
amountRef.style = 'display:block';

firstDelayRef.style.marginRight = '30px';
stepDelayRef.style.marginRight = '30px';
amountRef.style.marginRight = '30px';

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
  if (position > amount) {
    console.log('End');
    Notify.success('End');
    clearTimeout();
    return;
  }
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise(() => {
    setTimeout(() => {
      if (shouldResolve) {
        createObjekt(delay, position);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

        console.log('resolve', position);
      } else {
        createObjekt(delay, position);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
      delay = delay + step;
      position = position + 1;
      createPromise(delay, step, amount, position);
    }, delay);
  });
}

function eventFunction(event) {
  event.preventDefault();
  console.log('start');

  const amountStart = Number(amountRef.value);
  const delayStart = Number(firstDelayRef.value);
  const stepDelayStart = Number(stepDelayRef.value);
  let positionStart = 1;
  createPromise(delayStart, stepDelayStart, amountStart, positionStart);
  Notify.success('start');
}

submRef.addEventListener('click', eventFunction);
