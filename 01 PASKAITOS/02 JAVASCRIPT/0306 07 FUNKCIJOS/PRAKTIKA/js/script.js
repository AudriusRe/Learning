/// LENGVAS1 - DONE
///Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

// function sayName() {
//   console.log("Audrius");
// }
// sayName();

//****************************************** */
/// LENGVAS2 - DONE SU CHAT GPT IR W3S
/// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// function giveRandom() {
//   console.log(Math.floor(Math.random() * 5) + 1);
// }
// giveRandom();

//****************************************** */
/// VIDUTINIS1 - DONE su Mariaus ir Gpt pagalba
/// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// function sumName(vardas, pavarde) {
//   return vardas.length + pavarde.length;
// }

// console.log(sumName("Petras", "Slekys"));

//****************************************** */
//VIDUTINIS2 - FAIL
//Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.).

function showLetter(i) {
  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Z",
  ];
  return abc[i];
}

console.log(showLetter(1));

//susikuriau array, bet ne funkcijos viduje, o pries funkcija -FAIL - reikejo viduje
//masciau kazka sudetingesnio nei ***return abc[i]*** (kurio neismasciau)
//susikuriau console.log(showLetter(i)) o reikejo tiesiog skliaustuose irasyt norima skaiciu ir gauciau norima raide
// liudna

//****************************************** */
//SUNKUS1 - FAIL
//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).
// NX TIESIOG KOPIJUOJU ATSAKYMA

function calculate(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 * n2;
  }
}
console.log(calculate(1, 2, "sum"));

////////////////LIUDESYS
//SUNKUS2 - FAIL 100%
//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).
//NIEKO NAUJO, TIESIOG KOPIJUOJU ATSAKYMA

function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function squareNumber(number) {
  return Math.pow(number, 2);
}

console.log(squareNumber(generateRandomNumber()));
