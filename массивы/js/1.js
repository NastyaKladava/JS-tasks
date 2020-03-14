let array = [1, 2, 3, 4, 5];
let newArray = [];

for ( let ind = array.length - 1; ind >= 0; ind --) {
   console.log(ind);
    console.log(array[ind]);
    console.log('-----------');
}

for (let ind = 0; ind < array.length; ind++) {
    newArray[ind] = array[array.length - ind - 1];
}

console.log(newArray);