// 3 building blocks of web dev : html + css + js
/* 'Window' Object : represents an open window in a browser. It's a browser's object(not js) & 
is automatically crreated by browser. It is global object with lots of properties & methods.
*/

/* when a web page is loaded, the browser creates a dom of pg.
dom allows to access html using js 
console.log() : print
console.dir() : print document/special objects'aa gy properties/methods

    window -> object
      |
   Document -> sub-object in window object
      |
     HTML
   /      \ 
head      body
  |      /    \
-meta   div   script
-meta    |
-title  -img
-link   -h1
        -p
        -div
 */

console.log(window);
console.log(document.body);
// console.dir(document.body)
// console.dir(window.document);

//**DOM manipulation**
//selecting with id : document.getElementById("id_name");
let id = document.getElementById("heading1");
console.dir(id);
console.log(id);

//selecting with class : document.getElementsByClassName("class_name");
let class1 = document.getElementsByClassName("heading");
console.dir(class1);
console.log(class1);

//selecting with tag : document.getElementsByTagName("tag_name");
let tag = document.getElementsByTagName("p");
console.log(tag);

/* Query Selector : 
  document.querySelector("myid/myclass/tag");     -> returns first element
  document.querySelectorAll("myid/myclass/tag");  -> returns an array/list of Nodes
 */
let firstelement = document.querySelector("p"); ;
console.dir(firstelement);

let elements = document.querySelectorAll("p");
console.dir(elements);

/* Properties
  tagName : returns tag for element nodes
  innerText : returns text content of element and all its children
  innerHTML : returns plain text or HTML contents in element
  textContent : returns textual content even for hidden elements
*/
