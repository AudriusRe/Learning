const h1 = document.getElementById("tekstas"); //cia pasidarom elemento paieska pagal ID
//getelementbyid visada grazins tik viena elementa, nes viena id gali tureti tik vienas elementas
console.log(h1);
//cia pavyzdys kaip mes galime i js isikelti html elementa

const elementsWithTestClass = document.getElementsByClassName("tekstas"); //suranda visus elementus su tokia klase ir juos grazina kaip array

console.log(elementsWithTestClass);

//********+ */
//QUERYSELECTOR naudosime daziniausiai, kad surastume kazkokius elementus
//querySelector randa tik viena ir tik pirma elementa pagal nurodytus duomenis
const firstPar = document.querySelector(".tekstas");
console.log(firstPar);

const par = document.querySelector("p");
console.log(par);

//QUERYSELECTORALL suranda visus elementus pagal nurodytus duomenis
const allPar = document.querySelectorAll("p");
//kadangi elementu ne vienas, tad grazins array-like object
console.log(allPar);
/////////////////////
//ARRAY-LIKE OBJECTS
//HTMLCollection ir NODELIST neturi array metodu
console.log(allPar[0]); //galima pasirinkti kuri norim surasta elementa

const allParArr = [...allPar]; //konvrtuojame i normalu array
console.log(allParArr); //issiloginam normalu tradicini array

///////////////////////////////

const div = document.querySelector("div");
console.log(div);
const prevSib = div.previousElementSibling; //taip susirandame elementa kuris buvo pries musu pasirinkta diva tame paciame lygyje
console.log(prevSib);

const nextSib = div.nextElementSibling;
console.log(nextSib);

const firstChild = div.firstElementChild;
console.log(firstChild);

console.log(div.parentNode);

////////////////////////

const h3 = document.querySelector(".text");
console.log(h3.style.color); //nors tekstas is saves juodas, taciau cia grazina tik tuos stilius kuriuos esame uzdeje ant to elemento

h3.style.color = "green"; //galim pakeisti stiliu

console.log(h3.classList); //galima paziureti kokias klases esame uzdeje ant kokio elemento

h3.classList.add("bigText"); //galime prideti papildoma klase is css failo

h3.classList.remove("text"); //galima ir nuimti kokia nors klase

console.log(h3.classList.contains("text")); //galim pasitikrinti ar yra uzdeta paieskoma klase

////////////NAUJO ELEMENTO KURIMAS

const a = document.createElement("a"); //galime susikurti elementa ir jam prideti ivairiu dalyku kaip stiliai, id, tekstas ir pan...
a.textContent = "sitas elementas sukurtas JS'e";
a.id = "sukurtasId";
a.classList.add("bigText");
console.log(a); //issikonsilinam ji

///KAZKAIP TAI JI REIKIA PRIDETI, NES NERODO EKRANE???
//pridesiu ta susikurta a prie divo

div.appendChild(a); //va taip pridedam elementa kaip paskutinis child
div.prepend(a); //va cia pridedam kaip pirma child

/////////APPEND CHILD LEIDZIA PRIDETI TIK HTML ELEMENTUS SUKURTUS PER JS
/////////APPEND LEIDZIA PRIDETI BET KA
const p = document.createElement("p");

p.textContent = "belekas parasyta seniukai";

div.append(p);
div.append("LOL");
div.append("vienas", "du", "trys", "keturi");

////////////////KAIP PANAIKINTI KOKI ELEMENTA
///////////ELEMENTU SALINIMAS

div.removeChild(p); //Pasalina vaikini html elementa. turime nurodyti kuri

a.remove();

document.querySelector("#tekstas").remove();

/////////////////////////// ARRAY ELEMENTU PRIDEJIMO I HTML PAVYZDYS
const products = ["pienas", "alus", "bulka"]; // array su stringais

const productsListElement = document.querySelector("ul"); //pasiimam is html jau sukurta ul elementa

products.forEach((pr) => {
  //einam oer visus array elementus
  const li = document.createElement("li"); //kiekviena syki susikurdami po nauja li elementa
  li.textContent = pr; //duodam teksta toki koks yra array
  productsListElement.append(li); //pridedam susikura li elementa prie ul elemento galo
});

/////////////
