function solve() {

    let binaryOption = document.createElement('option');
    binaryOption.setAttribute('value', 'Binary');
    binaryOption.innerHTML = 'Binary';
    let hexaOption = document.createElement('option');
    hexaOption.setAttribute('value', 'Hexadecimal')
    hexaOption.innerHTML = 'Hexadecimal';
    let menuTo = document.getElementById('selectMenuTo');
    menuTo.appendChild(binaryOption);
    menuTo.appendChild(hexaOption);
    let defaultOption = document.querySelectorAll('select')[1].children[0];
    defaultOption.remove();

    let buttonConvertIt = document.querySelector('button');
    buttonConvertIt.addEventListener('click', (ev) => {
        let input = document.getElementById('input').value;
        input = Number(input);
        let optionSelected = document.querySelectorAll('select')[1].value;
        // console.log(optionSelected);
        let result;
        if (optionSelected === 'Binary') {
            result = input.toString(2);
        } else if (optionSelected === 'Hexadecimal'){
            result = input.toString(16);
        }
        document.getElementById('result').value = result;
    })
}