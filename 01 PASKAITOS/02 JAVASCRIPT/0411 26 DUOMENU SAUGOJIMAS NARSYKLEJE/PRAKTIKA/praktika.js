// Pranešimo išsaugojimas
// LENGVAS
// Parašykite funkciją setNotification, kuri priima tekstą ir išsaugo jį į Local Storage naudojant raktą "notification".
// Naudojimas:
// setNotification("Labas pasauli!");

function setNotification(value) {
  localStorage.setItem("notification", value);
}

// setNotification("Labas pasauli"); uzkomentuoju kad neirasinetu
//////////DONE

// Pranešimo atvaizdavimas
// LENGVAS
// Sukurkite funkciją getNotification, kuri grąžina pranešimą išsaugotą Local Storage naudojant raktą "notification". Gautą pranešimą atvaizduokite vartotojui, pvz. naudojant alert().

function getNotification() {
  alert(localStorage.getItem("notification"));
}

// getNotification(); uzkomentuoju kad nemetytu alerto
/////// DONE

// ToDos puslapis
// SUDĖTINGAS
// Sukurkite internetinį puslapį, kuriame būtų galima saugoti užduočių/darbų sąrašą. Puslapyje vartotojai galės pridėti ir pašalinti atliktas užduotus. Užduotys turėtų būti saugomos ir užkraunamos iš naršyklės.
// Funkcionalumas:
// 1. Įvedimo laukas naujoms užduotims pridėti.
// 2. Sąrašas užduočių atvaizdavimui su galimybėmis pažymėti užduotis kaip atliktas arba jas ištrinti.
// 3. Išsaugoti užduotis naršyklėje, kad jos išliktų net perkrovus puslapį.

//////// W O R K F L O W
//REIKIA LENGVO PUSLAPIUKO SU INPUTU IR MYGTUKU IRASYTI
//TAIP PAT TURI BUTI KAZKOKS KAIP UL KURIAME ATSIVAIZDUOTU KIEKVIENOJ EILUTEJ PO DARBA IR SALIA BUTU SIUKSLIADEZES IKONA DARBO ISTRYNIMUI IR CHECKBOX'AS JEI DARBAS PADARYTAS IR KAI PAZYMI REIKTU KAD PERBRAUKTU DARBA ARBA JI KAZKAIP KITAIP ISSKIRTU
//VISKAS SAUGOJAMA LOCAL STORAGE

//CIA ISTRYNIMUI
//localStorage.removeItem("labas");

//CIA PASPAUDUS MYGTUKA PRIDEDA NURODYTA KEY IR VALUE I LOCALSTORAGE.REIKIA PRITAIKYTI INPUTUI
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   localStorage.setItem("labas", "labas");
// });

//CIA ISSITRAUKIU IS LOCALSTORAGE NURODYTA KEY
// localStorage.getItem("name")
// const saveButton = document.querySelector("#toDoButton");

const list = document.querySelector("#toDoList");

const input = document.querySelector("#toDoInput");

input.addEventListener("keydown", (e) => {
  e.stopPropagation();
  if (input !== " ") {
    if (e.key === "Enter") {
      //localStorage.setItem("to do list item", e.target.value);
      const newToDo = document.createElement("li");
      newToDo.textContent = e.target.value;
      list.append(newToDo);
    }
  } else {
    const error = document.createElement("h3");
    error.textContent = "IVESK KAZKA NORMALAUS";
    const mainDiv = document.querySelector("div");
    mainDiv.append(error);
  }
});
