//////////////////////////////
///////// S O R T ////////////
//////////////////////////////
const numbers = [1, 8, 3, 4, 7, 9, 666, 0, 3, 7, -4];

console.log(numbers.sort());
//SUDAS GAUNASI, NES RIKIUOJA GAIDISKAI PAGAL UNICODE

console.log(
  numbers.sort((a, b) => {
    return a - b;
  })
);
//DABAR GAUNASI NORMALIAI. TAIP GAUNASI DIDEJIMO TVARKA. JEI B MINUS A TAI GAUSIS MAZEJIMO TVARKA.
console.log(numbers.sort((a, b) => a - b)); //sutrumpintas variantas mazejimo tvarka
console.log(numbers.sort((a, b) => b - a)); //sutrumpintas variantas didejimo tvarka
/////////***************************** */
//KAIP IRSRUSIUOTI STRINGUS (ZODZIUS)
//NAUDOJAM LOCALECOMPARE()
const words = ["labas", "adata", "zebras", "bebras", "liutas"];

console.log(words.sort((a, b) => a.localeCompare(b))); //PALYGINA KIEKVIENO CHARACTERIO SKAITINE UNICODE REIKSME
console.log(words.sort((a, b) => -a.localeCompare(b))); //CIA ISRUSIAVIMAS IS KITOS PUSES
////////////*************************** */

const arrayOfArrays = [
  [1, 6],
  [2, 9],
  [-8, 7],
];

console.log(arrayOfArrays.sort((a, b) => b[1] - a[1])); //ISRUSIAUOJA MAZEJANCIA TVARKA PAGAL ANTRO ARRAY ELEMENTA

///////////////////////////////////
/////////// R E D U C E ///////////
///////////////////////////////////

///// NAUDOJAMAS PAVYZDZIUI SURASTI ARRAY ELEMENTU SUMA IR GAUTI VIENA REIKSME
///AKUMULIATORIUS YRA REIKSME KURI ISLIEKA KIEKVIENO CIKLO METU PVZ

const numbers2 = [1, 2, 3, 4];
let sum = 0;
//SU FOR CIKLU
for (let i = 0; i < numbers2.length; i++) {
  sum += numbers2[i];
}
console.log(sum);
/////////SU REDUCE
//ACCUMULATED - 1, CURRENT - 2 = 3
//ACCUMULATED - 3, CURRENT - 3 = 6
//ACCUMULATED - 6, CURRENT - 4 = 10

const sum1 = numbers2.reduce((accumulated, current) => {
  return accumulated + current;
});
console.log(sum1);
///ACCUMULATED YRA KAIP VIENAS FOR CIKLAS
//RETURNINAM TAM, KAD REIKSME GRIZTU I FUNKCIJA KAIP ACCUMULATED

////////////SKAICIAVIMAS NURODZIU PRADINE REIKSME (INITIAL VALUE)
///INITIAL VALUE PAGAL DEFAULT YRA PIRMA ACCUMULATED REIKSME
const sum2 = numbers2.reduce((accumulated, current) => {
  return accumulated + current;
}, 10);
console.log(sum2);
////////CIA INITIAL VALUE YRA 10, IR SKAICIUOJAMA NUO JO, TAI YRA PRIDEDA 1, 2, 3, 4 IR SUMA GAUNASI 20

//TAS PATS SU ZODZIAIS
const wordsCombined = words.reduce((acc, cur) => {
  return acc + cur;
}, "pradine reiksme ");

console.log(wordsCombined);
