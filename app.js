import { fetchPosts, getUser, loginRedirect, logout, createRedirect } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const stickyNotes = document.getElementById('sticky-notes');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout');
const createButton = document.getElementById('create-button');

const user = getUser();
if (user) {
    loginButton.classList.add('hide');
} else {
    logoutButton.classList.add('hide');
}

async function getPosts() {
    const posts = await fetchPosts();

    for (let post of posts) {
        const list = renderPosts(post);
        stickyNotes.append(list);
    }
}
getPosts();

loginButton.addEventListener('click', async () => {
    await loginRedirect();
});

logoutButton.addEventListener('click', async () => {
    await logout();

});

createButton.addEventListener('click', async () => {
    await createRedirect();

});