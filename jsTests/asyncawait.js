async function printName(){

    return "Raju"
}

// Async makes function to return Promise 


 async function printstudent1(){

    return "Chethan"
}

 async function printstudent2(){

    return "Mounika"
}


// printName().then(name => console.log(name))
// printstudent1().then(name => console.log(name))
// printstudent2().then(name => console.log(name))

async function main(){

 console.log(await printName())
 console.log(  await  printstudent1())
 console.log( await printstudent2())

  
}

 main()

// pending - Not resolved or not Rejected 
// fullfilled - promose is resloved 
// rejected - promise is rejected 

