import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js'
import { allPetsPage } from './views/dashboard.js';
import { myPets } from './views/myPets.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';


const main = document.getElementById('site-content');

// page('/', decorateContext, dashboardPage);
page('/', decorateContext, allPetsPage);
page('/myPets', decorateContext, myPets);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
})

setUserNav();
//start application:
page.start();
//ctx comes from page.js - page passes it to the functions in page('/', func1, func2)
function decorateContext (ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav () {
    const userId = sessionStorage.getItem('userId');
    const email = sessionStorage.getItem('email');

    if (userId != null) {
        const bar = document.getElementById('user');
        bar.querySelector('span').textContent = `Welcome, ${email}`;

        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}
