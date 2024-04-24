// klases susikurimas
class Car {
  //visu klasiu pavadinimai prasideda is didziosios raides
  drowned = false; //galime susikurti kintamaji klases viduje, nereikia rasyti nei let nei const
  #atsuktarida = true; //pries kazkokia informacija kurios nenorime viesai publikuoti, rasome groteles # (PRIVATUS KINTAMASIS)
  constructor(year, type) {
    //konstruktorius visada buna klaseje. tai kaip funkcija kuri yra iskvieciama kai musu kodas yra pirma karta iskvieciamas.
    this.year = year; //this reiskia sita objekta. siuo atveju butent siam objektui priskiriam atributa year ir priskiriam reiksme year
    this.type = type;
  }

  getDrowned() {
    //GETTERIS
    return this.#atsuktarida;
  }

  setAtsuktarida(newValue) {
    //SETTERIS
    this.#atsuktarida = newValue;
  }

  getDescription() {
    //kai funkcija yra klses viduje tai vadinama metodas. kai kuriame funkcija klases viduje, nereikia rasyti function
    console.log(
      `year: ${this.year} type: ${this.type} drowned: ${this.drowned}`
    );
  }
}

const bmw = new Car(2000, "sedan"); //cia paduodu informacija apie Car, kad jos metai yra 2000 (skliausteliai)
const vw = new Car(2018, "universalas");

//naudodami klases mes norime naudoti enkapsuliacija, kad negalima butu issitraukti visos informacijos, o tik ta kuria mes norime duoti
console.log(bmw.drowned);

bmw.setAtsuktarida(false);

console.log(bmw);
bmw.getDescription(); //issikvieciam funkcija is klases vidaus
vw.getDescription();

//////////////////////////////
/////paveldejimo pavyzdys/////
//////////////////////////////

class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

class Triangle extends Shape {
  //reikias triangle papildo shape. paima viska ka turi shape ir dar gali prisideti papildomai savo
  constructor(color, size) {
    super(color);
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}

const tr = new Triangle("red", 20);
console.log(tr);
console.log(tr.getColor());
console.log(tr.getSize());
