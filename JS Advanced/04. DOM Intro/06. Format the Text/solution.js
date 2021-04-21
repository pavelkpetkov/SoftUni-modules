function solve() {
  let textAll = document.getElementById('input').value;
  //To remove the last point:
  let text = textAll.slice(0, -1);

  let arr = text.split('.');
  //To remove empty sentences:
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == '') {
      arr.splice(j, 1);
      j--;
    }
  }
  
  let output = document.getElementById('output');
  let par = ``;
  for (let i = 0; i < arr.length; i++) {

    if (i % 3 == 0 && i !== 0) {
      let p = document.createElement("p");
      output.appendChild(p);
      p.textContent = par;

      par = ``;
      par += `${arr[i]}.`
    } else {
      par += `${arr[i]}.`;
    }

  }
  if (par !== '') {
    let p = document.createElement("p");
    output.appendChild(p);
    p.textContent = par;
  }

}