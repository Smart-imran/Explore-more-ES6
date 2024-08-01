// class  start Alphabet Letter
//class has some properties, method 

// this is class
class Car{

    // class use "constructor" convert make new object to call

    constructor(brand, model,price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }    

}
//make new car

 const car1 = new Car("Toyota", "X-cor", 60000);
 const car2 = new Car("Lambergini", "z-cor",581000);
 const car3 = new Car("Ferari", "X-cor", 325000);

 console.log(car1.brand);
 console.log(car2.model);
 console.log(car3.price);