const SUPABASE_URL = 'https://oulietmefshvjsdknixn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bGlldG1lZnNodmpzZGtuaXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTAyNzcsImV4cCI6MTk2MDAyNjI3N30.xLaRALCsmulIZooLc5FTZDT0SLfAZjEKegSSVtKRgFI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPosts() {
    const resp = await client.from('posts').select('*');
    // console.log(resp);
    return checkError(resp);
} 

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export function getUser() {
    return client.auth.session() && client.
        auth.session().user;
}

export async function redirectToLogin() {
    location.replace('./authentication-page');
}

export async function signUpUser(email, password) {
    const resp = await client.auth.signUp({ email, password });

    return resp;
}
