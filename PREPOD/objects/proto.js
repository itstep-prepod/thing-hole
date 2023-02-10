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
