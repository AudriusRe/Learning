// //Automobilis
// LENGVAS
// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą turnOn – kuris alert’ins vrooom. Sukurkite du objektus ir patikrinkite ar veikia tesingai 🚗.

class Car {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
  }
  setTurnOn() {
    alert("vrooom");
  }
}

const golfas = new Car("Volkswagen", "Golf Variant", "Petrol");
const dziukas = new Car("Nissan", "Juke", "Petrol");

// golfas.setTurnOn(); ///uzkomentuoju kad nemestu alerto
console.log(golfas);
console.log(dziukas);

//DONER KEBAB

// Automobilio kaina
// VIDUTINIS
// Pakoreguokite šį car konstruktorių.
// Pridėkite papildomą property basePrice ir metodą getPrice.
// basePrice propertį įsirašys sukuriant objektą, tačiau getPrice, priklausomai nuo variklio, išmes kokia yra galutinė kaina.
// Jei variklis electric – kaina bus +10,000
// Jei diesel +5,000
// Jei petrol – kaina tokia kokia ir basePrice

class Car2 {
  constructor(brand, model, engine, basePrice) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice;
  }
  setTurnOn() {
    alert("vrooom");
  }
  getPrice() {
    let bonusPrice = 0;
    if (this.engine === "Electric") {
      bonusPrice = 10000;
    } else if (this.engine === "Diesel") {
      bonusPrice = 5000;
    }
    return this.basePrice + bonusPrice;
  }
}
const golfas2 = new Car2("Volkswagen", "Golf Variant", "Petrol", 21000);
const dziukas2 = new Car2("Nissan", "Juke", "Petrol", 18000);

console.log(golfas2);
console.log(golfas2.getPrice());

//FAIL - BEVEIK VISKA PATS PADARIAU, TIK PRIES IF NESUKURIAU NAUJO KINTAMOJO BONUSPRICE IR NEZAIDZIAU SU JUO :(

// //Banko sąskaitos klasė
// VIDUTINIS

// Sukurkite klasę BankAccount, kuri turi savybes ownerName ir balance. Klasė taip pat turėtų turėti metodus deposit(amount) ir withdraw(amount), kurie atitinkamai didina arba mažina balance.
// Rezultatas:

// const account = new BankAccount("Jonas");
// account.deposit(100);
// account.withdraw(30);
// console.log(account.balance); // 70

class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = name;
    this.balance = balance;
  }
  deposit(amount) {}
  withdraw(amount) {}
}
