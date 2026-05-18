const prompt = require("prompt-sync")();
function isPalindrome(str) {
  let step1 = str.toLowerCase();
  let step2 = "";
  for (let char of step1) {
    if (char >= "a" && char <= "z") {
      step2 += char;
    }
  }
  let i = 0,
    j = step2.length - 1;
  while (i < j) {
    if (step2[i] != step2[j]) return false;
    (i++, j--);
  }
  return true;
}
let user = prompt();
console.log(isPalindrome(user));
