import { createPost, logout, checkAuth } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout-button');
const homeButton = document.getElementById('home-button');

const createForm = document.getElementById('create-form');


createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    const resp = await createPost(newPost);
    console.log(resp);
});

logoutButton.addEventListener('click', async () => {
    await logout();

});