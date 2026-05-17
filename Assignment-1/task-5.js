let myset = new Set();
function removeDuplicates(arr) {
  for (let value of arr) {
    myset.add(value);
  }
}
let arr = [1, 2, 2, 2, 5, 8, 10, 10];
removeDuplicates(arr);
console.log(myset);
