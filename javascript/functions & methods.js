function abc(){
    console.log("hello");

}

function msgprint(msg){
    console.log(msg);
}

function add1(a,b){
    return a+b;
}

abc();
msgprint("hellooooo");
console.log(add1("nvkjd","ffvkj"));
console.log(add1(1,2));

//arrow functions : compact way of writing a function

const add2 = (a,b,c) => {return a+b+c;}

//Higher Order functions/methods : functn that take another functn as parameter or returning another functn(e.g. forEach)

//callback funtions : 
function sum(a, b){
    console.log(a+b);
}

function difference(a, b) {
    console.log(a-b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 5, sum);
calculator(1, 5, difference);

calculator(1, 2, (a,b) => {
    console.log(a*b);
});
