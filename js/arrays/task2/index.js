/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

function sum(from, to, printer) {
  // put your code here
  let sum = 0;
  for (let i = from; i <= to; i += 1) {
    sum += i;
  }
  printer(sum);
}

function printResult(res) {
  // put your code here
  console.log('Result is here: ' + res);
}

// function sentEmail(res) {
//     // put your code here
//     console.log('Result is here: ' + res);
//   }

sum(5, 15, printResult);
