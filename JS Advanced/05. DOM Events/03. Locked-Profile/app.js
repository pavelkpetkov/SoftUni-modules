
// This is from exercise and works 100/100 but is wrong:

// function lockedProfile() {
//    document.getElementById('main').addEventListener('click', (ev) => {
//       if (ev.target.tagName === 'BUTTON') {
//          const profile = ev.target.parentNode;
//          const isLocked = profile.querySelector('input[type="radio"]:checked').value == 'lock';
//          if (isLocked) {
//             return;
//          }
//          let div = profile.querySelector('div');
//          let isVisible = div.style.display === 'block';
//          div.style.display = isVisible ? 'none' : 'block';
//          ev.target.textContent = !isVisible ? 'Hide it' : 'Show more';
//       }
//    })
// }

// This is the same, but corrected with 'else':

function lockedProfile() {
   document.getElementById('main').addEventListener('click', (ev) => {
      if (ev.target.tagName === 'BUTTON') {
         const profile = ev.target.parentNode;
         const isLocked = profile.querySelector('input[type="radio"]:checked').value == 'lock';
         if (isLocked) {
            return;
         } else {
            let div = profile.querySelector('div');
            let isVisible = div.style.display === 'block';
            div.style.display = isVisible ? 'none' : 'block';
            ev.target.textContent = !isVisible ? 'Hide it' : 'Show more';
         }
      }
   })
}