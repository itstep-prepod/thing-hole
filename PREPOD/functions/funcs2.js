// default params


// function sum (a = 0, b = 1) {
//     return a + b;
// }

// console.log( sum(2,15) - 10 );
// console.log( sum(2, null) - 10 );
// console.log( sum() - 10 );

// console.log( '' || 0 );


// recursion

// function counter (n) {
//     console.log(n);

//     if (n === 0) {
//         return n;
//     }

//     const result = counter(n - 1);

//     return result;
// }

// counter(10);



// functional scope

// const a = 1;

// function foo (cb) {
//     const a = 3;
//     cb(); // test()
// }

// function test () {
//     const a = 4;
//     function smth () {
//         const a = 5;
//         console.log(a);
//     }

//     smth();
// }

// foo(test);


// function foo () {

//     function bar () {
//         a = 3;

//         console.log(a);
//     }

//     bar();
// }


// closure
// const a = 1;
// function foo () {
//     const a = 2;
//     return function () {
//         console.log(a);
//     };
// }

// function test () {
//     const a = 4;
//     const func = foo();
//     func();
// }

// test();


// let arr = [[1,2], [3,4,[5]]]

// let smth = arr[1];

// smth[0] = null;

// smth[2] = null;

// arr = null;

// console.log(arr);


// function foo () {
//    let a = 0;

//    return function () {
//         a++;
//         return a;
//    };
// }



// const test = foo();
// const bar = foo();

// console.log(test());
// console.log(test());
// console.log(test());
// console.log(bar());
// console.log(bar());

// console.log(bar === test)



// let a = 0;

// function someFunc () {
//     return ++a;
// }

// console.log(someFunc());
// a = undefined;
// console.log(someFunc());
// console.log(someFunc());



// const foo = () => {
//     let a = 2;
//     return () => {
//         return ++a;
//     };
// }

// const func = foo();

// func();

// carry
// partialy applied func
// higher order function

// function sum (a, b, c) {
//     return a + b + c;
// }

// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const twoPlus = sum(2);
// const twoPlusTenPlus = twoPlus(10);

// console.log(twoPlusTenPlus(20));

// const sum = a => b => c => a + b + c;

// sum(2,3,4);
// console.log(sum(2)(3)(4));


// const sum = (a,b) => {
//     const res = a + b; // hard calc;
//     return (c) => {
//         return res + c;
//     }
// }

// console.log(sum(2,5)(10));

// sum(1,2,3)
// sum(1,2,4)
// sum(1,2,6)
// const pSum = sum(1,2)
// pSum(3) // 1,2
// pSum(4) // 1,2
// pSum(6) // 1,2



// higher order function

// function foo (a,b, cb) {
//     const result = cb(a,b);
//     return result;
// }


// function sum (a, b) {
//     // 200 strok koda
//     return a + b;
// }

// function sub (a,b) {
//     // 100 strok koda
//     return a - b;
// }

// function withLogger (func) {
//     return function (a,b) {
//         console.log('logger:',a,b);
//         return func(a,b);
//     }
// }

// function withSender (func) {
//     return function (a,b) {
//         console.log('arguments were sent');
//         return func(a,b);
//     }
// }

// // const subWithLogger = withLogger(sub);
// // const sumWithLogger = withLogger(sum);
// // const sumWithSender = withSender(sum);
// const sumWithLoggerAndSender = withSender(withLogger(sum));

// console.log(sumWithLoggerAndSender(5, 8)); 


// function withLogger (func) {
//     return function (str) {
//         console.log(str);
//         return func(str);
//     }
// }

// const logAndAlert = withLogger(alert);
// const logAndPrompt = withLogger(prompt);

// logAndAlert('hello world!');
// logAndPrompt('enter smth');


// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).


// function getToggleMe () {
//     let isOn = false;
    
//     return function () {
//         isOn = !isOn;
//         return isOn;
//     }
// }

// const toggleMe = getToggleMe();
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());


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

function getFuncCounter () {
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
    };
}

const counter = getFuncCounter();

console.log(counter()); // 1
console.log(counter(5)); // 6
console.log(counter()); // 7
console.log(counter(11)); // 10
console.log(counter()); // 9
console.log(counter()); // 8
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());