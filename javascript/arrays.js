//collection of items
let marks = [1,34,6,"kk"];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));             //object

marks[2] = 45;
console.log(marks);       //arrays are mutable unlike strings

for(let el of marks) console.log(el);
for(let key in marks) console.log(marks[key]);
 

//Arrays method : arr.push(ele), pop(), toString(), concat(arr2), unshift(ele), shift(), slice(start,end), splice(start,delCount,newEl1...)
marks.push(898);
marks.push("kjkiuj");
console.log(marks);
marks.pop();
console.log(marks);

let s = marks.toString();
console.log(s);
let dum = [1,2,3];
let marks2 = marks.concat(dum);
console.log(marks2);

marks.unshift("adding ele");    //add an element at start
console.log(marks);

let marks3 = marks.shift();     //deletes from start and return that value
console.log(marks3);

console.log(marks.slice(2,4));  //returns a piece of array

//change original array(add, remove, replace)
let games = ["fun", "enjoy", "play", "healthy", "busy","s&l", "chess", "cricket"];
games.splice(5);                //delete all elements from startIndex
console.log(games);
games.splice(1,2);              //only delete 2 elements from index 1
console.log(games);
games.splice(1,2,"new game","ludo");     //2 elements deleted and 2 added at index 1
console.log(games);
games.splice();                 //all elements deleted

//forEach loop in Arrays
/* arr.forEach(callBack function)
callBack function : a functn to execute for each element in array , a functn passed as an arg to another fuctn */
function abcd(i){
    console.log(i+i+i);
}

marks.forEach(abcd);

marks.forEach(function abc(val){
    console.log(val + 20);
});

marks.forEach((val) => {
    console.log(val);
});

marks.forEach((val , index) => {
    console.log(val, index);
});

marks.forEach((val, index, marks) => {
    console.log(val, index, marks);
});

//Other imp higher order array methods : 
/* arr.map(callbackfunc(val, index, array)) : creates a new array with results of some operation. Value of callback returns are used to form new array 
   similar to forEach() but used when new array needs to be created */

marks.map((val) => {
    console.log(val);
});

let newarr = marks.map((val) => {
    return val + " new";
});
console.log(newarr);

/* arr.filter(functn) : creates a new array consisting of only elements that gives true for a conditioner or satisfies the condtn*/
let arr = [2,5,6,7,66,5,0];
let newarr2 = arr.filter((val) =>{
    return val % 2 == 0;
});
console.log(newarr2);

/* arr.reduce(functn) : performs some opr and reduces the array to a single val, returns that single val */
const initialValue = 0;
const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
)

let sum = arr.reduce((result, curr) => {
    return result + curr;
}); 

let max = arr.reduce((result, curr) => {
    return result > curr ? result : curr;
}); 

console.log(sumWithInitial,sum, max);

