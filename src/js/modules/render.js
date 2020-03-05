
const main = document.querySelector('main');
const nav = document.querySelectorAll('nav')[1];

export function clearScreen(id){
  document.querySelector(id).textContent="";
}

// export function render(data) {
//   const results = data.results;
//   console.dir(results);
//   results.forEach((item) => {
//     const html = `
//             <article>
//               <h2>${item.titles[0]}</h2>
//               <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
//               <a href=#boek-id/${item.id}><img src="${
//         item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
//     }"></a>.
//               <p>${item.genres}</p>
//             </article>
//           `;
//     main.insertAdjacentHTML('beforeend', html);
//   });
// }

function addToFavs(item) {
  let bookmarks = [];
  bookmarks.push(item);
  console.log(bookmarks);
}

export function renderImages(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item) => {
      const html = `
            <article>
              <div class="article-header">
              <input type="checkbox" id="${item.id}">
                <label for="${item.id}">Markeer uw favoriet</label>
              </div>
              <div class="article-content">
                <div class="content-image">
                <a href="#${addToFavs(item)}">
                  <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                </a>
                </div>
                <div class="content-text">
                <p>Titel :  ${item.titles[0]}</p>
                </div>
              </div>
            </article>
          `;
    main.insertAdjacentHTML('beforeend', html);
  });
}

export function renderNavButton(navValues){
    navValues.forEach(item => {
        const html = `
        <button>${item}</button>
        `;
        nav.insertAdjacentHTML('beforeend', html);
    });
}