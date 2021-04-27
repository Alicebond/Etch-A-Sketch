"use strict";
const container = document.querySelector(".container");
const btn = document.querySelector(".reset");
let n;

const createGrid = function (n = 32) {
  for (let i = 1; i <= n * n; i++) {
    const div = document.createElement("div");
    container.appendChild(div).className = "grid-item";
  }

  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
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
  n = prompt("How many squares per side to make the new grid (<= 100)?", 32);

  if (n) {
    cleanGrid();
    createGrid(n);
    drawLine();
  }
});
