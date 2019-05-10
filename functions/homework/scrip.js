let first_btn = document.getElementById('btn1');
let second_btn = document.getElementById('btn2');

function step(){
    let i = 0;     //предопределили параметр i для любой новой функции counter()
    function counter(){
        i++;    //увеличили i на один
        console.log('шаг = ' + i);  //вывели на консоль
      //  return i;
    }
    return counter;   //возвращаем функцию counter из области видимости функции step()
}

first_btn.addEventListener('click', step());   //навешай на событие нажали на кнопку вызов функции step()
second_btn.addEventListener('click', step());