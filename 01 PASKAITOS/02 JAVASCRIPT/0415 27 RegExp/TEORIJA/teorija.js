const emailRegexp = /[0-9]/; //susikuriam taisykle - siuo atveju ar yra skaiciai nuo 0 iki 9

const emailRegexp2 = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/; // cia taisykle emailo validumui

const stringasDu = "vienasdutrys@keturi.lt"; //cia testinis meilas

const kazkoksStringas = "8"; // susikuriam kintamaji kurio ieskosim

const result = emailRegexp.test(kazkoksStringas); // susikuriam kintamaji su testo rezultatu

const result2 = emailRegexp2.test(stringasDu); //testuojam stringa

console.log(result); //issikonsolinam rezultata. rezultatas buna TRUE arba FALSE (BOOLEAN)

console.log(result2); //issikonsolinam

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////  R  E  G  E  X    P  A  V  Y  Z  D  Z  I  A  I  //////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Viena didžioji
// Išrinkite visus žodžius, prasidedančius viena didžiąja raide.
// [A-Z][a-ząčęėįšųūž]+

//Visos didžiosios
// Išrinkite visus žodžius, kurie yra iš visų didžiųjų raidžių (PVM, SWIFT, HABALT22).
// [A-Z]{3,}\d*

// Short phone number
// Parašykite šabloną trumpajam telefono numeriui (nereikia idealaus, tiesiog išrinkite 1884 ir 1663).
// 1\d{3}\b

// Long phone number
// Parašykite šabloną ilgajam telefono numeriui.
// \+370\s\d\s\d{3}\s\d{4}

// Faksas
// Parašykite šabloną fakso numeriui.
// \(\d\s\d\)\s\d{3}\s\d{4}

// Ir telefonas ir faksas
// Parašykite šabloną, kuris tiktų ir ilgajam telefono numeriui, ir faksui (naudokite '|' ir grupavimą).
// (\+370\s\d|\(\d\s\d\))\s(\d{3}\s\d{4})

// Sąskaita
// Parašykite šabloną banko sąskaitos numeriui.
// LT\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}

// PVM mokėtojas
// Parašykite šabloną PVM mokėtojo kodui.
// LT\d{9}

// Visis prieš:
// Išrinkite visus žodžius prieš dvitaškį.
// [A-Za-ząčęėįšųūž]+:

// Email
// Parašykite paprastą šabloną el. paštui.
// [a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}
