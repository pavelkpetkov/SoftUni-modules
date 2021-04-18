function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
 // It is important to get the values here, in the onClick function and not above
      let text = document.getElementById('searchField').value.toLowerCase();
      let rows = document.querySelectorAll('tbody tr');

      for (let row of rows) {
         if ( row.textContent.toLowerCase().includes(text)) {
            row.classList.add("select");  // OR: row.setAttribute('class', 'select') // For 'select' - see .css
         } else {
            row.removeAttribute('class');
         }
      }
   }
}