
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

export function renderImages(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item) => {
      const html = `
            <article>
              <div class="article-header">
                <input type="checkbox" id="${item.id}">
              </div>
              <div class="article-content">
                <a href=#boek-id/${item.id}>
                  <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                </a>
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