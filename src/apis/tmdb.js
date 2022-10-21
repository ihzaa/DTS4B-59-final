const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bc7e097812c6098b8187aa3487b7f496';
const tmdb = {
    get: (url, searchParams = {}, headers = {}) => {
        url = new URL(`${BASE_URL}${url}`);
        url.searchParams.set('api_key', API_KEY);
        Object.keys(searchParams).forEach(key => {
            url.searchParams.set(key, searchParams[key]);
        });
        return fetch(url, {
            headers: headers
        });
    },
    post: async (url, body, searchParams = {}, headers = {}) => {
        return await fetch(url, {
            headers: headers,
            method: 'POST'
        })
    }
}
export default tmdb;