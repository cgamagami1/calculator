const allClearButton = document.getElementById("AC");
const clearButton = document.getElementById("C");
const moduloButton = document.getElementById("%");
const divideButton = document.getElementById("/");
const multiplyButton = document.getElementById("*");
const subtractButton = document.getElementById("-");
const addButton = document.getElementById("+");
const pointButton = document.getElementById(".");
const equalsButton = document.getElementById("=");
const numButtons = [];

for (let i = 0; i <= 9; i++) {
    numButtons.push(document.getElementById(i));
}
