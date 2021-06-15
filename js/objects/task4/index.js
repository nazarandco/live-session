//input: objects
//output: boolean

// algo
// 1. check keys length
// 2. check every key-value, if not equal -> false

// MY VERSION :

// function compareObjects(obj1, obj2) {
//   // put your code here
//   // TODO
//   const objA = Object.values({...obj1});
//   const objB = Object.values({...obj2});

//   // objA.map(el => el === el);
//   //   const result = objA === objB ? true : false;
//   // console.log(result);
//   // console.log(objA);
//   // console.log(objB);
//   return objA === objB;
// }

// option 1 ALEX - not good because index of obj
// can have different indexes, so it`s not universal

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) return false;

//   return keys1.every((key, index) => key === keys2[index] && obj1[key] === obj2[key]);
// }

// option 2 REFACTOR - good

// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }

//   return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
//   return !Object.keys(obj1).some((key) => obj1[key] !== obj2[key]);
// }

// option 3 TERNARY - not good because complicate reading

// function compareObjects(obj1, obj2) {
//   return Object.keys(obj1).length !== Object.keys(obj2).length 
//   ? false 
//   : Object.keys(obj1).every(key => obj1[key] === obj2[key]);
//   }

// option 4 ANASTASIA - good

const compareObjects = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(elem => obj1[elem] === obj2[elem]);

// option 5 EVGENIY - bad

// function compareObjects(obj1, obj2) {
//   //TODO
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   const obj1Arr = Object.entries(obj1).flat();
//   const obj2Arr = Object.entries(obj2).flat();

//   //VERY BAD
//   for (let index = 0; index < obj1Arr.length; index += 1) {
//     //bad
//     if (obj1Arr[index] !== obj2Arr[index]) {
//       return false;
//     }
//   }
//   return true;
// }

// option 6 VLAD - BAD

// function compareObjects(obj1, obj2) {
//   const arr1 = Object.keys(obj1).concat(Object.values(obj1));
//   const arr2 = Object.keys(obj2).concat(Object.values(obj2));

//   if (arr1.length !== arr2.length) return false;

//   // Very bad
//   for (let i = 0; i < arr1.length; i += 1) {
//     // bad
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
