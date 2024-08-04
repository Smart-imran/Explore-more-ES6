// 3. You have an array an object ..display the instructor who has senior position

const instructor = [
    {name:"Nodi", age: 28, position: "senior"},
    {name:"Robi", age: 58, position: "junior"},
    {name:"Keya", age: 28, position: "senior"},
    {name: "Mina", age: 30, position: "Senior"} 
]

 let findInstructor = instructor.filter(find => find.position.toLowerCase() ==="senior");

 console.log(findInstructor);
