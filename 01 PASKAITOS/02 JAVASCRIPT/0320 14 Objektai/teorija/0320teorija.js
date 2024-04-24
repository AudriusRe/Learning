///////////OBJEKTAI

const person = {
  name: "Audrius",
  age: 37,
  "first-pet": "Katyte", //siaip per bruksni negalima rasyti, bet jei kazkodel to labai reiketu tai galima parasyti kaip stringa su kabutemis
};

person.name = "Vaflis"; // Taip galime pakeisti kazkurios propercio reiksme
person.lastName = "Vafliauskas"; // Galim prideti ir kazka naujo kaip va cia

console.log(person["first-pet"]); //kadangi propertis yra stringas, tai ji atvaizduoti galime tik taip
console.log(person["name"]); //cia dar vienas budas pasiimti property

// delete person.name; // taip galima istrinti kazkuri norima property

console.log(person);
console.log(person.name); //norint pasiimti kazkuria konkrecia reiksme reikia po objekto pavadinimo deti taska . ir pasirinkti kurios property reiksmes norim

console.log(person.age);

////ARRAY GALI TURETI OBJEKTUS VIDUJE
//TAI YRA LABAI DAZNAS DALYKAS

const people = [
  {
    name: "Tadas",
    age: 20,
  },
  {
    name: "Antanas",
    age: 31,
  },
  {
    name: "Onute",
    age: 25,
  },
];

const peopleSortedByAge = people.sort((a, b) => a.age - b.age);

console.log(peopleSortedByAge);

console.log("-*/*--*/*/--*/-*-");
//////////////////UZDUOTIS1

const recipe = {
  title: "blynai",
  serves: 4,
  ingredients: ["miltai", "kiausiniai", "pienas", "cukrus"],
};
console.log(recipe.title);
console.log(`Serves ${recipe.serves}`);
console.log("Ingredients:");
recipe.ingredients.forEach((item) => console.log(item));

/////////////

const audrius = {
  name: "Audrius",
  age: 37,
  isMarried: true,
  pets: ["katyte", "peles"],
  mom: {
    name: "Felicita",
    age: 67,
  },
  sayHello: () => {
    console.log("Hello");
  },
};

console.log(audrius.mom.name);
audrius.sayHello(); //taip galime issikviesti funkcija is objekto

///////////////////////

function changeName(obj) {
  //pasirasom funkcija vardo pakeitimui. (obj) yra adresas kur norime keisti
  obj.name = "kazkas kitko";
}

console.log(audrius);

changeName(audrius); //iskvieciam funkcija

console.log(audrius); //dabar esam pakeite originalu objekta

///JEI NENORIME KEISTI ORIGINALO GALIME PASIKURTI KOPIJA IR DIRBTI SU JA
function changeName(obj) {
  const objCopy = { ...obj }; //cia pasidarome kopija
  objCopy.name = "kazkas kitko";
}

//////////// METODAI

console.log(Object.keys(audrius)); //cia taip galima issikviesti vidus key (properties)
console.log(Object.values(audrius));

const people1 = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

///1. Prafiltruokite masyvą, kad rodytų tik pilnamečius.

const adults = people1.filter((p) => p.age >= 18);
console.log(adults);
///DONER

///2. Pakoreguokite aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Rezultatas turi būti: ["Petras", "Antanas", "Diana"].

const adultsNames = people1.filter((p) => p.age >= 18).map((p) => p.name); //cia panaudojome du array metodus, pradzioj prafiltravom pilnamecius, o po to rekonstravome kad atrodytu siek tiek kitaip (pasiemem tik vardus)
console.log(adultsNames);
//DONE

///3.Antro pratimo array išrikiuokite A-Z tvarka. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

const adultsNamesSorted = people1
  .filter((p) => p.age >= 18)
  .map((p) => p.name)
  .sort((a, b) => a.localeCompare(b)); //cia pridejom dar trecia metoda, kur isrikiavom pries tai gautus rezultatus pagal abecele, panaudodami .sort
console.log(adultsNamesSorted);

// ////////////////
// Sukurkite funkciją. Ji priims vieną argumentą – array su objektais, kurie turės du parametrus:
// name
// ir price.
// Grąžinkite – brangiausią ir pigiausią prekes.
// Pvz:
// iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
// grąžins: {brangiausias: "lemonade", pigausias: "lime"}

const prekes = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];
function getCheapestAndMostExpensive(arr) {
  const sorted = arr.sort((a, b) => a.price - b.price);
  const cheapest = sorted[0].name; //cia .name uztikrina kad issilogintu tik pavadinimas, be kainos
  const mostExpensive = sorted[sorted.length - 1].name; //cia pasirenkam paskutini elementa is array

  const result = {
    brangiausias: mostExpensive,
    pigiausias: cheapest,
  };
  return result;
}

const res = getCheapestAndMostExpensive(prekes);
console.log(res);

//
// Aptarnavimo eilės optimizavimas
// VIDUTINIS

// Jūs dirbate restorane ir turite optimizuoti užsakymų aptarnavimo eilę. Sukurkite funkciją optimizeQueue,
// kuri surikiuoja užsakymus pagal jų dydį (mažiausi pirmi). Kiekvienas užsakymas yra objektas, turintis
//id ir size savybes. Funkcija grąžina masyvą su surikiuotais užsakymų ID.

// Rezultatas

// console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])); // [2, 1,

const orders = [
  { id: 1, size: 5 },
  { id: 2, size: 3 },
  { id: 3, size: 8 },
];

function optimizeQueue(arr) {
  //susikuriam funkcija kuri priims array
  const orderedOrders = arr.sort((a, b) => a.size - b.size); //susortinam pagal orderio dydi
  const ids = orderedOrders.map((o) => o.id); // padarom kad rezultatuose rodyti tik ids

  return ids;
}

///TOLIAU SUTRUMPINTAS VARIANTAS, VISKA PAVERTUS I ARROW FUNKCIJA
const optimizeQueueTrumpas = (arr) =>
  arr.sort((a, b) => a.size - b.size).map((o) => o.id);

console.log(optimizeQueueTrumpas(orders));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Dažniausiai pasikartojantis
// SUDĖTINGAS
// Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.
// Rezultatas
// console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1

function findMostFrequent(arr) {
  let findMostFrequentNumber; //cia bus rezultatas
  let mostFrequentAmount = 0; //kiek kartu pasikartoja dazniausiai pasikartojantis skaicius
  arr.forEach((x) => {
    //noriu eiti per visu elementus
    const filtered = arr.filter((y) => y === x); //pasiimu originalu array ir isfiltruoju kad gauciau tik tuos skaicius kuriuos tikrinu, issifiltruoju tik pvz visus trejetukus. tam kad is array galiu istraukti kiek nauja, array yra tu elementu panaudodamas .length
    if (filtered.length > mostFrequentAmount) {
      //tikrinu ar tikrinto skaiciaus kiekis yra didesnis uz pries tai tikrinta skaiciu
      mostFrequentNumber = x; //jei didesnis tai dabar sitas didziausias skaicius yra x
      mostFrequentAmount = filtered.length; //issaugoju kiek kartu jis pasikartojo
    }
  });

  return mostFrequentNumber;
}

console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]));

////////TAS PATS TIK PANAUDOJANT OBJEKTUS

function findMostFrequentSuObjektais(arr) {
  const groupedNumbers = {};

  arr.forEach((x) => {
    if (groupedNumbers[x]) {
      //tikrinu ar jau egzistuoja vienetas, trejetas, septynetas
      groupedNumbers[x].push(x); //jei egzistuoja tai as prie jo pridedu rasta reiksme
    } else {
      groupedNumbers[x] = [x]; //jei neegzistuoja tai as sukuriu nauja array, kurio pavadinimas yra naujai rastas skaiciukas
    }
  });
  const allNumbers = Object.values(groupedNumbers).sort(
    (a, b) => b.length - a.length
  );
  console.log(allNumbers[0][0]);
}

console.log(findMostFrequentSuObjektais([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]));
