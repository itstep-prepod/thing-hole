// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

const arr = ['John', 'Peter', 'David', 'Lambert', 'Eddie', 'Janett', 'Franz'];
const davidIndex = arr.indexOf('David');
const newArr = arr.splice(davidIndex, 3);

console.log(newArr);

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

const arr = ['John', 'Peter', 'David', 'Lambert', 'Eddie', 'Janett', 'Franz'];
const janettIndex = arr.indexOf('Janett');

arr.splice(janettIndex, 2);
arr.unshift('Janett', 'Franz');

console.log(arr);

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

const arr = ['John', 'Peter', 'David', 'Lambert', 'Eddie', 'Janett', 'Franz'];
const eddieIndex = arr.indexOf('Eddie');

arr.splice(eddieIndex, 2, 'Oleg', 'Valerchik');

console.log(arr);

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

const arr = ['John', 'Peter', 'David', 'Lambert', 'Eddie', 'Janett', 'Franz'];

console.log('arr:', arr);
const reversed = arr.reverse();
console.log('reversed:', reversed);

arr.splice(0, 4, 'Mitrofan', 'Mitrofan', 'Mitrofan', 'Mitrofan');
console.log(arr);

// 5. Даны два массива
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начиная с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr2 = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];
const aristarkhIndex = arr2.indexOf("Aristarkh");
const newArr = arr2.splice(aristarkhIndex, 3);
const resultArr = arr.concat(newArr);

console.log(resultArr);

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

const str = "Мама мыла раму";

function toWash(str, thing) {
	const strArr = str.split(" ");
	strArr.pop();
	strArr.push(thing);
	return strArr.join(" ");
}

console.log(toWash(str, "машину"));
console.log(toWash(str, "рябину"));
console.log(toWash(str, "картину"));


// Даны 2 массива:
let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

let userName = prompt("enter name is Samuel or Jack or Thomas or Henry or Leo or Connor or David or Ryan");

let searchName = people1.filter((item) => item === userName);
let resultListNames = people2.concat(searchName);

console.log(resultListNames);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

let userName = prompt("enter name is Connor or Stanley or Leo or Albert or Owen or Oliver or Ethan or Thomas");
let indexSearchName = people2.indexOf(userName);

let userNameDel = people2.concat();

if (indexSearchName !== -1) {
	userNameDel.splice(indexSearchName, 1);
}

console.log(userNameDel);


// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

function searchСoincidedName(nameFromList, listNameArray) {
  for (let i = 0; i < listNameArray.length; i++) {
    if (nameFromList === listNameArray[i]) {
      return nameFromList;
    }
  }
}

let listСoincidedName = people1.filter((item) =>
searchСoincidedName(item, people2)
);

console.log(listСoincidedName);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

function searchСoincidedNameDel(nameListDel, listNameArray) {
	for (let i = 0; i < listNameArray.length; i++) {
    if (nameListDel === listNameArray[i]) {
      return;
    }
  }
  return nameListDel;
}

let listNameFirst = people1.filter((item) =>
	searchСoincidedNameDel(item, people2)
);
let listNameSecond = people2.filter((item) =>
	searchСoincidedNameDel(item, people1)
);

let resultListName = listNameFirst.concat(listNameSecond);
console.log(resultListName);

// 5. Отсортируйте получившийся массив по алфавиту

resultListName.sort();
console.log(resultListName);