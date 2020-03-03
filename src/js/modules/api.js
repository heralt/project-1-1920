
const cors = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://zoeken.oba.nl/api/v1';
const endpoint = '/search/?q=';
const query = 'Harry';
const key = '1e19898c87464e239192c8bfe422f280';
const detail = 'Default';
const url = `${cors}${baseUrl}${endpoint}${query}&p=jeugd&page=2&authorization=${key}&detaillevel=${detail}&output=json`;
console.log(url);

export function getData() {
    return fetch(url)
        .then(response => {
            return response.json();
        })
            .then(data => {
                return data;
            })
        .catch(err => {
            console.log(err)
        })
}
