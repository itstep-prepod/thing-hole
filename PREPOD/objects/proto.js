// get set 



// const person = {
//     userName: 'John',
//     _age: 23,
//     get age () {
//         return this._age;
//     },
//     set age (val) {
//         if (val > 0 && val < 120) {
//             this._age = val;
//         }
//     }
// };


// person.age = 50;

// console.log( person.age );

// const person = {
//     firstName: 'John',
//     lastName: 'Travolta',
//     get fullName () {
//         return this.firstName + ' ' + this.lastName
//     }
// };

// console.log(person.fullName);



// property descriptors

// const person = {
//     userName: 'John',
//     age: 12
// };

// Object.defineProperty(person, 'city', {
//     value: 'Gomel',
//     enumerable: false
// });


// console.log(person)


// const person = {
//     userName: 4,
//     _age: 23,
//     get age () {
//         return this._age;
//     },
//     set age (val) {
//         if (val > 0 && val < 120) {
//             this._age = val;
//         }
//     }
// };

// Object.defineProperty(person, '_age', {enumerable: false});

// for (let key in person) {
//     console.log(key);
// }

// Object.defineProperty(person, 'age', {writable: false});
// Object.defineProperties(person, {
//     age: {writable: false},
//     userName: {enumerable: false, configurable: true}
// });

// console.log(Object.getOwnPropertyDescriptor(person, 'age'));

// const person = {
//     userName: 'John',
//     age: 51
// };

// Object.defineProperty(person, 'age', {configurable: false});
// Object.defineProperty(person, 'age', {configurable: true});

// console.log(Object.getOwnPropertyDescriptor(person, 'age'))

// person.age = 123213;

// console.log(person);



// 1. Дан объект 
// const vagon = {
//     material: 'wood',
//     capacity: 1000,
//     isFull: false,
//     loaded: 0
// };

// 1.1 Сделать capacity доступным только для чтения
// 1.2 Поле loaded может быть не больше capacityи не ниже 0
// 1.3 Если loaded === capacity то поле isFull должно быть true
// 1.4 поле isFull не должно быть доступно для записи извне
// 1.5 поле isFull должно АВТОМАТИЧЕСКИ меняться на false если loaded < capacity


// 2. Дан объект 
// const kurochka = {
//     name: "Ryaba",
//     isAlive: true,
//     isZazharena: false
// };
// Если поменять поле isZazharena на true, то поле isAlive должно стать false 
// и больше не быть доступно для записи изменения или удаления
// ДО изменения isZazharena, поле isAlive ДОЛЖНО быть доступно для записи
// isAlive можно поменять на false ЛИШЬ ОДНАЖДЫ


// proto

// function add () {}

// console.log( add );


// const obj = {};

// const s = new Set([1,2,3]);

// console.log( s.toString === obj.toString );

// const futureProto = {a:2};

// const obj = Object.create(futureProto);

// const arr = [];

// const obj = Object.create(arr.__proto__)
// obj.a = 2;
// console.log(obj.push(100));
// console.log(obj)

// const obj = {};
// const arr = [];
// function foo () {}

// console.log( arr.__proto__.__proto__ === foo.__proto__.__proto__);



// function Foo () {
//     // this = {}

//     this.a = 3;

//     // return this;
// }

// const result = new Foo();
// const result2 = new Foo();
// result2.b = 2;

// console.log()




// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// const p1 = new Person('Peter', 12);
// const p2 = new Person('David', 15);

// Person.prototype.walk = function () {
//     console.log(`${this.name} is walking`);
// };
// Person.prototype.run = function () {
//     console.log(`${this.name} runs`);
// };

// p1.run()
// console.log(p1.run === p2.run);


// console.log(Person.prototype === p1.__proto__);

// const arr = new Array();
// const arr2 = [];
// arr.__proto__ = Array.prototype

// console.log( arr2.__proto__ === Array.prototype );

// Array.prototype.push = function () {
//     console.log('FIG TEBE A NE PUSH!');
// };

// console.log(function(){}.__proto__ === Function.prototype)



// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.checkPersons = function (...args) { return args.length}

// const p1 = new Person('Peter', 12);
// const p2 = new Person('David', 15);

// Person.prototype.walk = function () {
//     console.log(`${this.name} is walking`);
// };
// Person.prototype.run = function () {
//     console.log(`${this.name} runs`);
// };



// function Programmer (name, age, language) {
//     // this = {}
//     Person.call(this, name, age);
//     // {name: '', age: 23}
//     this.pLanguage = language;
//     // {name: '', age: 23, pLanguage: 'JS'}
// }

// Programmer.prototype = Object.create(Person.prototype);

// Programmer.prototype.code = function () {
//     console.log(`${this.name} is coding on ${this.pLanguage}`);
// };

// const pr = new Programmer('Valerchik', 53, 'JS');

// p1.walk();



class Person {
    #legs = 2;
    iq = 100;
    sayHello = () => {
        console.log(this);
    }
    sayGoodBye = function () {
        console.log(this);
    }

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    run(where = 'shop') {
        console.log(`${this.name} runs to ${where}`);
    }
}

const p1 = new Person('Peter', 11);


// setTimeout(p1.run, 500);


class Programmer extends Person {
    #salaryPerHour = 30;
    #language;

    constructor (language, ...args) {
        super(...args);
        this.#language = language;
    }

    static isProgrammer (person) {
        return person instanceof Programmer;
    }

    static basicSalary = 20;

    #code() {
        console.log(`${this.name} codes`);
    }

    typeCode () {
        this.#code();
        // smth usefull
    }

    get salaryPerHour () {
        return this.#salaryPerHour;
    }

    set salaryPerHour (val) {
        if (val > 0) {
            this.#salaryPerHour = val;
        }
    }

    // function override
    run () {
        // заимствование метода
        super.run();
        console.log(`VERY SLOWLY`);
    }

}

const pr = new Programmer('JS', 'John', 14);
const p2 = new Person('David', 15);

// pr.run();
// p2.run();

// pr.p2 = p2;

