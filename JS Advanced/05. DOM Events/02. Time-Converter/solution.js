function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);
    function convert (ev) {
        const btnVal = Number(ev.target.parentNode.children[1].value);
        if (ev.target.parentNode.children[2].id == 'daysBtn') {
            document.getElementById('hours').value = btnVal * 24;
            document.getElementById('minutes').value = btnVal * 1440;
            document.getElementById('seconds').value = btnVal * 86400;
        } else if (ev.target.parentNode.children[2].id == 'hoursBtn') {
            document.getElementById('days').value = btnVal / 24;
            document.getElementById('minutes').value = btnVal * 60;
            document.getElementById('seconds').value = btnVal * 3600;
        } else if (ev.target.parentNode.children[2].id == 'minutesBtn') {
            document.getElementById('days').value = btnVal / 1440;
            document.getElementById('hours').value = btnVal / 60;
            document.getElementById('seconds').value = btnVal * 60;
        } else if (ev.target.parentNode.children[2].id == 'secondsBtn') {
            document.getElementById('days').value = btnVal / 86400;
            document.getElementById('hours').value = btnVal / 3600;
            document.getElementById('minutes').value = btnVal / 60;
        }
    }
}