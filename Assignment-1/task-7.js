const prompt = require("prompt-sync")();
function titleCase(str) {
  let words = str.split(" ");
  let ans = "";
  for (i = 0; i < words.length; i++) {
    ans +=
      words[i][0].toUpperCase() + words[i].substring(1).toLowerCase() + " ";
  }
  return ans;
}
let user = prompt();
console.log(titleCase(user));
