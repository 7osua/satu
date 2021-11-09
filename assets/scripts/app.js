const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = '';

function validateUserInput() {
    const validInput = Number(getUserInput());
    if (isNaN(validateUserInput) && isNaN(currentResult)) {
        return 0;
    }
    return validInput;
}

function add() {
    const userNumber = validateUserInput();
    prevResult = currentResult;
    calculationDescription = `${prevResult} + ${userNumber}`;
    currentResult = currentResult + Number(getUserInput());
    outputResult(currentResult, calculationDescription);
}

function sub() {
    prevResult = currentResult;
    calculationDescription = `${prevResult} - ${Number(getUserInput())}`;
    currentResult = currentResult - Number(getUserInput());
    outputResult(currentResult, calculationDescription);
}

function mul() {
    prevResult = currentResult;
    calculationDescription = `${prevResult} * ${Number(getUserInput())}`;
    currentResult = currentResult * Number(getUserInput());
    outputResult(currentResult, calculationDescription);
}

function div() {
    const userNumber = validateUserInput();
    if (userNumber !== 0) {
        prevResult = currentResult;
        calculationDescription = `${prevResult} / ${userNumber}`;
        currentResult = currentResult / Number(getUserInput());
        outputResult(currentResult, calculationDescription);
    }
    alert('Input tidak valid atau bernilai 0');
}

addButton.addEventListener('click', add);
subButton.addEventListener('click', sub);
mulButton.addEventListener('click', mul);
divButton.addEventListener('click', div);
