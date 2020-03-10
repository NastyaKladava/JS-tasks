/*let n = 5;
// 5! = 1 *2 * 3 * 4 * 5

let result =1;
for (let ind = 1; ind <= n; ind++) {
    result = result * ind;
}
console.log(result);

// result = 1 * 1 * 2 * 3 * 4 * 5 */


// 0. длина массива 10, рандом от -100 до 100
// 1. заполнить массив случайными значениями
// 2. вывести массив в консоль
// 3. поменять местами
// 4. вывести новый массив


let arr = [], arrLength = 10,
              minArrVAlue = -100, maxArrValue = 100;

for (let ind = 0; ind < arrLength; ind ++) {
    arr [ind] = Math.floor(Math.random() * (maxArrValue - minArrVAlue - minArrVAlue)) + minArrVAlue;
}

let indMin = 0, indMAx = 0;

for (let ind = 1; ind < arrLength; ind ++) {
    if (arr[ind] < arr[indMin]){
        indMin = ind; 
    }
    if (arr[ind] > arr[indMAx]){
        indMAx = ind;
    }
}

console.log(arr);
console.log(indMin);
console.log(arr[indMin]);
console.log(indMAx);
console.log(arr[indMAx]);

let temp = arr[indMin];
arr[indMin] = arr[indMAx];
arr[indMAx] = temp;

console.log(arr);



