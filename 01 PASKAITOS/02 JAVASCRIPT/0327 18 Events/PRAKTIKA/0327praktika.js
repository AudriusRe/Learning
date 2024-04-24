// Jūsų vardas
// LENGVAS
//  Padarykite, kad paspaudus ant mygtuko išoktų alert su jūsų vardu! (naudoti inline metoda: onclick="")

//DONE
///////////////////

// Papildymas
// LENGVAS
// Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį 😊 ).

const antras = document.querySelector("#antras");
antras.addEventListener("click", (e) => {
  alert("Audrius");
});

//DONE
///////////////////////

// Apie mane
// LENGVAS
// Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.

const trecias = document.querySelector("#trecias");
const pone = document.querySelector("#pOne");

trecias.addEventListener("click", (event) => {
  pone.textContent = "Mano vardas Audrius. Man sunkiai sekasi programuoti";
});

//DONE

// +1
// VIDUTINIS
// Sukurkite programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja +1.

const counteris = document.querySelector("#prieKetvirto");
const ketvirtas = document.querySelector("#ketvirtas");

ketvirtas.addEventListener("click", () => {
  counteris.textContent = +counteris.textContent + 1;
});

//DONE

// Kopijuoti negalima
// VIDUTINIS
// Sukurkite programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą – išmeta, kad negalima kopijuoti.

const slaptas = document.querySelector("#pTwo");

slaptas.addEventListener("copy", () => {
  alert("NEKOPIJUOK TEKSTO");
});

//DONE

// Random
// VIDUTINIS
// Sukurkite programą, kur paspaudus ant mygtuko – sugeneruoja random skaičių nuo 1 iki 100 ir jį išveda kaip h1 tekstą.

const penktas = document.querySelector("#penktas");
const hasas = document.querySelector("#priePenkto");

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

penktas.addEventListener("click", () => {
  hasas.textContent = getRandomInteger(1, 100);
});

//DONE

// N-18
// VIDUTINIS
// Sukurkite programą, kurioje du mygtukai – Turiu bent 18 metų ir Mažiau nei 18 metų. Jei paspaudžia ant pirmo mygtuko – išmeta h1 tekstą Alus. Jei antrą paspaudžia – išmeta alert su nepilnametis - nieko neturim.

const pilnametis = document.querySelector("#pilnametis");
const nepilnametis = document.querySelector("#nepilnametis");
const atsakymas = document.querySelector("#atsakymas");

pilnametis.addEventListener("click", () => {
  atsakymas.textContent = "Alus";
});

nepilnametis.addEventListener("click", () => {
  atsakymas.textContent = "Nepilnametis - nieko neturim";
});

//DONE

// Yay or Nay
// VIDUTINIS
// Sukurkite programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole’inkite). Ekrane – trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja – iššoka alert("Yay"), jei ne – alert("Nay").

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const skaicius = getRandomInteger(1, 3);
console.log(skaicius);

const vienas = document.querySelector("#gameOne");
const du = document.querySelector("#gameTwo");
const trys = document.querySelector("#gameThree");

vienas.addEventListener("click", () => {
  if (+vienas.textContent === skaicius) {
    alert("Yay");
  } else {
    alert("Nay");
  }
});

du.addEventListener("click", () => {
  if (+du.textContent === skaicius) {
    alert("Yay");
  } else {
    alert("Nay");
  }
});

trys.addEventListener("click", () => {
  if (+trys.textContent === skaicius) {
    alert("Yay");
  } else {
    alert("Nay");
  }
});

//DONE
//Blogas vartotojas
// VIDUTINIS
// Parašykite programą, kurioje būtų tekstas Nespauskite mygtuko. Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į Neklausote manęs.

const nespa = document.querySelector("#nespauskVienas");
