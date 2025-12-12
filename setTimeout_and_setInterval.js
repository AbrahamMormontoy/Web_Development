// SET TIMEOUT
function welcome(name) {
    console.log(name + ", welcome to our website! You have a special discount today!");
}
// Waits 5 seconds before executing the function
// First parameter is the function to execute, second parameter is the delay and
// third parameter is the argument

// print this third
let userWelcomeMessage = setTimeout(welcome, 5000, "Mary");

function welcome_no_delay() {
    console.log("Welcome to our website!");
}

// Prints this second but if there is no other function to execute, it will execute this one
setTimeout(welcome_no_delay, 0)

// Prints this first
console.log("2nd of May");

// SET INTERVAL

// Prints every 3 seconds
function alarm(time) {
    console.log("Wake up! It’s " + time + " o'clock!");
}
// First parameter is the function to execute, second parameter is the delay, third parameter is the argument
setInterval(alarm, 3000, 8);

