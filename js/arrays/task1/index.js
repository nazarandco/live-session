'use strict';

/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

// ... code here

function getSenseOfLife() {
  return 42;
}

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

// ... code here

function getSquared(num) {
  return num ** 2;
} // = return num * num;

/* ф-ция sum должна принимать два числа и вернуть их сумму */

// ... code here

function getSquared(num) {
  return num ** 2;
}

const result = getSquared(30);
console.log(result);
// ==
console.log(getSquared(30));

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

// ... code here

function greeting(age) {
  console.log('I am ' + age + ' years old');
}
// return('I am ' + age + ' years old');
// console.log(greeting(100));
const res = greeting(100);
console.log(res);

greeting();

// ====== 

const greetingExpression = function (age) {
    console.log('I am ' + age + ' years old');
}
greetingExpression(50); // FUNCTION EXPRESSION !
/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

// ... code here

const mult = (num1, num2) => num1 * num2; // return в arrow func 
// встановлений по дефолту !

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

// ... code here

const square = (num) => num * num;

const square = (num = 0) => num * num; // '= 0' це аргумент по замовчуванню
console.log(square());
/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

// ... code here
