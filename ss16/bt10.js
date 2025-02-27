let firstNum = +prompt("nhập số đầu");
let secondNum = +prompt("nhập số cuối");
let thirdNum = Math.round(Math.random() * (secondNum-firstNum)) + firstNum;
console.log(thirdNum);
