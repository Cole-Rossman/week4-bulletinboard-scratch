export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('posts');

    const titleP = document.createElement('p');
    titleP.textContent = post.title;
    titleP.classList.add('post-title');

    const descriptionP = document.createElement('p');
    descriptionP.textContent = post.description;
    descriptionP.classList.add('post-description');

    const contactP = document.createElement('p');
    contactP.textContent = post.contact;
    contactP.classList.add('post-contact');

    div.append(titleP, descriptionP, contactP);
    return div;
}