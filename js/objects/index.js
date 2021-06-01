// const obj = {};
// obj.name = 'Hello';

// console.log(obj);

// // ======

// const newObj = new Object();
// newObj.id = 1001;

// console.log(newObj);

// // ======

// 1. add properties, build object
// 2. filter object

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

//input: object, key (num, str etc), value (num, str etc)
//output: object

function addPropertyV1(obj, key, value) {
    // put your code here
  }
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // in: objects
  // out: object
  const sourceObj = { [key]: value };
  return Object.assign(obj, sourceObj);
}

// console.log(addPropertyV2({cups: 'big'}, 'plates', 'medium'));

function addPropertyV3(obj, key, value) {
    // in: objects
    // out: object
    const sourceObj = { [key]: value };
    return Object.assign({}, obj, sourceObj);
  }
  
  const obj2 = {cups: 'big'};
  console.log(addPropertyV3(obj2 , 'plates', 'medium'));
  console.log(obj2);

// put your code here

// put your code here

// examples
//   const transaction = {
//     value: 170,
//   };

//test data
//   const myObj = {adress: 'Kyiv', count: 111};
//   const key = 'personName';
//   const value = 'Denis';

//   const res1 = addPropertyV1(myObj, key, value);
//   console.log(res1);
//   console.log(myObj);

//   const res2 = addPropertyV1({ adress: 'Kyiv', count: 111}, 'personName', 'Denis');
//   console.log(res2);
