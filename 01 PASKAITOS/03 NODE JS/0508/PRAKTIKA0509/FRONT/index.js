const petEndpoint = `http://127.0.0.1:4000/pet`

const tBody = document.querySelector("tbody");

const form = document.querySelector("form")

const nameInput = document.querySelector("#name")
const typeInput = document.querySelector("#type")
const ageInput = document.querySelector("#age")


async function getPets() {
    const response = await fetch(petEndpoint);
    const data = await response.json()

    return data;
    
}

function generateTbody(pets) {
// tBody.innerHTML = ""

   const petTrs = pets.map((pet) => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = pet.name;
        
        const tdType = document.createElement("td");
        tdType.textContent = pet.type;
        
        const tdAge = document.createElement("td");
        tdAge.textContent = pet.age;
        
        const tdDelete = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"

        deleteButton.addEventListener("click", async () => {
            const response = await fetch(petEndpoint + `/${pet._id}`, {
                method: "DELETE"
            })

            if (response.ok) {
              const pt = await getPets();
              generateTbody(pt)  
            }
            console.log(response);
        })

        tdDelete.append(deleteButton);

        tr.append(tdName, tdType, tdAge, tdDelete);

        return tr;
    })

    tBody.append(...petTrs)
}

const pets = await getPets();

generateTbody(pets)

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const type = typeInput.value;
    const age = ageInput.value;

    const response = await fetch(petEndpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name,
            type,
            age
        })
    })
    console.log(response);
    if (response.ok) {
       const pets = await getPets();
       
       generateTbody(pets)
    }
})