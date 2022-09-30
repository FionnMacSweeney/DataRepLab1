class bmi{
    // constructor used to initialize Data
    // in the class
    constructor(height, weight){
        this.height = height;
        this.weight = weight;

    }

    //method to calculate Bmi
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
//invoke
let mybmi = new bmi(2,100);
//call calculate bmi method 
console.log(mybmi.calculateBMI());