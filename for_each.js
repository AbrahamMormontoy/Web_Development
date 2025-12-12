
const arrayNames = ["Mike", "Alex", "Asya"];
// Normal indexing
console.log(arrayNames[0]);
console.log(arrayNames[1]);
console.log("");

// For each
arrayNames.forEach(function(element) {
    console.log(element);
});
console.log("");

// SYNTAX: forEach(callback, thisArg);

const arrayFruit = ["pineapples", "oranges", "apples"];
arrayFruit.forEach(function(value) {
    console.log("Today I ate " + value);
});

console.log("");

//const arrayFruit = ["pineapples", "oranges", "apples"];
function showText(value) {
    console.log("Today I eat " + value);
}
arrayFruit.forEach(showText);

console.log("");

//const arrayFruit = ["pineapples", "oranges", "apples"];
function showItem(item, index, array) {
    console.log("My value is " + item + ". I’m the " + index + " element of array " + array);
}
arrayFruit.forEach(showItem);

console.log("");

const customThis = { value: 10 };
function showThisValue() {
    console.log(this.value);
}

arrayFruit.forEach(showThisValue, customThis);