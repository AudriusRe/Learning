const carsEndpoint = "http://127.0.0.1:3000/cars"

const carsContainer = document.querySelector("#carsContainer")

async function getCars() {
    const response = await fetch(carsEndpoint);
    const data = await response.json();
  
    return data;
  }

  async function refreshDiv() {
    const cars = await getCars();
    carsContainer.innerHTML = "";
    carsContainer.append(...generateArticles(cars));
  }

  function generateArticles(cars) {
      if (cars.length === 0) {
          const emptyPar = document.createElement("h4");
          emptyPar.classList.add("emptyPar")
          emptyPar.textContent = "SORRY, THERE ARE NO CARS TODAY. SEEE YOU NEXT DAY";
          carsContainer.append(emptyPar)
      };
      const articles = cars.map((car) => {
          const article = document.createElement("article");
          


        const articleCarNumber = document.createElement("h2");
        articleCarNumber.textContent = car.numberplates;

        const articleCarTitle = document.createElement("h4");
        articleCarTitle.textContent = car.title;

        const articleCarImage = document.createElement("img");
        articleCarImage.src = car.image;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";

        deleteButton.addEventListener("click", async () => {
            const response = await fetch(carsEndpoint + `/${car.id}`, {
              method: "DELETE"
            })
      
            if (response.ok) {
                refreshDiv()
                alert("Car deleted successfull")
            }
          })

        const topDiv = document.createElement("div")
        topDiv.classList.add("topDiv")
        const midDiv = document.createElement("div")
        midDiv.classList.add("midDiv")
        const botDiv = document.createElement("div")
        botDiv.classList.add("botDiv")

        topDiv.append(articleCarNumber, articleCarTitle)

        midDiv.append(articleCarImage)

        botDiv.append(deleteButton)

        article.append(topDiv, midDiv, botDiv);

        return article;
    })
    return articles;
  }

  refreshDiv()