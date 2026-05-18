const prompt = require("prompt-sync")();
function twoSum(nums, target) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (m.has(rem)) {
      return [i, m.get(rem)];
    }
    m.set(nums[i], i);
  }
  return null;
}

let user = prompt("Enter a array using space: ");
let arr = user.split(" ").map(Number);

const targetInput = prompt("Enter target sum: ");
const target = Number(targetInput);

let result = twoSum(arr, target);
if (result == null) console.log("No pair found");
else console.log(result);
