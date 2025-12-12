// ADVANCED DOM METHODS

// NODE INSERTION METHODS
// Get the reference of the element by the ID
// before(), prepend(), append(), after() can add several elements or text nodes at once.
let list = document.getElementById("list");

// before(): adds a node right before the element.
let startNode = document.createElement("p");
startNode.textContent = "The start";
list.before(startNode); // adds startNode right before the list

// prepend(): adds a node as the first child of the element.
let firstNode = document.createElement("li");
firstNode.textContent = "The first node";
list.prepend(firstNode); // adds firstNode as the first child of the list

// append(): adds a node as the last child of the element.
let lastNode = document.createElement("li");
lastNode.textContent = "The last node";
list.append(lastNode); // adds lastNode as the last child of the list

// after(): adds a node right after the element.
let endNode = document.createElement("p");
endNode.textContent = "The end";
list.after(endNode); // adds endNode right after the list

//-------------------------------------------------------------------------------
// INSERT ADJACENT HTML
let list2 = document.getElementById("list2");

// adds HTML right before the list
list2.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");

// adds HTML as the first child of the list
list2.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>");

// adds HTML as the last child of the list
list2.insertAdjacentHTML("beforeend", "<li>beforeend</li>");

// adds HTML right after the list
list2.insertAdjacentHTML("afterend", "<p>afterend</p>");
// ---------------------------------------------------------------------------

// REPLACE WITH NEW ELEMENT
let newHeader = document.createElement("h2");
newHeader.textContent = "A new header!";
let header = document.getElementById("header");
header.replaceWith(newHeader); // replaces the header with a new element

let container = document.getElementById("container");
console.log(container); // <div id='container'><h2>A new header!</h2></div>
//---------------------------------------------------------------------------

// CLONE NODE
let list3 = document.getElementById("list3");
let item = document.getElementById("item");
let newItem = item.cloneNode(true); // clones the item (including the inner text node)
list3.append(newItem); // appends newItem to the list

console.log(list3); // <ul id="list"><li id="item">Clone me</li><li id="item">Clone me</li></ul>