function buildObject(keysList, valuesList) {
  // put you code here
  //in: arrays
  //out: obj

  // 1. Learn requirement
  // 2. Create step by step algo (& input/output for functions)
  // 3. Write draft solution & testing
  // 4. Refactoring & final testing -> final solution

  // algo:
  // 1.
  // 2.

  //   for (let i = 0; i < keysList.length; i += 1) {
  //     const key = keysList[i];
  //     const value = valuesList[i];

  //     Object.assign(newObj, {[key]: value} );
  //   }

  return keysList.reduce((acc, key, index, arr) => {
    const value = valuesList[index];

    console.log(`STEP ${index}`);
    console.log(`acc is `, acc);

    return Object.assign(acc, { [key]: value });
  }, {}); // початкове значення - {}, це і є наш acc
  // тобто порожній на першому кроці, і далі він поступово
  // наповнюється

  return keysList.reduce(
    (acc, key, index) => ({ ...acc, [key]: valuesList[index] }),
    {}
  ); // ETALON !!!
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

console.log(buildObject(keys, values));

const buildObject = (keyList, valueList) =>
  keyList.reduce(
    (obj, key, index) => ({ ...obj, [key]: valueList[index] }),
    {}
  ); // THE SHORTEST VARIK !!!



// keys
Object.keys();
// in: obj
// out: array of string

// value
Object.values();
// in: obj
// out: array (num, str, func, obj etc.)

// entries
Object.entries();
// in: obj
// out: array of arrays([key, value])
