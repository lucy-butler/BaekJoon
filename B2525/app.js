const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let curHour = input[0].split(' ')[0];
let curMin = input[0].split(' ')[1];
let cookTime = input[1];

solution(+curHour,+curMin,+cookTime);
function solution(curHour, curMin, cookTime) {
    curMin += cookTime;
    if(curMin >= 60){
        curHour += parseInt(curMin / 60);
        curMin = curMin % 60;
    }
    if(curHour === 24){
        curHour = 0;
    }else if(curHour > 24){
        curHour -= 24;
    }
    console.log(curHour, curMin);
}