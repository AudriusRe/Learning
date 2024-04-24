////// UŽDUOTYS
///// FOR CIKLAS
// LENGVAS1 - OK

// for (let i = 0; i < 10; i++) {
//   console.log("Audrius");
// }

//LENGVAS2 - OK

// let vardas = "Audrius";
// let kartai = 10;
// for (let i = 0; i < kartai; i++) {
//   console.log(vardas);
// }

//VIDUTINIS1 - OK

// let vardas = "Audrius";
// let kartai = 10;
// for (let i = 0; i < kartai; i++) {
//   console.log(i + ". " + vardas);
// }

//VIDUTINIS2 - OK, bet kitaip nei atsakyme

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

////// WHILE CIKLAS
// VIDUTINIS1 - OK padarytas su paziurejimu i uzrasus ir pasirodo atvirksciai nei duota uzdavinio atsakyme

// let i = 0;
// let vardas = "Audrius";
// while (i < 3) {
//   console.log(vardas);
//   i++;
// }

// SUNKUS1 - NOT OK - beveik viska teko nusirasyt

let combo = "";
const name = "Audrius";
let times = 5;
do {
  combo += name;
  times--;
} while (times > 0);

console.log(combo);
