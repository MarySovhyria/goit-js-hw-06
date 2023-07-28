function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");
btn.addEventListener("click", (event) => {
  text.textContent = getRandomHexColor();
  body.style.background = text.textContent;
}
)