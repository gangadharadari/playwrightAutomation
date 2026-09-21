//class its has consists of methods and variables 'n' no of methods & variables we can create under class.

//constractor constructor is defalt method in class it will automatically give output.. if constructor have arguments 
// we can pass arguments at time of create object class function we can pass parameters 

//object is also called as instance of class obj creation for call class method.. without obj we didn't call class methods

//this keyword we can use like call inside the class we call methods or variables using this keyword

class calculator {

    x = "ganga"
    y = "sridhar"

    // constructor(){
    //     console.log('Sheethu')
    // }
    // constructor(n1, n2){
    //     console.log(n1*n2)
    // }

    add(n1,n2){
        console.log(n1+n2);
    }

    Substract(n1,n2){
        console.log(n1-n2);
    }

    Multiply(n1,n2){
        console.log(n1*n2);
        this.printname()
        this.add(n1, n2)
        this.Substract(n1, n2)
        this.x
    }

    divison(n1,n2){
        console.log(n1/n2);
    }

    printname()
    {
        console.log('Hamsi')
    }
    
}

// const cal = new calculator(2,6) //obj creation for call class method.. without obj we didn't call class methods

// cal.add(8,9)

// cal.Substract(243,45)

// cal.Multiply(6,67)
// cal.printname()
// cal.divison(15,3)
// console.log(cal.y)

const cal1 = new calculator()

cal1.Multiply(3,5)

// cal2 = new calculator(3,8)// Object or Instance of class

// cal3 = new calculator(4,9)
// console.log(cal3.x)


// class syntax

class classname{

    //variables

    //methods

    constructor(){

    }
    //constructor(n1, n2){ //if u pass arguments to constructor 

    //}


    //v1
    //v2
    //v3

    //m1
    //m2
    //m3
    //m4

}

const obj = new classname()
//const obj = new classname(n1, n2) // You can call arguments here in classname otherwise it will through error'NaN'
//  obj.m1
//  obj.v1// you can call like this methods and variables