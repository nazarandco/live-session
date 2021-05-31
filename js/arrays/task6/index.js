// i: array, callback:
//i: el, i, arr
//o: boolean
// o: array

// algo
// 1. create new array
// 2. iterate arr, apply callback for each element
// 3. if - true, push result to new arr

const filterArrayElements = (arr, callback) => {
  // put you code here
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackRes = callback(arr[index], index, arr);

    if (callbackRes) {
      res.push(el);
    }
  }

  return res;
};

let arr = [34, 56, 4, 3, -10];

function call(el) {
  if (el > 5) {
    return true;
  }
}

console.log(filterArrayElements(arr, call));
