// funkcija kuri pati save issikviecia, vadinama SELF-INVOKING function
(function () {
  console.log("Cia yra anonimine SELF-INVOKING funkcija");
})();

//brrrrrrrrrrr

//UZDUOTIS1
// turim funkcija
function calculateSquare(num) {
  return num * num;
}

console.log(calculateSquare(8));

//anonimizuojam ja

const result = (function (num) {
  return num * num;
})(5);

console.log(result);

//DONE

/////////////ARROW FUNKCIJOS LABAI DAZNAI NAUDOJAMOS
//ARROW NETURI ARGUMENTU

//pasirasom paprasta funkcija
//DAZNAI naudojama sintakse
function add(num1, num2) {
  return num1 + num2;
}

//RETAI naudojama sintakse ANONIMINE
const addFunction = function (num1, num2) {
  return num1 + num2;
};

//ARROW funkcija DAZNAI naudojama, ji skaitosi kaip ANONIMINE funkcija tik su naujesne sintakse
const addFunctionArrowSablonas = () => {};
//CIA SABLONAS PAGAL KURI RASOSI ARROW FUNKCIJA

const addFunctionArrow = (num1, num2) => {
  return num1 + num2;
};
const res = addFunctionArrow(2, 6);
console.log(res);

//trumpene versija automatiskai returnina
//galima taip rasyt kai turim tik viena kodo eilute
const addFunctionArrowShorter = (num1, num2) => num1 + num2;

console.log(addFunctionArrowShorter(10, 2));

//VIENAS PARAMETRAS
//Jei yra vienas argumentas, skliausteliu galima ir nerasyti, bet rekomenduojama geriau parasyti skliaustelius
const powerNumber = (num) => num * num;
console.log(powerNumber(3));

//UZDUOTIS2
//paversti funkcija i arrow funkcija

// function calculateSquare(num) {
//   return num * num;
// }

// const calculateSquare = (num) => num * num;

/////PAPILDOMA UZDUOTIS IS VAKAR
//Implement a function named removeFalsyValues that takes an array and removes all falsy values (e.g., false, null, 0, "", undefined, and NaN) from it.

const testArray = [
  5,
  "kazkas parasyta",
  [666],
  NaN,
  false,
  true,
  0,
  null,
  undefined,
];
const resas = [];

const removeFalsyValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      resas.push(arr[i]);
    }
  }
  return resas;
};
console.log(removeFalsyValues(testArray));

//////////////

const someVar = ""; //i kabutes galima kazka irasyti ir duos atsakyma ar verte FALSE ar TRUE
if (someVar) {
  //falsy value skliaustu viduje konvertuojasi i false
  console.log("true");
} else {
  console.log("false");
}

/////////////.,.,.,.,.,,..,.,.,./////////
////ADVANCED JAVASCRIPT DALYKAS

const arrx = [1, 2, 3];
const arr666 = arrx;

const changeFirstArrayValue = (someArr) => {
  someArr[0] = 0;
};

changeFirstArrayValue(arrx);

console.log(arrx);

////////////////////////////////////////////
///////////   E   N     D //////////////////
////////////////////////////////////////////

// Implement a function named countVowels that takes a string parameter and returns the number of vowels (a, e, i, o, u) in the string.

const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
};

const ammountOfVowels = countVowels("labas vakaras viso gero");

console.log(ammountOfVowels);

//////////////////////
//// D O N E /////////
//////////////////////

//TOLIAU VADINAMAS STACK OVERFLOW
// const add1 = () => {
//     add1()
// }
// add()
/////// E ///// N ///// D ///////
