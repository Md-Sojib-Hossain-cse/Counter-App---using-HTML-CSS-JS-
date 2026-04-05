let result = document.getElementById("result");

const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const decreasebtn = document.getElementById("decreasebtn");

increasebtn.addEventListener("click", () => {
  let currentResult = parseInt(result.innerText);

  if (currentResult >= 99) {
    return;
  }

  result.innerText = currentResult + 1;
});

decreasebtn.addEventListener("click", () => {
  let currentResult = parseInt(result.innerText);

  if (currentResult <= 0) {
    return;
  }
  result.innerText = currentResult - 1;
});

resetbtn.addEventListener("click", () => {
  result.innerText = 0;
});
