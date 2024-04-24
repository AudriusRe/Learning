//////////////LENGVAS1
console.log("lengvas 1");
//Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

function convertMStoKMH(num) {
  return num * 3.6;
}

console.log(convertMStoKMH(10));

///DONE

////////////LENGVAS2
console.log("lengvas 2");
//Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

const compareNumber = (num1, num2) => {
  if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return num1;
  } else if (num1 === num2) {
    return "equal";
  } else {
    return "Error: most arguments must be numbers";
  }
};
console.log(compareNumber(104, 1));

///DONE

//////////LENGVAS3
console.log("Lengvas 3");
// Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.

const isLeapYear = (year) => {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return "true";
  } else {
    return "false";
  }
};

console.log(isLeapYear(1700));

///DONE

///////VIDUTINIS1
console.log("vidutinis 1");
//Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

const findMaxInArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMaxInArray([1, 2, 3, 4, 5]));

//done su mariaus pagalba

//VIDUTINIS2
console.log("vidutinis 2");
//Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.

const sumArray = (arr2) => {
  let sum = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    sum = sum + arr2[i]; //sita eilute galima parasyti taip -- sum += arr2[i]
  }
  return sum;
};

console.log(sumArray([200, 200, 10, 10, -200, 200]));

//DONE PATS NIGA

//VIDUTINIS3
console.log("vidutinis 3");
/// Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.

// const arMasyvaiLygus = (arrx, arry) => {
//   for (let i = 0; i < arrx.length; i++) {
//     if (arrx[i] === arry[i]) {
//       for (let j = 1; j < arrx.length; j++) {
//         if (arrx[j] === arry[j]) return true;
//       }
//     } else {
//       return false;
//     }
//   }
// };
// console.log(arMasyvaiLygus([2, 3, 4, 5], [2, 4, 4]));
//bybis gavos, ar tiksliau nesigavo
//o turejo buti taip:

const arMasyvaiLygus = (arrx, arry) => {
  if (arrx.length !== arry.length) return false;
  for (let i = 0; i < arrx.length; i++) {
    if (arrx[i] !== arry[i]) {
      return false;
    }
  }
  return true;
};

console.log(arMasyvaiLygus([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]));

// as visur tikrinau ar lygi, kai paprasciau buvo patikrinti ar nelygu
// GALVOJAU APIE TAI BET NEPADARIAU - patikrinti ar lygus(nelygus) array.length
// NX

//SUNKUS1
console.log("sunkus 1");
//Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.
//cia man atrodo kad reikia naudoti unshift (prideda priekyje) kiekvienam elementui

// const reverseString = (stringas) => {
//   for (i = 0; i < stringas.length; i++) {
//     stringas.unshift(stringas[i]);
//   }
//   return stringas;
// };

// console.log(reverseString("Labas"));
//bybis gaunas, reikejo kitaip
//reikejo taip

const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log(reverseString("nesigauna"));
// NESUSIKURIAU NAUJO TUSCIO KINTAMOJO
// CIKLO SKAICIAVIMAS NUO GALO
//NXNXNXNX
