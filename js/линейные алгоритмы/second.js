//Найти корни квадратного уравнения. (ax2 + bx + c)

let a = 1;
let b = 5;
let c = 4;
let x1, x2;

let D = b*b - 4*a*c;
console.log(D);

if (D < 0) {
    console.log (false)
} else if (D == 0) {
    console.log ((-b + Math.sqrt(D)) / (2 * a));
} else if (D > 0) {
    console.log ((-b + Math.sqrt(D)) / (2 * a));
    console.log ((-b - Math.sqrt(D)) / (2 * a));
}


