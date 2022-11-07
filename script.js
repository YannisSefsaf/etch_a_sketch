const container = document.querySelector(".container");
const range = document.querySelector("#range");
const gridValue = document.querySelector(".grid-value");
let items = document.querySelectorAll(".item");
const reset = document.querySelector(".reset");

let HTML = "";
let numSquare = Number(range.value) ** 2;

gridValue.innerText = `${range.value} x ${range.value}`;

window.addEventListener("DOMContentLoaded", () => {
  container.innerHTML = HTML;
  generateHTML(numSquare);
});

function generateHTML(num) {
  HTML = "";
  container.style.cssText = `grid-template-columns: repeat(${Number(
    range.value
  )}, 1fr); grid-template-rows: repeat(${Number(range.value)}, 1fr)`;
  for (let i = 0; i < num; i++) {
    HTML += `<div class="item"></div>`;
  }
  items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      console.log("test!");
      item.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  container.innerHTML = HTML;
  generateHTML(numSquare);
  console.log(numSquare);
});

range.addEventListener("input", () => {
  numSquare = Number(range.value) ** 2;
  generateHTML(numSquare);
  container.innerHTML = HTML;
  gridValue.innerText = `${range.value} x ${range.value}`;
  console.log(numSquare);
  items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      console.log("test!");
      item.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    });
  });
});

function randomColor() {
  return Math.floor(Math.random() * 255 + 1);
}

reset.addEventListener("click", () => {
  items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.style.backgroundColor = "#FFF";
  });
});

// J'ai d'abord créé un container vide.
// En fonction d'un nombre choisi
// Créer un nombre correspondant de carrés à l'intérieur du container
