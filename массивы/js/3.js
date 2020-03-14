/*
Найти в массиве те элементы, значение которых меньше 
среднего арифметического, взятого от всех элементов массива
*/


let array = [];
let sum = 0;
let arrayAverage = 0;
let arrayLength = 10;
let arrayMin = [];

for (let ind = 0; ind < arrayLength; ind++) {
    array[ind] = Math.floor(Math.random() * 10);
}
console.log(array);

for (let ind = 0; ind < arrayLength; ind++) {
    sum += array[ind];
    arrayAverage = sum / arrayLength;
}

for ( let ind = 0; ind < arrayLength; ind++) {
    let tempEl = 0;
    tempEl += ind;
    if (array[ind] < arrayAverage) {
        arrayMin [tempEl] = array[ind];
    }

}

console.log(sum);
console.log(arrayAverage);
console.log(arrayMin);