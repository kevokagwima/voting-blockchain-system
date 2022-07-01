const cards = document.querySelectorAll(".card");

const card1 = cards[0];
const card2 = cards[1];
const card3 = cards[2];

card1.addEventListener("click", () => {
  if (card2.classList.contains("cards") || card3.classList.contains("cards")) {
    card2.classList.remove("cards");
    card2.firstElementChild.classList.remove("show-selected");
    card3.classList.remove("cards");
    card3.firstElementChild.classList.remove("show-selected");
  }
  card1.classList.toggle("cards");
  card1.firstElementChild.classList.toggle("show-selected");
});

card2.addEventListener("click", () => {
  if (card1.classList.contains("cards") || card3.classList.contains("cards")) {
    card1.classList.remove("cards");
    card1.firstElementChild.classList.remove("show-selected");
    card3.classList.remove("cards");
    card3.firstElementChild.classList.remove("show-selected");
  }
  card2.classList.toggle("cards");
  card2.firstElementChild.classList.toggle("show-selected");
});

card3.addEventListener("click", () => {
  if (card1.classList.contains("cards") || card2.classList.contains("cards")) {
    card1.classList.remove("cards");
    card1.firstElementChild.classList.remove("show-selected");
    card2.classList.remove("cards");
    card2.firstElementChild.classList.remove("show-selected");
  }
  card3.classList.toggle("cards");
  card3.firstElementChild.classList.toggle("show-selected");
});
