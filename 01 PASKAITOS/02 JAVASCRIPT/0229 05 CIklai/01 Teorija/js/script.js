////////// FOR CIKLAS

/////// FOR ciklas prasideda kai nurodomas kintamasis (pvz i), toliau nurodomas iki kada bus vykdomas ciklas (kol i maziau nei 5), ir ka darom (pridedam vieneta)
// FOR NAUDOJAME KAI ZINOME KIEK KARTU NORIME PAKARTOTI CIKLA

// 1. i = 0, tikrina ar 0 < 5, vykdomas ciklas;
// 2. i = 1, tikrina ar 1 < 5, vykdomas ciklas;
// 3. i = 2, tikrina ar 2 < 5, vykdomas ciklas;
// 4. i = 3, tikrina ar 3 < 5, vykdomas ciklas;
// 5. i = 4, tikrina ar 4 < 5, vykdomas ciklas;
// 6. i = 5, tikrina ar 5 < 5 - ne, nemaziau. sustoja ciklas.

// 1 veiksmas - sukuria kintamaji
// 2 veiksmas - patikrina salyga ar i < 5
// 3 veiksmas - jei salyga teisinga, vykdomas blokas
// 4 veiksmas - pakeiciamas i kintamasis (i++)
// toliau kartoja 2, 3 ir 4 veiksmus

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// kintamasis i gyvena tik ciklo viduje (riestiniuose cikluose). ivykdzius cikla, i galima panaudoti kitam cikle.

// for (let i = 100; i >= 10; i -= 10) {
//   console.log(i);
// }

// BEGALINIS CIKLAS KAD PAKIBTU NARSYKLE, SU i--
// for (let i = 0; i < 5; i--) {
//     console.log(i);
//   }
// begaliniai ciklai naudojami zaidimams, kad veiktu gravitacija ar suktusi varikliukai
// webe jie nenaudojami

// FOR ciklai naudojami dazniau nei WHILE ciklai

///// WHILE CIKLAS

// NAUDOJAME KOL BUS IVYKDYTA KOKIA NORS SALYGA, BET NEZINOME KIEK KARTU CIKLAS VEIKS

// let j = 0;

// while (j < 5) {
//   j++;
//   console.log(j, "while");
// }

// jei j++ idedi pries console.log tai prideda o po to parodo, jei j++ yra po console.log tai suskaiciuotu nuo 0 iki 4

// let j = 0;

// while (j < 5) {
//   console.log(j);
//   j++;
// }

//////// DO-WHILE ciklai
// let k = 5;
// do {
//   k++;
//   console.log(k, "do-while");
// } while (k < 5);

// WHILE is pradziu patikrina salyga ir po to ja vykdo.
// DO-WHILE padaro ir po to tikrina. Jei salyga klaidinga, jis vis tiek ivykdys cikla bent viena karta

//Print Numbers: Write a loop that prints numbers from 1 to 10.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

//Even Numbers: Write a loop that prints even numbers from 2 to 20.

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

//Sum of Numbers: Write a loop that calculates the sum of numbers from 1 to 10.

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log(sum);

/////PAAISKINIMAS
// 1 sum = 1
// 2 sum = 3
// 3 sum = 6
// 4 sum = 10
// ir taip toliau

// ///PRATIMO PRADZIA
// ////// Reverse a String: Write a loop to reverse a given string.

// const userInput = prompt("Iveskite koki zodi");

// console.log(userInput[0]); //cia lauztiniuose skliaustuose nurodom kurio simbolio norime
// // programavime skaiciuojama nuo nulio. t.y. pirmas zenklas yra nulis, antras - pirmas ir t.t...
// console.log(userInput.length); // .length pasako kiek buvo i stringa ivesta simboliu

// // INTARPAS APIE STRINGU SUDEJIMA
// // let reversedString = "Labas";
// // console.log(reversedString);
// // reversedString += "krabas";
// // console.log(reversedString);
// // INTARPO  PABAIGA

// let reversedString = "";

// for (let i = userInput.length - 1; i >= 0; i--) {
//   //dinamine kintamojo reiksme, kai nezinome kokia reiksme bus kai rasome koda. ji bus aiski tik tada kai vartotojas ives stringa
//   reversedString += userInput[i];
// }

// console.log(reversedString);

// /////////PRATIMO PABAIGA

//*************** */ kodas be komentaru
// const userInput = prompt("Iveskite koki zodi");
// console.log(userInput[0]);
// console.log(userInput.length);
// let reversedString = "";
// for (let i = userInput.length - 1; i >= 0; i--) {
//   reversedString += userInput[i];
// }
// console.log(reversedString);

////PATUNINTAS KODAS, JEI USERIS PASPAUCE CANCEL ARBA TUSCIA STRINGA
// const userInput = prompt("Iveskite koki zodi");

// if (userInput) {
//   let reversedString = "";
//   for (let i = userInput.length - 1; i >= 0; i--) {
//     reversedString += userInput[i];
//   }
//   console.log(reversedString);
// } else {
//   alert("NEISSIPISINEK");
// }

////DAR LABIAU PATIUNINTAS KODAS KUR KARTOJA TA PACIA ZINUTE KOL NEIVESI KAZKO LEGIT
let isUserInputValid = false; //susikuriu busena kad kol nieko gero neivesta yra false

do {
  const userInput = prompt("Iveskite koki zodi"); // papraso userio kad kazka ivestu

  if (userInput) {
    isUserInputValid = true; // kai kazka gero iveda yra true
    let reversedString = "";

    for (let i = userInput.length - 1; i >= 0; i--) {
      reversedString += userInput[i];
    }

    console.log(reversedString);
  } else {
    alert("NEISSIPISINEK"); //jei useris ivede kazka netinkamo tai koda kartoja vel is naujo
  }
} while (!isUserInputValid); //kai iveda kazka netinkamo, kas nurodo kad yra false, kartojam cikla
