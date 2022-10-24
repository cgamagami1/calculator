const screen = document.getElementById("screen");
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
let isResultOperand = false;

for (let i = 0; i <= 9; i++) {
    numButtons.push(document.getElementById(i));
}

function updateScreen() {
    screen.textContent = firstOperand + operation + secondOperand; 
}

function inputEquation(e) {
    if (!isNaN(e.target.id) || e.target.id === ".") {
        if (operation === "") {
            if (isResultOperand) {
                firstOperand = "";
            }

            if (firstOperand.length < 4) {
                if (e.target.id !== "." || (e.target.id === "." && !firstOperand.includes("."))) {
                    firstOperand += e.target.id;
                }
            }
        }
        else {
            if (secondOperand.length < 4) {
                if (e.target.id !== "." || (e.target.id === "." && !secondOperand.includes("."))) {
                    secondOperand += e.target.id;
                }
            }
        }
    }
    else {
        if (!isNaN(firstOperand) && operation === "") {
            operation = e.target.id;
        }
        else if (!isNaN(firstOperand) && operation !== "" && !isNaN(secondOperand)) {
            solveEquation(e.target.id);
        }
    }

    isResultOperand = false;
    updateScreen();
}

function solveEquation(nextOperation) {
    if (!isNaN(firstOperand) && operation !== "" && !isNaN(secondOperand)) {
        let result = 0;

        switch (operation) {
            case "%":
                result = Number(firstOperand) % Number(secondOperand);
                break;
            case "/":
                result = Number(firstOperand) / Number(secondOperand);
                break;
            case "*":
                result = Number(firstOperand) * Number(secondOperand);
                break;
            case "-":
                result = Number(firstOperand) - Number(secondOperand);
                break;
            case "+":
                result = Number(firstOperand) + Number(secondOperand);
                break;
        }

        if (result === Infinity || isNaN(result)) {
            alert("Error");
            clearAll();
        }
        else {
            result = Math.round((result + Number.EPSILON) * 100) / 100;
            firstOperand = result.toString();
            operation = typeof nextOperation === "string" ? nextOperation : "";
            secondOperand = "";
            isResultOperand = true;
        }

        updateScreen();
    }
}

function clear() {
    if (secondOperand !== "") {
        secondOperand = secondOperand.slice(0, secondOperand.length - 1);
    }
    else if (operation !== "") {
        operation = "";
    }
    else if (firstOperand !== "") {
        firstOperand = firstOperand.slice(0, firstOperand.length - 1);
    }

    updateScreen();
}

function clearAll() {
    firstOperand = "";
    operation = "";
    secondOperand = "";

    updateScreen();
}

for (let numButton of numButtons) {
    numButton.addEventListener("click", inputEquation);
}

allClearButton.addEventListener("click", clearAll);
clearButton.addEventListener("click", clear);
moduloButton.addEventListener("click", inputEquation);
divideButton.addEventListener("click", inputEquation);
multiplyButton.addEventListener("click", inputEquation);
subtractButton.addEventListener("click", inputEquation);
addButton.addEventListener("click", inputEquation);
pointButton.addEventListener("click", inputEquation);
equalsButton.addEventListener("click", solveEquation);
