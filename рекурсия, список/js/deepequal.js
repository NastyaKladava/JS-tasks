/* Напишите функцию deepEqual, которая принимает два
значения и возвращает true, только если это два
одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать
рекурсивным вызовом deepEqual.
Чтобы узнать, когда сравнивать величины через ===, а
когда – объекты по содержимому, используйте оператор
typeof. Если он выдаёт "object" для обеих величин, значит
нужно делать глубокое сравнение. Примите во внимание
одно дурацкое исключение, существующее по
историческим причинам: typeof null тоже возвращает
"object". */

let user = {
    name: "Mike",
    age: 32,
};

let user2 = {
    name: "John",
    age: 30,
  };

function deepEqual(a, b) {
    if (a === b) {
        return true;
    } 
    if (a === null || typeof(a) != 'object' ||
        b === null || typeof(b) != 'object') {
            return false;
        }
    let keysInA = 0 ;
    let keysInB = 0;
    for(key in a) {
        keysInA += 1;
    }
    for(key in b) {
        keysInB += 1;
        if(!(key in a) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return keysInA === keysInB;
}

console.log(deepEqual(user , user2));