// 1. Создать функцию переключатель toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

function getToggleMe() {
    let isOn = false;

    return function() {
        isOn = !isOn;
        return isOn;
    };
}

const toggleMe = getToggleMe();
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0
// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 10
// counter() // 9
// counter() // 8

function getFuncCounter() {
  let counter = 0;
  let shouldRise = true;

  return function (num) {
    if (num !== undefined) {
      counter = num;
      shouldRise = num < 10;
    }
    if (shouldRise) {
      return ++counter;
    } else {
      return counter ? --counter : counter;
    }

    return shouldRise ? ++counter : --counter;
  };
}

const сounter = getFuncCounter();

console.log(сounter()); //1
console.log(сounter(5)); //6
console.log(сounter()); //7
console.log(сounter(11)); //10
console.log(сounter()); //9
console.log(сounter()); //8

// 3. Создать функцию classNameEditor(),
// которая принимает строку с названием класса и добавляет его в класс, если вторым параметром было передано true,
// если вторым параметром было передано false, то функция пытается удалить из класса переданное имя.
// Если удаление не было совершено, то просто вернуть строку с названием класса.
// Функция должна возвращать текущее название класса.
// classNameEditor() // ''
// classNameEditor('test', true) // 'test'
// classNameEditor('test', true) // 'test'
// classNameEditor('smth', true) // 'test smth'
// classNameEditor('test', false) // 'smth'
// classNameEditor('test', false) // 'smth'

function className() {
  let className = [];
  return function (strClass, flag) {
    if (strClass !== undefined && flag !== undefined) {
      if (className.includes(strClass)) {
        if (flag === false) {
          let i = className.indexOf(strClass);
          className.splice(i, 1);
        }
      } else if (flag) {
        className.push(strClass);
      }
    }
    console.log(className.join(" "));
  };
}