const sayName = () => {
  const name = "Audrius";
  console.log(name);
};

sayName();

////

const giveRandom = () => {
  const random = Math.floor(Math.random() * 5) + 1;
  console.log(random);
};

giveRandom();

///

const suma = (vardas, pavarde) => {
  return vardas.length + pavarde.length;
};

console.log(suma("Petras", "Slekys"));

///

const raide = (i) => {
  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Z",
  ];
  return abc[i];
};
console.log(raide(5));

/////
