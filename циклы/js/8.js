/*
Вывести на экран столько элементов ряда Фибоначчи, сколько указал пользователь. 
Например, если на ввод поступило число 6, то вывод должен содержать шесть первых чисел ряда Фибоначчи: 1 2 3 5 8 13.
Ряд Фибоначчи - это последовательность натуральных чисел,
 где каждое последующее число является суммой двух предыдущих: 1 1 2 3 5 8 13 21 34 55 89 ...
 */

let f1 = 1;
let f2 = 2;
let fElements = '1, 1';
let fSum;
let userNum = +prompt('Введите количество чисел ряда Фибоначи.');

for (let ind = 3; ind <= userNum; ind++) {
    let fSum = f1 + f2;
    f1 = f2;
    f2 = fSum;
    fElements = fElements + ' , ' + fSum
}

console.log('Первые ' + userNum + ' чисел Фибоначи равны ' + fElements);