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
    let prevResult = currentResult;
    calculationDescription = `${prevResult} + ${userNumber}`;
    currentResult = currentResult + Number(getUserInput());
    outputResult(currentResult, calculationDescription);
    resetUserInput();
}

function sub() {
    let prevResult = currentResult;
    calculationDescription = `${prevResult} - ${Number(getUserInput())}`;
    currentResult = currentResult - Number(getUserInput());
    outputResult(currentResult, calculationDescription);
    resetUserInput();
}

function mul() {
    let prevResult = currentResult;
    calculationDescription = `${prevResult} * ${Number(getUserInput())}`;
    currentResult = currentResult * Number(getUserInput());
    outputResult(currentResult, calculationDescription);
    resetUserInput();
}

function div() {
    const userNumber = validateUserInput();
    let prevResult = currentResult;
    if (userNumber !== 0) {
        prevResult = currentResult;
        currentResult = currentResult / Number(getUserInput());
    } else {
        currentResult = 0;
        // alert('Input tidak valid atau bernilai 0');
    }
    calculationDescription = `${prevResult} / ${userNumber}`;
    outputResult(currentResult, calculationDescription);
    resetUserInput();
}

addButton.addEventListener('click', add);
subButton.addEventListener('click', sub);
mulButton.addEventListener('click', mul);
divButton.addEventListener('click', div);
