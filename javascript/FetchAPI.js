/* 
Fetch API provides an interface for fetching(sending/receiving) resources

It uses Request and Response objects.
The fetch() method is used to fetch a resource(data).

let promise = fetch(url, [options])

*/
let btn = document.querySelector("#btn");
let fact = document.querySelector("#fact");
const url = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(url);         //when we fetch an api and no options are given , then particular type of request is created : GET Request
// console.log(promise);

/* const getFacts = async () => {
    console.log("\ngetting data.....");
    let response = await fetch(url);
    console.log(response);    //JSON format
    let data = await response.json();
    // console.log(data);
    fact.innerText = data[2].text;
} */


//performing above opr using promise chains
function getFacts(){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        fact.innerText = data[2].text;
    })
}
btn.addEventListener("click", getFacts);

/* 
AJAX : Asynchronous JS & XML
JSON : Javascript Object Notation
json() : a method that returns a second promise that resolves with the result of parsing the
         response body text as JSON. (I/p is JSON, O/p is js object )
*/
/* 
Request And Response : 

HTTP verbs (MDN Document Reference)
Response Status Code
*HTTP response headers also contain details about the response, such as contenct type,
HTTP status code, etc.
*/