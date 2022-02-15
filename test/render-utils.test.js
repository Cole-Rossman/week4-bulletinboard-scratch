import { renderPosts } from '../render-utils.js';

const test = QUnit.test;

test('renderPosts should create a div with post title, description and contact within', (expect) => {
    const expected = `<div class="posts"><p class="post-title">Looking for bicycle riding lessons</p><p class="post-description">I am a 45 year old man and never learned to ride a bike. I try practicing at the local park, but all of the children make fun of me. I need a professional who can help my situation.</p><p class="post-contact">bigguy45@somewebsite.com</p></div>`;

    const post2 = {
        id: '2',
        title: 'Looking for bicycle riding lessons',
        description: 'I am a 45 year old man and never learned to ride a bike. I try practicing at the local park, but all of the children make fun of me. I need a professional who can help my situation.',
        contact: 'bigguy45@somewebsite.com',
    };
    const actual = renderPosts(post2);

    expect.equal(actual.outerHTML, expected);
});
