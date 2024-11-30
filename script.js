const containerEl = document.querySelector(".container");

for (let i = 0; i < 99999; i++) {
  const colorcontainerEL = document.createElement("div");

  colorcontainerEL.classList.add("color-container");

  containerEl.appendChild(colorcontainerEL);
}

const colorcontainerELs = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorcontainerELs.forEach((colorcontainerEL) => {
    const newColorCode = randomColor();
    colorcontainerEL.style.backgroundColor = "#" + newColorCode;
    colorcontainerEL.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

