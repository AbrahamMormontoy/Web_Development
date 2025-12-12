//Fetch is a built-in tool in JavaScript that allows your code to talk to other computers (servers) over the internet.
// Think of your website as a house. By default, it is isolated.
// fetch is like a messenger that you can send out of the house to get things or send things.

// What it does: It simply asks the server for data.
// Analogy: Like walking into a library and asking for "the list of all members."
// Result: The server sends back a list of all users, and the function prints them out.
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Users:", data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
// Execute it
fetchUsers();

// What it does: It asks the server for specific data using filters.
// Analogy: Instead of asking for all books, you ask for "Page 3 of the Mystery section."
// Result: The server sends back only the small chunk of data you asked for
async function fetchWithParams() {
    try {
        // Build the URL object
        const url = new URL("https://jsonplaceholder.typicode.com/comments"); // Using a real API for testing
        url.searchParams.set("postId", "1");
        url.searchParams.set("_limit", "5");

        // Fetch using the string version of the URL
        const response = await fetch(url.toString());
        const data = await response.json();
        console.log("Filtered Data:", data);
    } catch (error) {
        console.error("Error with params:", error);
    }
}
fetchWithParams();

// What it does: It sends a secret "key" or "password" (the Authorization Header) along with the request.
// Analogy: Like showing a VIP badge to get into a restricted area.
// Result: The server checks your badge. If it is valid, it gives you access to private profile data. If not, it kicks you out
async function fetchWithAuth() {
    try {
        const authHeaders = new Headers();
        authHeaders.set("Authorization", "Bearer ea1359...");
        authHeaders.set("Accept", "application/json");

        // Note: This API URL is fake, so it will likely 404, but the syntax is correct
        const response = await fetch("https://api.example.com/profile", {
            headers: authHeaders
        });

        if (!response.ok) throw new Error(`Status: ${response.status}`);

        const data = await response.json();
        console.log("Profile:", data);
    } catch (error) {
        console.error("Auth Error:", error);
    }
}

//fetchWithAuth();

// What it does: Instead of asking for data, it sends data to the server to be saved.
// Analogy: Like filling out a registration form and sliding it under the door.
// Result: The server takes your JSON data, saves it into its database, and sends back a confirmation receipt.
async function createNewUser() {
    try {
        const requestBody = { name: "John", age: 16 };

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log("Created User:", data);
    } catch (error) {
        console.error("POST Error:", error);
    }
}
createNewUser();

// What it does: It verifies if the request was successful before trying to read the data.
// Analogy: Checking if the pizza box you received is actually full before you try to eat a slice.
// Result: If the server says "404 Not Found" (empty box), the code stops gracefully instead of crashing.
async function fetchAndCheckStatus() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        // 1. Log metadata details
        console.log(`Status: ${response.status}`);
        console.log(`OK? ${response.ok}`);
        console.log(`Content-Type: ${response.headers.get("content-type")}`);

        // 2. Manual Error Throwing if status is not 200-299
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Checked Data:", data);

    } catch (err) {
        console.error("Fetch failed:", err.message);
    }
}
fetchAndCheckStatus();