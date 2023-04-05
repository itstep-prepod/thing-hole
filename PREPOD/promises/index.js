// setTimeout(() => console.log(1), Math.round(Math.random() * 1000));
// setTimeout(() => console.log(2), Math.round(Math.random() * 1000));
// setTimeout(() => console.log(3), Math.round(Math.random() * 1000));

// pending
// fullfiled
// rejected


// const p = new Promise((resolve, reject) => {
//     resolve('info');
//     // reject(new Error('adsasdas'))
//     console.log('PROMISE');
// })
// .then((data) => {
//     console.log('THEN1', data);
//     return data + '1';
// })
// .then((data) => {
//     console.log('THEN2', data);
//     // throw 'smth'
//     return new Error();
// })
// .then((data) => {
//     console.log('THEN3', data);
// })

// new Promise((resolve, reject) => {
//     resolve('smth');
//     console.log('PROMISE 2');
// })

// ================================================


// new Promise((res, rej) => {
//     res('info');
// })
// .then((data) => {
//     console.log('THEN1',data);
//     throw 'then 1 rejected!';
// })
// .then(() => {
//     console.log('THEN2');
// })
// .catch((err) => {
//     console.log('REJECT!', err);
//     // throw 'throw in CATCH!';
//     return 'ok';
// })
// .finally(() => {
//     console.log('FINALLY!');
// })
// .then((data) => {
//     console.log('THEN AFTER CATCH', data);
// })
// .catch((data) => {
//     console.log('CATCH2', data);
// })


// setTimeout(() => console.log(1), Math.round(Math.random() * 1000));
// setTimeout(() => console.log(2), Math.round(Math.random() * 1000));
// setTimeout(() => console.log(3), Math.round(Math.random() * 1000));


// new Promise((res) => {
//     setTimeout(() => {
//         console.log(1);
//         res();
//     }, Math.round(Math.random() * 1000));
// })
//     .then((data) => {
//         return new Promise((res) => {
//             setTimeout(() => {
//                 console.log(2);
//                 res();
//             }, Math.round(Math.random() * 1000));
//         }).then(() => {
//             console.log('OMG!');
//         }).then(() => {console.log('OMG AGAIN!');})
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log(3);
//         }, Math.round(Math.random() * 1000));
//     })




    // function Person (age) {
    //     // this = {};
    //     this.age = age
    //     return 23
    // }

    // const p = new Person(2);

    // console.log(p);


    const p1 = new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 1000);
    });

    // p1.then((data) => {
    //     console.log(data);
    // })

    
    // const p2 = new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res(2);
    //     }, 700);
    // });

    // const p3 = new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res(3);
    //     }, 1200);
    // });

    // async function foo () {}
    // const func = async () => {
    //     // p1.then((data) => {const res = data;});
    //     const res = await p1;

    //     return res;
    // };

    // const result = func();

    // result.then((data) => {
    //     console.log(data, 'second time');
    // })

    



    // Promise.any([p1,p2,p3])
    // .then((data) => {
    //     console.log(data);
    // })

    // Promise.race([p1,p2,p3])
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((data) => {
    //     console.log('CATCH', data);
    // });

    // Promise.allSettled([p1,p2,p3])
    // .then((data) => {
    //     console.log(data);
    // })


    // Promise.all([p1, p2, p3])
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((data) => {
    //     console.log('CATCH', data);
    // })
    

 // AJAX
    // fetch('https://fakestoreapi.com/products', {
    //     method: 'GET'
    // })
    // .then((resObj) => {
    //     return resObj.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })


    // JSON ===>>> server ===>>> parsing ===>>> database
    // parsing <<<=== client <<<=== JSON <<<=== database


    // const person = {
    //     userName: 'John',
    //     age: 23,
    //     stack: ["CSS", "JS"]
    // };

    // const jsoned = JSON.stringify(person);

    // console.log(JSON.parse(jsoned));

    // const obj = {
    //     title: 'noski',
    //     price: 2.5,
    //     description: 'brestskie',
    //     image: 'https://i.pravatar.cc',
    //     category: 'textile'
    // };

    // fetch('https://fakestoreapi.com/products', {
    //     method: 'POST',
    //     body: JSON.stringify(obj)
    // })
    // .then((resObj) => {
    //     return resObj.json();
    // })
    // .then((data) => {
    //     console.log(data);
    //     alert('вы успешно заказали!');
    // })


    // fetch('https://fakestoreapi.com/products', {
    //     method: 'GET'
    // })
    // .then((resObj) => {
    //     return resObj.json();
    // })
    // .then((data) => {
    //     console.log( data.reduce((res, item) => res.price > item.price ? res : item , {price: 0}) );
    // })
