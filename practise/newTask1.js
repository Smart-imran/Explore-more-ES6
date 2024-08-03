// you have an odd array(array with odd number) [1,3,5,7,9] .now convert this array into even array numbers

// using map
const numbers = [1, 3, 5, 7, 9];

const evenNumbers = numbers.map(p => p + 1);
//console.log(evenNumbers);

const numbers2 = [1, 3, 5, 7, 9];

let evenNumbers2 = [];

for (let i = 0; i < numbers2.length; i++) {
    evenNumbers2.push(numbers2[i] + 1);
}

//console.log(evenNumbers2); // [2, 4, 6, 8, 10]


