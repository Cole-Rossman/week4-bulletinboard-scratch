import { createPost, logout, checkAuth, homeRedirect } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout-button');
const homeButton = document.getElementById('home-button');

const createForm = document.getElementById('create-form');


createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    
    await createPost({
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    });
    
});

logoutButton.addEventListener('click', async () => {
    await logout();

});

homeButton.addEventListener('click', async () => {
    await homeRedirect();
});