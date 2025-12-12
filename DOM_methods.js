// DOM METHODS

// GET ELEMENT BY ID
// Selects an element by its ID and returns a reference to it
const headerElement = document.getElementById('header');
headerElement.style.color = 'blue'; // Changes the text color to blue

// GET ELEMENT BY CLASS NAME
// Selects all elements with the same Class and returns a reference to it as an array
const notes = document.getElementsByClassName('note');
for (let i = 0; i < notes.length; i++) {
    notes[i].style.fontWeight = 'bold'; // Makes the text bold
}

// GET ELEMENT BY TAG
// Selects all elements with the same tag and returns a reference to it as an array
const listItems = document.getElementsByTagName('li');
for (let item of listItems) {
    item.style.listStyleType = 'square'; // Changes bullet points to squares
}

// GET ELEMENT BY QUERY SELECTOR
// Selects an element based on a CSS selector and returns a reference to the first element of it
const firstParagraph = document.querySelector('.container p');
firstParagraph.style.color = 'green'; // Changes the text color to green\

// GET ELEMENT BY QUERY SELECTOR ALL
// Selects all elements based on a CSS selector and returns a reference to them as an array
const paragraphs = document.querySelectorAll('.container2 p');
for (let paragraph of paragraphs) {
    paragraph.style.fontSize = '20px'; // Changes the font size of all paragraphs to 20px
}