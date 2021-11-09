const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = '';
let logEntries = [];

function validateUserInput() {
    const validInput = Number(getUserInput());
    if ((isNaN(validInput) && isNaN(currentResult)) || validInput === 0) {
        return 0;
    }
    return validInput;
}

function createAndWriteOutput(operator, beforeCalculation, calcNumber) {
    calculationDescription = `${beforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription);
}

function add() {
    const userNumber = validateUserInput();
    let prevResult = currentResult;
    currentResult += userNumber;
    createAndWriteOutput('+', prevResult, userNumber);
    resetUserInput();
}

function sub() {
    const userNumber = validateUserInput();
    let prevResult = currentResult;
    currentResult -= userNumber;
    createAndWriteOutput('-', prevResult, userNumber);
    resetUserInput();
}

function mul() {
    const userNumber = validateUserInput();
    let prevResult = currentResult;
    currentResult *= userNumber;
    createAndWriteOutput('*', prevResult, userNumber);
    resetUserInput();
}

function div() {
    const userNumber = validateUserInput();
    let prevResult = currentResult;
    if (userNumber !== 0) {
        currentResult /= userNumber;
        createAndWriteOutput('/', prevResult, userNumber);
    }
    resetUserInput();
}

addButton.addEventListener('click', add);
subButton.addEventListener('click', sub);
mulButton.addEventListener('click', mul);
divButton.addEventListener('click', div);
