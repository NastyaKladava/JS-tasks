/* Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, 
результат 3 4 1 2. Если в массиве кол-во элементов нечётное 
(1 2 3 4 5),  “средний” элемент оставить на своём месте: 4 5 3 1 2 */


let array = [1, 2, 3, 4, 5, 6, 7];
let l = array.length;
let lHalf = Math.floor(l / 2);

console.log(l);
console.log(lHalf);

let indNew = l - lHalf + 1;

for (let ind = 0; ind < lHalf; ind++) {
    let temp = array[ind];
    array[ind] = array[indNew];
    array[indNew] = temp;
}

console.log(array);





