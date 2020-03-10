// Вывести уравнение прямой по координатам двух точек

let x1 = 2;
let y1 = 4;
let x2 = 4;
let y2 = 2;

// y = k * x + b;

let k = (y1 - y2) / (x1 - x2);
console.log(k);

let b = y2 - k * x2;
console.log(b);


if (b > 0) {
    console.log('y = ' + k + 'x+' +b);
} else if (b == o) {
    console.log('y = ' + k + 'x');
} else  if (b < 0) {
    console.log('y = ' + k + 'x' +b);
}











