const members = [
    {name:"Nodi", age: 28},
    {name:"Robi", age: 58},
    {name:"Keya", age: 28},
    {name: "Mina", age: 30} 
]

let memSum = members.reduce((a,b) => a + b.age, 0);

console.log(memSum);