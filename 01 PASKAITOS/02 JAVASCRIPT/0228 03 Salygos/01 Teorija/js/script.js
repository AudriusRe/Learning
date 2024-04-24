/////////////////\\\\\\\\\\\\\\\\\\\\ SVARBUS PATIKRINIMO TOOLSAS AR USERIS KA NORS IVEDE
const userInput = prompt("ivesk kazka");
console.log(userInput);
if (userInput) {
  console.log("true");
} else {
  console.log("false");
}
///////////////////\\\\\\\\\\\\\\\\\\\\

//if duoda boolean (true arba false) atsakyma

// const userInput = prompt("iveskite skaiciu");

// if (userInput > 10) {
//   console.log("ivestas skaicius yra daugiau nei 10");
// } else {
//   console.log("ivestas skaicius yra maziau nei 10");
// }

// const isRaining = true;
// if (isRaining) {
//   console.log("pasiimkite sketi");
// }

// const temperature = prompt("ivesk temperatura asile");

// if (temperature >= 30) {
//   console.log("lauke labai karsta");
// } else if (temperature >= 20) {
//   console.log("lauke silta");
// } else if (temperature >= 10) {
//   console.log("laike vesu");
// } else {
//   console.log("salta asile");
// }

// const temperature = +prompt("a girdz kiek laipsniu lauke");

// switch (temperature) {
//   case 20:
//     console.log("salciau nei tenerifej");
//     break;
//   case 30:
//     console.log("geras geras orelis aik tu sau");
//     break;
//   default: //nera butinas bet gera praktika ji rasyti
//     console.log("neaisku cia niekas");
// }

// if (temperature > 20) {
//   console.log("nyblogay nyblogay");
// } else {
//   console.log("varyk i tenerife a girdz");
// }
// TERNERY OPERATOR tas pats kas auksciau, tik sutrumpintai
// temperature > 20
//   ? console.log("galima gyventi")
//   : console.log("varai i tenerife");

// const message = temperature > 20 ? "beveik tenerife" : "vesoka";

// alert(message);

// const isRaining = true;

// if (temperature > 20 && !isRaining) {
//   //sauktukas pakeicia is true i false arba is false i true
//   console.log("grazi dienele nes nelyja ir silta");
// }

// if (temperature > 20 || isRaining) {
//   console.log("grazi diena nes nelyja arba silta");
// }

// AGE VERIFICATION
// Write a program that asks the user for their age. If the age is less than 18, display a message saying "You are not eligible for this service". Otherwise, display a message saying "Welcome!".

// const age = prompt("iveskite savo amziu");
// if (age >= 18) {
//   console.log("Welcome!");
// } else {
//   console.log("Your are not eligible for this service");
// }

// Username and Password Checker:
// Implement a basic username and password checker. Ask the user for their username and password. If the username is "admin" and the password is "password123", display a message saying "Login successful". Otherwise, display a message saying "Incorrect username or password".

// const username = "Admin";
// const password = "password123";

// const enteredUsername = prompt("Iveskite savo vartotojo varda");
// const enteredPassword = prompt("Iveskite savo slaptazodi");

// if (enteredUsername === username && enteredPassword === password) {
//   console.log("login successful");
// } else {
//   console.log("Incorrect username or password");
// }

//Even or Odd Number Checker:
//Write a program that asks the user for a number and determines whether it's even or odd. Display a message indicating whether the number is even or odd.

// const userInput = +prompt("Iveskite skaiciu");

// if (userInput % 2 === 0) {
//   console.log("lyginis");
// } else {
//   console.log("nelyginis");
// }

//Divisibility Checker:
//Write a program that asks the user for a number and checks if it's divisible by both 3 and 5. Display a message indicating whether the number is divisible by both 3 and 5.

// const userInput = +prompt("Iveskite skaiciu");

// if (userInput % 3 === 0 && userInput % 5 === 0) {
//   console.log("Is divisable by 3 and 5");
// }

//FIZZ BUZZ
// jei dalinasi 3 - FIZZ
// jei dalinasi is 5 - BUZZ
// jei dalinasi is 3 ir 5 - FIZZBUZZ

// if (userInput % 15 === 0) {
//   console.log("FUZZBUZZ");
// } else if (userInput % 5 === 0) {
//   console.log("BUZZ");
// } else if (userInput % 3 === 0) {
//   console.log("FIZZ");
// }

//Grading System:Create a program that asks the user for their test score. Based on the score, display a letter grade according to the following criteria:
// 90 or above: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// const usersGrade = +prompt("Iveskite pazymi");

// let grade;

// if (usersGrade >= 90) {
//   grade = "A";
// } else if (usersGrade >= 80 && usersGrade <= 89) {
//   grade = "B";
// } else if (usersGrade >= 70 && usersGrade <= 79) {
//   grade = "C";
// } else {
//   grade = "D";
// }

// console.log(grade);

// if (0) { //nulis yra vienintelis skaicius kurio boolean reiksme yra FALSE
//   console.log("true");
// } else {
//   console.log("false");
// }

// const userInput = prompt("ivesk kazka");
// console.log(userInput);
// if (userInput) {
//   console.log("true");
// } else {
//   console.log("false");
// }
