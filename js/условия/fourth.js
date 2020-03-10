/* Определение принадлежности точки кругу с центром в начале координат: вводятся координаты (x;y) точки 
и радиус круга (r), определить, принадлежит ли данная точка кругу, если 
его центр находится в начале координат. 
x и y - рандом от -15 до 15, r - рандом от -10 до 10 */


let x = Math.floor(Math.random() * 15) + -15;
let y = Math.floor(Math.random() * 15) + -15;
let r = Math.floor(Math.random() * 10) + -10;

console.log (x);
console.log (y);
console.log (r);

let c = Math.sqrt(x * x + y* y);

if (c <= r) {
    console.log('Принадлежит кругу');
} else {
    console.log('Принадлежит кругу');
}

