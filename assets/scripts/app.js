const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = '';

function add() {
    prevResult = currentResult;
    calculationDescription = `${prevResult} + ${Number(getUserInput())}`;
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
    prevResult = currentResult;
    calculationDescription = `${prevResult} / ${Number(getUserInput())}`;
    currentResult = currentResult / Number(getUserInput());
    outputResult(currentResult, calculationDescription);
}

addButton.addEventListener('click', add);
subButton.addEventListener('click', sub);
mulButton.addEventListener('click', mul);
divButton.addEventListener('click', div);
