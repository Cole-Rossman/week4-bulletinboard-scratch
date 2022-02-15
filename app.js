import { fetchPosts, redirectIfLoggedIn } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const stickyNotes = document.getElementById('sticky-notes');
const loginButton = document.getElementById('login-button');

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
