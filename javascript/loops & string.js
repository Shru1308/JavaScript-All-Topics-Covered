//for loops
for(let i=1 ; i<= 5 ; i++){
    console.log("hyy", i);
}

//while loops
{let i = 1;
while(i <= 5){
    console.log("hyy", i);
    i++;
}}

//do-while loops
let i = 1;
do{
    console.log("hyy", i);
    i++;
}while(i <= 5)

//for-of loops (iterator for strings and arrays)
let string = "Shruti agarwal";
for(let val of string){
    console.log(val);
}

//for-in loops (iterator for objects and arrays)
let objvar = {0 : 23 , age : 45 , 2 : "yes" , name : "Shruti"};
for(let key in objvar){
    console.log(key, " : " , objvar[key]);
}

//Example : random number guessing game
/* let gameNum = 25;

let userNum = prompt("Enter a value");

while(userNum != gameNum){

    userNum = prompt("Your guess is wrong.....Enter another value");
}
alert("Congratulations....You entered the right No."); */

//Strings
let str = "ctvhgvuyj";
console.log(str.length);
console.log(str[0],str[1],str[11]);

//template literals : a way to have embedded expressions in strings (e.g.`this is a template`)
let specialstring = `a template`;   //special type of string
console.log(typeof(specialstring));

//string interpolation : to create string by doing substitution of placeholders (e.g.`string txt ${expression} string text`)
//why backticks (``), e.g.
let obj = {item : "pen", price : 10};
let output = `the cost of ${obj.item} is ${obj.price} rupees and it can be ${1+2+3}`;
console.log(output);
console.log("the cost of", obj.item, "is", obj.price, "rupees");

//String methods(new string is created) : str.toUpperCase(), toLowerCase(), trim(), slice(start,end), concat(str2),
//                                            replace(searchVal, newVal), charAt(index).....


