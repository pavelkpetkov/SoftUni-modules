function addItem() {
    // console.log(document.querySelector('input[type="button"]'));
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    option.textContent = inputText;
    option.value = inputValue;
    document.getElementById('menu').appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
//querySelector('input[type="button"]')