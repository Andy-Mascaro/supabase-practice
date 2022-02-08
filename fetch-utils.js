const SUPABASE_URL = 'https://kdukidihcdlbgresawun.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWtpZGloY2RsYmdyZXNhd3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDYsImV4cCI6MTk1OTkxNzQ0Nn0.YtwzCCX2zDt5IzpJ-Uh5Hy4DsanDjeq6lfG72ezSCW4';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
    const resp = await client.from('movies').select('*');
    return checkError(resp);
}

export async function getMoviesWithDirector() {
    const resp = await client.from('movies').select('*, directors(*)');
    return checkError(resp);
    
  // return the list of all the movies with their director
}

export async function getDirectorNames() {
    const names = await client.from('directors').select('name');
    return checkError(names);
  // return the list of the director's names
}

export async function getMovieById(id) {
    const resp = await client.from('movies').select('*').eq('id', id).single();
    return checkError(resp);
  // return the movie with the given id
}

export async function getMovieByTitle(title) {
    const resp = await client.from('movies').select('*').like('title', title).single();
    return checkError(resp);
  // return the movie with the given title
}

export async function getOldestMovie() {
    const resp = await client.from('movies').select('*').order('year').limit(1).single();
    return checkError(resp);
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
    const resp = await client.from('movies').select('*').order('year').limit(1).single();
    return checkError(resp);
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
