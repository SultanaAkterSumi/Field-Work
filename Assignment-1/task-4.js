const prompt = require('prompt-sync')();
let vowels=['a','e','i','o','u','A','E','I','O','U'];
function countVowels(str){
    let n=str.length,count=0;
for(let i=0;i<n;i++){
    if(vowels.includes(str[i])) count++;
}
return count;
}

let user=prompt();
console.log(countVowels(user));