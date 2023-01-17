// 1.Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

const arrSomeNumbers = [5, 8, 31, 45, 56, 84, 95, 2, 66, 127, 144];

const arrEvenNumbers = arrSomeNumbers.filter(
  (item) => item % 2 === 0 && item > 9 && item < 100
);

console.log(arrEvenNumbers);

// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

const arrSomeNames = ["Гена", "Боря", "Вовка", "Семён"];

const searchingName = arrSomeNames.some((item) => item === "Семён");

console.log(searchingName);

// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

const sumEvenNumbers = arrSomeNumbers.reduce((sum, item) => {
  if (item % 2 === 0) {
    return sum + item;
  } else {
    return sum;
  }
}, 0);

console.log(sumEvenNumbers);

// 4. Дан массив случайных чисел, с помощью метода .reduce()
// найдите наименьший элемент этого массива

const minNumberInArr = arrSomeNumbers.reduce((minNum, item) => {
  if (item < minNum) {
    return item;
  } else {
    return minNum;
  }
});

console.log(minNumberInArr);

// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

const arrNumbers = new Array(10).fill(1);

const arrRandomNumbers = arrNumbers.map(
  (item) => +prompt("Enter number for array")
);
console.log(arrRandomNumbers);

const isArrRandomNumbers = arrRandomNumbers.every((item) => !isNaN(item));
console.log(isArrRandomNumbers);

// 6. Создать массив случайных чисел, с помощью .map() вернуть массив, в котором каждое число
// массива возведено в квадрат.

const secondArrNumbers = new Array(10).fill(1);

const secondArrRandomNumbers = secondArrNumbers.map(
  (item) => +prompt("Enter number for array")
);
console.log(secondArrRandomNumbers);

const squareArrRandomNumbers = secondArrRandomNumbers.map(
  (item) => item * item
);
console.log(squareArrRandomNumbers);

// 7. создать случайный двумерный массив (разной длины) из 8 элементов. Обработать массив
// reduce() и вернуть тот массив сумма элементов которого
// наибольшая.

const twoDimensionalArr = [
  [2, 3, 6],
  [34, 35, 12, 34],
  [1, 2],
  [24, 6, 34],
  [23, 45, 78],
  [12, 2, 4, 5, 8, 34],
  [2, 45],
  [33, 55, 77],
];

const arrMaxSum = twoDimensionalArr.reduce((previousItemArr, actualItemArr) => {
  if (
    actualItemArr.reduce((accPres, itemPres) => accPres + itemPres) >
    previousItemArr.reduce((accPast, itemPast) => accPast + itemPast)
  ) {
    return actualItemArr;
  } else {
    return previousItemArr;
  }
});
console.log(arrMaxSum);

// 8. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74].

const arrWantonNumbers = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

const arrWithoutSinglNumbers = arrWantonNumbers.filter((item, index, arr) => {
  return arr.indexOf(item) !== index;
});
console.log(arrWithoutSinglNumbers);

const arrRepeatingNumbers = arrWithoutSinglNumbers.filter(
  (item, index, arr) => {
    return arr.indexOf(item) === index;
  }
);

console.log(arrRepeatingNumbers);
