// Calculator class constructor that will take all of the inputs for the calculator as well as all of the functions.
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    // Function to clear out the different variables on the calculator screen.
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    // Function for removing a single number/symbol on the calculator screen.
    delete() {

    }
    // Function to be initiated each time that a user clicks on a number to be added to the calculator screen.
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    // Function for when a user clicks on an operation symbol.
    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }
    // Function that takes the value of what is being displayed on the calculator and computes a single value.
    compute() {

    }
    // Function that updates the value of what is displayed in the output.
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

// Constants.
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-allClear]");
const previousOperandTextElement = document.querySelector("[data-previousOperand]");
const currentOperandTextElement = document.querySelector("[data-currentOperand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});
