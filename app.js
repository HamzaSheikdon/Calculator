// app.js

let display = document.getElementById('display');
let expression = '';

function append(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        expression = eval(expression);
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}
