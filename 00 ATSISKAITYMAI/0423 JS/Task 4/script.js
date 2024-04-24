/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const outputDiv = document.querySelector("#output");

async function getCars() {
  const response = await fetch("./cars.json");
  const cars = await response.json();
  return cars;
}

async function displayCars() {
  const cars = await getCars();
  cars.forEach((brand) => {
    const brandDiv = document.createElement("div");
    const brandName = document.createElement("h2");
    brandName.textContent = `Current car models for ${brand.brand} manufacturer:`;

    const modelsList = document.createElement("ul");

    brand.models.forEach((model) => {
      const modelItem = document.createElement("li");
      modelItem.textContent = model;
      modelsList.append(modelItem);
    });
    brandDiv.append(brandName, modelsList);
    outputDiv.appendChild(brandDiv);
  });
}

window.addEventListener("load", function () {
  displayCars();
});
