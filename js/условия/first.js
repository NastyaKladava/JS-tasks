//Посчитать выражение (max(a*b*c, a+b+c) + 3). a, b и c - рандом от -10 до 10

let a = Math.floor(Math.random() * 10) + -10;
let b = Math.floor(Math.random() * 10) + -10;
let c = Math.floor(Math.random() * 10) + -10;
let y = Math.max((a*b*c, a+b+c) + 3);

console.log(y);