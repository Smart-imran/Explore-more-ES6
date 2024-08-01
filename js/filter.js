// filter select some  elements based on conditions return and array with the elements that fulfill the conditions

const numbers = [21, 54, 36, 10];
const players = [11, 56, 71, 82, 46, 92, 13]; 
//const selected = players.filter( f => f > 80);
const selected = players.filter( f => f % 2 === 1);
console.log(selected);