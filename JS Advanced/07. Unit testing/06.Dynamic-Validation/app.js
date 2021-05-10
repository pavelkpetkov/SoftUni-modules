function validate() {
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/g
    document.getElementById('email').addEventListener('change', (ev) => {
        let text = ev.target.value;
        let match = text.match(regex);
        if (match == null) {
            document.getElementById('email').className = 'error';
        } else {
            document.getElementById('email').className = '';
        }
    })
}