// app.js

let display = document.getElementById('display');
let historyParagraph = document.querySelector('.history p');
let expression = '';
let history = [];

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
        let result = eval(expression);
        display.value = result;
        
    } catch (error) {
        display.value = 'Error';
    }
}
