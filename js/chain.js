// data access

const data = [
    {
        id: 1, name: "Imran", address: "Dhaka"
    }
];
 
//console.log(data[0].address);

const products = {
    count : 500,
    data : [
        {id:1, productName:"HP", price: 52000},
        {id:2, productName:"LENOVO", price: 52000}
    ]
}
const product1 = {
    count : 500,
    data : {
        street:{id:1, productName:"HP2", price: 88000},
        adress:{id:2, productName:"LENOVO6", price:56000}
    }
}

let dataFind = products.data[1].productName;

let dataFind2 = product1.data.street.price;

console.log(dataFind);
console.log(dataFind2);
