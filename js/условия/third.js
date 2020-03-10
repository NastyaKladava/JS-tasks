/* Определить, какой четверти принадлежит точка с координатами (x, y).
x и y - рандом от -10 до 10 */

let x = Math.floor(Math.random() * 10)+ -10;
let y = Math.floor(Math.random() * 10)+ -10;

console.log('M('+x+'; '+y+')');

if (x > 0 && y > 0) {
    console.log('I quarter');
} else if (x < 0 && y > 0) {
    console.log('II quarter');
} else if (x < 0 && y < 0) {
    console.log('III quarter');
} else if (x > 0 && y < 0) {
    console.log('IV quarter');
}
