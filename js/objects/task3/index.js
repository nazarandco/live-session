// input: object
// output: object array

// algo
// 1. Object.entries
// 2. map array -> object
// 3. sort

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Mark',
    age: 7,
  },
  'customer-id-4': {
    name: 'Roma',
    age: 25,
  },
};

const getCustomersList = (obj) =>
// option 1
//   return Object.entries(obj).map((arr) => {
//     // console.log(arr);
//     const arr0 = arr[0];
//     const arr1 = arr[1];
//     // console.log(arr0);
//     // console.log(arr1);
//     const res = {...arr1, id: arr0};
//     // console.log(res);
//     return res;
//   }).sort((a, b) => {
//       return a.age - b.age;
//   });

// option 2
Object.entries(obj)
.map((arr) => ({ ...arr[1], id: arr[0] }))
.sort((a, b) => a.age - b.age);

// option 3
Object.entries(obj)
.map(([id, customerObj]) => ({ ...customerObj, id }))
.sort((a, b) => a.age - b.age);

// test of destructuring
// const arr = [1, 3];
// const [el1, el2] = arr;
// console.log(el1, el2);

// test data

console.log(getCustomersList(customers));
