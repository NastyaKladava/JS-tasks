/*
В массиве найти сумму элементов, находящихся между минимальным и 
максимальным элементами. Сами минимальный и максимальный элементы в сумму не включать.
*/

let array = [];
let arrayLength = 10;
let sum;

for (ind = 0; ind < arrayLength; ind++) {
    array[ind] = Math.floor(Math.random() * 10);
}
console.log(array);

let indMin = 0;
let indMax = 0;

for (let ind = 0; ind < arrayLength; ind++) {
    
    if (array[ind] < array[indMin]) {
        indMin = ind;
    }

    if (array[ind] > array[indMax]) {
        indMax = ind;
    }
}

console.log('Минимальный элемент = ' + array[indMin]);
console.log('Максимальный элемент = ' + array[indMax]);

for(ind = indMin + 1; ind < indMax; ind++) {
        sum += array[ind];
}

console.log('Сумма = ' + sum);