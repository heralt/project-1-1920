
export function search(parameter) {
    console.log(parameter);
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://zoeken.oba.nl/api/v1';
    const endPoint = '/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const detail = 'Default';
    let query = '';

    if(parameter){
        query = parameter;
    } else {
        query = 'tolkien';
    }

    const url = `${cors}${baseUrl}${endPoint}${query}&pagesize=5&authorization=${key}&detaillevel=${detail}&output=json`;
    return url;
}

export function getData(url) {
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
