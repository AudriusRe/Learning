console.log("1. Elementu pridejimas");
// Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.

let arr1 = [1, 2];
function addElement(num) {
  arr1.push(num);
  return arr1;
}
console.log(addElement(3));

// ORIGINAL ATSAKYMAS
// const addElement = (arr, element) => {
//     arr.push(element);
//     return arr;
// };

//DONE

console.log("2. Sujunkite du masyvus į vieną");
// Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
];
const mergeArrays = arr2.reduce((acc, cur) => [...acc, ...cur]);
console.log(mergeArrays);

// ORIGINAL ATSAKYMAS
// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
//DONE

console.log("3. Kelių elementų pridėjimas");
// Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą.

function addMultipleElements(arr, ...numbers) {
  arr.push(...numbers);
  return arr;
}

console.log(addMultipleElements([1, 2, 3], 4, 5, 6));
// ORIGINAL ATSAKYMAS
// const addMultipleElements = (arr, ...elements) => [...arr, ...elements];

//DONE GPT

console.log("4. Masyvo elementų modifikavimas");
// Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.

function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

console.log(doubleNumbers([1, 2, 3]));

// ORIGINAL ATSAKYMAS
// const doubleNumbers = (arr) => arr.map(number => number * 2);

//DONE GPT

console.log("5. Unikalūs elementai");
// Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.

function findUnique(arr) {
  return arr.filter((num, index) => arr.indexOf(num) === index);
}

console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// ORIGINAL ATSAKYMAS

// const findUnique = (arr) => [...new Set(arr)]; WHAT THE FUCK???

//DONE GPT SUCK MY ASS

console.log("6. Kelionės maršruto planavimas");
// Jūsų užduotis - sukurti funkciją planTrip, kuri nustato, ar galima atlikti kelionę neperkraunant transporto priemonės. Transporto priemonė gali pavežti iki 200 kg. Funkcija priima masyvą su daiktų svoriais ir nustato, ar bendras svoris neviršija leistinos ribos.

const planTrip = (arr) => arr.reduce((acc, cur) => acc + cur, 0) <= 200;

console.log(planTrip([30, 70, 90])); // true
console.log(planTrip([100, 85, 60])); // false

// PAZIUREJAU ATSAKYMA NX

console.log("7. Aptarnavimo eilės optimizavimas");
// Aptarnavimo eilės optimizavimas
console.log("**SITA SAKE SKIPINAM IR PADARYSIM KAI MOKINSIMES APIE OBJEKTUS**");

console.log("8. Dažniausiai pasikartojantis");
// Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.

const findMostFrequent = (arr) => {
  const counts = {};
  let maxCount = 0;
  let mostFrequent;

  arr.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostFrequent = item;
    }
  });

  return mostFrequent;
};

console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1

//tiesiog nukopintas atsakymas, CHAR GPT tą patį siūlo

console.log("9. Rasti trukstama skaiciu");
//Sukurkite funkciją findMissingNumber, kuri randa trūkstamą skaičių iš eilės. Funkcija priima masyvą su skaičiais nuo 1 iki n. Jeigu masyve truksta bent vieno skaičiaus, funckija grąžina pirmą skaičių kurio trūksta eilėje. Jeigu visi skaičiai surašyti iš eilės, grąžina koks turėtų būti sekantis.

const findMissingNumber = (arr) => {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
};
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7

// paimtas atsakymas
console.log("10. Šachmatų lentos generatorius");
//Sukurkite funkciją generateChessBoard, kuri generuoja n x n šachmatų lentą kaip dvimatį masyvą, kur kiekvienas elementas yra arba 'B' (juoda), arba 'W' (balta). Pavyzdžiui, 3x3 lenta turėtų atrodyti:

const generateChessBoard = (size) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push((i + j) % 2 === 0 ? "W" : "B");
    }
    board.push(row);
  }
  return board;
};
console.log(generateChessBoard(3)); // [['W', 'B', 'W'], ['B', 'W', 'B'], ['W', 'B', 'W']]
