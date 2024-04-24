// ****salygos uzduotys 1 *****

//LENGVAS1 - FAIL
//ar bus rodomas log - TAIP (as atsakiau NE, nes maniau jog if salygai butinas else)
// if ("0") {
//   console.log("Hello");
// }

//LENGVAS2 - FAIL
//Naudodami if..else konstrukciją, parašykite kodą, kuris klausia: „Kokia yra mažiausia pasaulyje šalis?“
//Jei lankytojas įveda „Vatikanas“, išveskite „Teisingai!“, kitu atveju – išveskite: „Rimtai? Taigi Vatikanas!”.

// const userInput = prompt("Kokia yra mažiausia pasaulyje šalis?");

// if (userInput === "Vatikanas") {
//   //buvau neuzdejes kabuciu ant vatikano ir nepaejo kodas, reiskia reikia deti kabutes
//   console.log("Teisingai");
// } else {
//   console.log("Rimtai? Taigi Vatikanas");
// }

//VIDUTINIS 1 - FAIL

// let result = (a + b < 4) ? "Below" : "Over";

//SUDETINGAS 1

//nx nedarysiu

////////////// ****salygos uzduotys 2 *****

//LENGVAS1 -FAIL NESUPRATAU UŽDUOTIES

// const legalAge = 20;
// const clientAge = 18;

// if (clientAge >= 20) {
//   console.log("pasiekęs");
// } else {
//   console.log("nepasiekęs");
// }

//LENGVAS2 - SUCCESSSSSSS

// const vardas = "audrius";
// if (vardas.length > 6) {
//   console.log("Ilgas vardas");
// }

//VIDUTINIS1 - SUCCESSSSSSSSS

// const amzius = 19;
// if (amzius >= 19 && amzius <= 99) {
//   console.log("Adult");
// } else if (amzius > 100 || amzius < 0) {
//   console.log("Invalid age");
// } else if (amzius >= 1 && amzius <= 18) {
//   console.log("Child");
// }

// SUNKUS1 - SUCCESSOVICH

// const car = "Mini";
// if (
//   car == "VW" ||
//   car == "Audi" ||
//   car == "Bentley" ||
//   car == "Bugatti" ||
//   car == "Lamborghini" ||
//   car == "Porsche"
// ) {
//   console.log("VW GROUP");
// } else if (car == "BMW" || car == "Mini" || car == "Rolls-Royce") {
//   console.log("BMW GROUP");
// }

///////////// *** salygos ternary *********
//LENGVAS1 - SUCCESSSSS (NEPAMIRSK KABUCIU NAT AUDRIAUS)

// const vardas = "audrius";
// vardas.length < 5 ? console.log("Short name") : console.log("Long name");

//LENGVAS2 - SUCCESSSS (ZIUREK AR NERA MISTYPE)

// const clientAge = 37;
// const legalAge = 18;

// clientAge >= legalAge ? console.log("Can Drive") : console.log("Can't drive");

//VIDUTINIS1 - SUCCESSSS (ZEBA COOL)

// const clientAge = 199;
// const legalAge = 18;

// clientAge < 0 || clientAge > 120
//   ? console.log("Invalid age")
//   : clientAge >= legalAge
//   ? console.log("Can Drive")
//   : console.log("Can't drive");

//VIDUTINIS2 - FAIL

/////////// LOGINIAI OPERATORIAI
//LENGVAS1 - SUCCESSSS (KAIP IR ATSAKIAU KAD DVEJETAS YRA TEISINGA REIKSME)
// 2

//LENGVAS2 - 50/50 NES ATSAKIAU KAD ISVES ALERT(1) O IS TIESU PIRMA ISVEDA 1 O PO TO 2
// alert(1)

//VIDUTINIS1 - SUCCESSSS

// const amzius = 37;

// if (amzius >= 14 && amzius <= 90) {
//   console.log("amzius tarp 14 ir 90 imtinai");
// }

//VIDUTINIS2 - DOUBLE FAIL

////PIRMAS VARIANTAS - FAIL
// const amzius = 37;

// if (amzius >= !14 && amzius <= !90) {
//   console.log("amzius tarp 14 ir 90 imtinai");
// }

//ANTRAS VARIANTAS - FAIL
// const amzius = 10;

// if (amzius <= 14 && amzius >= 90) {
//   console.log("amzius nera tarp 14 ir 90 imtinai");
// }

///////////////SWITCH 1

//VIDUTINIS 1 - SUUCCSESSS (NEPAMIRSK DETI TRIGUBOS LYGYBES === KAI TIKRINI)
//SWITCHO KODAS
// const browser = "Edge";
// switch (browser) {
//   case "Edge":
//     alert("RIP Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Šios naršykles palaikomos");
//     break;

//   default:
//     alert("Tikimės, kad šis puslapis atrodys puikiai!");
// }

//ifelse kodas - rasiau as
// const browser = "Edge";

// if (browser === "Edge") {
//   console.log("RIP Edge");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Šios naršykles palaikomos");
// } else {
//   console.log("Tikimės, kad šis puslapis atrodys puikiai!");
// }

//VIDUTINIS 2 - SUCCESSSS (KAI ISTRYNIAU KABUTES PO CASE PAEJO KODELIS)
// const a = +prompt("a?", "");
// switch (a) {
//   case 0:
//     alert("0");
//     break;

//   case 1:
//     alert("1");
//     break;

//   case 2:
//   case 3:
//     alert("2,3");
// }

////////////SWITCH2
//VIDUTINIS1 - SUCCESSSSSS EZ PZ

// const car = "Mini";
// switch (car) {
//   case "VW":
//   case "Audi":
//   case "Bentley":
//   case "Bugatti":
//   case "Lamborghini":
//   case "Porsche":
//     console.log("VW GROUP");
//     break;
//   case "BMW":
//   case "Mini":
//   case "Rolls-Royce":
//     console.log("BMW GROUP");
// }

//VIDUTINIS2 - SUCCESSSS EZ PZ

// const userInput = "Morka";
// switch (userInput) {
//   case "Obuolys":
//   case "Kriause":
//   case "Bananas":
//   case "Arbuzas":
//   case "Mangas":
//   case "Kivis":
//     console.log("Vaisius");
//     break;
//   case "Morka":
//   case "Bulve":
//   case "Agurkas":
//   case "Pomidoras":
//   case "Patisonas":
//   case "Pastarnokas":
//     console.log("Darzove");
// }

//VIDUTINIS3 - SUCCESSAUSKAS

// const weekDay = "0";
// switch (weekDay) {
//   case "0":
//     console.log("Monday");
//     break;
//   case "1":
//     console.log("Tuesday");
//     break;
//   case "2":
//     console.log("Wednesday");
//     break;
//   case "3":
//     console.log("Thursday");
//     break;
//   case "4":
//     console.log("Friday");
//     break;
//   case "5":
//     console.log("Saturday");
//     break;
//   case "6":
//     console.log("Sunday");
//     break;
// }
