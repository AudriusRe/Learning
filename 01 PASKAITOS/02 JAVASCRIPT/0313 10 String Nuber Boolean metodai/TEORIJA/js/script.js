///STRING METODAI

const someString = "Labas";
const arr = ["asdf", "asdfg"];

arr[0] = "kazkas naujo";
console.log(arr); //array galime keisti
someString[1] = "b";
console.log(someString[1]); //stringu negalime keisti

console.log(someString.charAt(1)); //.charAt(1) pasirenka kuri stringo elementa, kurio nori. beveik tas pats kas someString[1]
console.log(someString.at(1)); //tas pats, tik galima rasyti minusines reiksmes, kas skaiciuoja stringa nuo galo
console.log(someString.at(-1)); //cia minusine reiksme

////CONCAT METODAI

const pirmas = "Labas, ";
const antras = "Audriau";

const fullString = pirmas.concat(antras, " maladec esi"); //jis apjungia stringus ir kintamuosius
const fullString2 = pirmas.concat(...arr); //galime prisijungti koki nors kita array
console.log(fullString);
console.log(fullString2);

let stringelis = "kazkas parasyta ";

stringelis += "labai svarbu turbut"; //kaip ir tas pats kas concat. turi buti "let" o ne "const", nes += keicia kintamaji

console.log(stringelis);
const stringusas = stringelis + " dar kazkas cia";
console.log(stringusas);

function getString() {
  return "string from a function";
}

const stringoidas = `bet ka galima irasyti ${stringelis} ${
  333 + 333
} ${getString()}`; //galimas ir toks sujungimo budas, su `` ir viduje ${}. i ${} galima isideti bet ka

console.log(stringoidas);

/////NUMBER METODAI

const skaicius1 = 3.145798745;

console.log(skaicius1.toFixed(2)); //.toFixed suapvalina skaiciu iki skliausteliuose nurodytu skaiciu po kablelio. jei jokio skaiciaus nebutu irasyta, tai apvalina iki sveiku skaiciu
console.log(skaicius1.toFixed()); //cia sveiki skaiciai

/////////

const skaicius2 = 666.369369369;

console.log(skaicius2.toPrecision(2)); //suspaudzia skaiciu bando sugrusti iki tiek simboliu kiek irasyta i skliaustelius
console.log(skaicius2.toPrecision(4));

///////////

const skaicius3 = 98765.4321;

console.log(skaicius3.toString()); //konvertuoja i stringa
console.log(skaicius3.toString(2)); //grazina dvejetaine reiksme - tik 0 ir 1.

//////BOOLEAN METODAI

const isTrue = true;
console.log(isTrue.toString());

////

console.log(isTrue.valueOf()); //chuinia kurios niekas nenaudoja

/////////////////////////////////////////////

const stringolcas = "    asdasd asf afasf a asdasd     1 ";

console.log(stringolcas.trim()); ///nuima tarpus priekyje ir gale
console.log(stringolcas.trimEnd()); //nutrina tarpus tik gale
console.log(stringolcas.trimStart()); //nutrina tarpus tik priekyje

const skc = "123";
console.log(skc.padStart(12, "a")); //nurodom koks turetu buti viso stringo ilgis, ir nurodom ko prideti kaip trukstamu elementu
console.log(skc.repeat(6)); //nurodom kiek kartu pakartoti stringa

console.log(stringolcas.replace("asdasd", "gaidiena")); //pakeicia kuria nors stringo dali nurodyta kita dalim (tik pirma tokia dali, jei yra kelios vienodos)
console.log(stringolcas.replaceAll("asdasd", "naujiena")); //pakeicia visas nurodytas stringo dalis

const tekst = "a,b,c,d,e,f,g";
console.log(tekst.split(",")); //nurodom ka imam kaip atskiriamaji zenkla, ir paverciam likuti i array

////////////MATH

console.log(Math.round(20.66666666)); //suapvalina iki sveiko skaiciaus
console.log(Math.floor(20.58)); //numeta lieka (skaiciu po kablelio)
console.log(Math.abs(-666)); //grazina absoliucia skaiciaus reiksme (jei minusas tai nuima minusa)
console.log(Math.ceil(20.123123)); //apvalina i virsu iki sveiko skaiciaus, jei yra bet koks skaicius po kablelio
console.log(Math.PI); //duoda PI
const numeriai = [1, 2, 3, 4];
console.log(Math.max(...numeriai)); //randa didziausia skaiciu
console.log(Math.min(...numeriai)); //randa maziausia skaiciu
console.log(Math.sqrt(49)); //istraukia kvadratine sakni
console.log(Math.pow(3, 3)); //nurodai skaiciu, po to kuriuo laipsniu nori pakelt
