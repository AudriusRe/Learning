/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const input = document.querySelector("#search");
const button = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  event.preventDefault();
  const kilogram = +input.value;
  const pound = kilogram * 2.2046;
  const gram = kilogram / 0.001;
  const ounce = kilogram * 35.274;

  output.textContent =
    "I've calculated, that " +
    kilogram +
    " kilograms equals to: " +
    pound +
    " pounds, " +
    gram +
    " grams, and " +
    ounce +
    " ounces.";
});
