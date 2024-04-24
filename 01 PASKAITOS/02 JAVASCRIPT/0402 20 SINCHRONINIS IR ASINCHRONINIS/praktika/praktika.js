///////////////////////////////////////////////////////////////////////////
///////////////////////////    L E N G V A S   ////////////////////////////
///////////////////////////////////////////////////////////////////////////
////5 sec
// LENGVAS
// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Resolve – iššoka alert yes, it works! Pažado aprašyme panaudoti setTimeOut.

// setTimeout(() => {
//   alert("yes, it works!");
// }, 5000);

///////////////////////////////////////////////////////////////////////////
/////////////////////////// V I D U T I N I S  ////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Tikimybė
// VIDUTINIS
// Papildykite pirmąjį pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let num = getRandomInteger(1, 5);

// const tikimybe = new Promise((resolve, reject) => {
//   if (num < 5) {
//     resolve(
//       setTimeout(() => {
//         alert("yes, it works!");
//       }, 5000)
//     );
//   } else {
//     reject(
//       setTimeout(() => {
//         alert("suck my ass, this is reject");
//       }, 5000)
//     );
//   }
// });

// console.log(num);
///////////////////////////////////////////////////////////////////////////
///////////////////////////  S  U  N  K  U  S  ////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Then
// SUDĖTINGAS

// then bendrauja su kitu then. Papildykite antrą pratimą, kad jei resolve'inasi pirmas pažadas – pasileidžia then(), kuris paprasčiausiai grąžina žinutę This is a message, šią žinutę pagauna antrasis then() ir ją alertina.

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomInteger(1, 5);

const tikimybe = new Promise((resolve, reject) => {
  if (num < 5) {
    resolve(
      setTimeout(() => {
        alert("yes, it works!");
      }, 5000)
    );
  } else {
    reject(
      setTimeout(() => {
        alert("suck my ass, this is reject");
      }, 5000)
    );
  }
});

console.log(num);

tikimybe
  .then((data) => {
    return "This is a message";
  })
  .then((data) => {
    console.log(data);
  });
