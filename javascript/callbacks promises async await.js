//async await >> promise chains >> callback hell

/* 
Sync in js : 
  Synchronous => means code runs in a particular sequence of instructions given in the program. Each instruction
                 waits for previous instruction to complete its execution (till now)
  Asynchronous => Due to Synchronous programming, sometimes imp instructions get blocked due to some previous instructions,
                  causing delay in UI.
                  Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/
function hello() {
    console.log("helloo");
}
//setTimeout(function, time in ms) : a pre-defined function that allows to execute a function after given time
/* setTimeout(hello, 2000);

setTimeout(() => {
    console.log("helllloooo");
}, 4000);  */   //after 4 sec

//callback : a function passed as an argument to another function
//callback hell : nested callbacks stacked below one another forming a pyramid structure(pyramid of dom)
//                this style of programming becomes difficult to understand & manage

function getdata(dataId){
    console.log("data :",dataId);
}
/* getdata(234);      //immediate response
getdata(34); */

//now we want data after 2 sec
function getdata2(dataId){
    setTimeout(() => {
        console.log("data : ", dataId);
    }, 2000);
}

/* getdata2(456);   //both results after 2 sec at same time
getdata2(77);
 */
//now we want data1 2 secs later, data2 after 2 secs of data1 and so on
function getdata3(dataId, getnextData){
    setTimeout(() => {
        console.log("data :", dataId);
        if(getnextData) getnextData();
    }, 2000);
}

// getdata3(23, getdata3(34));   => wrong way
//callback hell(a problem) =>
/* getdata3(23, () => {
    console.log("Getting data 2....");
    getdata3(66, () => {
        console.log("Getting data 3....");
        getdata3(56);
    });
}) */

/* ***********************************************************************************************************************************

promise : is for "eventual" completion of task, an object in JS, soln for callback hell

  let promise = new Promise((resolve, reject) => {...})
  *resolve & reject are callbacks provided by js

  has 3 states -> pending : result is undefined
                  fulfilled (resolve) : reult is a value
                  reject : result is an error object
*/
/* let promise1 = new Promise((resolve, reject) => {
    console.log("I am a promise");         //pending
})
console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
    console.log("I am a promise2"); 
    resolve("success");                       //fulfilled
})
console.log(promise2);

let promise3 = new Promise((resolve, reject) => {
    console.log("I am a promise3"); 
    reject("An error ocurred....123....");    //rejected and appeared as an error
})
console.log(promise3);
 */
 
function getdata4(dataId, getnextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataId);
            resolve("success");             //to make state fulfilled otherwise after completion it'll still show pending
            if(getnextData) getnextData();
        }, 2000);
    })
}
// let result = getdata4(123);
// console.log(result);

//how to handle promise
/* 
 .then() & .catch()
  promise.then((res) => {...})  : to perform opr after promise is resolved
  promise.catch((err) => {...})  : : to perform opr after promise is rejected
  *res & err are optional parameters
 */

/* const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("This is a promise inside getPromise");
        // resolve("Success.....");
        // reject("Errorrrr");
    })
}

let promise4 = getPromise();
promise4.then((res) => {
    console.log("A promise is fulfilled");
    console.log("A promise is fulfilled", res);
})
promise4.catch((err) => {
    console.log("A promise is rejected");
    console.log("A promise is rejected", err);
}) */

//promise chains concept
function asyncfun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1 printed");     
            resolve("success for data1");       
        }, 4000);
    });
}

/* console.log("fetching data1....");
let p1 = asyncfun1();
p1.then((res) => {
    console.log(res);
}) */

function asyncfun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2 printed");     
            resolve("success for data2");       
        }, 4000);
    });
}
/* 
console.log("fetching data2....");
let p2 = asyncfun2();
p2.then((res) => {
    console.log(res);
}) */

//above 2 functions are executed simultaneouly, we want both functions to executed one after another

/* console.log("Fetching data1.....");
asyncfun1().then((res) => {
    // console.log(res);
    console.log("Fetching data2.....");
    asyncfun2().then((res) => {
        // console.log(res);
    })
})
 */
//now performing callback hell opr using promise chain
//getdata4 updated version
function getdata5(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data :", dataId);
            resolve("Success....");
        }, 4000);
    });
}
/* let promise5 = getdata5(45);
promise5.then((res) => {
    console.log(res);
}) */

/* console.log("Fetching data1....");
getdata5(45).then((res) => {
    console.log(res);
    console.log("Fetching data2....");
    getdata5(50).then((res) => {
        console.log(res);
    })
})
 */

/* console.log("Fetching data1....");
getdata5(1)
    .then((res) => {
        console.log("Fetching data2....");
        return getdata5(2);
    })
    .then((res) => {
        console.log("Fetching data3....");
        return getdata5(3);
    }).then((res) => {
        console.log(res);
    });
 */

/* *************************************************************************************************************************************
Aynsc-Await : 

async function always returns  promise
async function myfunc() {...}

await pauses the execution of its surrounding async function until the promise is settled

*/

async function hello(){
    console.log("hello my name is Shruti");
}
// console.log(hello());              //a promise is created and returned

//await can only be used inside async function
/* async function getDatafrom5(){
    console.log("Fetching data1....");
    await getdata5(45);      //1st call stopping below function call
    
    console.log("Fetching data2....");
    await getdata5(44);      //2nd call stopping above function call

    console.log("Fetching data3....");
    await getdata5(40);
}
getDatafrom5(); */

//now above implementation can only be achieved by another fauntion call
//to prevent this additional func call, IIFE is used
/* 
IIFE : Immediately Invoked Function Expression
       a function that is called immediately as soon as it is defined
       can be executed only once, when it is defined

       (function () {...})();
       (() => {...})();
       (async () => {...})();
*/
(async function (){
    console.log("Fetching data1....");
    await getdata5(45);      //1st call stopping below function call
    
    console.log("Fetching data2....");
    await getdata5(44);      //2nd call stopping above function call

    console.log("Fetching data3....");
    await getdata5(40);
})();