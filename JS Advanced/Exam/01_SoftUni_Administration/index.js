function solve() {
    let form = document.querySelector('form');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(form);
        const lecName = formData.get('lecture-name');
        const date = formData.get('lecture-date');
        const module = formData.get('lecture-module');
        // console.log(date);
        let [dates, time] = date.split('T');
        let [year, month, day] = dates.split('-');
        let dateFormated = `${year}/${month}/${day}`;
        if (lecName != '' && date != '' && module != 'Select module') {
            let divModules = document.querySelector('div');

            let allModules = document.querySelectorAll('.module');
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.className = 'flex';
            let h4 = document.createElement('h4');
            h4.textContent = `${lecName} - ${dateFormated} - ${time}`;
            let delButton = document.createElement('button');
            delButton.className = 'red';
            delButton.textContent = 'Del';
            delButton.addEventListener('click', ev => deleteFunc(ev));
            li.appendChild(h4);
            li.appendChild(delButton);
            
            let flag = false;
            for (const each of allModules) {
                if (each.firstChild.textContent == `${module.toUpperCase()}-MODULE`) {
                    flag = true;
                    let ulExistent = each.children[1];
                    ulExistent.appendChild(li);
                    let list = Array.from(ulExistent.children);
                    // console.log(list);
                    let sorted = list.sort((a, b) => {
                        let [nameA, dateA, timeA] = a.firstChild.textContent.split(' - ');
                        let [nameB, dateB, timeB] = b.firstChild.textContent.split(' - ');
                        return dateA.localeCompare(dateB);
                    })
                    sorted.forEach(li => ulExistent.appendChild(li));
                }
            }
            if (!flag) {
                ul.appendChild(li);
                let divElement = document.createElement('div');
                divElement.className = 'module';
                let h3 = document.createElement('h3');
                h3.textContent = `${module.toUpperCase()}-MODULE`;
                divElement.appendChild(h3);
                divElement.appendChild(ul);
                divModules.appendChild(divElement);
            }
        }
    })
    function deleteFunc (ev) {
        let ulList = Array.from(ev.target.parentNode.parentNode.parentNode.children);
        if (ulList.length > 1) {
            ev.target.parentNode.remove();
        } else {
            ev.target.parentNode.parentNode.parentNode.remove();
        }
    }
};