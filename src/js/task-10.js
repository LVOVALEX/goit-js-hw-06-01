const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amont = input.value;
  boxes.innerHTML = '';

  for (let i = 0; i < amont; i ++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
  }

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
