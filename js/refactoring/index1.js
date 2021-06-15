// // option 1 - bad
// // const withdraw = (clients, balances, client, amount) => {
// //     //put your code here
// //     let clientBalances = balances[clients.indexOf(client)];
// //     if (amount <= clientBalances) {
// //       clientBalances -= amount;
// //       balances[clients.indexOf(client)] = clientBalances;
// //       return clientBalances;
// //     } else {
// //       return -1;
// //     }
// //   };

// option 2 - REFACTORING
const withdraw = (clients, balances, client, amount) => {
  //put your code here
  const index = clients.indexOf(client);

  if (clientBalance < amount) {
    return -1;
  }

  balances[index] -= amount;
  return balances[index];
};

// //example 1:

// //input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// //output
// //37
// //и массив balances должен быть [1400, 37, -6]

// //example 2:

// //input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// //output
// //-1
// //и массив balances должен быть [1400, 87, -6]


'use strict';

// option 2 - MY CODE is very BAD

const withdraw = (clients, balances, client, amount) => {
  //put your code here

  let rest = 0;


  //don`t use forEach - use indexOf
  clients.forEach((name, index) => {
    // don`t use includes - use '==='
    if (name.includes(client)) {
      rest = balances[index] - amount;
    }
  });

  // спочатку перевіряємо чи хватає грошей, а тоді робимо дії, а не навпаки !!
  // бо виходить що ми робимо дії, навіть якщо грошей бракує

  if (rest < 0) {
    return -1;
  }

  return rest;
};

//example 1:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50))

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10))

//output
//-1
//и массив balances должен быть [1400, 87, -6]