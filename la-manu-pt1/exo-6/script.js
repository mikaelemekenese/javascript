let submitBtn = document.getElementById('submit');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

submitBtn.addEventListener('click', function() {
    alert('Le reste de la division est : ' + firstNumber.value % secondNumber.value);
})