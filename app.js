import { fetchPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const stickyNotes = document.getElementById('sticky-notes');

async function getPosts() {
    const posts = await fetchPosts();

    for (let post of posts) {
        const list = renderPosts(post);
        stickyNotes.append(list);
    }
}
getPosts();
