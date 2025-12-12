
// Mark a function with async to make it return a Promise implicitly.
// await can only be used inside async functions
async function greet() {
    return "Hello, Async!";
}
console.log(greet()); // Promise { "Hello, Async!" }

// .then() receives the resolved value. Errors inside greet would be caught by .catch().
greet().then(value => console.log(value)).catch(err => console.error(err));

// Use await before a Promise to pause execution until it resolves and return the resolved value
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json(); // This will wait until the response is received
    return data;
}
fetchPosts().then(data => console.log(data)) // This will print the array of posts})
    .catch(err => console.error(err));

// Use try { await ... } catch (err) { ... } inside async functions for error handling —
// clearer than .then/.catch chains.
async function findUser(id) {
    try {
        const res = await fetch(`https://api.example.com/users/${id}`); // Wait for response
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }
        const user = await res.json();
        return user;
    } catch (err) {
        console.error("Failed to fetch user:", err.message);
        throw err; // rethrow if caller should handle it
    } finally {
        console.log("Request finished (success or failure)");
    }
}

async function main() {
    try {
        const posts = await fetchPosts();
        console.log(posts.length);
    } catch (err) {
        console.error("Error in main:", err);
    }
}
main(); // run the async main

// IF YOU DONT UNDERSTAND, THIS TWO ARE EQUIVALENT BUT ASYNC AWAIT IS BETTER
// BOTH WAIT FOR EACH REQUEST TO FINISH AND HANDLE ERRORS
async function loadData() {
    try {
        const tokenRes = await fetch("/token");
        const token = await tokenRes.json();
        const dataRes = await fetch("/data", { headers: { Authorization: token.token } });
        const data = await dataRes.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}

fetch("/token")
    .then(r => r.json())
    .then(t => fetch("/data", { headers: { Authorization: t.token } }))
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(e => console.error(e));