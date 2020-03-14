/* Найти сумму и произведение цифр введенного натурального числа. 
число - рандом от 100000 до 1000000 
*/


let num = Math.floor(Math.random() * 100000) + 1000000;
console.log(num);
num = num + '';

let sum = 0;
let mult = 1;

for (let i = 0; i < num.length; i++) {
     numN = +num[i];
     sum += numN;
     mult *= numN;
}


console.log('Сумма =' + sum);
console.log('Произведение =' + mult);




