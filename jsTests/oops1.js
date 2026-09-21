/*OOPS - Object Oriented Programming

Abstraction - in java - is not supported in javascript

Interfaces - in java - is not supported in Javascript

Maltiple inheritance also is not supported in Javascript

1.Enchapsulation:Binding the data between the methods is called encapuslation
explain: one method set the data (setter) one method get the data (getter) dependices between two methods or depended on other 
method is ccalled encapsulation

class A{

    m1(){
    
    Create a some data                              //setter 
    }

    m2(){
    
    we use the data here which is create by m1      //getter
    
    }

}
const obj = new A()

Obj.m1()
obj.m2()
//must need to call two methods other wise not get the data or throughing error..

*/

//Encapsulation

class employee{

        empname
        empplace
        empid

        getemployeeDetails(){

                    this.empname = "raju"
                    this.empplace = "bangalore"
                    this.empid="54865"

        }

        printempDetails(){

                    console.log(this.empname, this.empplace, this.empid)

        }

}

const emp1 = new employee()

emp1.getemployeeDetails()
emp1.printempDetails()

//We can parametraised this with keywords

class employee1{

        empname
        empplace
        empid

        getemployeeDetails(name, place, id){//SET THE DATA HERE 

                    this.empname = name
                    this.empplace = place
                    this.empid= id

        } 

        printempDetails(){//GET THE DATA HERE IS CALLED ENCAPSULATION

                    console.log(this.empname, this.empplace, this.empid)

        }

}

const emp2 = new employee1()

emp2.getemployeeDetails("Gangadhar", "Vizag", "12345")
emp2.printempDetails()

//USING CONSTRUCTOR

class employee3{

        empname
        empplace
        empid

        constructor(name, place, id){//SET THE DATA HERE 

                    this.empname = name
                    this.empplace = place
                    this.empid= id

        } 

        printempDetails(){//GET THE DATA HERE IS CALLED ENCAPSULATION

                    console.log(this.empname, this.empplace, this.empid)

        }

}

const emp3 = new employee3("sheethu", "Vizag", "1650")

// emp2.getemployeeDetails("Gangadhar", "Vizag", "12345")
emp3.printempDetails()