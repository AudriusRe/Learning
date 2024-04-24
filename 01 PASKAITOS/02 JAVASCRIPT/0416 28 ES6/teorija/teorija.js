/////////////////////////////////////////////////////////
/////////////// IMPORTAVIMAS IS KITU FAILU //////////////
/////////////////////////////////////////////////////////

/////KAD IMPORTUOTUME KAZKOKIA FUNKCIJA AR KINTAMAJI IS KITO JS FAILO PRADZIOJ RASOME IMPORT
//RIESTINIUOSE SKLIAUSTUOSE NURODAU KA NORIU IMPORTUOTI
//TADA FROM
//GALIAUSIAI NURODAU FAILA IS KURIO NORIU IMPORTUOTI
import defaultStuff, {
  divideNumbers,
  PI as pervadintaPI,
} from "./utility/mathFunctions.js";
//TAIP PAT PAVYZDYS KAIP PERVADINTI

//CIA PAVYZDYS KAIP IMPORTUOTI DEFAULT EXPORTINAMA DALYKA IS MATHFUNCTIONS.JS FAILO. TAIP JAM DUODAM IR PAVADINIMA, NES ORIGINALIAM FAILE JIS NETURI PAVADINIMO
import defaultValueFromMathFunctions from "./utility/mathFunctions.js";

//VISKA SUSIIMPORTUOTI IR KAZKOKIO FAILO GALIMA TAIP
import * as mathStuff from "./utility/mathFunctions.js";
console.log(mathStuff.default);

///////////////////////////////////////////////

console.log(divideNumbers(100, 2));

console.log(pervadintaPI);
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////
function sayName(name = "Alfonsas") {
  //jei vardas nenurodytas, tai rodys defaultine reiksme (Alfonsas)
  console.log(`My name is ${name}`);
}

sayName("Audrius"); //CIA NURODAU REIKSME, TODEL JA IR RODO
sayName(); //CIA NENURODAU, TODEL LOGINA ALFONSA

//////////////////////////////

function addTwoNumbers(a, b) {
  return a + b;
}

const someString = `dvieju skaiciu suma yra: ${addTwoNumbers(1, 2)}`; //SU BACKTICK GALIMA PRIDETI IVAIRIU DALYKELIU I STRINGA

console.log(someString);

//////////////////////////////

const longString = `asdasdasdasdasdasd
fhgfghfghfghfghfghfgh
jkljkljkljkljkljkljkljk
qweqweqweqweeqeqwe`;

console.log(longString);

//////////////////////////////

const arr1 = [666, 333, 999];

const arr2 = [8, 7, ...arr1];

console.log(arr2);

///////////////////////////////

const arr1Copy = [...arr1]; //TAIP GALIM PAKOPIJUOTI ARRAY
console.log(arr1Copy); //CIA ISSIKONSOLINAM KOPIJA

////------------

function addAllNumbers(x, ...argumentai) {
  return argumentai.reduce((prev, current) => prev + current);
  console.log(argumentai);
}

console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)); // VIENETO NESUMUOJA, NES JIS YRA X, O LIKUSIUS SKAICIUS SUSUMAVO

const obj1 = {
  name: "Vardenis",
  age: 37,
};
const obj2 = {
  adress: "Adresiukas",
  ...obj1,
};
console.log(obj2);

////////////////////////////////

const person = {
  name: "Zigizmundas",
  lastName: "Pavardenis",
  age: 99,
};

const { name, age } = person; //sukuria naujus kintamuosius name ir age
//ta pati galima parasyti ir taip
//const name = person.name;
//const age = person.age;
const { name: personsName, age: personsAge } = person; // cia galima taip pervadinti kintamuosius, jei kazkur kartojasi ju pavadinimai

console.log(name, age);
console.log(personsName, personsAge);

const arr3 = ["labuksas", "katukavakare", "galtakego", 666];

////

const value1 = arr3[0];
const value2 = arr3[1];

console.log(value1, value2); //galim taip issikonsolint pirma ir antra array reiksmes

const [pirmas, antras, trecias] = arr3;
console.log(pirmas, antras, trecias); //bet galima ir
////
/////////////////////////////// ARROW FUNKCIJOS
//PAPRASTA FUNKCIJA
function multiplyTwoNumbers(x, y) {
  return x * y;
}
//ARROW FUNKCIJA
const multiplyTwoNumbersArrow = (x, y) => {
  return x * y;
};
//SUTRUMPINTA ARROW FUNKCIJA
const multiplyTwoNumbersArrowShorter = (x, y) => x * y;

//SKIRTUMAI OBJEKTUOSE
const someObj = {
  fn1: () => console.log(this),
  fn2: function () {
    console.log(this);
  },
};

someObj.fn1(); //arrow funkcija is objekto neiskonsolina "this"
someObj.fn2(); //paprasta funkcija iskonsolina
