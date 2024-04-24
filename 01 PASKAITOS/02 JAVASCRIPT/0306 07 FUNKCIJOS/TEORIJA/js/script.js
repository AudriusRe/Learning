// funkcijos skirtos atlikti tam tikra veiksma
//pradzioj apsirasom ja (sayHello) yra jos pavadinimas
function sayHello() {
  console.log("Hello World");
}
// iskvieciam funkcija
sayHello();
////DONE
const person = "Audrius Remeikis";
function saySomething(name) {
  console.log("Just sayin' something, " + name);
  console.log(name);
}

///INTARPAS
//tipo galima issikviesti funkcija, kuri yra kodo apacioje dar pries ja apsirasant. Nors koda vykdo ir is virsaus i apacia
sum(10, 20);
// INTARPO PABAIGA

saySomething("Audrius");
saySomething(person);
//DONE

/// cia IFas patikrina ar ivesti duomenys yra skaiciai ir nera falsy values (tuscia, nulis arba dar kazkas)
function sum(number1, number2) {
  if (number1 !== undefined && number2 !== undefined) {
    const result = number1 + number2;
    console.log(result);
  } else {
    console.log("Pateikti argumentai negeri");
  }
}
sum(333, 666);
sum(-666, 333);
sum(0, 0);

/// PATIUNINTAS KODAS
function sum2(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    const result = number1 + number2;
    console.log(result);
  } else {
    console.log("Pateikti argumentai negeri");
  }
}
sum2(1, 2); ///OK
sum2(1, "asd"); //IFas ismeta kad sudas ivestas

////////////ANONIMINE FUNKCIJA
///naudojama labai daznai

const manoFunkcija = function () {
  console.log("Anonimine funkcija");
};
manoFunkcija();
console.log("----******-------******-------");
////////DONE
////PASKAITOS PABAIGA
// IDOMUS DALYKELIAI APIE FUNKCIJA
/// galima su funkcija issikviesti kita funkcija
function doStuff(arg1) {
  arg1();
}

function sayBye() {
  console.log("Gudbai");
}
doStuff(sayBye);
//DONE

//kai norim kad funkcija grazintu kazkokia reiksme darom taip
function divide(num1, num2) {
  return num1 / num2;
}
const divideResult = divide(5, 5) + divide(10, 5);
console.log(divideResult);
///grazina viena reiksme, negali but daugiau
////DONE

function divide2(num1, num2) {
  return num1 / num2; //JS sustabdo tolimesni kodo veikima po return

  console.log("kazkas kas vyksta uz return");
}
const divideResult2 = divide2(10, 5) + divide2(10, 5);
console.log(divideResult2);
///DONE

//SURANDA didesni skaiciu is dvieju
function returnLargerNumber(num1, num2) {
  if (num1 > num2) {
    //patikrina ar vienas daugiau uz 8 - NE NERA
    return num1;
  } else {
    // todel kad IFas neigiamas, kodas tikrina ar 8 daugiau uz 1 - TAIP YRA
    return num2; //todel returnina didesni skaiciu
  }
}

console.log(returnLargerNumber(1, 8));

//PATIUNINTAS
//SURANDA didesni skaiciu is dvieju arba paraso kad jie lygus
function returnLargerNumber2(num1, num2) {
  if (num1 > num2) {
    //patikrina ar pirmas daugiau uz antra
    return num1;
  }
  if (num2 > num1) {
    //patikrina ar antras skaicius didesnis uz pirma
    return num2;
  }
  if (num1 === num2) {
    //patikrina ar jie lygus
    return "jie yra lygus asile";
  }
}

console.log(returnLargerNumber2(666, 667));
console.log(returnLargerNumber2(999, 999));
///VISKAS KAS IVYKSTA FUNKCIJOS VIDUJE TAS IR LIEKA FUNKCIJOS VIDUJE
///DONE
console.log("---*---*uzduoteles---*****-***");
//Create a function called isEven that takes a single number parameter and returns true if the number is even, otherwise false.

function isEven(number) {
  //pasikurem funkcija kuri priima skaiciuka
  console.log(number % 2);
  // number = 5
  //number % 2 = 1 (ifo viduje vienetas yra true)
  //IF(1) - true
  if (number % 2) {
    //patikrinam ar padalinus is dvieju nera liekanos
    return false; //jei yra liekana gaunam false
  } else {
    return true; //jei nera guanam true
  }
}

//number = 5
// number % 2 = 0 (IFo viduje 0 yra false (visada))
// IFas grazina false

console.log(isEven(5));
console.log(isEven(6));
///DONE

//Write a function named truncateString that takes a string and a number as parameters. If the length of the string exceeds the specified number, truncate the string and append "..." to the end. Otherwise, return the original string.

function truncateString(string, maxLength) {
  //susikuriam dvi reiksmes
  if (string.length > maxLength) {
    // jei stringas ilgesnis nei nurodytas maxLength
    let result;
    result = string.slice(0, maxLength); //cia stringe paliekam tik nuo pirmo simbolio iki maxLength
    result += "...";
    return result;
  } else {
    return string;
  }
}

console.log(truncateString("Labas labas", 5)); // nurodytas stringas ir maxLength 5, todel vykdo pirma IFa
console.log(truncateString("Labas labas", 50)); // nurodytas stringas ir maxLength 50, todel vykdo antra IFa

//PATIUNINTAS VARIANTAS 1 (trumpesnis)
function truncateString2(string, maxLength) {
  //susikuriam dvi reiksmes
  if (string.length > maxLength) {
    // jei stringas ilgesnis nei nurodytas maxLength
    let result = string.slice(0, maxLength);
    result += "...";
    return result;
  } else {
    return string;
  }
}

console.log(truncateString2("Labas labas", 5)); // nurodytas stringas ir maxLength 5, todel vykdo pirma IFa
console.log(truncateString2("Labas labas", 50)); // nurodytas stringas ir maxLength 50, todel vykdo antra IFa

//PATIUNINTAS VARIANTAS 2 (dar trumpesnis)
function truncateString3(string, maxLength) {
  //susikuriam dvi reiksmes
  if (string.length > maxLength) {
    return (result = string.slice(0, maxLength) + "...");
  } else {
    return string;
  }
}

console.log(truncateString3("Labas labas", 5)); // nurodytas stringas ir maxLength 5, todel vykdo pirma IFa
console.log(truncateString3("Labas labas", 50)); // nurodytas stringas ir maxLength 50, todel vykdo antra IFa
////DONE

// Create a function called findLongestWord that takes a string parameter consisting of words separated by spaces and returns the length of the longest word.

function findLongestWord(string) {
  const words = string.split(" "); //su split nurodom pagal ka sukarpom stringa ir paverciam i array, siuo atveju isskiriam stringa ties kiekvienu tarpu " "

  //susikuriam kintamaji longestWord
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      //kiekviena cikla tikrinsim ar musu ilgiausias zodis yra trumpesnis uz tikrinama zodi
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(
  findLongestWord("kazkoks ilgas stringas daug simboliu vai tai tai")
);
