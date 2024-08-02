 //DOM part-2
/* Attribute (use with other html elements' attributes)
  getAttribute(attr) : to get attribute value
  setAttribute(attr, value) : to set attribute value

  Style (preferred to use when changing style of html elements)
  node.style 
*/
let div1 = document.querySelector("div");
console.log(div1);

let style1 = div1.getAttribute("style");
let id1 = div1.getAttribute("id");;
console.log(style1,"\n",id1);

div1.setAttribute("style", "color: red");
div1.setAttribute("id", "changed id");
let style2 = div1.getAttribute("style");
let id2 = div1.getAttribute("id");
console.log(style2,"\n",id2);

console.log(div1.style);         //recommended
div1.style.color = "purple";
div1.innerText = "hellloooooo";

/* Insert Elements     ->   let el = document.createElement("div");
  node.append(el) : adds at end of node(inside)
  node.prepend(el) : add at start of node(inside)
  node.before(el) : adds before the node(outside)
  node.after(el) : adds after the node(outside) 

   Delete Elements 
  node.remove(el) : removes the node

 */

let newButton = document.createElement("button");
newButton.innerText = "Click Me";

let divTag = document.querySelector("div");
// divTag.append(newButton);
// divTag.prepend(newButton);
divTag.after(newButton);


let newHeading = document.createElement("h4");
newHeading.innerHTML = "<i>So how's your day going!</i>";
document.querySelector("p").before(newHeading);
newHeading.style.color = "red";

let removePara = document.querySelector("p");
removePara.remove();

/* appendChild()
   removeChild()
 */