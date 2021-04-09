function search() {
   let text = document.getElementById("searchText").value;
   let arr = Array.from(document.getElementsByTagName('li'));
   let count = 0;
   for (let li of arr) {
      if (li.textContent.includes(text)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         count++;
      }
   }
   document.getElementById('result').textContent = `${count} matches found`;
}
