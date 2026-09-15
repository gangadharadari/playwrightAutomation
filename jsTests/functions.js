// function data(){

//     console.log("Say");
//     console.log("Hello");
//     console.log("Gangadhar");
// }

// data();

// function data(){
    
//     console.log("Say");
//     console.log("Hello");
//     console.log("Gangadhar");
// }

// for (let i = 0; i < 5; i++) {
// console.log(i);
// data();

// }

function login(username, password){

    console.log("Login Function");
    console.log("fill the username: " + username);
    console.log("fill the password: " + password);
    console.log("click on login button");
}


// function add(num1, num2){
//     console.log("Addition Function");
//     console.log("Addition of two numbers is", + (num1 + num2));
// }
// add(5, 10); 
// add(20, 30);
// add(100, 200);

logincredentials = {

    user1 : {
        username: "Gangadhar",
        password: "12345"
    },
    user2 : {
        username: "raju",
        password: "45"
    },
    user3 : {
        username: "ravi",
        password: "drg"
    },
    user4 : {
        username: "banu",
        password: "rerg"
    },
    user5 : {
        username: "swathi",
        password: "4y4"
    }
}

for (let user in logincredentials) {

    login(logincredentials[user].username, logincredentials[user].password);

}


// function with return keyword

function add(num1, num2){
    console.log("Addition Function");
    return (num1 + num2);
}

add(5, 10);
x = add(20, 30);
console.log("Addition of two numbers is: " + x);

function generateIndianMobileNumber() {
    const validStarts = ["6", "7", "8", "9"];
    let mobileNumber = validStarts[Math.floor(Math.random() * validStarts.length)];

    while (mobileNumber.length < 10) {
        mobileNumber += Math.floor(Math.random() * 10);
    }

    return mobileNumber;
}

console.log("Random Indian Mobile Number: " + generateIndianMobileNumber());
console.log("Random Indian Mobile Number: " + generateIndianMobileNumber());

function generateUSMobileNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const exchangeCode = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;

    return `(${areaCode}) ${exchangeCode}-${lineNumber}`;
}

console.log("Random US Mobile Number: " + generateUSMobileNumber());
console.log("Random US Mobile Number: " + generateUSMobileNumber());


// defalt parameters in function

function login(username = "defaultUser", password = "defaultPass") {

    console.log("Login Function");
    console.log("fill the username: " + username);
    console.log("fill the password: " + password);
    console.log("click on login button");
}   

login(); // Uses default parameters
login("customUser", "customPass"); // Uses provided parameters

// without default parameters error will be thrown if parameters are not provided like below
// login(); // This will throw an error if username and password are not provided   
// undefined and NaN 

// arrow function

const addNumbers = (num1, num2) => {
    return num1 + num2;
};