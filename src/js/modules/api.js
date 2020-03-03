
search('fiets');

export function search(dataParam) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://zoeken.oba.nl/api/v1';
    const endPoint = '/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const detail = 'Default';
    let query = dataParam;

    console.log(query);
    // if(data) {
    //     query = data;
    // } else {
    //     query = 'kaas';
    // }
    const url = `${cors}${baseUrl}${endPoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    console.log("IS URL:  " +url);
    return getData(url);
}


/*document.getElementById('search').addEventListener("click",fetchParameter);

function fetchParameter() {
    let searchValue = document.getElementById('ssearch-value')

}*/

function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(jsonReturnData => console.log(jsonReturnData.id));

}
