

let day = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
console.log(day);
if(day > 5) {
    console.log('It\'s a weekend')
} else {
    console.log('It\'s a weekday')
};

// George's Solution

let arr = [];
for (let i=0; i<=15; i++) {
arr.push(Math.round(Math.random()*20));
let v = arr[i];
if(v > 10) {
console.log(v)
}
}

console.log(arr);

//----------------------2nd Problem Set------/////
var arr = [];
for (i=0; i<=100;  i++)  {
    arr.push(Math.round(Math.random()*i))
    if(i>10) {
        console.log(i)
    }
}

console.log(arr);

// George's Solution

let arr = [20, 10, 8, 3 ,5, 13, 20, 10,20,10];

/*console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);*/

for (let i=0; i<=9 ;i+=2){//i=0, i=2, i=4, i=6, i=8
console.log(arr[i]);
}





// Создать массив массив чисел, заполнить его рандомными значениями или вручную.
//  Вывести только те числа в массиве которые больше 10.