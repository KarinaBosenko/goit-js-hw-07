function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const btnChangeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}
