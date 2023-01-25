

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




