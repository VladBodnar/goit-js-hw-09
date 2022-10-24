import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const timerRef = document.querySelector('.timer');
const spanTimer = timerRef.querySelectorAll('.label');
timerRef.style = 'display:flex';
spanTimer[0].style = 'display:block';
spanTimer[1].style = 'display:block';
spanTimer[2].style = 'display:block';
spanTimer[3].style = 'display:block';

const startTimer = () => {
  const TIMER_DEADLINE = new Date(...selectedDateArray);
  timer.start(timerRef, TIMER_DEADLINE);
  startBtn.removeEventListener('click', startTimer);
};

const createSrartBtnListener = () => {
  startBtn.addEventListener('click', startTimer);
};

createSrartBtnListener();

const selectedDateArray = [];

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDateArray.push(selectedDates[0]);
    createSrartBtnListener();
  },
};

flatpickr(myInput, options);

const timer = {
  intervalId: null,
  refs: {},

  notifyOptions: {
    position: 'r-center',
    backOverlay: true,
    clickToClose: true,
    closeButton: true,
  },
  start(rootSelector, deadline) {
    const delta = deadline.getTime() - Date.now();
    if (delta <= 0) {
      Notify.failure(
        'Вибраний час в минулому, виберіть дату в майбутньому!',
        this.notifyOptions
      );
      return;
    }
    Notify.success('Відлік почався', this.notifyOptions);
    this.getRefs(rootSelector);
    this.intervalId = setInterval(() => {
      const diff = deadline.getTime() - Date.now();
      console.log(diff);
      if (diff <= 1000) {
        clearInterval(this.intervalId);
        Notify.success('Дедлайн настав!', this.notifyOptions);
      }

      const data = this.convertMs(diff);
      this.refs.days.textContent = this.addLeadinZero(data.days);
      this.refs.hours.textContent = this.addLeadinZero(data.hours);
      this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
      this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
    }, 1000);
  },

  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelectorAll('.value')[0];
    this.refs.hours = rootSelector.querySelectorAll('.value')[1];
    this.refs.minutes = rootSelector.querySelectorAll('.value')[2];
    this.refs.seconds = rootSelector.querySelectorAll('.value')[3];
  },

  convertMs(diff) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor(((diff % day) % hour) / minute);
    const seconds = Math.floor((((diff % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
};
