import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllPets } from '../api/data.js';

const petsTemplate = (pets) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All pets (If any) -->
    ${pets.length == 0 ? html`<p class="no-pets">No pets in database!</p>` : pets.map(petTemp)}
</section>`;

const petTemp = (pet) => html`
    <ul class="other-pets-list">
        <li class="otherPet">
            <h3>Name: ${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p class="img"><img src="${pet.imageUrl}"></p>
            <a class="button" href="/details/${pet._id}">Details</a>
        </li>
    </ul>`;

export async function allPetsPage(ctx) {
    const pets = await getAllPets();

    ctx.render(petsTemplate(pets));
}