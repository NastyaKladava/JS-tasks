/* Вывести таблицу значений функции y = -0.23x2 + x. Значения аргумента (x) 
задаются минимумом, максимумом и шагом. 
*/

let min = 1;
let max = 10;
let step = 2;
let x;
let y;


for ( let x = min; x <= max; x = x + step) {
    console.log('x = ' + x);
    y = - 0.23 * (x ** 2) + x;
    console.log('y = ' + y);
    console.log('-----------');
}