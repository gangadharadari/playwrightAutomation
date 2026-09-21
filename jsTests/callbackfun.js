// function Trainer(callback){

//     console.log("Gangadhar")

//     callback()
  
// }


// function student1(){

//     console.log("Sridhar")
// }

// function student2(){

//     console.log("Hamsi")
// }

// function student3(){

//     console.log("Sheetu")
// }

// Trainer(student3)


// // callback - its function which we send as parameter to another function 

// // Here Trainer is a Higher order

// // A function which willm accept the another function as argument(Parameter)

// // callback is also called as closure - in a Specific scenario \\


// // If callback function is accesing data from Higher order function then its closure 




// function calculator(n1, n2, callback){

//     let x = n1
//     let y = n2 
//     callback(x,y)
// }

// function add(v1, v2){

//     console.log(v1+v2)
// }

// function substract(v1, v2){

//     console.log(v1-v2)
// }

// function multiply(v1, v2){

//     console.log(v1*v2)
// }

// calculator(3,6,multiply)

// Anonymous function 

// function without name 

// Anonymous functions can used a callback functions



function PrintMessage(callback){

    console.log("This is a Higher order Function")

    callback()
}


PrintMessage( function (){
    console.log("This is a callback function")
} )


// // Here Anonymous function is Used as callback function

