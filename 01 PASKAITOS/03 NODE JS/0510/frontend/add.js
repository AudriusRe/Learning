const bookEndpoint = `http://127.0.0.1:4000/book`

const form = document.querySelector("form")

const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const genreInput = document.querySelector("#genre")
const priceInput = document.querySelector("#price")
const quantityInput = document.querySelector("#quantity")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const genre = genreInput.value;
    const price = priceInput.value;
    const quantity = quantityInput.value;


    const response = await fetch(bookEndpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title,
            author,
            genre,
            price,
            quantity
        })
    })
    console.log(response);
    if (response.ok) {

    }
})