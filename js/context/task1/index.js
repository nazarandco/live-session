'use strict';

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    // +++
    console.log('CONTEXT of startTimer IS', this);

    // input: callback func, number
    // output: number (func`s id)

    this.intervalId = setInterval(() => {
      console.log('CONTEXT IS' + this);

      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);

    // const intervalId = setInterval(function () {
    //   console.log('CONTEXT IS' + this);

    //   this.secondsPassed += 1;
    // }, 1000);

    // console.log('interval: ' + intervalId);
  },
  getTime() {},
  stopTimer() {
      clearInterval(this.intervalId);
  },
  returnTimer() {},
};

// console.log(timer);
timer.startTimer();
timer.stopTimer();

// lose context case #1
// const func = timer.startTime;
// func()

//example
// console.log(
//   [1, 5, 10, 19].filter(function (el) {
//     console.log(this);
//     return el > 5;
//   })
// );
