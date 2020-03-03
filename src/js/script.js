"use strict";

import {getData} from "./modules/api.js";

const main = document.querySelector('main');

document.getElementById('search').addEventListener("click",fetchParameter);

export function fetchParameter() {
    let searchValue = document.getElementById('search-value').value;

    getData(search(searchValue)).then( json => {
        console.log(json);
        render(json);
    });
}

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

    const url = `${cors}${baseUrl}${endPoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    return url;
}

/*helper.getCategoryChoice();*/

function render(data) {
    const results = data.results;
    console.dir(results);
    results.forEach((item) => {
        const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <a href=#id/${item.id}><img src="${
            item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
        }"></a>.
              <p>${item.genres}</p>
            </article>
          `;
        main.insertAdjacentHTML('beforeend', html);
    });
}

routie({
    "boek/:id": id => {
        console.log(id);
    },
});
