//NURODAU KAS YRA RESPONSE - TAI YRA LINKAS I DUOMBAZE
const response = await fetch("https://polar-chartreuse-silverfish.glitch.me/");
//SAKAU, KAD ENTRIES YRA ARRAY PAIMTAS IS DUOMBAZES SU INFORMACIJA APIE KIEKVIENA ARRAY ELEMENTA
const guests = await response.json();
//PASITIKRINIMUI ISSIKONSOLINU ENTRIES AR TIKRAI TAIP IR YRA (YRA)
console.log(guests);
//SUSIKURIU DIVA KURIAME BUS ATVAIZDUOJAMI SVECIAI
const guestList = document.querySelector(".guestList");

async function getGuests() {
  const responseGuests = await fetch(
    "https://polar-chartreuse-silverfish.glitch.me/"
  );
  const data = await responseGuests.json();
  return data;
}

//////////LENTELES SUKURIMAS + VARDO IR PAVARDĖS ATSKYRIMAS + NUOTRAUKOS PRIDĖJIMAS
async function displayGuests() {
  const guestsai = await getGuests();
  guestsai.forEach((guest) => {
    const guestCard = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = guest.id;
    // const fullName = document.createElement("td");
    // fullName.textContent = guest.name;
    const foto = document.createElement("td");
    const img = document.createElement("img");
    img.src = guest.image;
    foto.append(img);
    const fullNameArray = guest.name.split(" ");
    const firstName = document.createElement("td");
    firstName.textContent = fullNameArray[0];
    const lastName = document.createElement("td");
    lastName.textContent = fullNameArray[1];
    const city = document.createElement("td");
    city.textContent = guest.city;
    const favColor = document.createElement("td");
    favColor.textContent = guest.fav_color;

    guestCard.append(id, foto, firstName, lastName, city, favColor);
    guestList.append(guestCard);
  });
}

displayGuests();
