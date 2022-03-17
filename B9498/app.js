const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);
function solution(num) {

    if(100 >= num && num >= 90){
        console.log('A');
    }else if(89 >= num && num >= 80){
        console.log('B');
    }else if(79 >= num && num >= 70){
        console.log('C');
    }else if(69 >= num && num >= 60){
        console.log('D');
    }else {
        console.log('F');
    }
    
}