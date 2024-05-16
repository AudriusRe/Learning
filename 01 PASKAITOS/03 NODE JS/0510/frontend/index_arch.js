const bookEndpoint = `http://127.0.0.1:4000/book`

const tBody = document.querySelector("tbody");

const form = document.querySelector("form")

const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const genreInput = document.querySelector("#genre")
const priceInput = document.querySelector("#price")
const quantityInput = document.querySelector("#quantity")


async function getBooks() {
    const response = await fetch(bookEndpoint);
    const data = await response.json()

    return data;
    
}

function generateTbody(books) {

   const bookTrs = books.map((book) => {
        const tr = document.createElement("tr");

        const tdTitle = document.createElement("td");
        tdTitle.textContent = book.title;
        
        const tdAuthor = document.createElement("td");
        tdAuthor.textContent = book.author;
        
        const tdGenre = document.createElement("td");
        tdGenre.textContent = book.genre;
        
        const tdPrice = document.createElement("td");
        tdPrice.textContent = book.price;
        
        const tdQuantity = document.createElement("td");
        tdQuantity.textContent = book.quantity;

        const tdDelete = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"

        deleteButton.addEventListener("click", async () => {
            const response = await fetch(bookEndpoint + `/${book._id}`, {
                method: "DELETE"
            })

            if (response.ok) {
              const bk = await getBooks();
              generateTbody(bk)  
            }
            console.log(response);
        })

        tdDelete.append(deleteButton);

        tr.append(tdTitle, tdAuthor, tdGenre, tdPrice, tdQuantity, tdDelete);

        return tr;
    })

    tBody.append(...bookTrs)
}

const books = await getBooks();

generateTbody(books)

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
       const books = await getBooks();
       
       generateTbody(books)
    }
})