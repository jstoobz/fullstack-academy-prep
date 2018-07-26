const myForEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};

let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

console.log(myForEach(nums, addToSum));
console.log(sum);