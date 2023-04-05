


class Person {
    #age = 0;

    constructor (name, age) {
        this.name = name;
        this.#age = age;    
    }

    get age () {
        return this.#age;
    }

    set age (amount) {
        if (amount >= 0 && amount < 120) {
            this.#age = amount;
        } else {
            throw new PersonAgeError(`age should be more than 0, and less than 120. You've passed ${amount}`);
        }
    }
}

const p1 = new Person('John', 23);

// try {
//     p1.age = +prompt('enter your age');
// } catch (err) {
//     console.log(err);
//     p1.age = 0;
//     console.log('PROBLEM RESOLVED!');
// }

class PersonAgeError extends Error {
    // если не написать конструктор произойдет автоматически
    constructor (message) {
        super(message);
    }
}



function func () {
    console.log('func!');
    blabla + 1;
}


try {
    try {
        // если p1.age успеет упасть с ошибкой то func() не успеет запуститься
        p1.age = +prompt('enter your age');
        func();
    } catch (err) {
        if (err instanceof PersonAgeError) {
            p1.age = 0;
            console.log('PROBLEM RESOLVED!');
        } else {
            throw err;
        }
    }
} catch (err) {
    console.log('SOLVE ANOTHER ERR!');
}


console.log(p1.age);





