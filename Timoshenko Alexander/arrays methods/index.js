// 6. Дана строка
// const str = ‘Мама мыла раму’;
// Написать функцию toWash(str, thing);
// Где str - это строка в которой надо поменять последнее
// слово, а thing - это, то самое слово которое надо вставить
// в конец строки.
// Функция должна возвращать строку.
// Например:
// document.write( toWash(str, ’машину’) );
// // ‘Мама мыла машину’
// document.write( toWash(str, ’рябину’) );
// // ‘Мама мыла рябину’
// document.write( toWash(str, ‘картину’) );
// // ‘Мама мыла картину’
// Вы можете использовать методы split, join, pop, push, slice и
// любые другие

// function toWash(str, thing) {
//   const strArray = str.split(" ");
//   strArray.pop();
//   strArray.push(thing);
//   return strArray.join(" ");
// }

// const str = "Мама мыла раму";
// console.log(toWash(str, "машину"));
// console.log(toWash(str, "картину"));
// console.log(toWash(str, "рябину"));

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// const inputName = prompt("Введите имя");

// let people1 = [
//   "Samuel",
//   "Jack",
//   "Thomas",
//   "Henry",
//   "Leo",
//   "Connor",
//   "David",
//   "Ryan",
// ];
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];

// if (people1.includes(inputName) === true) {
//   people2.push(inputName);
//   console.log(people2);
// } else {
//   console.log("Такого имени нет!");
// }

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// const inputName = prompt();
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];

// if (people2.includes(inputName) === true) {
//   const people2Index = people2.indexOf(inputName);
//   people2.splice(people2Index, 1);
// }
// console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let people1 = [
//   "Samuel",
//   "Jack",
//   "Thomas",
//   "Henry",
//   "Leo",
//   "Connor",
//   "David",
//   "Ryan",
// ];
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];
// let people3 = [];

// for (let i = 0; i < people1.length; i++) {
//   for (let j = 0; j < people2.length; j++) {
//     if (people1[i] === people2[j]) {
//       people3.push(people1[i]);
//     }
//   }
// }
// console.log(people3);

// 4.Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// let people1 = [
//   "Samuel",
//   "Jack",
//   "Thomas",
//   "Henry",
//   "Leo",
//   "Connor",
//   "David",
//   "Ryan",
// ];
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];
// let people3 = [];
// for (let i = 0; i < people1.length; i++) {
//   if (people1.indexOf(people2[i]) === -1) {
//     people3.push(people2[i]);
//   }
//   if (people2.indexOf(people1[i]) === -1) {
//     people3.push(people1[i]);
//   }
// }
// console.log(people3);

// 5. Отсортируйте получившийся массив по алфавиту
// let people3 = [
//   "Samuel",
//   "Jack",
//   "Stanley",
//   "Henry",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "David",
//   "Ethan",
//   "Ryan",
// ];

// people3.sort();

// console.log(people3);
