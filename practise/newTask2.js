// you are given an array say : [33,50,79,78,90,101,30] now return all the elements with divide by 10. using array filter 

const numbers = [33, 50, 79, 78, 90, 101, 30];

let findFilter = numbers.filter(find => find % 10 === 0);

console.log(findFilter);