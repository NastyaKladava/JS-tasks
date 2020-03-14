/* Докажите, что для множества натуральных чисел 
верно 1+2+...+n = n(n+1)/2 
*/


let n;
let sum = 0;
let num = 1000;
let sumS;

for (let ind = 0; ind <= num; ind++) {
    sum += ind;
    let n = ind;
    sumS = ind * (n + 1) / 2;
}

console.log(sum);
console.log(sumS);

if (sum === sumS) {
    console.log('Доказано');
} else {
    console.log('Не доказано');
}


