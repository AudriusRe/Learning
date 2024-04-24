// Multiplication
// LENGVAS

// Sukurkite modulį (t.y. failą – multi.js), kuriame būtų viena eksportuota (default) funkcija – multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius jau sudaugintus. Pagrindiniame JS faile (script.js) importuokite ir panaudokite šį modulį.

import multiplication from "./multi.js";

console.log(multiplication(5, 5));
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// Header
// LENGVAS

// Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins.

// Šios funkcijos tikslas – į app.innerHTML pridėti (t.y. +=) header kodą (pasirašykite standartinį HTML su inline CSS).

// Šį modulį importuokite į pagrindinį failą ir paduokite app, kuris bus document.body. Puslapio viršuje turėtų atsivaizduoti headeris, kuris importuotas iš header.js.

import app from "./header.js";

app(document.body);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// Cars
// VIDUTINIS

// Pridėkite dar vieną modulį, pavadinimu cars.js. Šis modulis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML).

// Tačiau šį kartą – funkcija viduje turės array ["BMW", "VW", "AUDI", "MB"]. Į innerHTML reikia pridėti nerikiuotą sąrašą (<ul>), kuriame automobilio markė bus įrašyta sąrašo elemento viduje (<li>).

import app2 from "./cars.js";

app2(document.body);
