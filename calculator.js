let displayBox = document.querySelector(".displayResult");

let showDisplay = (event) => {
  const key = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = key);
  }
  return (displayBox.innerHTML += key);
};

function calculate() {
  let result = displayBox.innerText;
  displayBox.innerText = eval(result);
}

function clearAll() {
  displayBox.innerText = 0;
}

function clearLast() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    return (displayBox.innerText = 0);
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".clearAll").addEventListener("click", clearAll);
document.querySelector(".clearLast").addEventListener("click", clearLast);

let list = document.querySelectorAll(".showDisplay");
list.forEach((item) => {
  item.addEventListener("click", showDisplay);
});
