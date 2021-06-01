function solve() {
 
  let [inputBtn, outputBtn] = [...document.querySelectorAll('button')]
  let [inputText, output] = [...document.querySelectorAll('textarea')]
  const bodyTable = document.querySelector('tbody');

  inputBtn.addEventListener('click', () => {
      let convertInput = JSON.parse(inputText.value);
      convertInput.forEach(e => {
          let {name, img, price, decFactor} = e;

          const tr = document.createElement('tr');

          const nameTd = document.createElement('td');
          const imgTd = document.createElement('td');
          const priceTd = document.createElement('td');
          const decFactorTd = document.createElement('td');
          const checkTd = document.createElement('td');

          const pName = document.createElement('p');
          const pPrice = document.createElement('p');
          const pFactor = document.createElement('p');
          const imgInner = document.createElement('img')
          const input = document.createElement('input')

          imgInner.setAttribute("src", img);
          pName.textContent = name;
          pPrice.textContent = price;
          pFactor.textContent = decFactor;
          input.setAttribute("type", "checkbox");

          imgTd.appendChild(imgInner);
          nameTd.appendChild(pName);
          priceTd.appendChild(pPrice);
          decFactorTd.appendChild(pFactor);
          checkTd.appendChild(input);

          tr.appendChild(imgTd);
          tr.appendChild(nameTd);
          tr.appendChild(priceTd);
          tr.appendChild(decFactorTd);
          tr.appendChild(checkTd);
          bodyTable.appendChild(tr);
      });

  });


  outputBtn.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('input:checked');
      let result = [[],[],[]];
      Array.from(checkboxes).forEach(e => {
          let td = e.parentNode;
          let tdFactor = td.previousSibling.textContent;
          let tdPrice = td.previousSibling.previousSibling.textContent;
          let tdName = td.previousSibling.previousSibling.previousSibling.textContent;
          result[0].push(tdName);
          result[1].push(Number(tdPrice));
          result[2].push(Number(tdFactor));

      });

      let names = result[0].join(', ');
      let totalPrice = result[1].reduce((acc, el) => acc + el, 0);
      let avg = result[2].reduce((acc, el) => acc + el, 0) / result[2].length;

      output.textContent = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avg}`;
  });

}

// function solve() {
//   let table = document.getElementsByTagName('tbody')[0];

//   document.getElementsByTagName('button')[0].addEventListener('click', (ev) => {
//     let input = document.getElementsByTagName('textarea')[0].value;
//     let arrayInput = JSON.parse(input);
//     // console.log(arrayInput);
//     for (let eachObj of arrayInput) {
//       const rowOfTable = document.createElement('tr');

//       const tdImage = document.createElement('td');
//       const image = document.createElement('img');
//       image.src = eachObj.img;
//       tdImage.appendChild(image);
      
//       const tdName = document.createElement('td');
//       const name = document.createElement('p');
//       name.textContent = eachObj.name;
//       tdName.appendChild(name);
      
//       const tdPrice = document.createElement('td');
//       const price = document.createElement('p');
//       price.textContent = Number(eachObj.price);
//       tdPrice.appendChild(price);
      
//       const tdFactor = document.createElement('td');
//       const factor = document.createElement('p');
//       factor.textContent = Number(eachObj.decFactor);
//       tdFactor.appendChild(factor);
      
//       const tdCheckbox = document.createElement('td');
//       const inputCheckbox = document.createElement('input');
//       inputCheckbox.type = "checkbox";
//       tdCheckbox.appendChild(inputCheckbox);
      
//       rowOfTable.appendChild(tdImage);
//       rowOfTable.appendChild(tdName);
//       rowOfTable.appendChild(tdPrice);
//       rowOfTable.appendChild(tdFactor);
//       rowOfTable.appendChild(tdCheckbox);

//       table.appendChild(rowOfTable);
//     }
//   });

//   const buttonBuy = document.getElementsByTagName('button')[1];
//   buttonBuy.addEventListener('click', onClick);
//   const rows = table.children;

//   function onClick() {
//     let names = [];
//     let total = 0;
//     let counter = 0;
//     let decF = 0;
//     for (const eachRow of rows) {
//       if (eachRow.children[4].children[0].checked == true) {
//         let name = eachRow.children[1].children[0].textContent;
//         names.push(name);
//         let priceCurrent = Number(eachRow.children[2].children[0].textContent);
//         total += priceCurrent;
//         let factoDec = Number(eachRow.children[3].children[0].textContent);
//         decF += factoDec;
//         counter++;
//       }
//     }
//     let averageFactor = decF / counter;

//     let output = `Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${averageFactor}`;
//     document.getElementsByTagName('textarea')[1].textContent = output;
//   }
// }