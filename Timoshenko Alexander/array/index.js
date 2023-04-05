// 1. Дан массив [2,5,6,7,9]. С помощью цикла вывести эти
// числа на экран по очереди.

// const arr = [2, 5, 6, 7, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// 2. Дан массив [2,5,6,7,9]. С помощью цикла вывести эти
// числа на экран в обратном порядке.

// const arr = [2, 5, 6, 7, 9];

// for (let i = arr.length; i >= 0; i--) {
//   console.log(arr[i]);
// }


// 3. Создать массив из 10ти элементов и вывести на
// экран сумму всех элементов массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumElements = 0;

// for (let i = 0; i < arr.length; i++) {
// sumElements += arr[i];

// }
// console.log(sumElements);


// 4. Найти среднее арифметическое значение
// элементов массива, которые стоят на четных местах.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 32, 657, 0];
// let numberOfEvenNumbers = 0;
// let sumElements = 0;
// let arrayArithmeticMean = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     numberOfEvenNumbers++;
//     sumElements += arr[i];
//   }
// }
// arrayArithmeticMean = sumElements / numberOfEvenNumbers;
// console.log(arrayArithmeticMean);


// 5. Создать массив, элементы которого равны
// элементам исходного массива, но с
// противоположными знаками. (Длина исходного
// массива должна быть не меньше 10ти элементов).

// const arr = [1,-4353,2,3,-5,6,-7,87,-765,9];
// const resultArr = [];

// for (let i = 0; i < arr.length; i++) {
// resultArr[i] = -arr[i];
// }
// console.log(arr);
// console.log(resultArr);


// 6. Создать пустой массив. С помощью цикла заполнить массив последовательными нечетными
// числами начиная с единицы. (Количество элементов
// массива: 8)

// const arr = [];

// for (let i = 1; i <= 8; i++) {
//   if (i % 2 !== 0) {
//     arr[arr.length] = i;
//   }
// }
// console.log(arr);


// 7. С помощью цикла создать массив, каждый элемент
// которого равен квадрату своего номера.

// const array = [];

// for (let i = 0; array.length <= 8; i++) {
//   array[i] = i ** 2;
// }
// console.log(array);


// 8. . Создать массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let colChet = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     colChet++;
//   }
// }
// console.log(colChet);


// 9. Создать массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

// const arr = [5, 4, 4, 5000, 5555543, 10000, 7, 9, 10, 19];
// let maxNumber = arr[0];

// for (i = 0; i < arr.length; i++) {
//   if (maxNumber < arr[i]) {
//     maxNumber = arr[i];
//   }
// }
// console.log(maxNumber);