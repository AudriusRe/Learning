/////////////STRING METODAI
///LENGVAS1

const convertToUpperCase = (string) => {
  return string.toUpperCase();
};

console.log(convertToUpperCase("labas"));

//DONE
console.log("-----------");

//LENGVAS2

const extractSubstring = (string) => {
  return string.slice(2, 7);
};

console.log(extractSubstring("Sveikas pasauli"));
//DONE
console.log("-----------");

//VIDUTINIS1

function capitalizeFirstLetter(string) {
  const arr = string.split(" ");

  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(capitalizeFirstLetter("labas rytas, pasauli"));
///FAIL is interneto istraukiau
console.log("-----------");
//SUNKUS1

const censorCurseWords = (stringas, keiksmazodziai) => {
  let cenzuruotas = stringas;
  for (let i = 0; i < keiksmazodziai.length; i++) {
    const keiksmazodis = keiksmazodziai[i];
    while (cenzuruotas.includes(keiksmazodis)) {
      cenzuruotas = cenzuruotas.replace(keiksmazodis, "****");
    }
  }
  return cenzuruotas;
};

console.log(
  censorCurseWords(
    "Cia blet yra blet kazkokia nesamone blet kurios blet as nesugebu padaryti blet",
    ["blet"]
  )
);

///FAIL
console.log("-----------");
/////////////NUMBER METODAI
///LENGVAS1

let milkPrice = 1.23456;

if (milkPrice == milkPrice.toFixed()) {
  console.log("nereiks smulkių");
} else {
  console.log("reikės smulkių");
}

///DONE 50/50
console.log("-----------");
///LENGVAS2

if (milkPrice == milkPrice.toFixed()) {
  console.log("nereiks smulkių");
} else {
  console.log("reikės smulkių");
}
console.log(milkPrice.toFixed(2));
///DONE
console.log("-----------");

//VIDUTINIS1

const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([1, 2, 3, 666, 4, 5]));
//DONE
console.log("-----------");
////////////BOOLEAN METODAI
//LENGVAS1

let isLegalAge = false;
console.log(isLegalAge);
console.log(isLegalAge.toString());

//DONE
