/* Events :
  change in state of objects
  are fired to notify code of "interesting change" that may affect code execution
*/

//inline  : adding event functioning inside html tags 
//drawback : will make html code bulky
/* extrenal event handling : adding event functioning inside js file
  node.event = () => {
    //handle here
  }

  drawback : can handle one element at a time and only one function for one event
 */
let button1 = document.querySelectorAll(".button");

for (var i = 0; i < 2 ; i++) {
  button1[i].onclick = () => {
    console.log('Submit buttton 2 is clicked....');
    alert('You clicked submit 2.');
  }
}

//external event handling is given priority over inline event handling when event handling is applied over same tag
let divaccessed = document.querySelector("#divid");
divaccessed.onmouseover = () => {
  console.log("mouse over event");
}

// Event Object
/*  It is a special object that has details about the event
    All event handlers have access to event object's properties and methods

    here e -> object
    node.event = (e) => {
      //handle here  
    }
    e.target, e.type, e.clientX, e.clientY
*/
let btn3 = document.querySelector("#btn3");

btn3.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
}


//Event Listener : allows performing multiple functions on same event occurence
/*  node.addeventListener(event, callback)
    node.removeEventListener(event, callback)
    *callback reference should be same to remove
 */
//passing function as variable so that same reference
const handler = () => {
  console.log("button 4 was clicked");
}

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", handler);

btn4.addEventListener("click", (evt) => {
  console.log("button 4 was clicked 2.0");
  console.log(evt);
})

/* adding same function implementation does not mean pointing to same function  
  btn4.removeEventListener("click", () => {
  console.log("button 4 was clicked");
}) */

btn4.removeEventListener("click", handler);

//creating a toggle button that changes screen to dark-mode & light-mode

//method1
let modeButton = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light";
modeButton.addEventListener("click", () => {
  if(currMode == "Light"){ 
    currMode = "Dark";
    body.style.backgroundColor = "aqua";
  }
  else{
    currMode = "Light";
    body.style.backgroundColor = "white";
  } 
  console.log(currMode);
})

//method2
let modeButton2 = document.querySelector("#mode2");
let currMode2 = "Light";
modeButton2.addEventListener("click", () => {
  if(currMode2 == "Light"){ 
    currMode2 = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }

  else{
    currMode2 = "Light";
    body.classList.add("light");
    body.classList.remove("dark");
  } 
  console.log(currMode2);
})