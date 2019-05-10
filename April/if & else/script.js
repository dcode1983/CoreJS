

let day = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
console.log(day);
if(day > 5) {
    console.log('It\'s a weekend')
} else {
    console.log('It\'s a weekday')
};







var arr = [];
for (i=0; i<=100;  i++)  {
    arr.push(Math.round(Math.random()*i))
    if(i>10) {
        console.log(i)
    }
}

console.log(arr);





// Создать массив массив чисел, заполнить его рандомными значениями или вручную.
//  Вывести только те числа в массиве которые больше 10.