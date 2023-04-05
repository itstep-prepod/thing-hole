// 6. Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд)
// инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
// а также методом .reset() который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
// работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью setTimeout()




class Timer {
    #time = 0;
    #launchId;

    start () {
        this.#launchId = setInterval(() => {
            this.#time++;
            console.log(this.#time);
        }, 1000);
    }

    #method () {}

    stop () {
        this.#method();
        clearInterval(this.#launchId);
    }

    reset () {
        this.#time = 0;
    }
}

const t1 = new Timer();
const t2 = new Timer();

t1.start();

setTimeout(() => {
    t1.#method();
    t1.stop();
}, 5000);


// setTimeout(() => {
//     t1.reset();
//     t1.start();
// }, 7000);


// const person = {
//     name: 'John',
//     age: 51
// };

// function test (arg) {

//     const inner = () => {
//         console.log(this);    
//     };

//     inner.call(person);
// }

// test();

// 3. Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.


// class Point  {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const p1 = new Point(2, 61);
// const p2 = new Point(12, 75);
// const p3 = new Point(12, 75);
// const p4 = new Point(51, 12);
// const p5 = new Point(51, 12);
// const p6 = new Point(2, 61);

// class Line {
//     constructor (point1, point2) {
//         this.point1 = point1;
//         this.point2 = point2;
//     }

//     get length () {
//         const k1 = this.point1.x - this.point2.x;
//         const k2 = this.point1.y - this.point2.y;

//         return Math.sqrt(k1**2 + k2**2);
//     }

//     static canTriangleExist (line1, line2, line3) {
//         return (line1.length + line2.length > line3.length) && 
//                 (line2.length + line3.length > line1.length) &&
//                 (line3.length + line1.length > line2.length);
//     }
// }

// const l1 = new Line(p1, p2);
// const l2 = new Line(p3, p4);
// const l3 = new Line(p5, p6);

// console.log( Line.canTriangleExist(l1, l2, l3) );



