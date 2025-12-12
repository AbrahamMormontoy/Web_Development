// USE ASYNC/AWAIT PLEASE



// Creates a Promise that resolves with a reminder if the current date is before examDate, otherwise rejects with an error message.
const examDate = new Date(2020, 7, 5);
const promise = new Promise(function(resolve, reject) {
    const currentDate = new Date(2020, 6, 5); // current date
    if (currentDate < examDate) {
        resolve("You should prepare for the exam");
    } else {
        reject("Oops! You have missed your exam!");
    }
});

// First callback handles success, second handles failure. Each returns a value that becomes the resolution for the Promise returned by .then.
// Use of then
promise.then(
    function successStatus(response) {
        console.log(response);
        return response;
    },
    function failStatus(error) {
        console.log(error);
        return error;
    }
);

Promise.resolve(2)
    .then(x => x * 3)             // returns 6
    .then(y => `Result: ${y}`)    // returns "Result: 6"
    .then(console.log);           // logs "Result: 6"

// Use of catch
//.catch(onRejected) registers a rejection handler for the chain.
// Equivalent to .then(null, onRejected) but it captures errors thrown anywhere earlier in the chain.
// Use .catch to centralize error handling for a sequence of asynchronous steps.
promise.catch(function failStatus(error) {
    console.log(error);
    return error;
});
// Example of correct implementation of then and catch
// Catch handles any previus errors
promise
    .then(function successStatus(response) {
        console.log(response);
        return response;
    })
    .catch(function failStatus(error) {
        console.log(error);
        return error;
    });

// Finally
// .finally(onFinally) runs after the promise settles (fulfilled or rejected).
// The onFinally callback receives no arguments and should be used for cleanup tasks (e.g., hide spinner).
// The original resolved value or rejection reason is forwarded to the next handler unless finally throws or returns a rejected Promise.

promise
    .then(response => { console.log(response); return response; })
    .catch(error => { console.log(error); return error; })
    .finally(() => { console.log("The loader has stopped"); });

Promise.resolve("ok")
    .finally(() => { throw new Error("boom"); })
    .then(v => console.log("won't run"))
    .catch(e => console.error("caught:", e.message)); // "caught: boom"