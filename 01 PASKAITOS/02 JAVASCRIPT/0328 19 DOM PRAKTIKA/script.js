/////////////////////
//CIA PASPAUDUS ANT KORTOS, ATSIVERCIA VISI PAVEIKSLIUKAI IR LIEKA ATSIVERTE

// const card = document.querySelectorAll(".kvadrat");
// const image = document.querySelectorAll("img");

// card.forEach((card) => {
//   card.addEventListener("click", () => {
//     const image = card.querySelector("img");
//     if (image) {
//       image.style.display = "block";
//     }
//   });
// });

//////////////////////
//CIA GALIMA ATVERSTI DVI KORTAS IR PO DVIEJU SEKUNDZIU JOS UZSIVERCIA NEPRIKLAUSOMAI AR VIENODOS AR NE

const cards = document.querySelectorAll(".kvadrat");
let timeoutId;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (img) {
      img.style.display = "block"; // Or any other display value you prefer
      clearTimeout(timeoutId); // Clear previous timeout
      timeoutId = setTimeout(() => {
        cards.forEach((card) => {
          const img = card.querySelector("img");
          if (img) {
            img.style.display = "none";
          }
        });
      }, 2000); // Hide images after 3 seconds
    }
  });
});

//////////////////////
