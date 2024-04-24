// Fetch API: Užduotys
// Dating Website
// VIDUTINIS

// Įsivazduokite, kad dirbate prie pažinčių portalo produkto – jūsų užduotis greitai sukurti puslapį, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų puslapyje.

// Svarbu atvaizduoti:
// Nuotrauką
// Vardą
// Amžių
// El. pašto adresą

///////////////////////////////MANO BANDYMAS
// const info = "https://randomuser.me/api/";
// const divas = document.querySelector("div");

// async function getInfo() {
//   const atsakymas = await fetch(info);
//   const data = await atsakymas.json();
//   console.log(data);
//   return data;
// }

// async function addData() {
//   const info = await getInfo();
//   const infoElements = info.map((inf) => {
//     const img = document.createElement("img");
//     const vardas = document.createElement("h3");
//     const amzius = document.createElement("h3");
//     const mailas = document.createElement("p");

//     img.src = inf.picture.medium;
//     vardas.textContent = `${inf.name.first}, ${inf.name.last}`;
//     amzius.textContent = inf.dob.age;
//     mailas.textContent = inf.email;
//   });
//   divas.append(...infoElements);
// }
// console.log(getInfo());

/////////////////MANO VERSIJOS PABAIGA

//////////////// ATSAKYMAS
const renderUserCard = (user) => {
  //SUKURIAMA FUNKCIJA HTML KORTELES SUKURIMUI

  const img = document.createElement("img"); //SUKURIAMAS IMG
  img.src = user.picture.large; //NURODOMAS IMG ADRESAS KAD PAIMTI PATI IMG ATVAIZDAVIMUI
  img.alt = `${user.name.first} profile picture`; //NURODOMAS ALT TEKSTAS, JEI NERODYTU IMG

  const intro = document.createElement("h4"); //SUKURIAMAS INTRO
  intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`; //NURODOMA KAD REIKIA ATKARTOTI VARDA, PAVARDE IR AMZIU.
  ///////////////INNERTEXT YRA BEVEIK TAS PATS TEXTCONTENT

  const contacts = document.createElement("h5"); //SUKURIAMAS MAILAS
  contacts.innerText = user.email; //NURODOMA IS KUR ISTRAUKTI TA MAILA

  const card = document.createElement("div"); //SUKURIAMAS DIVAS
  card.append(img, intro, contacts); //NURODOMA, KAD I DIVA DEDAM IMG INTRO IR CONTACTS
  document.body.append(card); //NURODOMA, KAD DIVAS PRIDEDAMAS I HTML FAILA
};

const fetchRandomUser = async () => {
  //ASINCHRONINE FUNKCIJA DUOMENU IR DUOMBAZES PAEMIMUI
  try {
    //BANDOM
    const response = await fetch("https://randomuser.me/api/"); //LAUKIAM KOL PAIMS DUOMENIS IS NURODYTO PUSLAPIO
    if (response.ok) {
      //JEI VISKAS GERAI IR GAOVM DUOMENIS
      const data = await response.json(); //ISSITRAUKIAM DUOMENIS I KINTAMAJI DATA
      renderUserCard(data.results[0]); //PERDUODAM KINTAMOJO DATA PIRMA ELEMENTA (NES TAI YRA ARRAY) I AUKSCIAU SUSIKURTA FUNKCIJA
    }
  } catch (error) {
    //BANDOM PAGAUTI ERRRORA, BET MAN NERA IKI GALO AISKU
    console.error(error);
  }
};

fetchRandomUser(); //PALEIDZIAM FUNKCIJA DUOMENU ISTRAUKIMUI, KURI, JEI GAUS DUOMENIS, SUKURS HTML ELEMENTA

//////////////////////NOT COOL

/////////////////////////////////////////////////////////
// VIP
// VIDUTINIS

// Naudojant https://party-wedding.glitch.me/v1/party – pasiimkite informaciją iš šio puslapio ir naudodami skirtingus array metodus, transformuokite duomenis bei išveskite true/false ekrane – ar "Kristupas Lapeika" yra VIP, ar ne?

const checkIfPersonVIP = (guests, guestName) => {
  const guest = guests.find((guest) => guest.name === guestName);
  document.body.innerText = guest
    ? `${guestName} ${guest.vip ? "is" : "isn't"} a VIP`
    : `${guestName} isn't found in the guest list`;
};

const fetchPartyGuests = async () => {
  try {
    const response = await fetch("https://party-wedding.glitch.me/v1/party");
    if (response.ok) {
      const guests = await response.json();
      checkIfPersonVIP(guests, "Kristupas Lapeika");
    }
  } catch (error) {
    console.error(error);
  }
};

fetchPartyGuests();

/////////////////////////////////////////////////////////////////////
//   const renderUserCard = (user) => {
//     const img = document.createElement('img');
//     img.src = user.picture.large;
//     img.alt = `${user.name.first} profile picture`;

//     const intro = document.createElement('h4');
//     intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

//     const contacts = document.createElement('h5');
//     contacts.innerText = user.email;

//     const card = document.createElement('div');
//     card.append(img, intro, contacts);
//     document.body.append(card);
//   };

//   const fetchRandomUser = async () => {
//     try {
//       const response = await fetch('https://randomuser.me/api/');
//       if (response.ok) {
//         const data = await response.json();
//         renderUserCard(data.results[0]);
//       }
//     } catch(error) {
//       console.error(error);
//     }
//   };

//   fetchRandomUser();
