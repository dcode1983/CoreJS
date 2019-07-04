class Man{
    constructor(name){
        this.name = name;   //свойсвто name
        this.age = 25;   //свойство age
    }

    tellAboutMe(){      //метод класса tellAboutMe
        console.log("ola im "+this.name);
    }
}

let tom = new Man("Tom");  //создание экземпляра класса с name = Tom
let lena = new Man("Lena");

tom.tellAboutMe(); //вызов метода tellAboutMe класса Man
lena.tellAboutMe();