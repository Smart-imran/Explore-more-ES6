// inheritance

class Vehicle{
    constructor(name,price) {
        this.name = name;
        this.price = price;        
    }

    move(){
        console.log("hello World");
    }
}

class Bus extends Vehicle{
    constructor(name, price ,seat , ticketPrice) {
        super(name,price);
        this.seat = seat ;
        this.ticketPrice = ticketPrice;
    }
}

class Others extends Vehicle{
    constructor(name,price,model){
        super(name,price);        
        this.model = model;
    }
}
