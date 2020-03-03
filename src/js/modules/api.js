
export function search(data) {

    if (data) {

    } else {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://zoeken.oba.nl/api/v1';
        const endPoint = '/search/?q=';
        const query = '';
        const key = '1e19898c87464e239192c8bfe422f280';
        const detail = 'Default';
        const url = `${cors}${baseUrl}${endPoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    }

}


document.getElementById('search').addEventListener("click");

function fetchParameter() {
    let searchValue = document.getElementById('ssearch-value')

}

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
