// 1. Создать программу в которой сравнивается возраст
// двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана,
// то должно выводится сообщение, в котором указана
// разница в возрасте: «Федот старше Митрофана на 3 ».
// Если возраст Митрофана больше, то выводится такое
// сообщение: «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то
// выводится такое сообщение: «Федот и Митрофан
// одного возраста».

let ageFedot = prompt('Введите возраст Федота');
let ageMitrofan = prompt('Введите возраст Митрофана');
let ageDifference1 = ageFedot - ageMitrofan;
let ageDifference2 = ageMitrofan - ageFedot;

ageFedot = Number(ageFedot);
ageMitrofan = Number(ageMitrofan);
ageDifference1 = Number(ageDifference1);
ageDifference2 = Number(ageDifference2);

if (isNaN(ageFedot) || isNaN(ageMitrofan)) {
	alert("Введите возраст в цифровом выражении!");
}
if (ageFedot > ageMitrofan) {
	console.log(`Федот старше Митрофана на ${ageDifference1}`);
} else if (ageMitrofan > ageFedot) {
	console.log(`Митрофан старше Федота на ${ageDifference2}`);
} else if (ageFedot === ageMitrofan) {
	console.log(`Федот и Митрофан одного возраста`);
}



// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

let first = prompt('Enter first number');
let second = prompt('Enter second number');
let third = prompt('Enter third number');

first = Number(first);
second = Number(second);
third = Number(third);

if (first > second && first > third){
	console.log(first)
}
else if (second > first && second > third){
	console.log(second)
}
else if (third > second && third > first){
	console.log(third)
}

