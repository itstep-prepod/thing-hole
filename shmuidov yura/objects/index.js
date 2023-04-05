// 1.  создать массив имен с большой буквы (map)
// const arr = ["john", "valerchik", "peter", "evlampij"];
// const nameArr = arr.map((n) => n[0].toUpperCase() + n.slice(1));
// console.log(nameArr);

// 2.
// const car = {
//   model: "tesla",
//   adress: {
//     country: {
//       city: {
//         name: "gomel",
//         street: {
//           name: "pushkina",
//           numbre: 2,
//         },
//       },
//     },
//     region: ["gomel", "brest", "minsk"],
//   },
//   specs: {
//     price: {
//       low: 2000,
//       mid: 3000,
//       hight: 5000,
//     },
//     engine: {
//       power: 400,
//       lowPower: 100,
//     },
//   },
// };

// const car2 = {
//   model: "lada",
//   adress: {
//     country: {
//       city: {
//         name: "gomel",
//         street: {
//           name: "pushkina",
//           numbre: 2,
//         },
//       },
//     },
//     region: ["minsk", "grodno", "eremino"],
//   },
//   specs: {
//     price: {
//       low: 100,
//       mid: 2000,
//       hight: 2500,
//     },
//     engine: {
//       power: 200,
//       lowPower: 100,
//     },
//   },
// };

// const car3 = {
//   model: "bmw",
//   adress: {
//     country: {
//       city: {
//         name: "boston",
//         street: {
//           name: "pushkina",
//           numbre: 2,
//         },
//       },
//     },
//     region: ["new york", "berlin", "bacelona"],
//   },
//   specs: {
//     price: {
//       low: 100000,
//       mid: 150000,
//       hight: 200000,
//     },
//     engine: {
//       power: 1000,
//       lowPower: 500,
//     },
//   },
// };
// const arrCars = [car, car2, car3];
// 2.1 отфильтровать авто так чтобы в результирующий массив вошли только машины из региона минск
// function inMinskRegion(car) {
//   const arrCarsMinsk = car["adress"]["region"];
//   const minskRegion = arrCarsMinsk.some((car) => {
//     return car === "minsk";
//   });
//   return minskRegion;
// }
// const result = arrCars.filter(inMinskRegion);
// console.log(result);
// const arrCarsMinsk = (adress.region) =>
//   arrCars.filter((o) => o.adress.region === adress.region);
// console.log(arrCarsMinsk("minsk"));

// 2.2 просуммировать общую стоимость авто по наивысшей цене
// const sumPriceHight = (price) => {
//   return price.reduce((acc, curr) => {
//     return acc + curr.specs.price.hight;
//   }, 0);
// };
// console.log(sumPriceHight(arrCars));
// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500
// const carPower500 = arrCars.find((car) => car.specs.engine.power > 500);
// console.log(carPower500);
// 2.4 найти самое дешевое авто по наименьшей цене
// const carMonay = arrCars.find((car) => car.specs.price.low < 1000);
// console.log(carMonay);

// Дан массив объектов

const arr = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];
// Используя ТОЛЬКО методы массивов (циклы запрещены):
// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b
const resultArr = arr.every((item) => item.a > item.b)
  ? "its valid"
  : "its invalid";

console.log(resultArr);
// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
// пример:
// const arr2 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ]
const arr2 = arr.map(({ a, b }) => {
  return { a: a, b: b * b };
});
console.log(arr2);
// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию
const arrAB = arr.map((item) => [item.a, item.b]);
const resultArrAB = arrAB.flat();
console.log(resultArrAB);
