//PASIIMU HTML ELEMENTUS I JS
const spejamasZodis = document.querySelector("#spejamasZodis");
const raidesInput = document.querySelector("#raidesInput");
const spetiButton = document.querySelector("#spetiButton");
const naujasZodisButton = document.querySelector("#naujasZodisButton");
const likeSpejimai = document.querySelector("#likeSpejimai");
const spetosRaides = document.querySelector("#spetosRaides");
const alertas = document.querySelector("#alertas");

//SUSIKURIU ARRAY SU ZODZIAIS
const zodziaiSpejimui = ["vienas", "du"]; //, "cipsai", "riesutai", "suris"

//SUSIKURIU KINTAMAJI KURIS YRA PARINKTAS ATSITIKTINIS ZODIS IS ARRAY (GALI REIKETI PAKEISTI IS CONST I LET)
let atsitiktinisZodis =
  zodziaiSpejimui[Math.floor(Math.random() * zodziaiSpejimui.length)];

//SUSIKURIU KITAMAJI KURIS YRA PASLEPTAS ZODIS (GALI REIKETI PAKEISTI IS CONST I LET)
let pasleptasZodis = "_ ".repeat(atsitiktinisZodis.length);

//SUSIKURIU MAKSIMALU KLAIDU KIEKI
let maxKlaidos = 6;

//SUSIKURIU FUNKCIJA KURI PAIMA RANDOM ZODI IS ARRAY IR JI PARODO EKRANE
function parodykNaujaZodi() {
  spejamasZodis.textContent = pasleptasZodis;
}

function patikrinkRaide(raide) {
  const raides = /^[a=zZA-Z]$/;
  if (!raide.match(raides)) {
    spetiButton.disabled = true;
  } else {
    spetiButton.disabled = false;
  }
}

function checkGuess() {
  const raide = raidesInput.value.toLowerCase();
  const pattern = /[a-z]/;
  if (!raide || raide.length !== 1 || !pattern.test(raide)) {
    //CIA PATIKRINAM AR KAZKAS IVESTA IR AR TAI NERA FALSY IVESTIS, PO TO TIKRINA AR IVESTAS VIENA RAIDE, IR TURETU TIKRINTI AR IVESTA RAIDES NUO A IKI Z
    alertas.textContent =
      "Taigi turi įrašyti tik kokią vieną raidę, o ką tu čia darai?";
    return; //JEI KAZKURI IS SALYGU ATITINKA TAI META TA ZINUTE KUR AUKSCIAU IR TOLIAU KODO NEVYKDO
  }
  if (atsitiktinisZodis.includes(raide)) {
    // CIA TIKRINA AR IVESTA RAIDE YRA SPEJAMAME ZODYJE
    for (let i = 0; i < atsitiktinisZodis.length; i++) {
      if (atsitiktinisZodis[i] === raide) {
        pasleptasZodis =
          pasleptasZodis.substring(0, i) +
          raidesInput +
          pasleptasZodis.substring(i + 1);
      }
    }
    parodykNaujaZodi();
    if (pasleptasZodis === atsitiktinisZodis) {
      alertas.textContent = "Valio! Atspėjai";
    }
  } else {
    maxKlaidos--;
    likeSpejimai.textContent = "Liko " + maxKlaidos + " spėjimai.";
    if (maxKlaidos === 0) {
      alertas.textContent =
        "Visiškas lūzeris. Kaip tu neatspėjai: " + atsitiktinisZodis;
    }
  }
}
patikrinkRaide();
spetiButton.addEventListener("click", checkGuess);
naujasZodisButton.addEventListener("click", parodykNaujaZodi);
