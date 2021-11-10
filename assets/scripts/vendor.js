const userInput = document.getElementById('input-number');

const addButton = document.getElementById('add-btn');
const subButton = document.getElementById('sub-btn');
const mulButton = document.getElementById('mul-btn');
const divButton = document.getElementById('div-btn');

const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');

function getUserInput() {
    return userInput.value;
}

function resetUserInput() {
    userInput.value = '';
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}
