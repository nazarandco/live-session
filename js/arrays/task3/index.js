// How to work on tech tasks. Step by step guide

//1. Learn requirement
//2. Create step by step algo (& input/output for funtions)
//3. Write draft solution & testing
//4. Refactoring & final testing -> final solution

// algo
// 1. iterate numbers from 2 to N
// 2. check if number is prime
// 2.1 iterate numbers from 2 to number (10)
// 2.2 if number is divided by any other - not prime

// input: number
// output: undefined

// function getPrimes(num) {
//   for (let index = 2; index <= num; index += 1) {
//     console.log('STEP # ' + index);
//     let isPrime = true;

//     for (let number = 2; number < index; number += 1) {
//       console.log('index is: ' + index);
//       console.log('number is: ' + number);

//       if (index % number === 0) {
//         console.log('number is not prime');
//         isPrime = false;
//         break;
//       }
//     }
//     if(isPrime) {
//         console.log(index);
//     }
//   }
// }

// console.log(getPrimes(15));

// const squareArray = arr => {
//   return Array.isArray(arr) ? arr.map(num => num * num) : null; 
// }


// console.log(squareArray([1, 2, 4]));
// console.log(squareArray(2222));

//input: number
//output: boolean
function checkIsPrime(number) {
  for (let innerNum = 2; innerNum < number; innerNum += 1) {

    if (innerNum % number === 0) {
      isPrime = false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (checkIsPrime(number)) {
      console.log(number);
    }
  }
}

console.log(getPrimes(15));
