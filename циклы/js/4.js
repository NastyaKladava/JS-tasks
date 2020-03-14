/* Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, 
вывести 321. Числа к строке приводить нельзя 
*/

let num = 123450;
let mirrorNum = 0;

while (num > 0 ) {
    let lastNum = num % 10;
    mirrorNum = mirrorNum * 10 + lastNum;
    num = Math.floor(num / 10);
}

console.log(mirrorNum);


