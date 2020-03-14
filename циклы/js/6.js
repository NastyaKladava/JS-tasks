/*
Проверить корректность работы генератора псевдослучайных чисел языка программирования 
с помощью оценки вероятности выпадения четных чисел на выборке не меньше 1000 случайных чисел. 
(Программа должна выдать около 50%. Можно увеличить число генераций, 
    например до 10 тысяч. В таком случае отклонение от 50% будет меньше)
    */

let counter = 0;
let array = [];
let arraySize = 10000;

for (ind = 0; ind < arraySize; ind++) {
    array[ind] = Math.floor(Math.random() * 101);
}

for ( ind = 0; ind < arraySize; ind ++) {
    if (array[ind] % 2 === 0) {
        counter += 1;
    }
}

console.log(counter);

let probability = (counter / 10000) * 100;
console.log(probability);