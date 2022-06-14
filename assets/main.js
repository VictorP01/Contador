let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

increment.addEventListener("click", function increment() {
  if (currentNumber >= 10) {
    this.removeEventListener();
  }
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = "black";
  }
});

decrement.addEventListener("click", function decrement() {
  if (currentNumber <= -10) {
    this.removeEventListener();
  }
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "red";
  }
});
