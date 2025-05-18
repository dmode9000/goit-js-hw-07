function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".widget .change-color");
const colorTextSpan = document.querySelector(".widget .color");
const paragrafText = document.querySelector(".widget p");
button.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTextSpan.textContent = color;
});
