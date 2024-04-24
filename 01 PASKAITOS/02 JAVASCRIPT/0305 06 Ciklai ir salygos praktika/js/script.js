// LENGVAS1 - DONE
// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 1 iki 5.
console.log("LENGVAS1");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// LENGVAS2 - DONE
// Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 naudojant while ciklą.
console.log("LENGVAS2");

let j = 0;
let sum = 0;
while (j < 5) {
  j++;
  sum += j;
}
console.log(sum);

// LENGVAS 3 - DONE, BET NEŽINAU AR TAIP REIKĖJO PADARYTI
// Parašykite JavaScript for ciklą, kuris atspausdina visus lyginius skaičius nuo 2 iki 10.
console.log("LENGVAS3");

for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

// LENGVAS 4 - DONE, GAL TAIP REIKEJO
// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 10 iki 1 atbuline tvarka.
console.log("LENGVAS4");

for (let i = 10; i > 0; i--) {
  console.log(i);
}

//////////////////MEDIUM ZONA
// MEDIUM 1 - FAIL
// Sukurkite JavaScript programą, kuri naudojant while ciklą suskaičiuoja, kiek yra skaičių (nuo 1 iki 20), kurie dalijasi iš 3.
console.log("MEDIUM1");
// reikia kad programa imtu kintamaji i, kuris lygus 0, patikrintu ar 0 % 3 === 0, jei true, tai tą skaičių deda į array, po to prie vieneto prideda dar vieneta ir taip suka kol i + 20.  paskui .loginam (array.length).
let i = 1;
let kiekis = 0;

while (i <= 20) {
  if (i % 3 === 0) {
    kiekis++;
  }
  i++;
}
console.log(kiekis);

//SUDA SUGALVOJAU, VISKAS PAPRASCIAU NEI AS MANIAU, BET KAZKAIP GALVOJAU, KAD IF NEGALIMA NAUDOTI... LOPAS

// MEDIUM 2 - SU CHAT GPT PAGALBA
// Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą.
console.log("MEDIUM2");

// tai cia programa turetu paimti pirma skaiciu is array ir palyginti ar jis didesnis uz antra skaiciu.  Jei didesnis, tai tada perkelti ta skaiciu i nauja array, ir ta pati skaiciu tikrinti su treciu skaicium. Iskonsolint nauja array

let arr1 = [37, 82, 65, 28, 91];
let greatest = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > greatest) {
    greatest = arr1[i];
  }
}
console.log(greatest);

// MEDIUM 3 - BE CHAT GPT, TIK SU UZRASAIS!!!!!!!!!!!! SIAIP NE ARRAY REIKEJO O TIESIOG ISSPAUSDINTI I CONSOLE LOGA :(
// Sukurkite JavaScript funkciją, kuri išspausdina visus skaičiaus 15 daliklius.
console.log("MEDIUM3");

// skaiciaus 15 dalikliai yra 1, 3, 5 ir 15
// reikia paimti i = 15; i > 0; i--
// pirma skaiciu 15 % i === 0, jei true tai ta skaiciu dedam i nauja array
// iskonsolinam nauja array

let divisors = [];
for (let i = 15; i > 0; i--) {
  if (15 % i === 0) {
    divisors.push(i);
  }
}
divisors = divisors.reverse();
console.log(divisors);

//REALIAI TUREJO BUTI TAIP
//ORIGINAL CODE START
// for (let i = 1; i <= 15; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }
//ORIGINAL CODE END

////////////////////////HARD ZONA
// SUNKUS1 - DONE PAGAL MEDIUM 3 PAVYZDI
console.log("SUNKUS1");
//Sukurkite JavaScript programą, kuri naudojant for ciklą išfiltruoja ir atspausdina visus nelyginius skaičius iš masyvo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Nelyginius skaičius saugokite naujame masyve oddNumbers

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = [];

for (let i = 1; i <= arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    oddNumbers.push(i);
  }
}
console.log(oddNumbers);

// SUNKUS 2 - F A I L
console.log("SUNKUS2");
//Parašykite JavaScript ciklą, kuris atspausdina visus pirminius skaičius nuo 1 iki 20.
// 2 3 5 7 11 13 17 19

for (let i = 1; i <= 20; i++) {
  let isPrime = true;
  if (i > 1) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

// SUNKUS 3 - FAIL
console.log("SUNKUS3");
//Parašykite JavaScript programą, kuri naudojant for ciklą atspausdina pirmus dešimt Fibonačio sekos skaičius.
// tie skaiciai yra 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
let n1 = 0,
  n2 = 1,
  nextTerm;
for (let i = 1; i <= 10; i++) {
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
  console.log(nextTerm);
}
