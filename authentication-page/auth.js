import { signInUser, signUpUser, redirectIfLoggedIn } from '../fetch-utils.js';

const loginForm = document.getElementById('login');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(loginEmail.value, loginPassword.value);
    await signInUser(loginEmail.value, loginPassword.value);
    
    redirectIfLoggedIn();
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(signUpEmail.value, signUpPassword.value);
    await signUpUser(signUpEmail.value, signUpPassword.value);

    redirectIfLoggedIn();
});
