// Teksto elemento kūrimas
// LENGVAS
// Susikurkite projektą, be jokių HTML elementų <body> viduje.
// Sukurkite funkciją createTextElement, kuri sukuria ir grąžina naują DOM elementą p su pateiktu tekstu  ir pridėkite į <body>.

function createTextElement() {
  const p = document.createElement("p");
  p.textContent = "pateiktas tekstas";
  const body = document.querySelector("body");
  body.appendChild(p);
}

createTextElement();

///D O N E

//////////////////////////////////////////////////////////////////////////

// Elemento atnaujinimas
// LENGVAS
// Sukurkite HTML faile <h1> žymą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .
const h1 = document.querySelector("h1");
h1.textContent = "Audrius";

///DONE BE TAGO PAIESKOS

///////////////////////////////////////////////////////////////////////////

// Klaida DOM’e
// LENGVAS
// Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':
// <p class="redtext">This text will be in <span>red</span></p>
// <p class="bluetext">This text will be in <span>red</span></p>
// <p class="yellowtext">This text will be in <span>yellow</span></p>

const spanas = document.querySelector(".bluetext").querySelector("span");
spanas.textContent = "blue";

///D O N E

// Automobilių gamintojų sąrašas
// VIDUTINIS
// Sukurkite ordered list su trimis list item duota eilės tvarka: "BMW group", "VW group" ir "GE".
// <ol>
//   <li>BMW group</li>
//   <li>VW group</li>
//   <li>GE</li>
// </ol>
// Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma, Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

const allLi = document.querySelectorAll("li");
const liFirst = [allLi[0].outerText];
const liSecond = [allLi[1].outerText];
const firstLi = document.querySelector("li:first-child");
const secLi = document.querySelector("li:nth-child(2");
firstLi.textContent = liSecond;
secLi.textContent = liFirst;

///50/50 D O N E

// Prekių sąrašas
// VIDUTINIS
// Sukurkite funkciją createList, kuri priima masyvą su tekstu ir sukuria DOM ul elementą su li vaikais, atitinkančiais masyvo elementus.
// Pavyzdys, kaip galime naudoti šią funkciją:
// document.body.appendChild(sukurtiSarasa(["Pienas", "Duona", "Kiaušiniai"]))

function createList(arr) {
  const ul = document.createElement("ul");
  arr.forEach((pr) => {
    const li = document.createElement("li");
    li.textContent = pr;
    ul.append(li);
  });
  return ul;
}
document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]));

//BUVAU NEIRASES TIK 74 EILUTES, NIGA
