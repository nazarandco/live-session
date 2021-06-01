const mapArrayElements = (arr, callback) => {
  // put you code here
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const callbackRes = callback(arr[index], index, arr);

    res.push(callbackRes);
  }

  return res;
};

function call(el) {
  return el + '...!!!';
}

let arr = [34, 56, 4, 3, -10];
console.log(mapArrayElements(arr, call));
