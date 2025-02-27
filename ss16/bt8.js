let firstNum = +prompt("Nhập số thứ nhất");
let secondNum = +prompt("Nhập số thứ hai");
let thirdNum = +prompt("Nhập số thứ ba");
if (firstNum>secondNum && firstNum>thirdNum) {
    console.log(firstNum);
} else if (secondNum>thirdNum){
    console.log(secondNum);
}else{
    console.log(thirdNum);
}