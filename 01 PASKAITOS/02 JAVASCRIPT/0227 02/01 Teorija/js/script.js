let skaicius = 10;

// skaicius = skaicius + 5;
skaicius += 5;
// cia is esmes tas pats tik sutrumpintai
skaicius -= 10;

skaicius *= 10;

skaicius /= 5;

skaicius %= 3;

skaicius **= 8; //pakelimas laipsniu

console.log(skaicius);

const skaicius1 = 15;
const skaicius2 = 9;

const sum = skaicius1 + skaicius2;

console.log(sum);

let skaicius3 = 10;

skaicius3 = skaicius3 + 1;
skaicius3++; //prideda vieneta prie skaiciaus

skaicius3--; //atima vieneta is skaiciaus

console.log(skaicius3);

console.log(5 > 3); //tikrina ar daugiau/maziau
console.log(7 == 8); //tikrina ar lygu. nelabai naudojamas
console.log(7 != 8); //tikrina ar nelygu
console.log(8 === 9); //grieztas palyginimas. sitas naudojamas dazniau nei ==

// const userInput = prompt("iveskite skaiciu"); //ismeta prompta (langa i kuri useris gali ivesti ka nors)
// console.log(userInput); //atvaizduoja tai kas ivesta i prompt konsoleje
// console.log(typeof userInput); //patikrina ar kintamojo tipa (skaicius ar stringas)
// console.log(typeof +userInput); //pliusiukas prie typeof konvertuoja ivesta teksta i skaiciu
// console.log(+userInput); //nusako ar ivestas skaicius ar ne (NaN reiskia Not a Number)

// let balance = 300;

// const moneyToTransfer = prompt("Iveskite suma");

// balance -= +moneyToTransfer;

// console.log(balance);

//palukanu skaiciuokle zemiau

// let balance = 500;

// const interestRate = prompt("Iveskite palukanu norma");

// balance += balance * (interestRate / 100);

// console.log(balance);

const word = "bananas";

const guess = prompt("Bandykite atspeti zodi");

console.log("spejimo rezultatas:", word === guess);
