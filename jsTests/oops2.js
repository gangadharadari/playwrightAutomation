/*

Inheritance:Inherit the methods of properties from one class to other class is called Inheritance

        1.Single Inheritance: means one class to another is called single inheritance
        2.Multi level Inheritance:
        3.Multiple Inheritance// Not used in javascript because one child have multiple parents not access in Javascript
        4.Hirarchical Inheritance: It means One Parent have multiple childs callled hiranchical

1.Single Inheritance:


    Class A{
    
        20methods   // Parent class or Base Class
    
    }

    Class B extends A {
    
        15methods   // Derived class or child class
    
    }

    const obj = new B()
    Obj.//Here we can access Class B methods and Class A menthods and Variables 



2.Multi level Inheritance:

    class A{

        10methods
    }

    class B extends A {
    
        5methods

    }

    Class C extends B{
    
        3methods
    }

    const obj = new C()
    Obj.//Here we can access Class B methods and Class A & c menthods and Variables 

Hirarchical Inheritance:

    Class A{
    
        20methods 

    }

    Class B extends A{
    
        10methods

    }

    Class C extends A{
    
        5methods 

    }
    const obj = new B()
    Obj. // Here we can access Class B methods and Class A menthods and Variables 

    Const obj = new C()
    obj. //Here We can access class C methods and Class A methods and variables 

*/

// Single Inheritance

// class A{

//     m1(){

//         console.log("This is M1 Method")// Non Static method

//     }

//     m2(){

//         console.log("This is M2 Method")// Non Static method

//     }

//     m3(){

//         console.log("This is M3 Method")// Non Static method

//     }

//     m4(){

//         console.log("This is M4 Method")// Non Static method

//     }

// }

// class B extends A{

//     m5(){

//         console.log("This is M5 Method")// Non Static method

//     }

//     m6(){

//         console.log("This is M6 Method")// Non Static method

//     }

//     m7(){

//         console.log("This is M7 Method")// Non Static method

//     }

//     m8(){

//         console.log("This is M8 Method")// Non Static method

//     }


// }

// const obj = new B()
// obj.m1()
//obj.m5()

// Multi Level Inheritance

// class A{

//     m1(){

//         console.log("This is M1 Method")// Non Static method

//     }

//     m2(){

//         console.log("This is M2 Method")// Non Static method

//     }

//     m3(){

//         console.log("This is M3 Method")// Non Static method

//     }

//     m4(){

//         console.log("This is M4 Method")// Non Static method

//     }

// }

// class B extends A{

//     m5(){

//         console.log("This is M5 Method")// Non Static method

//     }

//     m6(){

//         console.log("This is M6 Method")// Non Static method

//     }

//     m7(){

//         console.log("This is M7 Method")// Non Static method

//     }

//     m8(){

//         console.log("This is M8 Method")// Non Static method

//     }


// }

// class C extends B{

//      m9(){

//         console.log("This is M9 Method")// Non Static method

//     }

//      m0(){

//         console.log("This is M0 Method")// Non Static method

//     }

// }

// const obj = new C()
// obj.m1()
// obj.m0()
// obj.m5()

// Hirarchical Inheritance
class A{

    m1(){

        console.log("This is M1 Method")// Non Static method

    }

    m2(){

        console.log("This is M2 Method")// Non Static method

    }

    m3(){

        console.log("This is M3 Method")// Non Static method

    }

    m4(){

        console.log("This is M4 Method")// Non Static method

    }

}

class B extends A{

    m5(){

        console.log("This is M5 Method")// Non Static method

    }

    m6(){

        console.log("This is M6 Method")// Non Static method

    }

    m7(){

        console.log("This is M7 Method")// Non Static method

    }

    m8(){

        console.log("This is M8 Method")// Non Static method

    }


}

class C extends A{

     m9(){

        console.log("This is M9 Method")// Non Static method

    }

     m0(){

        console.log("This is M0 Method")// Non Static method

    }

}

const obj = new B()
const obj1 = new C()
 
obj.m1()
obj.m4()
obj.m6()
obj.m8()

obj1.m2()
obj1.m3()
obj1.m9()
obj1.m0()