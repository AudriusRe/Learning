const carsEndpoint = "http://127.0.0.1:3000/cars"

const form = document.querySelector("form");
const titleInput = document.querySelector("#carTitleInput");
const imageInput = document.querySelector("#carImageInput");
const priceInput = document.querySelector("#carPriceInput");
const platesInput = document.querySelector("#carPlatesInput")

const addCarButton = document.querySelector("#addCarButton");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const title = titleInput.value;
    const image = imageInput.value;
    const price = priceInput.value;
    const numberplates = platesInput.value;
  
    const response = await fetch(carsEndpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title,
        image,
        price,
        numberplates
      })
    }) 
    form.reset();  
    alert("CAR ADDDED SUCCESSFUL")
  })