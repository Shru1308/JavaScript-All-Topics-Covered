/* 
js object : an entity having state and behaviour (properties and methods)
            have special property called prototype(basically a reference to an object)
            prototype can be set using __proto__
    *if objects and prototypes d have same methods, object's method will be used
*/

const student = {
    name : "Shruti Agarwal",
    marks : 98,
    printMarks : function() {
        console.log("marks :", this.marks);     //this refers to object
    },
    printName : () => {
        console.log("name :",this.name);
    },    
    printDetail() {
        console.log("name :",this.name);
        console.log("marks :", this.marks); 
    }
}
console.log(student);
console.log(student.name);
console.log(student.printMarks());

//how to use object & properties of another object in some object
const employee = {
    calcTax() {
        console.log("The rate is 10%");
    },
};

const emp1 = {
    salary : 10000,
};

emp1.__prot__ = employee;    //now emp1 object can access methods of employee object
console.log(emp1);           //similarly we can create many objects 

const emp2 = {
    salary : 20000,
    calcTax() {
        console.log("The rate is 20%");
    },
}
emp2.__prot__ = employee;
console.log(emp2.calcTax());    //priority to method in emp2 object

/* 
js classes : program-code template for creating objects
             those objects will have same state(var) & same behaviour(methods) inside it.
    
    class myclass{
        constructor() {...}
        mymethod() {...}
    }

    let myobj = new myclass();
*/
class car{
    start(){
        console.log("start.....");
    }

    stop(){
        console.log("stop.....");
    }

    setBrand(brand){
        this.brand = brand;
    }
}
let suzuki = new car();     //default constructor called
console.log(suzuki);
suzuki.setBrand("maruti");
console.log(suzuki);

/* 
constructor() method : automatically invoked by "new", initializes object
*/
class animal {
    //a class can have one constructor at a time
    // constructor(){
    //     console.log("Animal is born");
    // }
    constructor(Aname){
        this.name = Aname;
        console.log("Animal name :", Aname);
    }
}
let dog = new animal();  //custom constructor called
let cat = new animal("pussy");

/* 
Inheritance in js : passing down properties & methods from parent class to child class
    class parent {
    
    }

    class child extends parent {
    
    }

    *if child & parent have same method, child's methods are used(method overriding)
*/
class Person {
    constructor() {
        this.species = "Homo Sapiens";   
        console.log(this.species); 
    }

    sleep() {
        console.log("sleeping");wh
    }

    eat() {
        
        console.log("eatingg");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person {
    constructor(branch){
        super();            //invoke parent class constructor
        this.branch = branch;
        console.log(this.branch);
    }
    work(){
        super.eat();
        console.log("Solve problems");
    }
}
  
let Engineer1 = new Engineer();    //only parent constructor called
console.log(Engineer1);
console.log(Engineer1.eat());
console.log(Engineer1.work());

let Engineer2 = new Engineer("Software Engineer","hgh");    //both child + parent contructor called
/* 
super Kerword : used to call constructor of its parent class to access the parent's properties & methods

    super(tags)  -> calls parent's constructor
    super.parentMethod(args)
*/

//error handling using try-catch block
