// 1.  создать массив имен с большой буквы (map)
// const arr = ["john", "valerchik", "peter", "evlampij"];
// const nameArr = arr.map((n) => n[0].toUpperCase() + n.slice(1));
// console.log(nameArr);

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
const carPower500 = arrCars.find((car) => car.specs.engine.power > 500);
console.log(carPower500);
// 2.4 найти самое дешевое авто по наименьшей цене
const carMonay = arrCars.find((car) => car.specs.price.low < 1000);

console.log(carMonay);
