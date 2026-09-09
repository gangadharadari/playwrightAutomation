let employee = {
    
    Fullname : "Raju g",
    Age : 45,
    Designation : "Manager",
    Salary : 50000,
    Gmail : "abc@gmail.com"
    
}

console.log(employee.Fullname);

console.log(employee['Age']);

employee['Age'] = 40;

console.log(employee['Age']);

console.log(employee['role']);

employee['role'] = "Admin";

console.log(employee['role']);

delete employee.Age

console.log(employee['Age']);


const jobtitles = {

    title1 : "Manager",
    title2 : "Team Lead",
    title3 : "Developer",
    title4 : "Tester",
    title5 : "Designer"

}

for (let title in jobtitles) {
    console.log("loop starts");
    console.log(title);
    console.log(jobtitles[title]);
    console.log("loop ends");
}

