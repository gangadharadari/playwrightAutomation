
//What is a Promise in JavaScript?

// let promise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Operation successful");
//     } else {
//         reject("Operation failed");
//     }
// });

// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// Reverse a String

// Method 1 – Using built-in methods

// // let reverse = str.split("").reverse().join("");
// let reverse = str.split("").reverse().join("");
// console.log(reverse);

// Reverse String Without reverse()

// let str = "Playwright";
// let result = "";
// for (let i = str.length - 1; i >= 0; i--) {

//     result = result + str[i];

// }

// console.log(result);

// Better interview version
// function reverseString(str) {

//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// console.log(reverseString("Playwright"));

// Reverse using two pointers

// A more advanced approach:
// function reverseString(str) {

//     let arr = str.split("");

//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {

//         let temp = arr[left];

//         arr[left] = arr[right];
//         arr[right] = temp;

//         left++;
//         right--;
//     }

//     return arr.join("");
// }

// console.log(reverseString("Playwright"));

// Array 1 to 10 – Filter Odd Numbers
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let oddNumbers = numbers.filter(num => num % 2 !== 0);

// console.log("Odd nubers are: ", oddNumbers);

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i += 2) {
//     console.log(i)
// }

// let numbers = Array.from({ length: 100 }, (_, i) => i + 1);

// let oddNumbers = numbers.filter(num => num % 2 !== 0);

// console.log(oddNumbers);

// // filter even numbers

// let numbers1 = [1,2,3,4,5,6,7,8,9,10];

// let evenNumbers = numbers1.filter(num => num % 2 == 0);

// console.log("Even nubers are: ", evenNumbers);

// let numbers = Array.from({ length: 100 }, (_, i) => i + 1);

// for (let i=1; i<= numbers.length ; i += 2)
//     {
      
//         console.log(i);

//     }
// Multiply by 2 or any number
// let numbers = [1,2,3,4,5];

// let result = numbers.map(num => num * 5);

// console.log(result);
// //multiplay by 2 or any number only specific numbers like odd or even or prime numbers

// let numbers1 = [1,2,3,4,5,6,7,8,9,10];

// let result1 = numbers1
//     .filter(num => num % 2 == 0)
//     .map(num => num * 2);

// console.log(result1);

// let numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

// let result = numbers
//     .filter(num => num % 2 == 0)
//     .map(num => num * 5);

// console.log(result);

// reduce() method means sum of the values
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total);

// // same as similar meaning
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let result = numbers
//     .filter(num => num % 2 == 0)
//     .map(num => num * 2)
//     .reduce((sum, num) => sum + num, 0);

// console.log(result);

// //combine all three one programs means filter(),map(),reduce(). together
let numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

let result = numbers
    .filter(num => num % 2 !== 0)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);

console.log(result);