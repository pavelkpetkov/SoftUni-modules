function solve() {
  let mod = document.getElementById("naming-convention").value;
  let text = document.getElementById("text").value;
  let result = '';
  let arrayOfText = text.split(' ');
  if (mod == 'Camel Case') {
    result += arrayOfText[0].toLowerCase();
    for (let i = 1; i < arrayOfText.length; i++) {
      let pushed = arrayOfText[i][0].toUpperCase();
      for (let j = 1; j < arrayOfText[i].length; j++) {
        pushed += arrayOfText[i][j].toLowerCase();
      }
      result += pushed;
    }
  } else if (mod == 'Pascal Case') {
    for (let i = 0; i < arrayOfText.length; i++) {
      let pushed = arrayOfText[i][0].toUpperCase();
      for (let j = 1; j < arrayOfText[i].length; j++) {
        pushed += arrayOfText[i][j].toLowerCase();
      }
      result += pushed;
    }
  } else {
    result = 'Error!'
  }
  document.getElementById("result").textContent = result;
}