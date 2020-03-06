const main = document.querySelector('main');
const detailSection = document.querySelector('#detail');
const nav = document.querySelectorAll('nav')[1];

export function clearTag(tag) {
  return tag === 'nav' ? nav.textContent = ""
  :tag === 'main' ? main.textContent = ""
  :detailSection.textContent = "";
}

// remove loader
// export function renderLoader(state) {
//     loaderSvg.style.display = state;
// }

export function renderDetail(data) {
    clearTag('detail');
    clearTag('main');
  console.log("renderDetailData: ", data);
  const result = data.record;
  main.style.display = 'none';
  detailSection.style.display = 'flex';
  
  const html = `
  <article>
  <div class="article-header">
  <h1>${result.titles[0]}</h1>
  </div>
  <div class="article-content">
  <div class="content-image">
  <img src="${result.coverimages[0] ? result.coverimages[1] : 'Geen samenvatting'}">
  </div>
  <div class="content-text">
  <h4>Samenvatting</h4>
  <p>${typeof result.summaries == "undefined" ? 'N.V.T' : result.summaries[0]}</p>
  <p>ISBN     : ${result.isbn}</p>
  <p>Uitgever : ${result.publisher[0]}</p>
  <a href="${result.detailLink}">OBA Link</a>
  </div>
  </article>
  `;
  detailSection.insertAdjacentHTML('beforeend', html);
};

export function renderOverview(data) {
  const results = data.results;
  console.log("renderOverviewData: ", data);
  main.style.display = 'flex';
  detailSection.style.display = 'none';
  results.forEach((item) => {
    var itemId = item.id.replace("|oba-catalogus|",'');
    const html = `
    <article>
    <div class="article-header" data-id="${itemId}" onclick="addToFavs(${itemId});">
      <label>
          Markeer uw favoriet
      </label>
    </div>
    <div class="article-content">
    <div class="content-image">
    <a href="#detail/${item.id}">
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

export function renderNavButton(navValues) {
  navValues.forEach(item => {
    const html = `
    <button class="searchBtn" type="button" value="${item}">${item}</button>
    `;
    nav.insertAdjacentHTML('beforeend', html);
  });
}
