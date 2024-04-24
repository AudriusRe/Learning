//FETCH NAUJONAMAS PARSISIUSTI DUOMENIS IS SERVERIU
//API = SERVERIS KURIAME KAZKOKIE DUOMENYS

const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

fetch(postsEndpoint)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data); //GAUTUS DUOMENIS GALIMA ISSIKONSOLINTI PER ANTRA THEN
  }); //FETCHAS GRAZINA PROMISE

//////////////////////////////

const showUsersButton = document.querySelector("button");
const userList = document.querySelector("ul");
////FUNKCIJA ATSAKINGA UZ USERIU PAEMIMA IS SERVERIO
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  const users = await response.json();
  console.log(users);
  return users;
}

////FUNKCIJA SKIRTA ATVAIZDUOTI USERIUS
async function displayUsers() {
  const users = await getUsers();
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} location: ${user.address.geo.lat}, ${user.address.geo.lng}`;
    userList.append(li);
  });
}

showUsersButton.addEventListener("click", displayUsers);

////////////////////////////////////////////////// H T T P   M E T O D A I //////////////////////////////////////////////////////
//HTTP
//PUT - ATNAUJINTI
//GET - PASIIMTI INFORMACIJAI
//POST - KAZKAM NAUJAM SUKURTI
//DELETE - ISTRINTI

////////////////////////////////////////

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const todosButton = document.querySelector("#todosButton");
const tableBody = document.querySelector("tbody");

async function getTodos() {
  const response = await fetch(todosUrl);
  const data = await response.json();
  return data;
}

async function addTodosToTable() {
  const todos = await getTodos();
  const todosElements = todos.map((todo) => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdIsComplete = document.createElement("td");

    tdTitle.textContent = todo.title;
    tdIsComplete.textContent = todo.completed;

    tr.append(tdTitle, tdIsComplete);

    return tr;
  });
  tableBody.append(...todosElements);
}

todosButton.addEventListener("click", addTodosToTable);
