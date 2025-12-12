// INNER HTML AND TEXT CONTENT ---

let container1 = document.querySelector(".container1");
container1.innerHTML = "<p>DOM is cool!</p>";


let container2 = document.querySelector(".container2");
container2.textContent = "Hello, World!";


// CREATE ELEMENT

let myElement = document.createElement("div");
// Create the text FIRST
let myText = document.createTextNode("I am learning DOM methods!");
// Then append it
myElement.appendChild(myText);
// Finally, put it on the body
document.body.appendChild(myElement);

console.log(myElement);


// LIST EXAMPLE

// Create the list container using JS instead of wiping the body
let listContainer = document.createElement("div");
listContainer.innerHTML = "<ul id='list'><li>An item</li></ul>";
document.body.appendChild(listContainer); // Add it to the bottom

let list = document.getElementById("list");
let newItem = document.createElement("li");
newItem.textContent = "A new item";
list.appendChild(newItem);

console.log(list);


// REMOVE

// Create a container for this example
let removeExample = document.createElement("div");
removeExample.innerHTML = "<div id='container'><h1 id='heading'>I like JS!</h1></div>";
document.body.appendChild(removeExample); // Add it to the bottom

let heading = document.getElementById("heading");
// The heading will appear for a millisecond and then be removed immediately
heading.remove();

console.log(document.getElementById("container"));