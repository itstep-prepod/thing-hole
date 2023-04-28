// 1. string
// 2. number
// 3. boolean
// 4. bigInt
// 5. null
// 6. undefined
// 7. Object
// 8. Symbol
// 9. enum
// 10. tuple
// 11. Array
// 12. any
// 13. unknown
// 14. void
// 15. never

// let arr: number[][] = [[2],[1]];
// let arr2: Array<Array<number>> = [[],[]];


// const arr: [boolean, string] = [false, 'hello!'];
// arr.push(false);


// let a: number = 2;

// enum InsurancePageStatus {
//     Success = 'aaa',
//     Fail = 'bbb',
//     Error = 'ccc'
// };

// let b: InsurancePageStatus = InsurancePageStatus.Error;

// console.log(b);


// const foo = 'hi';

// let userChoice: 'stone' | 'paper' | 'scissors' | null = 'paper';

// let a: string | null;



// function sum (a: number, b: number): string {
//     return String( a + b);
// }

// const sum = (a: number, b: number): number => {
//     return a + b;
// };

// const sum2: (a: number, b: number) => number = () => {};

// const foo = () => {
//     if (Math.random() > 0.5) {
//         return 'hello';
//     }
// };

// if (foo()) {
//     console.log('ok');
// }

// function foo (): never {
//    throw new Error();
// }

// type FootballPlayer = {
//     playerName: string;
//     age: number;
//     speed: number;
// };

// type FootballPlayer = {
//     street: string;
// };

// interface Product {
//     productName: string;
//     price: number;
// }

// interface Product {
//     size: number;
// }

// const products: Product[] = [
//     {price: 2, productName: 'asd', size: 2}
// ];



// const fbTeam: FootballPlayer[] = [
//     {
//         playerName: 'John',
//         age: 2,
//         speed: 12
//     },
//     {
//         playerName: 'Valerchik',
//         age: 51,
//         speed: 23
//     },
//     {
//         playerName: 'Peter',
//         age: 12,
//         speed: 65
//     },
//     {
//         age: 87,
//         playerName:'Anna',
//         speed: 23
//     }
// ];


// interface IProduct {
//     price: number;
//     screenDiagonal?: number;
//     power?: number;
// }

// const gamepad: IProduct = {
//     price: 100,
// };


// interface IPlayer {
//     playerName: string;
//     team: string;
//     hobby?: string;
// }


// const fbTeam: Array<IPlayer> = [
//     {playerName: 'Messi', team: 'barcelona'},
//     {playerName: 'Valerchik', team: 'chelsea', hobby: 'fishing'},
//     {playerName: 'Anna', team: 'barcelona'},
//     {playerName: 'John', team: 'juventus'},
//     {playerName: 'Rondaldo', team: 'chelsea'},
//     {playerName: 'Peter', team: 'gomel'},
//     {playerName: 'Anton', team: 'manchester'},
//     {playerName: 'Petr', team: 'gomel'}
// ];

// type TeamsDictionary = {
//     [key: string]: Array<IPlayer>;
// };

// const obj: TeamsDictionary = {};

// fbTeam.forEach((player) => {
//     if (!obj[player.team]) {
//         obj[player.team] = [];
//     } 

//     obj[player.team].push(player);
// });

// console.log(obj);


// {
//     bacelona: []
// }

// console.log(obj);


// {
//     gomel: [
//         {playerName: 'Peter', team: 'gomel'},
//         {playerName: 'Petr', team: 'gomel'}
//     ],
//     barcelona: [],
// }

// function getNamesFromPlayers (players: Array<IPlayer>): string[] {
//     return players.map(({playerName}) => playerName);
// }

// console.log( getNamesFromPlayers(fbTeam) );




// type Person = {
//     name: string;
//     age: number;
// };

// type Programmer = {
//     code: () => void;
//     run (): void;
//     language: 'JS' | 'TS';
// };

// type PersonProgrammer = Person | Programmer;
// type PersonProgrammer = Person & Programmer;

// const pr: PersonProgrammer = {
//     language: 'JS',
//     code: ()=> {},
//     run: () => {},
//     age: 23,
//     name: 'asd',
// };



// interface IPerson {
//     name: string;
//     age: number;
// };

// interface IProgrammer {
//     code: () => void;
//     run (): void;
//     language: 'JS' | 'TS';
// };

// interface IProgrammerPerson extends IPerson, IProgrammer {}

// type ProgrammerPerson = IPerson | IProgrammer;
// if (ul.getElementsByClassName('active').length === 2) {

// } 
// const b: ProgrammerPerson = {
//     name: 'asd',
//     age:23
// };

// const a: IProgrammerPerson = {
//     name:'sdas',
//     age:23,
//     code: () => {},
//     run: () => {},
//     language: 'JS'
// };


// function getArr <T extends object, U extends string, K> (a: T): T[] {
//     return [a, a, a];
// }

// const res = getArr<string>('hello');

// type Person = {
//     name: string;
//     age: number;
// };

// const res2 = getArr<Person>({name: 'Valerchik', age: 23});

// res2[0].name;
// res[0].toUpperCase()

// type OkType =  Person | Cat | Pemguim;

// interface Person<T,U> {
//     [key: string]: T | U;
// }

// function makeObj<T, U>(a: T , b: U): Person<T,U> {
//     return {a,b};
// }

// const res = makeObj<boolean, undefined>(false, undefined);
// const res2 = makeObj<string, number>('hi', 1000);

// console.log(res);
// console.log(res2);

// function sum (a | b) {
//     return a + b;
// }



// class Person {
//     constructor (
//         public userName: string,
//         protected _age: number,
//         public city: string
//     ) {}

//     set age (val: number) {
//         if (val > 0 && val < 120) {
//             this._age = val;
//         }
//     }

//     get age () {
//         return this._age;
//     }

//     // setAge (val: number) {
//     //     if (val > 0 && val < 120) {
//     //         this.age = val;
//     //     }
//     // }

//     // getAge () {
//     //     return this.age;
//     // }
// }

// class Programmer extends Person {
//     stack: string[];

//     constructor (stack: string[], ...args: [string, number, string]) {
//         super(...args);
//         this.stack = stack;
//     }

//     logAge () {
//         Programmer.logPopularLanguages();
//         console.log(this._age);
//     }

//     private static logPopularLanguages () {
//         console.log('JS', 'TS');
//     }
// }


enum MovementType {
    Wheels,
    Gusenicy,
    Air
}

abstract class Vehicle {
    engine: number = 100;
    abstract movementType: MovementType;
    abstract color: string;

    abstract move (where: string): void;

    getColor () {
        console.log(this.color);
    }
}

interface IVehicle {
    engine: number;
    movementType: MovementType;
    color: string;
}



class Car extends Vehicle {
    color: string;
    movementType: MovementType = MovementType.Wheels;
    price: number = 23;
    model:string;

    constructor (color: string, model: string) {
        super();
        this.color = color;
        this.model = model;
    }

    move (where: string) {
        console.log(`${this.model} rides by road to ${where}`);
    }

}

class Plane extends Vehicle {
    movementType: MovementType = MovementType.Air;
    color: string = 'white';

    constructor (public airName: string) {
        super();
    }

    move () {
        console.log(`${this.airName} flies to smth`);
    }
}

const tesla = new Car('red', 's');
const boeing = new Plane('boeing');

tesla.move('itstep');
boeing.move();

tesla.getColor();
boeing.getColor();