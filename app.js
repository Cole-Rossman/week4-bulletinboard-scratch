import { fetchPosts, getUser, redirectIfLoggedIn } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const stickyNotes = document.getElementById('sticky-notes');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout');

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

    redirectIfLoggedIn();
});
