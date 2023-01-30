// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры. Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let numberN = prompt("enter number n");
// let sumNumberN = 0;
// if (!isNaN(numberN) && numberN > 0 && numberN !== null) {
//   numberN = Number(numberN);
//   for (let counter = 1; counter <= numberN; counter++) {
//     sumNumberN = sumNumberN + counter;
//   }
//   console.log(
// `The sum of the numbers up to ${numberN} is equal to  ${sumNumberN}`
//   );
// } else {
//   alert(`enter a positive number n`);
// }

// 2. Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. В начале программы, пользователь самостоятельно задает какое количество чисел будет вводить, затем вводит сами числа. Пример вывода: «Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.»

// let numberNumbers = prompt("enter number of numbers");
// let numberPositiveNumbers = 0;
// let numberNegativeNumbers = 0;
// let ZeroNumbers = 0;
// for (let counter = 1; counter <= numberNumbers; counter++) {
//   let number = prompt("enter number");
//   if (number > 0) {
//     numberPositiveNumbers = Number(numberPositiveNumbers);
//     numberPositiveNumbers++;
//   } else if (number < 0) {
//     numberNegativeNumbers = Number(numberNegativeNumbers);
//     numberNegativeNumbers++;
//   } else if (number == 0) {
//     ZeroNumbers = Number(ZeroNumbers);
//     ZeroNumbers++;
//   }
// }
// console.log(`положительных ${numberPositiveNumbers} шт.`);
// console.log(`Отрицательных ${numberNegativeNumbers} шт.`);
// console.log(`Нулей ${ZeroNumbers} шт.`);

// 3. Написать программу, которая выводит на экран двузначные числа, которые делятся на 4, но не делятся на 6.

// for (let counter = 10; counter < 100; counter++) {
//   if (counter % 4 === 0 && counter % 6 !== 0) {
//     console.log(counter);
//   }
// }

// 4. Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается тогда, когда нажали «отмена», после чего выводится среднее арифметическое.

let sumNumber = 0;
let numberNumbers = 0;
for (;;) {
  let number = prompt("enter a number");
  if (number === null) {
    break;
  }
  number = Number(number);
  sumNumber += number;
  numberNumbers++;
}
let arithmetic = sumNumber / numberNumbers;
console.log(`arithmetic mean of the entered numbers ${arithmetic}`);
