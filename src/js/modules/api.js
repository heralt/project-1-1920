export function search(parameter) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://zoeken.oba.nl/api/v1';
    const endPoint = '/search/?q=';
    const key = '03b058d877ec4276bb63dd1c6e1f3768';
    const detail = 'Default';
    const pageSize = '&pagesize=10';
    let page = '&page=1';
    let query = '';

    if(parameter){
        query = parameter;
    } else {
        query = 'special:all';
    }
    //&refine=true&facet=genre(dieren)

    const url = `${cors}${baseUrl}${endPoint}${query}${pageSize}${page}&authorization=${key}&refine=true&detaillevel=${detail}&output=json`;
    return url;
}

export function getData(url) {
    return fetch(url)
    .then(response => {
        console.log(response);
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    })
}
