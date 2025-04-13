var counter = 0;
let result;
var calculations = "";
let firstNumber;
let secondNumber;
let operator;

function init() {
    randomNum = Math.floor(Math.random() * 10);
    let nr1 = Math.floor(Math.random() * 10);
    let nr2 = Math.floor(Math.random() * 10);
    document.getElementById('firstNumber').value = nr1;
    document.getElementById('secondNumber').value = nr2;
    console.log('Random number generated: ' + randomNum);
    console.log('First number: ' + nr1);
    console.log('Second number: ' + nr2);
    hideInfo();
}

function calculate() {
    firstNumber = parseInt(document.getElementById('firstNumber').value);
    secondNumber = parseInt(document.getElementById('secondNumber').value);
    operator = document.getElementById('operator').value;
    counter = counter + 1;
    console.log('Counter: ' + counter);
    let historyElement = document.getElementById("history");
    historyElement.append("Laskutoimitusten määrä: " + counter);
    historyElement.append(document.createElement("br")); // Add a line break
    historyElement.append(document.createElement("br"));
    historyElement = document.getElementById("history");

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.error('Invalid input: Non-numeric values');
        return;
    }

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error: Division by zero';
            break;
        default:
            result = 'Error: Invalid operator';


    }

    // Display result
    document.getElementById("result").innerText = "Vastaus: " + result;
    console.log(result);
    calculateHistory();
}

function calculateHistory() {
    firstNumber = parseInt(document.getElementById('firstNumber').value);
    secondNumber = parseInt(document.getElementById('secondNumber').value);
    operator = document.getElementById('operator').value;
    calculations = firstNumber + " " + operator + " " + secondNumber + " = " + result;
    document.getElementById("history").innerHTML = "<td>" + calculations + "</td>";
}

function clearHistory() {
    let table = document.getElementById("historyTable");
    let rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    console.log('History cleared');
}

function showInfo() {
    document.getElementById("hiddenInfo").style.display = "block";
    console.log('Info shown');
}

function hideInfo() {
    document.getElementById("hiddenInfo").style.display = "none";
}