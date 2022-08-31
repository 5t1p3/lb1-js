const colors = ["green", "red", "rgba(122,130,200)", "f15025"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
  const randomNum = getRandomNum();
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
  console.log(randomNum);
});
function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
