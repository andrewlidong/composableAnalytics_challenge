// Given an array and a target element return the first two elements that summed together add up to the target element.
console.log("Two Sum");


const arr = [8,5,5,13,11,12];

function twoSum (arr, target) {
  let hashEl = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashEl[(target - arr[i]).toString()] !== undefined) {
      return [arr[i], (target - arr[i])];
    }

    hashEl[arr[i].toString()] = arr[i];
  }

  return null;
}

console.log(arr);

console.log(twoSum(arr, 13));
console.log(twoSum(arr, 14));
console.log(twoSum(arr, 10));
