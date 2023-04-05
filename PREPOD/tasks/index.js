// 1. Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?
// 'use strict';

// function makeUser() {
//   return {
//     name: "Timofeychik",
//     get ref () { 
//         return this;
//     }
//   };
// }

// let user = makeUser(); 

// console.log ( user.ref.name ); 
   
// 2. Как корректно вывести в консоль user.ref.name?


// что будет выведено в консоль
// const myFavoriteObj = {
//     guessThis() {
//         const getName = () => {
//             console.log(this.name);
//         };
//         getName();
//     },
//     name: "Marko Polo",
//     thisIsAnnoying(callback) {
//         callback();
//     },
// };

// myFavoriteObj.thisIsAnnoying(function() {
//     console.log(this);
// });



// Создать "охотника за головами", который будет обладать Прозвищем(Типа "Джони Бунгало :) ),и колличеством завершённых заданий(кол-во убийств)
// Должен уметь выводить то, чего достиг(сколько выполнил завершённых заданий)
// Каждый охотник должен обладать ОРУЖИЕМ, при помощи которого совершается убийство, при убийстве должна заполняться кол-во выполненых заданий

class Character {
    kills = 0;
    
    constructor (name, weapon) {
        this.name = name;
        this.weapon = weapon;

    }

    getAchivements () {
        console.log(`i've killed ${this.kills} monsters`);
    }

    kill (someone = 'monster') {
        this.kills++;
        console.log(`${this.name} kills ${someone} with ${this.weapon}`);
        this.getAchivements();
    }
}

const jonny = new Character('Johnny', 'dubina');
jonny.getAchivements()
jonny.kill('zhaba');
jonny.kill();




