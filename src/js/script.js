"use strict";

import {helper} from "./modules/helper.js";
import {getData} from "./modules/api.js";

const main = document.querySelector('main');

getData().then( json => {
    console.log(json);
    render(json);
});

helper.getCategoryChoice();

function render(data) {
    const results = data.results;
    console.dir(results);
    results.forEach((item) => {
        const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <a href=><img src="${
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


