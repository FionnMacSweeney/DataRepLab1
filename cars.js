//parent class
class Vehicle{
    // constructor used to initialize Data
    // in the class
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //method to log make model and year
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}


//child class extending parent class 
class Car extends Vehicle{
    //constructor used to initialize data
    constructor(make, model, year, doors){
        // use super to invoke parent class
        super( make,model,year);
        this.doors = doors;
    }

    //method
    InfoInformation(){
        //use super to invoke method from parent class 
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//instansiate object and assign data
let myCar = new Car('Audi','R8', 2022,2);
myCar.InfoInformation();
