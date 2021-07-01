'use strict';

function printMessage(country, city) {
  console.log(this);
  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// input: obj, args
// output: func

// option 1
// printMessage.bind(user)('Ukraine', 'London');

// option 2
// const printMessageBinded = printMessage.bind(user, 'Ukraine', 'London');
// printMessageBinded();

// option 3
// const printMessageBinded = printMessage.bind(user, 'Ukraine');
// printMessageBinded('London'); // ukraine буде закріпленим аргументом
// // а в функції змінюємо при викликах другий аргумент

// input: -
// output: func
function bind(func, context, ...args) {
  console.log(args);

  // input: arg1, ... argN
  // output: anything
  // функція має бути така ж, як і та яку вона викликає - sum
  return function (...funcArgs) {
      console.log('func is called');

      //input: obj, args
      //output: func res
    return func.call(context, ...args, ...funcArgs);
  };
}

//test data
function sum(c, d) {
  console.log('context: ', this);
  console.log('arguments: ', arguments);
  return this.a + this.b + c + d;
}

const context = {
  a: 100,
  b: 40,
};

// 1 -- тут можна без ...args в bind
const sumBinded = bind(sum, context);
console.dir(sumBinded);
console.dir(sumBinded(10, 30));

// 2 -- тут не вийде без ...args в bind
const sumBinded = bind(sum, context, 10, 30);
console.dir(sumBinded);
console.dir(sumBinded);
