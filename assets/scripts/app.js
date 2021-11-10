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
    if (beforeCalculation !== 0 && currentResult !== 0) {
        calculationDescription = `${beforeCalculation} ${operator} ${calcNumber}`;
    } else {
        calculationDescription = `${calcNumber}`;
    }
    outputResult(currentResult, calculationDescription);
    // resetUserInput();
}

function writeToLog(
    operationIndentifier,
    prevResult,
    operationNumber,
    newResult,
) {
    const logEntry = {
        operation: operationIndentifier,
        prevResult: prevResult,
        entererNumber: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
}

function calculateResult(calculateType) {
    const userNumber = validateUserInput();
    if (
        (calculateType !== 'ADD' &&
            calculateType !== 'SUB' &&
            calculateType !== 'MUL' &&
            calculateType !== 'DIV') ||
        userNumber === 0
    ) {
        return;
    }

    let prevResult = currentResult;
    let mathOperator;
    if (calculateType === 'ADD') {
        currentResult += userNumber;
        mathOperator = '+';
    } else if (calculateType === 'SUB') {
        currentResult -= userNumber;
        mathOperator = '-';
    } else if (calculateType === 'MUL') {
        currentResult *= userNumber;
        mathOperator = '*';
    } else if (calculateType === 'DIV') {
        currentResult /= userNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, prevResult, userNumber);
    writeToLog(calculateType, prevResult, userNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function sub() {
    calculateResult('SUB');
}

function mul() {
    calculateResult('MUL');
}

function div() {
    calculateResult('DIV');
}

addButton.addEventListener('click', add);
subButton.addEventListener('click', sub);
mulButton.addEventListener('click', mul);
divButton.addEventListener('click', div);
