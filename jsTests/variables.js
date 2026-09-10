//Let variable is block scoped, meaning it is only accessible within the block it is defined in.
// if(true) {
//     let a = "This is true";
//     console.log(a);

//     a = "This is false";
//     console.log(a);
// }

// if(true) {
    
//     console.log(a);
// }

// if(true) {
    
//     console.log(a);
// }
//const variable is also block scoped, but it cannot be reassigned after its initial assignment. It is used for values that should remain constant throughout the program.
// if(true) {
//     const a = "This is true";
//     console.log(a);

//     // a = "This is false"; // This would cause an error
//     // console.log(a);
// }

// if(true) {
    
//     console.log(a);
// }

// if(true) {
    
//     console.log(a);
// }

//VAR Variable is function scoped, meaning it is accessible throughout the function it is defined in, regardless of block scope. It can be reassigned and redeclared within the same scope.
if(true) {
    var a = "This is true";
    console.log(a);

    a = "This is false";
    console.log(a);
}

if(true) {
    
    console.log(a);
}

if(true) {
    
    console.log(a);
}