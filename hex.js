const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector("#color");
btn.addEventListener("click", function () {
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash += hex[getRandomNum()];
  }
  color.textContent = hash;
  document.body.style.backgroundColor = hash;
});
function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}
