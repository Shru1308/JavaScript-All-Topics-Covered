/* Operators : +, -, *, /, %, ++, --, **(exponentiation), =, +=, -=, *=, %=, **=, ==, ===, !=, !==, 
            >, >= , <, <=, &&, ||, ! */
let a = 5;
let b = "10";

console.log("a + b = " , a+b);

let m = 5;
let n = "5";
console.log(m==n); //true
console.log(m===n); //false

//Conditional Statements

let age = 20;
if(age < 20){
    console.log("Age less than 20");
}
else if(age == 20){
    console.log("Age is 20");
}
else{
    console.log("Age more than 20");
}

age < 20 ? console.log("Age less than 20") : console.log("Age is 20 or Age more than 20");

