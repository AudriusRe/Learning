const endpoint = "https://robust-safe-crafter.glitch.me/";
const offersDiv = document.querySelector("#offers");
const response = await fetch("https://robust-safe-crafter.glitch.me/");
const entries = await response.json();
const buttonContainer = document.querySelector(".filters");

async function getOffers() {
  const response = await fetch(endpoint);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

async function displayOffers() {
  const offers = await getOffers();
  offers.forEach((offer) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = offer.image;
    const price = document.createElement("h2");
    price.textContent = "€" + offer.price;
    const city = document.createElement("p");
    city.textContent = offer.city;
    const description = document.createElement("p");
    description.textContent = offer.description;

    card.append(img, price, city, description);
    offersDiv.append(card);
  });
}

displayOffers();

const differentCities = new Set(entries.map((e) => e.city));

differentCities.forEach((city) => {
  const button = document.createElement("button");
  button.textContent = city;

  button.addEventListener("click", () => {
    offersDiv.innerHTML = "";
    const filteredEntries = entries.filter((ent) => ent.city === city);
    displayOffers(filteredEntries);
  });
  buttonContainer.append(button);
});

///SUDAS GAUNAS SU FILTRAIS, NEUZSIDEDA
