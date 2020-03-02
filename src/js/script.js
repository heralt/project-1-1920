"use strict";

import {getData} from "./modules/api.js";

const main = document.querySelector('main');

getData().then( json => {
    console.log(json);
    render(json);
});

function render(data) {
    const results = data.results;
    console.dir(results);
    results.forEach((item) => {
        const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${
            item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
        }">
            </article>
          `;
        main.insertAdjacentHTML('beforeend', html);
    });
}


