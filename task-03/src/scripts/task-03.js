export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      minutes: document.querySelector(`${selector} [data-value="mins"]`),
      seconds: document.querySelector(`${selector} [data-value="secs"]`),
    };

    this.update();
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    const time = this.targetDate.getTime() - new Date().getTime();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.refs.days.textContent = this.padInt(days);
    this.refs.hours.textContent = this.padInt(hours);
    this.refs.minutes.textContent = this.padInt(mins);
    this.refs.seconds.textContent = this.padInt(secs);
  }

  padInt(value) {
    return String(value).padStart(2, "0");
  }
}
