////////////////////////////////////////////////////////////////////////////////////////
//////////// PPAILDOMA INFO PRIE PRAEITOS PASKAITOS, KAIP UPLOADINT DUOMENIS I DUOMBAZE
////////////////////////////////////////////////////////////////////////////////////////

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const button = document.querySelector("button");
//VERSIJA 1
// async function postData() {
//   fetch(postsUrl, {
//     method: "POST", //nurodom ka darysim - siusim info
//     headers: {
//       //headeriai skirti papildomai informacijai
//       "Content-Type": "application/json", //nurodom koks info tipas bus nusiustas
//     },
//     body: JSON.stringify({
//       title: "bele kas title",
//       body: "belekas body",
//       userId: 666,
//     }), //body yra tai ka realiai siunciame, ta info ka norime nusiusti
//   });
// }

// VERSIJA2;
async function postData() {
  const response = await fetch(postsUrl, {
    method: "POST", //nurodom ka darysim - siusim info
    headers: {
      //headeriai skirti papildomai informacijai
      "Content-Type": "application/json", //nurodom koks info tipas bus nusiustas
    },
    body: JSON.stringify({
      title: "bele kas title",
      body: "belekas body",
      userId: 666,
    }), //body yra tai ka realiai siunciame, ta info ka norime nusiusti
  });
  const data = await response.json();

  console.log(data);
} //cia issikonsolinau ka nusiunciau i servaka

button.addEventListener("click", postData);

/////////////////////////////////////////////////////////////////////
/////////////////////// USER INTERFACE EVENTS ///////////////////////
/////////////////////////////////////////////////////////////////////

const h1 = document.querySelector("h1");

h1.addEventListener("dblclick", () => console.log("buvo paspausta du kartus"));
h1.addEventListener("mousedown", (e) => {
  e.target.style.fontSize = "50px";
});
h1.addEventListener("mouseup", (e) => {
  e.target.style.fontSize = "20px";
});

// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") console.log("Enter");
// });

const input = document.querySelector("input");

//CIA PADAROM KAD ISKONSOLINTU TAI KAS BUVO IRASTYTA INPUTE PASPAUDUS ENTER
input.addEventListener("keydown", (e) => {
  e.stopPropagation(); //padaro, kad eventas nenukeliautu per visus tevinius html elementus
  if (e.key === "Enter") {
    console.log(e.target.value);
  }
});

// input.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     console.log("Enter buvo atleistas");
//   }
// });

//PADAROM KAD ATLEIDUS ENTER INPUTAS ISSIVALYTU
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.target.value = "";
  }
});
