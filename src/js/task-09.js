const buttonColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const colorValue = document.querySelector('.color');

buttonColor.addEventListener('click', btnColorHandler);

function btnColorHandler(e) {
  bodyColor.style.backgroundColor = colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
