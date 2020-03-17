/* Объекты могут быть использованы для построения
различных структур данных. Часто встречающаяся
структура – список (не путайте с массивом). Список –
связанный набор объектов, где первый объект содержит
ссылку на второй, второй – на третий, и т.п. (как раз в последней ссылке из полезного эта структура описана)
Напишите функцию arrayToList, которая строит такую
структуру, получая в качестве аргумента [1, 2, 3], а также
функцию listToArray, которая создаёт массив из списка.
Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где
этот элемент добавлен спереди к первоначальному
списку, и функцию nth, которая в качестве аргументов
принимает список и число, а возвращает элемент на
заданной позиции в списке или же undefined в случае
отсутствия такого элемента.
Если ваша версия nth не рекурсивна, тогда напишите её
рекурсивную версию. */

let array = [1, 2, 3];
let list = {};
let number;

function arrayToList (array){
    let result = null;
    for (i = array.length-1; i >= 0; i--) {
        result = { 
            value: array[i],
            next:  result
        }
    }
    return result;
}

function listToArray (list , array){
    array = [];
    if(list.next != null){
        array.push(list.value);
        list = list.next;
        return listToArray(list, array);
    }
    else {
        return array;
    }
}

function prepend(value, list){
    return {value: value, next: list};
}

function nth(list, position, element) {
    element = element;
    if(position === element) {
        return list.value;
    } else {
        if(list != null) {
            return nth(list.next, position, element + 1);
        } else {
            return undefined;
        }
    }
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(list));
console.log(prepend('new item' , list));
console.log(nth(list , 1, 1));

