const arr = [] //creating an empty array

// arrayname = [value1, value2, value3] //syntax for creating an array

const Arr1 = [1, 2, 3, 4, 5] //creating an array with values

// index of array starts from 0 we can access the values of an array using index

console.log(Arr1[0]); // Output: 1
console.log(Arr1[2]); // Output: 3  

// we can access otherthan array index value it will return undefined

console.log(Arr1[10]); // Output: undefined

// array will allow in javascript in array we can store any type of data in array like string, number, boolean, object, array etc

const Arr2 = [1, "Gangadhar", true, {name: "Gangadhar", age: 25}, [1, 2, 3]] //creating an array with different types of values
console.log(Arr2[0]); // Output: 1
console.log(Arr2[1]); // Output: "Gangadhar"
console.log(Arr2[2]); // Output: true
console.log(Arr2[3]); // Output: {name: "Gangadhar", age: 25}
console.log(Arr2[4]); // Output: [1, 2, 3]


// IN typescript we can't create an array with different types of values we can create an array with only one type of value like number, string, boolean, object, array etc

    //Arr3: number[] = [1, 2, 3, 4, 5] //creating an array with only number values


// Arr4: string[] = ["Gangadhar", "Raju", "Ravi", "Banu", "Swathi"] //creating an array with only string values

const elements = ["Gangadhar", "Raju", "Ravi", "Banu", "Swathi"] //creating an array with only string values

// we can access the values of an array using index 

console.log(elements[0]); // Output: "Gangadhar"
console.log(elements[1]); // Output: "Raju"     
console.log(elements[2]); // Output: "Ravi"

// i want to print array count of elements in array we can use length property of array

console.log(elements.length); // Output: 5

// concact two arrays we can use concat() method of array

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]   
const arr3 = arr1.concat(arr2) // concatenating two arrays
console.log(arr3) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// revarse an array we can use reverse() method of array

const arr4 = [1, 2, 3, 4, 5]
const arr5 = arr4.reverse() // reversing an array
console.log(arr5) // Output: [5, 4, 3, 2, 1] 

//join converts array to string we can use join() method of array with names

const names = ["Gangadhar", "Raju", "Ravi", "Banu", "Swathi"].join(" ")// joining an array with names
console.log(names) // Output: "Gangadhar, Raju, Ravi, Banu, Swathi"

// split converts string to array we can use split() method of string with names

const names1 = "Gangadhar, Raju, Ravi, Banu, Swathi".split(",") // splitting a string with names
console.log(names1) // Output: ["Gangadhar", "Raju", "Ravi", "Banu", "Swathi"]  

//splice method of array is used to add or remove elements from an array

const arr6 = [1, 2, 3, 4, 5]
arr6.splice(2, 0, 6) // adding an element at index 2
console.log(arr6) // Output: [1, 2, 6, 3, 4, 5]