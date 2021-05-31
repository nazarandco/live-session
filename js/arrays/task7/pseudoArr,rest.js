// i:
// o:

function multiply(...args) {
  // for(let el of arguments) {
  //  console.log(el);
  //} виводимо усі передані в функцію значення як значення

  // rest operator !!
  // закидуємо всі передані елементи в масив !!


  // перемножуємо передані значення і 
  // передаємо в масив
  const arr = args.reduce((acc, el) => acc * el);

  console.log(arr);
}

multiply(2, 5, 10, 434, 23423, 234234);

// ========= spred operator !!

const array = [1, 3, 4, 5, 6];
console.log(...array);

const arrayCopy = [...array];
console.log(arrayCopy);

 
