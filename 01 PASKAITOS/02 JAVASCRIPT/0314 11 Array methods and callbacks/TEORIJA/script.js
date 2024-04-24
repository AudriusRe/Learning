/////////////CALLBACKS
//labai labai daznai naudojami ypac kai siunciamos uzklausos i backend
// kai funkcijai paduodam kita funkcija kaip argumenta, tai vadinama CALLBACK
////////////////
//setTimeout uzlaiko funkcija. ja ivykdo po nurodyto laiko
console.log("CIA YRA PRIES SETTIMEOUT");
setTimeout(() => {
  console.log("CIA YRA CALLBACK FUNKCIJA");
}, 2000);
console.log("CIA YRA PO SETTIMEOUT");

function logSomething() {
  console.log("Cia yra paprasta funkcija");
}

setTimeout(logSomething, 2000); //cia kitas budas padaryti uzdelsta iskvietima

setTimeout(logSomething(), 2000); //kai uzdeti skliausteliai po funkcijos pavadinimo, ta funkcija iskvieciame iskart, neuzdelsiant
////////////////
// setInterval(() => console.log("praejo dar viena sekunde"), 1000); //setInterval pastoviai kartoja koda, pagal nurodyta laiko intervala

//////////////MASYVO METODAI /// ARRAY METHODS
//forEach()
//naudojamas vykdyti funkcija kievienam masyvo elementui
//skirtas naudoti vietoj FOR ciklo

const numbers = [1, 2, 3, 4, 5];

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

numbers.forEach((num) => {
  console.log(num * 2);
});

//////////toliau aprasyta ta pati funkcija kuri auksciau
// //start
// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }
// myForEach(numbers, (num) => {
//   console.log("vidus for each callbacko" + num);
// });
// ///end

//// toliau pavyzdys su for ciklu
//susikuriam array, norim capitalizint pirmas raides
const strings = ["labas", "krabas", "bananas"];

for (let i = 0; i < strings.length; i++) {
  let newString = strings[i][0].toUpperCase();
  newString += strings[i].slice(1, strings[i].length);
  console.log(newString);
}
// ir tas pats su .forEach()
strings.forEach((str) => {
  let newString = str[0].toUpperCase();
  newString += str.slice(1, str.length);
  console.log(newString);
});

/////////////
//map()
// tai yra kaip ir forEach ciklo pakaitalas. Jis sukuria nauja array su gautais rezultatais

// 1.num = 1 return 1 * 2 doubleNumbersArray = [2]
// 2.num = 1 return 2 * 2 doubleNumbersArray = [4]
// ir taip toliau
const doubleNumbersArray = numbers.map((num) => {
  return num * 2;
});
console.log(doubleNumbersArray);

///toliau tas pats tik be map()
const doubleNumbersArray2 = [];
for (let i = 0; i < numbers.length; i++) {
  doubleNumbersArray2.push(numbers[i] * 2);
}
console.log(doubleNumbersArray2);

//filter()
// sukuria nauja array su isfiltruotais elementu

//turim array ir norim is jo issitraukti tik tuos elementus kurie yra maziau nei penki char
const strings2 = ["vienas", "du", "trys", "keturi", "penki"];

//su for ciklu tai atrodo taip

const shortStrings = [];

for (let i = 0; i < strings2.length; i++) {
  if (strings2[i].length < 5) {
    shortStrings.push(strings2[i]);
  }
}

console.log(shortStrings);

//su filter()

const shortStrings2 = strings2.filter((str) => {
  if (str.length < 5) {
    return true;
  } else {
    return false;
  }
});
console.log(shortStrings2);

// trumpesne versija
const shortStrings3 = strings2.filter((str) => {
  return str.length < 5 ? true : false;
});
console.log(shortStrings3);

//dar trumpesne versija
const shortStrings4 = strings2.filter((str) => (str.length < 5 ? true : false));

console.log(shortStrings4);

//trumpiausia versija
const shortStrings5 = strings2.filter((str) => str.length < 5);

console.log(shortStrings5);

// //////
// ARRAY METODUS GALIMA KOMBINUOT
/////////
///pakelti visus kvadratu ir gauti nauja array su skaiciais kurie yra mazesni nei 20

const numbers3 = [2, 8, 9, 6];

const rezultatas = numbers3
  .map((skaicius) => skaicius * skaicius) //sitas pakelia skaicius kvadratu
  .filter((skaicius) => skaicius < 20); //sitas isfiltruoja skaicius kurie yra didesni uz 20 ir ju neberodo

console.log(rezultatas);

////////KADA KURI NAUDOTI????????? //////////
// forEach - naudojam kai nereikia gauti naujo array rezultato
// map - kai reikia gauti nauja array su apdirbtais elementais
// filter - kai reikia gauti nauja array su kai kuriais elementais
