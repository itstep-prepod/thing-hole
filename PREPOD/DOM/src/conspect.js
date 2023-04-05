// document.body.children[0].className = 'test';
// document.body.children[0].innerHTML = '<span>HI THERE!</span>';

// const lis = document.getElementsByTagName('li');

// const ol = document.getElementsByTagName('ol')[0];

// const lis2 = ol.getElementsByTagName('li');

// console.log(lis2[1]);
// console.log(lis2[3]);

// console.dir(document.body.children[0]);



// const lis = document.getElementsByClassName('test');

// const elem = document.getElementById('test');

// console.log(elem);

// const li = document.querySelector('body .test');
// console.log( li.previousElementSibling.previousElementSibling.previousElementSibling );
// console.log( li.nextElementSibling )

// const elems = document.querySelectorAll('body .test');
// console.log(elems);


// const btn = document.getElementById('btn');
// // console.dir(btn);

// btn.addEventListener('focus', (event) => {
//     console.log('IM WATCHING YOU!!!!!', event);
// });




// const link = document.getElementById('link');
// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log('LINK HEREEE@!!!', event);
// });



// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
//     console.log('я молодец!');
// });



// при копировании текста из ПЭ
// вывести в консоль "КОПИРУЮ!" и объект события

// при вставке в ТЕКСТЭРЕЯ 
// вывести в косноль "ВСТАВЛЯЮ!" и объект события


// const text = document.getElementById('text');
// const area = document.getElementById('area');

// text.addEventListener('copy', (event) => {
//     console.log('im copiyng!', event);
// });

// area.addEventListener('paste', (event) => {
//     console.log('im pasting!', event.clipboardData.getData('text'));
// });



// document.body.insertAdjacentElement('beforeend', input);
// document.body.insertAdjacentHTML('afterbegin', '<h1>Hi there again!</h1>');
// document.body.insertAdjacentText();