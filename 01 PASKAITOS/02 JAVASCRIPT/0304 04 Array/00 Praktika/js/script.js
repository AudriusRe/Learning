// LENGVAS1 - DONE, OK SUPER NICE GJ
console.log("LENGVAS 1");
const arr1 = [2, 3, 4];

arr1.unshift(1);

console.log(arr1);
console.log("***********************");
// VIDUTINIS1 - su chat GPT pagalba atradau SET(). Bet original sprendimas sudetingesnis
console.log("VIDUTINIS 1");
const arr2 = [1, 2, 2, 3, 3, 3, 4];

const uniqueArr2 = [...new Set(arr2)];
console.log(uniqueArr2.length);

console.log("ORIGINAL SPRENDIMAS");

const arr = [1, 2, 2, 3, 3, 3, 4];

const uniqueElements = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueElements.includes(arr[i])) {
    uniqueElements.push(arr[i]);
  }
}

console.log(uniqueElements.length);
// VIDUTINIS2 - nukopijuota pagal pavyzdi per paskaita
console.log("VIDUTINIS 2");
const arr3 = [-3, 1, -2, 4, -5, 6];

const positiveArray = [];
for (let index = 0; index < arr3.length; index++) {
  // testArray3[index] - paima atskira reiksme kiekviena karta vykdant for cikla is arr3
  if (arr3[index] >= 0) {
    // positiveArray.push prie rezultato array gale prideda katik ife patikrinta reiksme
    positiveArray.push(arr3[index]);
  }
}
console.log(positiveArray);
console.log("***********************");
// VIDUTINIS 3 - pradžioj gera mintis buvo su indexOf, bet paskui nugrybavau į kažkokį LENGVAS1 kodo dalies pritaikymą šiai užduočiai ir nieko nesigavo
console.log("VIDUTINIS 3");
const arr4 = [1, 2, 3, 4, 3, 5];
const element = 3;

const repeat = arr4.indexOf(element) !== arr4.lastIndexOf(element);
console.log(repeat);

console.log("***********************");
// SUNKUS 1 - FAIL
console.log("SUNKUS 1");
//mintis tokia, kad:
// 1. kodas istraukia skaiciu is array
// 2. patikrina ar skaicius % 2 (ar dalinant is 2 lieka liekana) = 0
// 3.1 jei nera liekanos tai ta skaiciu padalina is 2 ir ideda i nauja array
// 3.2 jei liekana yra, tai ta skaiciu padaugina is 3 ir ideda i nauja array

const arr5 = [1, 2, 3, 4, 5];

const newArr5 = [];
for (let index = 0; index < arr4.length; index++) {
  // iki cia teisingai LOL
  if (arr5[index] % 2 === 0) {
    newArr5.push(arr5[index] / 2);
  } else {
    newArr5.push(arr5[index] * 3);
  }
}

console.log(newArr5);

// mintys teisingos bet kaip padaryt nesupratau, tiksliau buciau pisesis kazkaip sudetingiau bandes daryt
