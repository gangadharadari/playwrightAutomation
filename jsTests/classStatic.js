class student{

    static stuname = "Sheethu" // Statci Variable

    stuplace = "Vizag"         // Non static variable

    m1(){                      // Non Static method
    
        console.log("This is M1 Method")

        this.m3()

        student.m2() // In Non static method we can call static method using classname.staticmethod name

    }

    static m2(){                 // Static method

        console.log("This is M2 Method")
        
        //this.m3() // Will not allow to call using this keyword in static keyword

        student.m4() // you can call static method inside static method using classname.staticmethod()
    }

    m3(){

        console.log("This is M3 Method")// Non Static method

    }

    static m4(){

        console.log("This is M4 Method")// Static method

    }

}

const stu1 = new student()

stu1.m1()

//stu1.m2() // It throghing Error because u using keyword called static "stu1.m2 is not a function"
// when you using static keyword inside a class.. we can call that method directly using with class name..
//  you can call both Methods and Variables

// student.m2()

// //student.m4()// Why this not working because u didnot declare static.. Without static we can call with the object name

// console.log(student.stuname)