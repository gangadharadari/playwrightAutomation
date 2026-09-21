/*

3.PolyMorphism

        1.MethodOverriding
        2.MethodOverloading //Both supported in Javascript

    1.MethodOverriding:

        class A{
        
            printName(){
            
                //ganga

            }
        
        }

        Class B extends A{
        
            printName(){
            
                //Sridher 

            }

        }

        const obj = new B()
        Obj.printName()// Here override the class A because Lettest will print This is called Overriding

        2.MethodOverloading:

             class A{
        
            add(n1, n2){
            
                console.log(n1+n2)

            }
        
        }

        const obj = new A()

        obj.add(3,4,6,7,8) //In method we given two arguments but here we given multiple values 
        this is called Methodoverloading



4.Prototyping: Special in Javascript

*/

//Polymorphism 

// Method Overrding 
// Method Overloading 

class A {

    PrintName() {

        console.log("This is Parent class related Method - Sridhar")
    }

    add(n1, n2) {

        console.log(n1)
        console.log(n2)

        console.log(n1 + n2)
    }


}


class B extends A {


    PrintName() {

        console.log("This is child class related Method - Gangadhar")
    }

    add(n1, n2, n3) {

        console.log(n1)
        console.log(n2)
        console.log(n3)

        console.log(n1 + n2 + n3)
    }


}

const obj = new B()

obj.PrintName()  //Method Overrding 

obj.add(2,7)  // Method Overriding 

// const obj2 = new A()

// obj2.PrintName()

// obj2.add(3,8,7)  //Method OverLoading 

