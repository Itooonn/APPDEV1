// callback function example
function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Itoonnn", id: 123123 });
  }, 1000);
}
 
fetchUserMock((user) => {
    console.log("This is a callback function example");
    console.log("Username:", user.name);
    console.log("Account ID:", user.id);
});

// promise example
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Itoonnn", id: 123123 }), 1000);
  });
}
 
async function showUser() {
  try {
    const user = await fetchUser();
    console.log("This is a promise example");
    console.log("Username:", user.name);
    console.log("Account ID:", user.id);
  } catch (error) {
    console.log("Failed to load user");
  }
}
 
showUser();
function getTodo(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      callback(null, data)
    })
    .catch(error => {
      callback(error, null)
    });
}

// Example of Callback with Promise
function handleTodo(error, data) {
  if (error) {
    console.error("Error fetching todo:", error);
  } else {
    console.log("Fetched todo:", data);
  }
}

// Example of Promise function
getTodo(handleTodo);
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")  // The link is an object // Fetching data from the API
    .then(response => response.json())
}

getTodo()
    .then(todo => console.log("Todo: ", todo))
    .catch(error => console.error("Something went wrong: ", error))


// Example of async/await function with promise
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // The link is an object // Fetching data from the API

  const data = await response.json();

  return data;
}

async function fetchTodo() {
  try {
    const todo = await getTodo();
    console.log("Todo: ", todo);
  } catch (error) {
    console.error("Something went wrong : ", error);
  }
}


fetchTodo(); // Call the async function to fetch the todo item

// synchronous vs asynchronous

// Objects 
let name = "Karl";
let age = 20;
let address = "123 Brgy. Iniwan St, City of San Nagkulang, Bulacan";

// This one is asynchronous, it will be executed after 2 seconds, while the rest of the code will be executed immediately
setTimeout(() => {
  console.log("This message is printed after 4 seconds");
}, 4000);

// This one is synchronous, it will be executed immediately
console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);


