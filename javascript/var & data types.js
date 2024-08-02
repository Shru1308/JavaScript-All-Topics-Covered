//variable and data tyoes
//variables are containers for data storage
//variable can also be declared without any keyword but this must be avoided , e.g.
fullname = "Shruti";
console.log(fullname);
fullname = "Agarwal";
console.log(fullname);

//var : can be re-declared & updated. A global scope variable.(Avoided) 
var k;              //undefined
var age = 28;
var age = 30;

//let : cannot be re-declared but can be updated. A blcok scope variable.
let b;              //undefined 
b = 10;
let a = 29;
a = 30;

//const : cnnot be re-declared or updated. A block scope variable.
const PI = 3.1;

//(Primitive) Data Types : Number, String, Boolean, Undefined, null, BigInt, Symbol
//(Non-primitive) Data Types : Objects(Arrays, Functions...) stores key-value pairs
const Student = {
    fullname : "Shruti Agarwal",
    age : 21,
    gpa : 9.0,
    isPass : true
}

console.log(Student);
console.log(Student["fullname"]);
console.log(Student.age);




