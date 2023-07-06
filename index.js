// Task 1
const number1 = 2;
const number2 = 3;
let number3;
if (number1 > 0 && number2 > 0){
    number3 = number1 * number2;
} else if(number1 < 0 && number2 > 0 || number1 > 0 && number2 < 0 ){
    number3 = number1 / number2;
} else if(number1 === 0 && number2!==0) {
    number3 = number2;
} else if(number2 === 0 && number1!==0) {
    number3 = number1;
}else if(number1 === 0 && number2 === 0) {
    number3 = NaN;
}
console.log(number3);


//Task 2
const number = 28;
if(!(number > 0 && number % 2 === 0 && number % 4 === 0 && number % 7 === 0)){
    console.log('lose');
} else {
    console.log('win');
}