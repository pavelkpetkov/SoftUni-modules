import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById } from '../api/data.js';
import { editRecord } from '../api/data.js';

const editTemplate = (pet, onSubmit) => html`
<section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Pet</legend>
            <p class="field">
                <label for="name">Name</label>
                <span class="input">
                    <input type="text" name="name" id="name" .value=${pet.name}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description" .value=${pet.description}></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${pet.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${pet.type}>
                        <option value="cat">Cat</option>
                        <option value="dog" selected>Dog</option>
                        <option value="parrot">Parrot</option>
                        <option value="reptile">Reptile</option>
                        <option value="other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const petId = ctx.params.id;
    const pet = await getItemById(petId);
    ctx.render(editTemplate(pet, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');


        if (!name || !description || !imageUrl || !type) {
            return alert('All fields are required!');
        }
        await editRecord(petId, {
            name,
            description,
            imageUrl,
            type
        });
        ctx.page.redirect('/details/' + petId);

    }
}

