//Knygos klasė
// LENGVAS
// Sukurkite Book klasę su savybėmis title, author ir year. Pridėkite metodą getSummary(), kuris grąžina santrauką apie knygą.
// Inicializacijos ir naudojimo pavyzdys:
// const book1 = new Book("Book Title", "Author Name", "2023");
// console.log(book1.getSummary()); // "Book Title by Author Name published in 2023"

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return this.title + " by " + this.author + " published in " + this.year;
  }
}

const book1 = new Book("Book Title", "Author Name", "2023");
console.log(book1.getSummary());
//////////////////////
// DDDDOOOONNNNEEEE //
//////////////////////

// Muzikos studentas
// LENGVAS

// Sukurkite klasę MusicStudent, kuri saugo informaciją apie muzikos mokyklos studentus. Studentas turi name (vardas), instrument (muzikos instrumentas, kurį jis mokosi groti) ir level (lygis, pvz., pradedantysis, pažengęs). Pridėkite metodą practice, kuris didina studento lygį. Pagal nutylėjimas studento lygis turėtų būti "beginner".

// Inicializacijos ir naudojimo pavyzdys:

// const student = new MusicStudent("Anna", "piano");
// student.practice();
// console.log(`${student.name}, ${student.instrument}, ${student.level}`); // "Anna, piano, intermediate"

class MusicStudent {
  constructor(name, instrument) {
    this.name = name;
    this.instrument = instrument;
    this.level = "Beginner";
  }

  practice() {
    this.level = "Intermediate";
    return this.name + ", " + this.instrument + ", " + this.level;
  }
}

const student = new MusicStudent("Anna", "Piano");
student.practice();

console.log(`${student.name}, ${student.instrument}, ${student.level}`);

//////////////////////
// DDDDOOOONNNNEEEE //
//////////////////////

// Prekių krepšelis
// VIDUTINIS
// Sukurkite ShoppingCart klasę, kuri gali pridėti prekes (addItem), pašalinti prekes (removeItem) ir apskaičiuoti bendrą kainą (calculateTotal). Prekės yra objektai su savybėmis name ir price.
// Inicializacijos ir naudojimo pavyzdys:
// const cart = new ShoppingCart();
// cart.addItem({ name: "Apple", price: 0.99 });
// cart.addItem({ name: "Bread", price: 1.29 });
// console.log(cart.calculateTotal()); // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()); // 1.29

class ShoppingCart {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  #products = [];

  addItem(name, price) {
    const item = { name: name, price: price };
    this.#products.push(item);
  }
  getProducts() {
    return this.#products;
  }
  removeItem() {}

  calculateTotal() {}
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 0.99 });
cart.addItem({ name: "Bread", price: 1.29 });
// cart.getProducts();
console.log(cart.getProducts());
//console.log(#products);
// console.log(cart.calculateTotal()); // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()); // 1.29
