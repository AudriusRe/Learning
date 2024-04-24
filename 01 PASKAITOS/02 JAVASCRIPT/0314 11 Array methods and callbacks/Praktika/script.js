////CALLBACKS METODAY
//VIDUTINE1

const alertName = (name) => alert(name);
const consoleName = (name) => console.log(name);

function coreFunction(name, callback) {
  const capitalizedName = name[0].toUpperCase() + name.slice(1, name.length);
  callback(capitalizedName);
}

coreFunction("audrius", consoleName);
coreFunction("zigmas", alertName);

//FAIL, PARODE MARIUS PER SEKANCIA PASKAITA
////ARRAY METODAI
//LENGVAS1
//naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę).
const cars = ["BMW", "VW", "Audi"];

cars.forEach((marke) => {
  console.log(marke);
});
//DONE
console.log("--*****---******");
//LENGVAS2
//Pakoreguokite pirmą pratimą, kad atspausdintumėte index: value (pvz: 0: BMW, 1: VW ir t.t.).
const cars2 = ["BMW", "VW", "Audi"];

cars2.forEach((marke) => {
  console.log(cars2.indexOf(marke) + ": " + marke);
});
//DONE
console.log("--*****---******");
//VIDUTINIS1

const names = ["peTras", "Jonas", "aNTanaS"];

// const fixedNames = names.map((name) => {
//   const capitalizedName =
//     name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
//   return capitalizedName;
// });
///SUTRUMPINTAS VARIANT
const fixedNames = names.map(
  (name) => name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()
);

console.log(fixedNames);

//FAIL, PARODE MARIUS PER SEKANCIA PASKAITA, O AS KAZKODEL JA PRALEIDAU PER PRAKTIKA IR NEPAMACIAU KAD TOKIA YRA

console.log("--*****---******");
//LENGVAS1
//Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

const amziai = [2, 10, 36, 37];
const astuoniolika = amziai.filter((metai) => metai >= 18);
console.log(astuoniolika);
//DONE
console.log("--*****---******");
//LENGVAS2
//Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const miestai = ["Vilnius", "Marijampole", "Pabrade", "Kaimas"];
const kRaide = miestai.find((k) => k[0] == "K");
console.log(kRaide);
//DONE
console.log("--*****---******");
//VIDUTINIS1
//Penktame pratime esantį sprendimą pakoreguokite ir patikrinkite su some ar bent vienas miestas prasideda iš mažosios.

const mazoji = miestai.some((m) => m[0] === m[0].toLowerCase());
console.log(mazoji);
//DONE
console.log("--*****---******");
//VIDUTINIS2
// Pakoreguokite šeštą pratimą, kad patikrintų ar visi miestai prasideda iš didžiosios raidės.

const didzioji = miestai.every((d) => d[0] === d[0].toUpperCase());
console.log(didzioji);
//DONE
