/*
Угадать случайное число. 
В программе генерируется случайное целое число от 0 до 100. 
Пользователь должен его отгадать не более чем за 10 попыток. 
После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, чем то,
 что загадано. Если за 10 попыток число не отгадано, то вывести загаданное число.
 */


let randomNum = Math.floor(Math.random() * 100) + 0;;
let attempt = 1;
let userNum;

while (attempt <= 10) {
    prompt('У вас есть ' + attempt + ' попыток. Введите, пожалуйста число от 0 до 100. ');

    if (userNum < randomNum) {
        alert('Случайное число больше Вашего.');
    } else if (userNum > randomNum) {
        alert('Случайное число меньше Вашего.');
    } else if (userNum === randomNum) {
        alert('Вы угадали число!');
        break;
    }
    attempt ++;

}

if (attempt === 11) {
    alert('Ваши попытки закончились! К сожалению, Вы не отгадали число.');
}

