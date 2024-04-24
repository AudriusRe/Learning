let x = 1;
x = -x;
console.log(x);

let y = 1,
  z = 5;
console.log(z - y); //paprasta aritmetika

console.log(5 % 2); //cia tie % reiskia likuti, t.y. penketa su daro du dvejetai ir lieka vienetas

console.log(10 % 6); //cia tas pats, desimtyje yra vienas sesetas ir lieka ketvertas

console.log(10 % 1);
console.log(9 % 3);

console.log(2 ** 2); // cia dvi zvaigzdutes reiskia pakelima laipsniu, siuo atveju kvadratu

console.log(10 ** 3); //cia desimt pakeltas kubu

console.log(2 ** 6); // ir taip toliau

let s = "mano" + "stringas";
console.log(s); //kai salia dvejetainio pliuso nera skaiciu, tai pliusas sujungia stringus

let apples = "2";
let oranges = "3";
console.log(apples + oranges); //kadangi skaiciai yra kabutese, jie yra ne skaiciai o stringai. del to pliuso zenklas juos sujungia kaip stringus

//jei vis tik norim stringus konvertuoti i skaicius, darom taip

console.log(+apples + +oranges); //tie pliusai pries stringus yra vadinami unariniais pliusais. jie konvertuoja stringa i skaiciu

let counter = 2;
counter++; // prideda prie skaiciau +1. naudojama tik kintamiesiems, neina skaicicams
console.log(counter);

let counter2 = 10;
--counter2; //atima is skaiciaus -1. naudojama tik kintamiesiems, neina skaiciams
console.log(counter2);

//////////////uzduotys///////////////
//lengvas1
let a = 10;
let b = 9;
const sum = a + b;
console.log(sum);

//lengvas2
let year = 2024; //cia buvau susipises parases let year = 2024 - 38 :(
year -= 38; //sito neparasiau
console.log(year);

//lengvas3
const name = "audrius";
const lastname = "remeikis";
const fullname = name + lastname;
console.log(fullname);

//vidutinis
let celsius = 36;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit); //legit konversija is celsijaus i farenheita :O

//sunkus
let balance = 999.99;
console.log(balance);
const percent = (balance / 100) * 9;
const balanceWithPercent = balance + percent;
const roundbwpwp = balanceWithPercent.toFixed(2);
console.log(roundbwpwp);
const bwpWithFactor = balanceWithPercent * 2;
let roundbwpwf = bwpWithFactor.toFixed(2);
console.log(roundbwpwf);
const minus = 50;
const bwpwfWithMinus = bwpWithFactor - minus;
const roundbwpwfwm = bwpwfWithMinus.toFixed(2);
console.log(roundbwpwfwm);

//palyginimai
console.log(2 > 1); //aisku
console.log(2 == 1); //ar lygu
console.log(2 != 1); //ar nelygu

let result1 = 5 > 4;
console.log(result1);

//palyginimai skirtingiems tipams (string ir number)
console.log("2" > 1);
console.log("01" == 1);
//booleane true=1, false=0
console.log(true == 1);
console.log(false == 0);

//grieztas lygybes === ir nelygybes !=== palyginimas
console.log(0 === "0");
console.log(1 === false);
console.log(1 === true);
console.log(1 === 1);
console.log(1 !== 0);
console.log(1 !== true);
console.log(1 !== 1);

////////uzduotys lygybe/////////
//lengvas1
const txt1 = "labukas ka tu";
const txt2 = "labukas ka tu";
console.log(txt1 === txt2);
const txt3 = "labukas ka tu";
const txt4 = "nelabukas ka tu";
console.log(txt3 === txt4);
//lengvas2
const number = 10;
const text = "10";
const equal = number === text;
const notequal = number !== text;
const equal2 = number !== +text;
console.log(equal);
console.log(notequal);
console.log(equal2);
//vidutinis1
const currentBalance = 50;
const transaction1 = -50;

const sum1 = currentBalance + transaction1; //prie 50 pridedu -50
const sum1c1 = sum1 < 0; // pacekinu ar maziau nei nulis (jei maziau nei nulis tai true, jei nulis ar daugiau tai false)
// const sum1c2 = sum1 === 0;
console.log(sum1c1 === false); //parodau ar atlikus veiksma ir pacekinus gaunasi lygu false ar true (jei gaunasi false tai transakcija OK atsakymas true)

//blet kokia nesamone, tikrai netaip reikia daryt

// console.log(sum1c2 === true);
// console.log(sum1c1 == true && (sum1c2 == true) == true);

const transaction2 = 50;
const sum2 = currentBalance + transaction2; //prie 50 pridedu 50
const sum2c1 = sum2 < 0; //pacekinu ar maziau nei nulis
console.log(sum2c1 === false); //jei false tai ciki piki

const transaction3 = -51;
const sum3 = currentBalance + transaction3; //prie 50 pridedu -51, gaunasi -1
const sum3c1 = sum3 < 0; //pacekinu ar suma maziau nei nulis
console.log(sum3c1 === false); //gaunu true, kas yra false

const transaction4 = 51;
const sum4 = currentBalance + transaction4;
const sum4c1 = sum4 < 0;
console.log(sum4c1 === false);

//sunku1
const q = 10;
const w = 5;
const dal = q % w;
console.log(dal === 0);
