//not finished yet

class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  getCentiseconds() {
    // ... your code goes here
    return (this.currentTime % 60) / 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigit = value.toString();

    if (twoDigit.length === 2) {
      return twoDigit;
    }
    return "0" + twoDigit;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let centiseconds = this.getCentiseconds();
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(
      seconds
    )}:${this.computeTwoDigitNumber(centiseconds)}`;
  }
}
