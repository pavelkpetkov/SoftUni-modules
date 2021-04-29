function create(words) {
   const contentEl = document.getElementById('content');
   for (const eachString of words) {
      let divEl = document.createElement('div');
      let parEl = document.createElement('p');
      parEl.textContent = eachString;
      parEl.style.display = 'none';
      divEl.appendChild(parEl);
      divEl.addEventListener('click', (ev) => {
         ev.target.children[0].style.display = '';
      });
      contentEl.appendChild(divEl);
   }
}