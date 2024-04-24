// ///////////// KINO TEATRAS
// VIDUTINIS
// Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente.
// Bilietų kainos:
// Standartinis bilietas 6 eur
// iki 16 metų – 50% nuolaida
// 1/3 nuolaida vyresniems nei 60 metų
// Kintamieji turi būti aprašyti viršuje, kad būtų lengva keisti.

const cinemaForm = document.querySelector("#cinemaForm");
const ageInput = document.querySelector("#ageInput");
const priceOutput = document.querySelector("#priceOutput");

const standardPrice = 6;
const halfPrice = 3;
const thirdPrice = 4;

const bottomAge = 16;
const topAge = 60;

ageInput.addEventListener("input", (e) => {
  const age = e.target.value;
  if (age < bottomAge) {
    priceOutput.textContent = halfPrice;
  } else if (age > topAge) {
    priceOutput.textContent = thirdPrice;
  } else {
    priceOutput.textContent = standardPrice;
  }
});

// //////////////////// ŠAUKTINIAI
// VIDUTINIS
// Kai kuriose šalyse reikia atlikti privalomąją karinę tarnybą, jei esate tarp 18 ir 30 metų, ir, jei neturite kriminalinio įrašo. Sukurkite programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į atlikti tarnybą ar ne (h1 elemente).

const milAge = document.querySelector("#militantAgeInput");
const criminal = document.querySelector("#criminalRadio");
const answer = document.querySelector("#militaryAnswer");

const minAge = 17;
const maxAge = 31;

milAge.addEventListener("input", (e) => {
  const age = e.target.value;
  const crimChecked = criminal.checked;
  if (age > minAge && age < maxAge && crimChecked == false) {
    answer.textContent = "eisi kariaut";
  } else {
    answer.textContent = "neisi kariaut";
  }
});

//REIKIA PASIDARYTI DU RADIO BUTTONUS ARBA CHECKBOXA
//REIKIA RADIO BUTTONUI PASIDARYTI ATSKIRA EVENTLISTENERI KUR JIS ZIURI AR CHECKED AR NE IR PAGAL TAI ITAKOJA ATSAKYMA
