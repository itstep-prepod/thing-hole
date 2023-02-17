
// 1.Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

const arrNumbers = [0, 2, -5, 16, 7, 11, 12, 15, 18];

const evenNumbers = arrNumbers.filter((item, index, arr) => {
	return item > 9 && item < 100 && item % 2 === 0;
});

console.log(evenNumbers);

// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

const persons = ['John', 'Semen', 'David', 'Janet', 'Maria'];

const isSemenName = persons.some(
	(item, index, arr) => item === 'Semen'
);

console.log(isSemenName);

// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

const arrNumbers = [0, 2, -5, 6, -7, 11, 12, 15, 18];

const isSumEven = arrNumbers.reduce((acc, item, index, arr) => {

	if (item % 2 === 0 && item > 0) {
		return acc + item;
	}
	else {
		return acc;
	}
}, 0);

console.log(isSumEven);

// 4. Дан массив случайных чисел, с помощью метода .reduce()
// найдите наименьший элемент этого массива

const arrNumbers = [-10, 2, -5, 12, 40, 50, -40];

let minNumber = (a, b) => {
	return a < b ? a : b
};

console.log(arrNumbers.reduce(minNumber));

// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

const userNumberArray = new Array(10).fill(1);

const randomNumberArray = userNumberArray.map(
	(item) => +prompt("Enter ten numbers")
);
console.log(randomNumberArray);

const checkRandomNumberArray = randomNumberArray.every((item) => !isNaN(item));

console.log(checkRandomNumberArray);


// 6. Создать массив случайных чисел, с помощью .map() вернуть массив, в котором каждое число
// массива возведено в квадрат.

const arrNumbers = [0, 2, 5, -6, 7, 11, 12, 15, 18];

const arrNumberSquared = arrNumbers.map((item, index, arr) => {
	return item ** 2;
});

console.log(arrNumberSquared);


// 7. создать случайный двумерный массив (разной длины) из 8 элементов. Обработать массив
// reduce() и вернуть тот массив сумма элементов которого
// наибольшая.

const twoDimensionalArray = [
  [2, 3, 4, 5],
  [4, 6, 24, 25],
  [12, 13, 14, 15],
  [12, 160, 8],
  [22, 5, 4],
  [20, 6, 5],
  [10, 11],
  [22, 100],
];

const maxSumArray = twoDimensionalArray.reduce(
  (previousItemArr, actualItemArr) => {
    if (
      actualItemArr.reduce((accPres, itemPres) => accPres + itemPres) >
      previousItemArr.reduce((accPast, itemPast) => accPast + itemPast)
    ) {
      return actualItemArr;
    } else {
      return previousItemArr;
    }
  }
);

console.log(maxSumArray);

// 8. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74].

const sourceArray = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

const repeatArray = sourceArray.reduce((acc, item, index) => {
	if (
		sourceArray.includes(item, index + 1) && acc.every((item2) => item2 !== item)
	) {
		return acc.concat(item);
	} else {
		return acc;
	}
}, []);

console.log(repeatArray);
