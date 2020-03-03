
const main = document.querySelector('main');

function clearScreen(id){
  document.getElementById(id).innerHTML = "";
}

export function render(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item) => {
    const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <a href=#boek-id/${item.id}><img src="${
        item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
    }"></a>.
              <p>${item.genres}</p>
            </article>
          `;
    //clearScreen('main');
    main.insertAdjacentHTML('beforeend', html);
  });
}