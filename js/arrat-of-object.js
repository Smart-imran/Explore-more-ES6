 const products = [
    {id:1, name:"Lenovo", price:20000},
    {id:2, name:"HP", price:30000},
    {id:3, name:"ASUS", price:50000}
 ]

 //map

 const mapName = products.map(product => product.name);
// console.log(mapName);

/*  forEach

products.forEach(p => console.log(p.id)); */

// filter 

const selected = products.filter(p => p.price > 40000);
//console.log(selected);

//find

const selected2 = products.find(p => p.price < 40000);
//console.log(selected2);

//reduce 

const selected3 = products.reduce((previous,current) => previous + current.price,0);

console.log(selected3);
