const noBtn = document.getElementById("noBtn");
const actions = document.querySelector(".actions");
const yesBtn = document.getElementById("yesBtn");
const cardImage = document.querySelector(".card-image img"); // the main card image
const result = document.querySelector(".result");

// Prepare NO button for movement
noBtn.style.position = "absolute";
noBtn.style.transition = "none";
noBtn.style.transform = "none";

// Function to move NO button safely
function moveNoButton() {
  const containerWidth = actions.offsetWidth;
  const containerHeight = actions.offsetHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Calculate safe boundaries
  const maxX = containerWidth - btnWidth;
  const maxY = containerHeight - btnHeight;

  // Random position
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Trigger BEFORE user can click
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// ==========================
// YES button click handler
// ==========================
const yesGif = "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"; // replace with your fun GIF

yesBtn.addEventListener("click", () => {
  // Fade out old image
  cardImage.style.opacity = 0;

  // Change GIF after fade out
  setTimeout(() => {
    cardImage.src = yesGif;
    cardImage.style.opacity = 1;
  }, 300);

  // Show message
  result.innerText = "Yay! You made the right choice 😎";

  // Optional: hide the NO button
  noBtn.style.display = "none";
});
