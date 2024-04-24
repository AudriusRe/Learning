/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const outputDiv = document.querySelector("#output");
const showPostsButton = document.querySelector("#btn");

async function getUsers() {
  const response = await fetch(ENDPOINT);
  console.log(response);
  const posts = await response.json();
  console.log(posts);
  return posts;
}
getUsers();
function hideMessage() {
  const message = document.querySelector("#message");
  message.textContent = "";
}

async function displayUsers() {
  const posts = await getUsers();

  posts.forEach((user) => {
    const article = document.createElement("article");
    const loginName = document.createElement("h3");
    loginName.textContent = "Login: " + `${user.login}`;
    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    article.append(loginName, avatar);
    outputDiv.append(article);
  });
}

function handleClick() {
  displayUsers();
  hideMessage();
}

showPostsButton.addEventListener("click", handleClick);
