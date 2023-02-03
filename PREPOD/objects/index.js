// const obj = {a: 1, b: 2, c: 3 };

// const fieldName = 'b';

// console.log( obj[fieldName] );

// console.log( obj.fieldName );

// const person = {
//     name: 'John',
//     age: 41,
//     adress: {
//         country: 'Belarus',
//         city: 'Gomel',
//         street: 'Sovetskaya',
//         showAddres: function () {
//             console.log('Belarus Gomel');
//         }
//     },
//     run: function () {
//         console.log('person runs')
//     },
//     walk: () => {
//         console.log('person walks');
//     },
//     jump () {
//         console.log('person jumps');
//     }
// };

// console.log(person.jump)

// delete person.age;
// console.log(person);

// console.log(person['adress'].smth.s[1]['objVal']);
// console.log( person.adress.city );
// console.log( person['adress']['city'] );
// person['adress']['city'] = 'Miami';

// const arr = [ {}, {}, {} ];

// arr[2] = 'asdasda'
// obj[2] = 'zxczxczxc';
// arr.userName = 'John';

// const fruits = ['apple', 'banana', 'kartoha'];

// const user = {faceWidth: 31,adress: 156,height: 180,age: 62};

// const person = {
//     name: 'John',
//     age: 41,
//     adress: {
//         country: 'Belarus',
//         city: 'Gomel',
//         street: 'Sovetskaya',
//     },
//     dogName: 'Tuzik'
// };

// const person2 = {
//     name: 'Peter',
//     age: 62,
// };

// const {
//     adress: {
//         noski: [
//             ,
//             noskiPetera = 'green'
//         ]
//     } = { noski: [] }
// } = person2;

// console.log(noskiPetera);

// const {age, adress, dogName: sobakaName = 'Bobik'} = person;
// const {dogName = 'Sharik'} = person2;
// console.log(sobakaName);

// const {age: oneAge} = person;
// const {age: twoAge} = person2;
// const oneAge = person.age;
// const twoAge = person2.age;

// const {age} = person;
// const age = person.age;

// const arr = ['John', 'Peter', 'Joseph', 'Mitch'];

// const human = arr[1];
// const admin = arr[2];

// const [ , admin = 'Valerchik', pers, , human = 'Vasya'] = arr;
// let human = arr[4]
// const human = arr[7];
// human = 'asdadasd';
// console.log(human);

// const person = {
//     name: 'John',
//     age: 41,
//     adress: {
//         country: 'Belarus',
//         city: 'Gomel',
//         street: 'Sovetskaya',
//     },
//     dogName: 'Tuzik'
// };

// let country = 'Germany';

// function showAddres ({adress: {country, city, street}}) {
//     console.log(`This addres is: ${country} ${city} ${street}`);
//     // console.log(`This addres is: ${obj.adress.country} ${obj.adress.city} ${obj.adress.street}`);
// }

// function getSecondElem ([,elem = 'vtoroy']) {
//     console.log(elem);
// }

// const arr = ['one'];
// getSecondElem(arr);

// const person = {
//     name: 'John',
//     age: 41,
//     adress: {
//         country: 'Belarus',
//         city: 'Gomel',
//         street: 'Sovetskaya',
//     },
//     dogName: 'Tuzik'
// };

// const arr = ['one', 'two', 'three', 'four'];

// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 8},
//     {a: 95, b: 7}
// ];

// const res = arr.reduce((sum, {b = 0}) => sum + b, 0)

// console.log(res);

// const persons = [
//     {name: 'John', age: 51},
//     {name: 'Peter', age: 2},
//     {name: 'David', age: 23},
//     {name: 'Valerchik', age: 12}
// ];

// const adults = persons.filter(({age}) => age > 18);

// console.log(adults);

// const b = 'smth';

// const obj = {
//     a: 2,
//     b
// };

// const obj = {
//     a: 2,
//     [b]: 'some val'
// };

// console.log(obj);

// rest spread

// const nums = [6,23,83,12,42,1,24];
// const nums2 = [6,1,71,23,6,54,3];
// const numsCopy = [...nums];
// nums[0] = 100;

// const arr = [...nums, 10, 20, 30, ...nums2, 100, 200];

// console.log(arr);

// const arr = ['one', 'two', 'three', 'four'];

// const [a, b, ...tail] = arr;

// console.log(tail);
// console.log(arr);

// function foo (a, b, ...args) {
//     console.log(args[2]);
// }

// foo(1,2,3,4,5,6,7,8);

// const person = {
//     name: 'John',
//     adress: {
//         country: 'Belarus',
//         city: 'Gomel',
//         street: 'Sovetskaya',
//     },
//     age: 41,
//     dogName: 'Tuzik',
//     login: 'person'
// };

// const peronCopy = {
//     ...person,
//     adress: {
//         ...person.adress
//     }
// };

// peronCopy.adress.city = 'Boston';

// const personPart = {
//     name: 'John',
//     dogName: 'Tuzik',
//     adress: person.adress
// };

// const {age, login, ...personPart} = person;

// console.log(personPart.adress === person.adress)

// const admin = {
//     ...person,
//     pass: 1234,
//     login: 'admin',
// };

// console.log(admin)

// const persons = [
//     {name: 'John', age: 51},
//     {name: 'Peter', age: 2},
//     {name: 'David', age: 23},
//     {name: 'Valerchik', age: 12}
// ];

// const [a, b, ...others] = persons;
// const a = persons[0];

// console.log( a === persons[0] );
// console.log(others[0] === persons[2]);

// const person = {
//     name: 'John',
//     adress: {
//         country: 'Belarus',
//         city: 'Gomel',
//         street: 'Sovetskaya',
//     },
//     age: 41,
//     dogName: 'Tuzik',
//     login: 'blabla@mail.com',
//     lo: 54
// };

// for (let key in person) {
//     console.log( person[key] );
// }

// const arr = [5,1,2,5,6,7];

// for (let item of arr) {
//     // item = arr[i]
//     console.log(item);
// }


// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).

// const student = { math: 5, biology: 3, language: 2, isOboltus: 'yes' };

// for (let key in student) {
//     if (!isNaN(student[key])) {
//         student[key] *= 2;
//     }
// }

// console.log(student);

// 4. Создать функцию которая принимает массив футболистов
// const fbPlayers = [
//   {
//     name: "Messi",
//     team: "Barcelona",
//   },
//   {
//     name: "Ronaldo",
//     team: "Juventus",
//   },
//   {
//     name: "Pedro",
//     team: "Chelsea",
//   },
//   {
//     name: "Zuma",
//     team: "Chelsea",
//   },
//   {
//     name: "Rico",
//     team: "PSG",
//   },
//   {
//     name: "Suarez",
//     team: "Barcelona",
//     age: 51
//   },
//   {
//     name: "Gonsalo",
//     team: "Juventus",
//   },
//   {
   
//     team: "Juventus",

//   },
// ];

// const groupByTeam = (players) =>
//   players.reduce(
//     (group, player) => ({
//       ...group,
//       [player.team]: [...(group[player.team] || []), player],
//     }),
//     {}
//   );

// console.log(groupByTeam(fbPlayers));



// for of map set !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const arr = ['one', 'two', 'three', 'four', 'five'];

// let person = {
//     name: "Zuma",
//     team: "Chelsea",
// };

// let person2 = {
//     name: 'John',
//     age: 23
// }

// let dog = {
//     nick: 'Bobik',
//     age: 54,
//     lapy: 4
// };

// let dog2 = {
//     nick: 'Tuzik',
//     age:1,
//     lapy: 5
// };




// const myMap = new Map([
//     [person, dog],
//     [person2, dog2]
// ]);


// myMap.set(person, {nick: 'Barabaka'});
// person.team = 'PSG';

// dog.nick = 'Sharik';

// console.log( Object.fromEntries(myMap.entries()) )

// for (item of myMap.keys()) {
//     console.log(item)
// }


// const person = {
//     age: 23,
//     name: 'John'
// }



