const numbers = [4, 5, 21, 46, 25];


const doubleIt = (num) => num * 3;


const number = numbers.map(doubleIt);

//console.log(number);

const friends = ["Imran", "Keya", "sweet", "Nipa"];

//const findLength = (friend) =>friend.length;
const findLength2 = (friend2) => friend2.slice(0,3);

const length = friends.map(findLength2);

console.log(length);