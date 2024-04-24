const postForm = document.querySelector("#postForm");
const tileInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");
const statusElement = document.querySelector("#statusText");
const bodyStatusElement = document.querySelector("#bodyStatus");

bodyInput.addEventListener("input", (e) => {
  const value = e.target.value;
  if (value.length < 5) {
    bodyStatusElement.textContent = "Body is too short, niga";
  } else if (value.length > 10) {
    bodyStatusElement.textContent = "body is too long";
  } else {
    bodyStatusElement.textContent = "";
  }
});

//FOCUS KAI PASIRENKAM INPUTA KAZKA JAM DARO
titleInput.addEventListener("focus", (e) => {
  e.target.style.width = "200px";
  console.log("focus eventukzas");
});
//BLUR KAI PASIRENKAM KAZKA KITA NEI TA INPUTA KAZKA JAM DARO
titleInput.addEventListener("blur", (e) => {
  e.target.style.width = "auto";
});
/////////////// BLURO PAVYZDYS
// https://codesandbox.io/p/sandbox/blur-event-9edvwu?file=%2Findex.html

postForm.addEventListener("reset", (e) => {
  e.preventDefault();
  titleInput.value = "Pavyzdinė reikšmė";
  bodyInput.value = " ";
});

postForm.addEventListener("submit", async (e) => {
  e.preventDefault(); //submit mygtuko defaultine reiksme yra perkrauti puslapi. tai cia isjungiam ta funkcija
  const titleValue = tileInput.value; //SUSIKURIAM KINTAMAJI KAD GALETUME ISSIKONSOLINT KAS TEN IRASYTA
  const bodyValue = bodyInput.value; //SUSIKURIAM KINTAMAJI KAD GALETUME ISSIKONSOLINT KAS TEN IRASYTA

  //   console.log(title, body); //ISSIKONSOLINAM KAS BUVO IRASYTA
  //   console.log("submit event");

  try {
    statusElement.textContent = "Loading...";
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: titleValue,
        body: bodyValue,
        iserId: 2,
      }),
    });
    if (response.ok) {
      statusElement.textContent = "Success";
    } else {
      status.Element.textContent = "Please try again later";
    }
    console.log(response);
  } catch (error) {
    console.log("Erroriukas kazkoks");
  }
});
