/////////////////////MANO VERSIJA
export default (app) => {
  const cars = ["BMW", "VW", "AUDI", "MB"];
  app.innerHTML += `
  <ul>
  <li>${cars[0]}</li>
  <li>${cars[1]}</li>
  <li>${cars[2]}</li>
  <li>${cars[3]}</li>
  </ul>
  `;
};

////////////////////COA VERSIJA

// function addCarBrandsToApp(app) {
//   const carBrands = ["BMW", "VW", "AUDI", "MB"];
//   const carListItems = carBrands.map((brand) => `<li>${brand}</li>`);
//   const carListHtml = `<ul>${carListItems.join("")}</ul>`;
//   app.innerHTML += carListHtml;
// }

// module.exports = { addCarBrandsToApp };
