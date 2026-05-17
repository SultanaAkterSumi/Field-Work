const prompt = require('prompt-sync')();
function findMax(arr){
return Math.max(...arr);
}
let user=prompt("Enter a array using space: ");
let arr=user.split(" ").map(Number);
console.log(findMax(arr));