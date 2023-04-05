//Дан массив объектов

const arr = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];
//Используя ТОЛЬКО методы массивов (циклы запрещены):
//1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

const sortedArr = arr.every((item) => item.a > item.b)
  ? "its valid"
  : "its invalid";

console.log(sortedArr);

//2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
//пример:

const arr2 = arr.map(({ a, b }) => ({ a, b } = { a: a, b: b * b }));

console.log(arr2);

//3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
//пример получившегося массива: [2,1,5,12,95,7]
//можно делать копию

const arrOfArr = arr.map((item) => [item.a, item.b]);

const solitaryArr = arrOfArr.flat();

console.log(solitaryArr);

// 1.  создать массив имен с большой буквы (map)
// [???, ???, ???, ???]

const lowercaseLetterNames = ["john", "valerchik", "peter", "evlampij"];

function getCapitalLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const capitalLetterNames = lowercaseLetterNames.map((item) =>
  getCapitalLetter(item)
);

console.log(capitalLetterNames);

// 2.

const car = {
  model: "tesla",
  adress: {
    country: {
      city: {
        name: "gomel",
        street: {
          name: "pushkina",
          numbre: 2,
        },
      },
    },
    region: ["gomel", "brest", "minsk"],
  },
  specs: {
    price: {
      low: 2000,
      mid: 3000,
      hight: 5000,
    },
    engine: {
      power: 400,
      lowPower: 100,
    },
  },
};

const car2 = {
  model: "lada",
  adress: {
    country: {
      city: {
        name: "gomel",
        street: {
          name: "pushkina",
          numbre: 2,
        },
      },
    },
    region: ["minsk", "grodno", "eremino"],
  },
  specs: {
    price: {
      low: 100,
      mid: 2000,
      hight: 2500,
    },
    engine: {
      power: 200,
      lowPower: 100,
    },
  },
};

const car3 = {
  model: "bmw",
  adress: {
    country: {
      city: {
        name: "boston",
        street: {
          name: "pushkina",
          numbre: 2,
        },
      },
    },
    region: ["new york", "berlin", "bacelona"],
  },
  specs: {
    price: {
      low: 100000,
      mid: 150000,
      hight: 200000,
    },
    engine: {
      power: 1000,
      lowPower: 500,
    },
  },
};

const arrCars = [car, car2, car3];

// 2.1 отфильтровать авто так чтобы в результирующий массив вошли
// только машины из региона минск

function findCarFromRegion({ adress: { region } }, sityName) {
  return region.some((item) => item === sityName);
}

const carFromRegion = arrCars.filter((item) =>
  findCarFromRegion(item, "minsk")
);

const carModelFromRegion = carFromRegion.map((item) => item.model);

console.log(carFromRegion);
console.log("машины из региона минск: " + carModelFromRegion);

// 2.2 просуммировать общую стоимость авто по наивысшей цене

const maxGeneralCost = arrCars.reduce(
  (sum, item) => sum + item.specs.price.hight,
  0
);

console.log("общая стоимость авто " + maxGeneralCost);

// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500

const hightPowerCarsArr = arrCars.filter(
  (item) => item.specs.engine.power > 500
);

const hightPowerCar = hightPowerCarsArr.map((item) => item.model);

console.log(hightPowerCarsArr);
console.log("машины с мощностью свыше 500 л.с.: " + hightPowerCar);

// 2.4 найти самое дешевое авто по наименьшей цене

let minPriceModelCar;

const minPriceCar = arrCars.reduce((minPrice, item) => {
  if (item.specs.price.low < minPrice || minPriceModelCar === undefined) {
    minPriceModelCar = item.model;
    return (minPrice = item.specs.price.low);
  } else {
    return minPrice;
  }
}, 0);

console.log("самая низкая цена " + minPriceCar);
console.log("самый дешевый авто это " + minPriceModelCar);
