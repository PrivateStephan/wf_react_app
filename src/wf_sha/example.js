//let const

let myName = 'Stephan';
console.log(myName);

myName = 'Rudy';
console.log(myName);

//arrow functions
function person(name) {
    console.log(name);
}

person('Stephan');

const multiply = (number) => number * 2;

console.log(multiply(100));

//Export Import
//person.js
const person = {
    name:'Stephan'
}

export default person;

//utility.js
export const clean = () => {
    return 'Clean room'
}

export const numStudents = 30;

//app.js
import person from './person.js';
import prs from './person.js';

import {numStudents} from './utility.js';
import {clean} from './utility.js';

//Classes
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super(); //alleen bij extend
        this.name = 'Stephan';
    }

    printMyName() {
        console.log(this.name);
    }
}

constant person = new Person();
person.printMyName();

//door extend
person.printGender();


//Bij ES7 geen constructor meer this is ook weg / Arro functions voor methods
class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender); //hier wel this gebruiken
    }
}

class Person extends Human{
    name = 'Stephan';

    printMyName = () => {
        console.log(this.name);
    }
}

constant person = new Person();
person.printMyName();

//door extend
person.printGender();

//Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const someOne = {
    name: 'Rudy'
};

const newSomeOne = {
    ...someOne,
    age: 33
}

console.log(newPerson);

//Destructuring
var a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];

console.log(rest);

//arrayfunctions no next gen
const nums = [1, 2, 3];

const doubbleNumsArray = nums.map((num) => {
   return num * 2;
});

console.log(nums);
console.log(doubbleNumsArray);

//map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice