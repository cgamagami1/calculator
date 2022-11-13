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

function inputOperand(e) {
    if (operation === "") {
        if (isResultOperand) {
            firstOperand = "";
        }

        firstOperand = appendToOperand(firstOperand, e.target.id);
    }
    else {
        secondOperand = appendToOperand(secondOperand, e.target.id);
    }

    isResultOperand = false;
    updateScreen();
}

function appendToOperand(operand, num) {
    if (operand.length < 4) {
        if (num === "." && operand.includes(".")) {
            return;
        }

        operand += num;
    }

    return operand;
}

function inputOperation(e) {
    if (operation === "") {
        operation = e.target.id;
    }
    else {
        solveEquation(e.target.id);
    }

    isResultOperand = false;
    updateScreen();
}

function solveEquation(nextOperation) {
    if (operation !== "") {
        
        const operationMap = {
            "%": () => Number(firstOperand) % Number(secondOperand),
            "/": () => Number(firstOperand) / Number(secondOperand),
            "*": () => Number(firstOperand) * Number(secondOperand),
            "-": () => Number(firstOperand) - Number(secondOperand),
            "+": () => Number(firstOperand) + Number(secondOperand),
        };

        let result = operationMap[operation]();

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
    numButton.addEventListener("click", inputOperand);
}

allClearButton.addEventListener("click", clearAll);
clearButton.addEventListener("click", clear);
moduloButton.addEventListener("click", inputOperation);
divideButton.addEventListener("click", inputOperation);
multiplyButton.addEventListener("click", inputOperation);
subtractButton.addEventListener("click", inputOperation);
addButton.addEventListener("click", inputOperation);
pointButton.addEventListener("click", inputOperand);
equalsButton.addEventListener("click", solveEquation);
