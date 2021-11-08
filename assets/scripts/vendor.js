const addButton = document.getElementById('add-btn');
const subButton = document.getElementById('sub-btn');
const mulButton = document.getElementById('mul-btn');
const divButton = document.getElementById('div-btn');

const currentCalculation = document.getElementById('current-calculation');

addButton.addEventListener('click', function () {
    currentCalculation.textContent = 'Penjumlahan';
});

subButton.addEventListener('click', function () {
    currentCalculation.textContent = 'Pengurangan';
});

mulButton.addEventListener('click', function () {
    currentCalculation.textContent = 'Pekalian';
});

divButton.addEventListener('click', function () {
    currentCalculation.textContent = 'Pembagian';
});
