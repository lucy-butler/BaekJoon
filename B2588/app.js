const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(item => +item);
solution(input[0], input[1]);
function solution(a,b) {
    const str = String(b);
    console.log(a * str[2]);
    console.log(a * str[1]);
    console.log(a * str[0]);
    console.log(a * b);
    
}