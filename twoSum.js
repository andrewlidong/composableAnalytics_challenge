// Given an array and a target element return each two elements that summed together add up to the target element.

const arr = [8,5,5,13,11,12];

function twoSum (arr, target) {
  let returnArr = [];
  let hashEl = {};

  for (let i = 0; i < arr.length; i++) {
    let remainder = arr.slice(0,i).concat(arr.slice(i+1))

    if remainder.includes(target - arr[i]) {
      return [(target - arr[i]), arr[i]];
    }
  }

  return null;
}

console.log(twoSum(arr, 13));
console.log(twoSum(arr, 14));
console.log(twoSum(arr, 10));

"www.this whitespace .com"
