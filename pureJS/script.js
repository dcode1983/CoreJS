
//simple if else
let a = 11;

if (a>10){
    a=a+5;
}
else{
    a=a-5;
}

console.log(a);
//if else with if else inside
a = 11;

if (a>10){
    if (a>20){
        a+=10;
    }
    else{
        a-=10;
    }
}
else{
    a=a-5;
}

//if without else

a=5;

if (a>10){
    a+=5;
}

