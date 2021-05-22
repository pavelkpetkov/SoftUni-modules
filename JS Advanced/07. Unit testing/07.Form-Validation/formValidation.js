function validate() {

    let isItCorrect = true;
    let checkBox = document.getElementById('company');

    checkBox.addEventListener('click', (event) => {
        document.getElementById('companyInfo').style.display = 'block';
    })

    document.getElementById('submit').addEventListener('click', (ev) => {
        let regexName = /^[a-zA-Z0-9]{3,20}$/g;
        let username = document.getElementById('username');

        let regexEmail = /^[\w]+\@[\w]*[\.]+[\w]*([\.]*[\w]*)*$/g;
        let emailName = document.getElementById('email');

        let regexPass = /^[\w]{5,15}$/g;
        let password = document.getElementById('password');

        let confirmPass = document.getElementById('confirm-password');

        ev.preventDefault();

        if (username.value.match(regexName) == null) {
            isItCorrect = false;
            username.style.borderColor = 'red';
        } else {
            username.style.border = 'none';
        }

        if (emailName.value.match(regexEmail) == null) {
            isItCorrect = false;
            emailName.style.borderColor = 'red';
        } else {
            emailName.style.border = 'none';
        }

        if (password.value.match(regexPass) == null) {
            isItCorrect = false;
            password.style.borderColor = 'red';
        }
        // } else {
        //     password.style.border = 'none';
        // }

        if (password.value !== confirmPass.value || password.value.match(regexPass) == null) {
            isItCorrect = false;
            password.style.borderColor = 'red';
            confirmPass.style.borderColor = 'red';
        } else {
            confirmPass.style.border = 'none';
        }


        if (document.getElementById('companyInfo').style.display == 'block') {
            let num = Number(document.getElementById('companyNumber').value);
            if (num < 1000 || num > 9999) {
                isItCorrect = false;
                document.getElementById('companyNumber').style.borderColor = 'red';
            }
        }

        if (isItCorrect) {
            document.getElementById('valid').style.display = 'block';
        }
    })
}
