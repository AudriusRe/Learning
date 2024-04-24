const button = document.querySelector("button"); //susikuriu kintamaji button ir pasirenku kad jis yra pirmas button esantis htmle

button.addEventListener("click", (event) => {
  console.log(event.target);
  console.log("mygtukas paspaustas");
});
//cia nusirodem kokio evento norim ir kas vyks kai bus ivykdytas eventas

button.addEventListener("mouseover", () => {
  console.log("pele virs mygtuko");
});

button.addEventListener("mouseleave", () => {
  console.log("pelyte pabego");
});

////////////////////////////////////////
/// PASIDAROM KAD TAI KA IRASOM I INPUTA ATSIVAIZUDOTU H1 HTML ELEMENTE
const h1 = document.querySelector("h1");

const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
  h1.textContent = e.target.value;
});
////////////////////////////////////////

///////KAIP PADARYTI KAD PASPAUDUS SUBMIT NEPERSIKRAUTU PUSLAPIS
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); //sitas nusako kad nedarytu numatytos funkcijos (perkrovimo)
  console.log("submit happened");
});
////////////////////////////////////////

function showTooltip(event, text) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = text;
  tooltip.style.top = event.pageY + 10 + "px";
  tooltip.style.left = event.pageX + 10 + "px";
  document.body.appendChild(tooltip);
}
function hideTooltip() {
  const tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
}

///////////

const a = document.querySelector("#aHover");

a.addEventListener("mouseover", (e) => {
  const tooltip = document.createElement("div");
  console.log(e.pageX);
  tooltip.textContent = "Kazkoks tekstas";
  tooltip.style.position = "absolute";
  tooltip.style.top = "${e.pageY}px";
  tooltip.style.left = "${e.pageX}px";
  tooltip.classList.add("tooltip");

  document.body.append(tooltip);
});

a.addEventListener("mouseleave", () => {
  const tooltip = document.querySelector(".tooltip");
  tooltip.remove();
});

/////////////////////////////////////
////pavyzdukas su mygtukais kurie prideda ir atima skaicius

const counterP = document.querySelector("p");
const incrementButton = document.querySelector("#incrementButton");
const decrementButton = document.querySelector("#decrementButton");

decrementButton.addEventListener("click", () => {
  counterP.textContent = +counterP.textContent - 1; //+ pries counterP pavercia stringa skaicium
});

incrementButton.addEventListener("click", () => {
  counterP.textContent = +counterP.textContent + 1;
});

//////////pavyzdio pabaiga

/////////////////KATUKAI
const imageSources = [
  "https://api.delfi.lt/media-api-image-cropper/v1/76b236f0-7d75-11ed-b72f-191449c87a87.jpg?noup&w=1200&h=711&fx=0.5&fy=0.25",
  "https://ve.lt/sites/default/files/styles/straipsnis_1x_640x422/public/2023-07/kaciukas.jpg?h=dfba89c9&itok=tAjRTtjZ",
  "https://drvet.lt/wp-content/uploads/2022/08/dog-bitting-2.png",
];

const image = document.querySelector("img");
const nextImageButton = document.querySelector("#next");
const previousImageButton = document.querySelector("#previous");

let currentImageIndex = 0;

nextImageButton.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > imageSources.length - 1) {
    currentImageIndex = 0;
  }

  image.src = imageSources[currentImageIndex];
});

previousImageButton.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = imageSources.length - 1;
  }
  image.src = imageSources[currentImageIndex];
});
