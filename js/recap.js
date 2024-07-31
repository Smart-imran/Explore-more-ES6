/* 
    1. var let constant
    2. default parameter
    3. template string ``
    4. arrow function
    5. destructuring and spread operator  
*/

const a = 5;
const numbers = [2,54,3];
const person = {
    name: "Imran",
    age:22
}

const {name} = person;


const message = ` hi ,  ${name}, ${numbers}, ${a}`;
//console.log(message);

let sum = (a,b) => a+b;

console.log(sum(5,6));