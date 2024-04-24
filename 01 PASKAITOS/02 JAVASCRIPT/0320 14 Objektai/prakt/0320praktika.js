///////////////////OBJEKTAI UZDUOTYS
// 1.Asmuo
// LENGVAS
// Parašykite funkciją createPerson, kuri sukuria objektą su savybėmis: name, lastname ir age. Funkcija turi priimti šias savybes kaip argumentus ir grąžinti sukurtą objektą.
// Rezultatas:

//kaip turetu atrodyti objektas
// const person = {
//   name: "Jonas",
//   lastname: "Jonaitis",
//   age: 30
// }

const createPerson = (name, lastname, age) => {
  return {
    name,
    lastname,
    age,
  };
};

console.log(createPerson("Jonas", "Jonaitis", 30)); // { name: "Jonas", lastname: "Jonaitis", age: 30 }
///ISKART FAIL
// 2.Mašinos informacija
// LENGVAS
// Sukurkite funkciją printCarInfo, kuri atspausdina visą automobilio informaciją. Automobilis yra objektas su savybėmis: brand (markė), model (modelis), ir year (metai). Funkcija turi grąžinti eilutę su visomis automobilio savybėmis.
// Rezultatas:
// console.log(printCarInfo({ brand: "Toyota", model: "Corolla", year: 2020 })); // "Brand: Toyota, Model: Corolla, Year: 2020"

const printCarInfo = ({ brand, model, year }) => {
  return {
    brand,
    model,
    year,
  };
};

console.log(printCarInfo({ brand: "Toyota", model: "Corolla", year: 2020 })); // "Brand: Toyota, Model: Corolla, Year: 2020"
/// DONE - MALADEC VYRAS
// SAUNIAI PADIRBETA

// 3.Darbuotojų ataskaita
// LENGVAS
// Sukurkite funkciją printEmployeeInfo, kuri priima objektą, kuriame yra darbuotojų vardai kaip raktai ir jų pareigos kaip reikšmės. Funkcija turi atspausdinti kiekvieno darbuotojo vardą ir pareigas.
// Rezultatas
// printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager" });
// "Name: Jonas, Position: Engineer"
// "Name: Petras, Position: Manager"

const printEmployeeInfo = (employees) => {
  const names = Object.keys(employees);
  names.forEach((name) => {
    console.log(`Name: ${name}, Position: ${employees[name]}`);
  });
};

printEmployeeInfo({ Jonas: "Engineer", Petras: "Manager" });

///FAILAS NX

//MARIASU VERSIJA

const employee = { Jonas: "Engineer", Petras: "Manager" };

function printEmployeeInfo2(obj) {
  const entries = Object.entries(obj); //.entries grazina array kurio viduje yra array su keys ir values
  entries.forEach((e) => {
    console.log(`Name: ${e[0]}, Position: ${e[1]}`);
  });
}

printEmployeeInfo2(employee);

//// 4.Knygų paieška
// VIDUTINIS
// Parašykite funkciją surastiKnygasPagalPavadinima, kuri ieško visų knygų, kurių pavadinimai atitinka (arba dalinai atitinka) nurodytą paieškos terminą. Paieška taip pat turėtų būti case-insensitive. Knygos yra pateiktos kaip objektų masyvas su savybėmis title ir author. Funkcija priima knygos pavadinimo paieškos terminą kaip argumentą ir grąžina visas atitinkamas knygas.
// Rezultatas
// console.log(findBook([{ title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" }, { title: "Hobitas", author: "J.R.R. Tolkien" }], "Poteris"));

const books = [
  { title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" },
  { title: "Hobitas", author: "J.R.R. Tolkien" },
];

function findBook(booksArr, search) {
  const res = booksArr.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );
  return res;
}

console.log(findBook(books, "Poteris"));

//Inventoriaus valdymas
// SUDĖTINGAS

// Sukurkite funkciją updateInventory, kuri priima esamą inventoriaus objektą ir pakeitimų masyvą. Kiekvienas pakeitimas yra objektas su item (prekės pavadinimu), change (kaitos kiekiu; gali būti neigiamas, jei prekė yra šalinama) ir action ("add" arba "remove"). Funkcija turėtų atnaujinti inventorių pagal pateiktus pakeitimus.

// Rezultatas

// console.log(updateInventory({ "apples": 5, "bananas": 8 }, [{ item: "apples", change: 3, action: "add" }, { item: "bananas", change: 2, action: "remove" }]));
// // { "apples": 8, "bananas": 6 }

const inventory = { apples: 5, bananas: 8 };
const changes = [
  { item: "apples", change: 3, action: "add" },
  { item: "bananas", change: 2, action: "remove" },
];

function updateInventory(inventory, changes) {
  const inventoryCopy = { ...inventory };
  changes.forEach((ch) => {
    if (ch.action === "add") {
      inventoryCopy[ch.item] += ch.change;
    }
    if (ch.action === "remove") {
      inventoryCopy[ch.item] -= ch.change;
    }
  });
  return inventoryCopy;
}

const updated = updateInventory(inventory, changes);

console.log(updated);

//Studentų grupių balai
// VIDUTINIS
// Jūsų užduotis - sukurti funkciją countAverages, kuri priima objektą, turintį studentų grupių pavadinimus kaip raktus ir studentų egzaminų balų masyvus kaip reikšmes. Funkcija turėtų grąžinti naują objektą su kiekvienos grupės vidurkiu.
// Rezultatas
// console.log(countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] }));
// // { "Group A": 90, "Group B": 80 }
const groups = { "Group A": [80, 90, 100], "Group B": [70, 80, 90] };

function countAverages(group) {
  const groupsCopy = { ...group }; //sita vieta padaro klona
  const keys = Object.keys(groupsCopy); //sitos dalies reikia, kad praeitume per visus objektu propercius, grazina array forma

  keys.forEach((key) => {
    groupsCopy[key] =
      groupsCopy[key].reduce((acc, cur) => acc + cur) / groupsCopy[key].length;
  });

  return groupsCopy;
}

console.log(countAverages(groups));
