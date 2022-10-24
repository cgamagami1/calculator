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
let firstOperand = "";
let operation = "";
let secondOperand = "";

for (let i = 0; i <= 9; i++) {
    numButtons.push(document.getElementById(i));
}

function inputEquation(e) {
    if (!isNaN(e.target.id) || e.target.id === ".") {
        if (operation === "") {
            if (firstOperand.length < 5) {
                if (e.target.id !== "." || (e.target.id === "." && !firstOperand.includes("."))) {
                    firstOperand += e.target.id;
                }
            }
        }
        else {
            if (secondOperand.length < 5) {
                if (e.target.id !== "." || (e.target.id === "." && !secondOperand.includes("."))) {
                    secondOperand += e.target.id;
                }
            }
        }
    }
    else {
        if (firstOperand !== "" && operation === "") {
            operation = e.target.id;
        }
    }
    console.log(firstOperand + " " + operation + " " + secondOperand)
}

for (let numButton of numButtons) {
    numButton.addEventListener("click", inputEquation);
}

//allClearButton.addEventListener("click", inputEquation);
//clearButton.addEventListener("click", inputEquation);
moduloButton.addEventListener("click", inputEquation);
divideButton.addEventListener("click", inputEquation);
multiplyButton.addEventListener("click", inputEquation);
subtractButton.addEventListener("click", inputEquation);
addButton.addEventListener("click", inputEquation);
pointButton.addEventListener("click", inputEquation);
//equalsButton.addEventListener("click", inputEquation);
