const fruits = [
  "Apple",
  "Orange",
  "Pear",
  "Lemon",
  "Cherry",
  "Mango",
  "Banana",
];
// // array skaičiuojama nuo nulio, siuo atveju apple - 0, orange - 1, pear - 2

const ammountOfFruit = fruits.length;
// //cia kintamasis nurodo kiek yra tu fruits

fruits[1] = "Banana";
// //galime keisti kuri nors array elementa

//////////SPLICE trina ir keicia
fruits.splice(2, 1, "Kiwi");
// // //splice pradzioj nurodai nuo kurio elemento kazka keisi, tada kiek elementu istrinsi, ir i ka nori pakeisti (arba ne pakeisti o istrinti, kaip nori)
fruits.splice(2, 2, "pirmas", "antras");

console.log(ammountOfFruit);
console.log(fruits[0]);
// // lauztiniuose skliaustuose nurodom kurio array elemento norime

console.log(fruits[ammountOfFruit - 1]);
// //cia nurodom, kad norim paskutinio array elemento, nesvarbu kokio ilgio butu array
console.log(fruits);

/////////SLICE
const cars = ["Audi", "BMW", "Volvo", "Mercedes", "Nissan", "Tesla", "Ford"];
const smallerArray = cars.slice(1, 3);
//cia is didesnio array istraukia tik elementus tarp 1 ir 3 i nauja array
//!!!PIRMAS INDEKSAS IMTINAI, ANTRAS NEIMTINAI. NURODAI NUO KURIO IKI KURIO BET PASKUTINIO NEITRAUKIA!!!

const additionalCars = smallerArray.concat(
  "Fiat",
  "Peugeot",
  666,
  true,
  cars.slice(1)
);
///cia su CONCAT galime prisideti kazkokius papildomus elementus prie pabaigos
// CONCAT nekeicia originalo

console.log(smallerArray);
console.log(cars);
//SLICE nekoreguoja originalo, jis tiesiog nukopijuoja reiksmes i nauja array, skirtingai nei SPLICE

console.log(additionalCars);
console.log(cars.length);

// elementu pridejimui naudojame PUSH()
// elementu pasalinimui naudojame POP() cia jis nuima tik paskutine reiksme, i skliaustus nieko nereikia rasyti

const array1 = [1, 2, 3, 4, 5, 6, 7];

array1.push("Prideda gale");

array1.unshift("Prideda pradzioje");
//UNSHIFT yra kaip PUSH, tik reiksme prideda pradzioje
console.log(array1);

const array2 = [666, 123, 321, 456, 987];

const lastNumberOfArray = array2.pop();
// POP nuima paskutini elementa

const firstNumberOfArray = array2.shift();
// SHIFT nuima pirma elementa

console.log(firstNumberOfArray);
console.log(lastNumberOfArray);
console.log(array2);

console.log("-------------------------------------------------------------");
//JS SPECIFIKA SU ARRAY

// const myArray = [1, 2, 3, 4, 5, 6];

// myArray[2] = "nauja reiksme";

// console.log(myArray);

// array yra konstanta (t.y. jos negalime keisti), bet su jos turiniu galime daryti ka norime su SHIFT, POP, etc.

// const myArray = [1, 2, 3, 4, 5, 6];

// const myArray2 = myArray;

// myArray2[0] = "kitkas";

// console.log(myArray);
// cia myArray2 ne kopijuoja, o issaugo adreda kuriame gyvena musu norimas keisti array (pagooglinti POINTER)
//////////////*************************************************************** */
const myArray = [1, 2, 3, 4, 5, 6];

const myArray2 = myArray;

myArray2[0] = "kitkas";

console.log(...myArray);
// spread operator - trys taskeliai (...) padaro kad array butu ne array, o atskiros reiksmes

const myArrayCopy = [...myArray];
///su ... isskleidziam nurodyto array reiksmes (rekomenduotinas budas padaryti kopija)

const myArrayCopy2 = JSON.parse(JSON.stringify(myArray));
// dar vienas budas padaryti array kopija
console.log(myArrayCopy2);
myArrayCopy[2] = "kazkoks pakeitimas";

console.log(myArrayCopy);
console.log(myArray);

///////*********************************************** */
// ISKONSOLINTI KIEKVIENA ARRAY REIKSME
const testArray1 = [true, "kazkas parasyto", 654654654, [123, 456]];

for (let index = 0; index < testArray1.length; index++) {
  console.log(testArray1[index]);
}
//////*********************************************** */
//SURASTI VISU ARRAY ELEMENTU SUMA

const testArray2 = [999, 666, 333];

let sum = 0;

for (let index = 0; index < testArray2.length; index++) {
  sum += testArray2[index];
}

console.log(sum);

//////////****************************************** */
// Isfiltruoti neigiamas reiksmes is array (originalo nepakeisti)

const testArray3 = [5, -5, 7, 0];

const positiveArray = [];
for (let index = 0; index < testArray3.length; index++) {
  // testArray3[index] - paima atskira reiksme kiekviena karta vykdant for cikla is testArray3
  if (testArray3[index] >= 0) {
    // positiveArray.push prie rezultato array gale prideda katik ife patikrinta reiksme
    positiveArray.push(testArray3[index]);
  }
}

console.log(positiveArray);

///////////////************************** */
// PARASYTI ARRAY ATVIRKSCIA SEKA

const testArray4 = [1, 2, 3];

const reversed = []; // norimas rezultatas: [3, 2, 1]

//i yra arrayaus ilgis minus vienas, kai i yra didesnis ar lygu nuliui, kiekviena karta prasukant is i atimam vieneta
for (let i = testArray4.length - 1; i >= 0; i--) {
  console.log(i);
  reversed.push(testArray4[i]);
}
console.log(reversed);

///ARBA PAPRASCIAU APACIOJ

const reversed2 = testArray4.reverse();

console.log(reversed2);
