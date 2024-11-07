function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operator = document.getElementById("operator").value; // Get the selected operator value
    let result;

    if (operator === "Addition") {
        result = firstNumber + secondNumber;
    } else if (operator === "Subtraction") {
        result = firstNumber - secondNumber;
    } else if (operator === "Multiplication") {
        result = firstNumber * secondNumber;
    } else if (operator === "Division") {
        result = firstNumber / secondNumber; // Avoid using Math.round to keep division accuracy
    } else {
        result = "Please select a valid operator";
    }

    document.getElementById("result").innerText = "Result: " + result;
}
