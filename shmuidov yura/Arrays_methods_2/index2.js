// 1.Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.
// const arr = [
//   1, 354, 2, 3, 84, 1, 6, 61, 54, 1165, 198, -42, 65, 654, 665, 6, 12, 654, 699,
//   0, 126, -2,
// ];
// const evenNumbers = arr.filter(
//   (item) =>
//     item % 2 === 0 && ((10 < item && 100 > item) || (-100 < item && -10 > item))
// );
// console.log(evenNumbers);

// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().
// const arrName = [
//   "John",
//   "Peter",
//   "David",
//   "Lambert",
//   "Eddie",
//   "Semen",
//   "Janett",
//   "Franz",
// ];
// const nameSemen = arrName.some((item) => item === "Semen");
// console.log(nameSemen);

// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.
// const arrNumber = [
//   1, 354, 2, 3, 84, 1, 6, 61, 54, 1165, 198, -43, 65, 654, 665, 6, 12, 654, 699,
//   0, 126, -2,
// ];
// const evenNumbers = arrNumber.filter((item) => item % 2 === 0);
// const sumEverNumber = evenNumbers.reduce((acc, item) => acc + item, 0);
// console.log(sumEverNumber);

// 4. Дан массив случайных чисел, с помощью метода .reduce()
// найдите наименьший элемент этого массива
// const arrNumber = [
//   1, 354, 2, 3, 84, 1, 6, 61, 54, 1165, 198, -43, 65, 654, 665, 6, 12, 654, 699,
//   0, 126, -2,
// ];
// const leastNumber = arrNumber.reduce(
//   (acc, item) => (acc > item && item) || acc
// );
// console.log(leastNumber);

// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.
const arr = new Array(2).fill(1);
const ledArray = arr.map((item) => +prompt("enter number"));
const checkingNumber = ledArray.every((item) => !isNaN(item));
console.log(checkingNumber);

// 6. Создать массив случайных чисел, с помощью .map() вернуть массив, в котором каждое число
// массива возведено в квадрат.
// const arrNumber = [
//   1, 354, 2, 3, 84, 1, 6, 61, 54, 1165, 198, -43, 65, 654, 665, 6, 12, 654, 699,
//   0, 126, -2,
// ];
// const numberNumber = arrNumber.map((item) => {
//   return item * item;
// });
// console.log(numberNumber);

// 7. создать случайный двумерный массив (разной длины) из 8 элементов. Обработать массив
// reduce() и вернуть тот массив сумма элементов которого
// наибольшая.
const arr = [
  [2, 3, 2],
  [1, 1, 1, 1, 1, 1],
  [7, 8],
  [154, 200, 463],
  [14, 5, 2, 3, 6, 89],
  [74, 48, 98, 895],
  [31, 2, 45, 365, 54, 3],
  [4, 5, 3, 6, 89],
];
const MaxArr = arr.reduce((SumArr1, SumArr2) => {
  if (
    SumArr1.reduce((acc, item) => acc + item) >
    SumArr2.reduce((acc, item) => acc + item)
  ) {
    return SumArr1;
  } else {
    return SumArr2;
  }
});
console.log(MaxArr);

// 8. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74].
const arrNumber = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];
let intermediateNumbers = arrNumber.filter(
  (item, index) => arrNumber.indexOf(item) !== index
);
let matchingNumbers = intermediateNumbers.filter(
  (item, index) => intermediateNumbers.indexOf(item) === index
);
console.log(matchingNumbers);
