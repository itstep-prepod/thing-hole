// 7. создать случайный двумерный массив (разной длины) из 8 элементов. Обработать массив
// reduce() и вернуть тот массив сумма элементов которого
// наибольшая.

// const arrayOfArraysOfNumbers = [[0, 1, 2], [3, 4, 5] ]; // двумерный массив

const arrayOfArraysOfNumbers = [
  [0, 1, -7, 2],
  [3, 4, 5],
  [989, 6546, "qwert"],
  ["blablablabla", "blabla", "qwert", 85],
  [3, 6, 0, 54, 4, 4, 51, 76, 1234],
  ["blablabla", 44678],
  [9, "qwert", 2, "blabla", 5],
  [7, 7, 7, 7, 7, 7, 7, 7],
];

const getLargestArraySum = arrayOfArraysOfNumbers.reduce((acc, item) => {
  if (
    acc.reduce((acc, item) => acc + item) <
    item.reduce((acc, item) => acc + item)
  ) {
    return item;
  } else {
    return acc;
  }
});

console.log(getLargestArraySum);

// 8. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74].

const arrNumbers = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

const filter = (arr) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      const countRepetition = arr.reduce((count, elements) => {
        return elements === item ? count + 1 : count;
      }, 0);

      if (countRepetition > 1) {
        newArr.push(item);
      }
    }
  });

  return newArr;
};

const result = filter(arrNumbers);

console.log(result);
