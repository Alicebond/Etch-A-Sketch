"use strict";
const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector(".reset");
let n;

const createGrid = function (n = 32) {
  for (let i = 1; i <= n * n; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div).className = "grid-item";
  }

  gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
};

const drawLine = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) =>
    item.addEventListener("mouseenter", function (e) {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = "#" + randomColor;
    })
  );
};

createGrid(n);
drawLine();

const cleanGrid = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => (item.style.backgroundColor = ""));
  gridItems.forEach((item) => item.remove());
};

btn.addEventListener("click", function () {
  // console.log(gridItems);
  n = prompt("Change size (<= 100)", 32);

  if (n) {
    cleanGrid();
    createGrid(n);
    drawLine();
  }
});
