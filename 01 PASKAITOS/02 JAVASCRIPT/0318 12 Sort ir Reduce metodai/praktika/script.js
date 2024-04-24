console.log("ARRAY SORT");
console.log("---LENGVAS 1 VARDAI");

const vardai = ["pukis", "alvis", "traktorius", "donce", "vytas", "marcius"];
console.log(vardai.sort((a, b) => a.localeCompare(b)));
///DONE

console.log("---VIDUTINIS 1 VARDAI");

console.log(vardai.sort((a, b) => b.localeCompare(a)));
//DONE

console.log("---VIDUTINIS 2 MAZEJIMO TVARKA");

const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.log(numbers.sort((a, b) => b - a));

//DONE

console.log("---VIDUTINIS 2 DIDZIAUSIAS");

const numbers2 = [10, 5, 20, 4];
console.log(numbers2.sort((a, b) => b - a)[0]);
//DONE

console.log("ARRAY REDUCE");
console.log("MARIAUS 1");
// 1. Count the number of even numbers in an array.
// 2. Find the maximum value in an array of numbers.
// 3. Calculate the average of all numbers in an array. DONE

///CIA YRA DARBINIS ARRAY
const numbers3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

// UZDUOTYS
console.log("MARIAUS 1.1 be reduce");
// 1.Count the number of even numbers in an array.
const evens = numbers3.filter((n) => n % 2 === 0);
console.log(evens.length);

///TAS PATS SU REDUCE
console.log("MARIAUS 1.1 su reduce");
const evens2 = numbers3.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

///UZTRUKO GERA PUSVALANDI, KOL ISSIAISKINAU, KAD TIESIOG REIKEJO PRIDETI INITIAL VALUE IR ATSAKYMAS GAUNAS TEISINGAS
console.log(evens2);
console.log("MARIAUS 1.2");
// 2. Find the maximum value in an array of numbers.
const max = numbers3.reduce((acc, cur) => {
  if (cur > acc) {
    return cur;
  } else {
    return acc;
  }
});
console.log(max);

console.log("MARIAUS 1.3");
// 3.Calculate the average of all numbers in an array.
const sum = numbers3.reduce((acc, cur) => acc + cur);
let result3 = sum / numbers3.length;
console.log(result3);
