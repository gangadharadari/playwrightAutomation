

// // Promise is Object which gives some out based on resolve or reject 

// //Promise{ "Raju" }

// const p = new Promise((resolve, reject) =>{


//     let x = 6 
//     if (x ==2 ){

//         resolve("Raju")
//     }
//     else{

//         reject("Chethan")
//     }
// })


// //console.log(p)  // Promise{"Raju"}  // Promise { <rejected> 'Chethan' }  with error 

// // .then
// // .catch 

// p.then(data => console.log(data))
//  .catch(data => console.log(data))


// const p1 = Promise.resolve("Raju")

// p1.then(name => console.log(name))


// const p2 = Promise.reject("Chethan")

// p2.catch(name => console.log(name))


// const p1 = Promise.resolve("Raju");

// console.log("Soumya");

// p1.then((name) => {
//     console.log(name);
// });

// console.log("Spoorthi");


// const p1 = Promise.resolve("Raju");

// console.log("Start");

// p1.then((name) => {
//     console.log(name);

// });

// console.log("End");