const maintitle = document.querySelector("#title");
let curValue = 0;

const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");

btnIncrement.addEventListener("click", () => {
  curValue++;
  maintitle.textContent = curValue;
});

btnReset.addEventListener("click", () => {
  curValue = 0;
  maintitle.textContent = curValue;
});

btnDecrement.addEventListener("click", () => {
  curValue--;
  maintitle.textContent = curValue;
});