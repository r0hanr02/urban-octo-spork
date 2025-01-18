// Get references to the input fields and result div
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const resultDiv = document.querySelector(".resultDiv");

// Function to perform addition
function add() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Please enter valid numbers!";
    } else {
        resultDiv.innerText = `Result: ${num1 + num2}`;
    }
}

// Function to perform subtraction
function subtract() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Please enter valid numbers!";
    } else {
        resultDiv.innerText = `Result: ${num1 - num2}`;
    }
}

// Function to perform division
function divide() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Please enter valid numbers!";
    } else if (num2 === 0) {
        resultDiv.innerText = "Division by zero is not allowed!";
    } else {
        resultDiv.innerText = `Result: ${num1 / num2}`;
    }
}

// Function to perform multiplication
function multiply() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Please enter valid numbers!";
    } else {
        resultDiv.innerText = `Result: ${num1 * num2}`;
    }
}

// Function to perform modulus
function modulus() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Please enter valid numbers!";
    } else {
        resultDiv.innerText = `Result: ${num1 % num2}`;
    }
}
