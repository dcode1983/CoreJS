let arr = [-4, 2, -5, 0, 3, 5,6,7,12,-1,12];

let positive = 0;
for (let i =0; i<11; i++) {  //11=arr.length
    if(arr[i]>0) {
        positive=positive+arr[i];
    }
console.log(positive);
}

// let pos = 0;
// let neg = 0;

// for(let i=0; i<arr.length; i++) {
//     if(arr[i]<0){
//         neg++;
//     }else{
//     if(arr[i]>0) {
//         pos++;
//     }
// }
// };

// // arr.length = array length and arr.length - 1 gives us the last number/index  element of an array.
//     let last = arr[arr.length-1]; //last = 12
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]<0){
//             arr[i] = last;
//         }
//     };



// console.log("neg " + neg);
// console.log("pos " + pos);
// console.log(arr);
