function subtract() {
    let one = document.getElementById('firstNumber').value;
    one = Number(one);
    let two = document.getElementById('secondNumber').value;
    two = Number(two);
    document.getElementById('result').textContent = one - two;
}