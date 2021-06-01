function encodeAndDecodeMessages() {
    const inputs = document.getElementsByTagName('p');
    // console.log(inputs);

    const btns = document.getElementsByTagName('button');
    
    const btnEncode = btns[0];
    btnEncode.addEventListener('click', (ev) => {
        let inputText = ev.target.parentNode.children[1].value;
        console.log('hello')
        console.log(inputText);
        let encoded = '';
        for (let each of inputText) {
            let char = each.charCodeAt();
            char++;
            let newChar = String.fromCharCode(char);
            encoded += newChar;
        }
        document.getElementsByTagName('textarea')[1].textContent = encoded;
        document.getElementsByTagName('textarea')[0].value = "";
    })

    const btnDecode = btns[1];
    btnDecode.addEventListener('click', (ev) => {
        let outputText = ev.target.parentNode.children[1].value;

        let decoded = '';
        for (let each of outputText) {
            let char = each.charCodeAt();
            char--;
            let newChar = String.fromCharCode(char);
            decoded += newChar;
        }
        document.getElementsByTagName('textarea')[1].textContent = decoded;
    })
}