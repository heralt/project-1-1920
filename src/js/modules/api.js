export function search(parameter) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://zoeken.oba.nl/api/v1';
    const endPoint = '/search/?q=';
    const key = '17a9c4d4d56a41b55abc2d3096e94be4';
    const detail = 'Default';
    const pageSize = '&pagesize=20';
    let page = '&page=1';
    let query = '';

    if(parameter){
        query = parameter;
    } else {
        query = 'special:all';
    }

    const url = `${cors}${baseUrl}${endPoint}${query}${pageSize}${page}&authorization=${key}&refine=true&detaillevel=${detail}&output=json`;
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
      console.log(err);
    })
}

