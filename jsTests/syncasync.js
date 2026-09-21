//synchronous 

// statements are Executed in a sequesntial manner 

console.log("gangadhar")
console.log("Sheetu")
console.log("Hamsi")

// JS is a synchronous 

// Its executes statements in a sequential manner 



//Asynchronous

// To Make JS a Asynchronous we use - callback and promises, Asyn, await 


// console.log("Raju")

// //setTimeout(function , 1000)

// setTimeout(function (){
//     console.log("Soumya")
// }, 2000)

// console.log("Tarun")


//setTimeout(function, delay)


console.log("Tarun")

setTimeout( ()=> console.log("Soumya"), 3000 )

console.log("Raju")


