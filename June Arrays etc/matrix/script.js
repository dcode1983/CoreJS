let matr = [
    [1, 2, 0],
    [10, 5, 3],
    [6, 7, 8]
];
console.log("before: ");
console.log(matr);
// i - номера по строкам, j - номера по колонкам (столюцам)
for (let i=0;i<matr.length;i++){  //цикл по строкам
    for (let j=0;j<matr[i].length; j++){ //matr[i].length = 3
        //action
        //console.log(matr[2]);
        matr[i][j] = matr[i][j] * 2;
    }
}
console.log("after: ");
console.log(matr);

