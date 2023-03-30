"use strict";
const ratings = document.getElementsByClassName("rating-number");
let rating = 0;

function onRatingClicked(ratingEl) {
  resetSelection();
  ratingEl.classList.toggle("selected");
  rating = ratingEl.textContent;
}

function resetSelection() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("selected");
  }
}

function onSubmit() {
  // Switch components
  const ratingsContainer = document.getElementById("ratings-container");
  const thanksContainer = document.getElementById("thank-you-container");
  ratingsContainer.classList.toggle("hide");
  thanksContainer.classList.toggle("hide");

  // Update rating
  const textEl = document.getElementById("you-selected");
  if (rating > 0) {
    textEl.textContent = `You selected ${rating} out of 5`;
  } else {
    textEl.textContent = "No rating selected";
  }
}
