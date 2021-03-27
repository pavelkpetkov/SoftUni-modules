function toggle() {
    if (document.getElementsByClassName("button")[0].textContent == 'More') {
        if (document.getElementById("extra").style.display = 'none') {
            document.getElementById("extra").style.display = 'block';
        }
        
        document.getElementsByClassName("button")[0].textContent = 'Less';
    } else if (document.getElementsByClassName("button")[0].textContent == 'Less') {
        if (document.getElementById("extra").style.display = 'block') {
            document.getElementById("extra").style.display = 'none';
        }

        document.getElementsByClassName("button")[0].textContent = 'More';
    }
}