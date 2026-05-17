const prompt = require('prompt-sync')();
function reverseString(str){
    let n=str.length;
    let result="";
for(let i=n-1;i>=0;i--){
result+=str[i];
}
return result;
}
let str=prompt();
let rev_str=reverseString(str);
console.log(rev_str);
