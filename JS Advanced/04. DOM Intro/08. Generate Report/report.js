function generateReport() {

    //Fucking finally:

    let rowHead = document.querySelectorAll('thead tr th');
    // console.log(rowHead)
    let indexes = []
    let properties = []
    for (let i = 0; i < rowHead.length; i++) {
        if (rowHead[i].childNodes[1].checked == true) {
            let name = rowHead[i].children[0].name;
            indexes.push(i);
            properties.push(name);
        }
    }
    let allRows = document.querySelectorAll('tbody tr');
    console.log(allRows);
    let result = [];
    for (const row of allRows) {
        let myObj = {};
        for (let j = 0; j < indexes.length; j++) {
            let index = indexes[j];
            let valueObj = row.querySelector(`td:nth-child(${index + 1})`).textContent;
            let prop = properties[j];
            myObj[prop] = valueObj;
        }
        result.push(myObj);
    }
    // console.log(result);
    document.getElementById('output').value = JSON.stringify(result);

}