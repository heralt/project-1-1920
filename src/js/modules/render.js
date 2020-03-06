
const main = document.querySelector('main');
const detailSection = document.querySelector('#detail');
const nav = document.querySelectorAll('nav')[1];
const notes = document.getElementById('notes');

export function clearTag(tag) {
  return tag === 'nav' ? nav.textContent = ""
  :tag === 'main' ? main.textContent = ""
  :detailSection.textContent = "";
}

export function renderDetail(data) {
    clearTag('detail');
    clearTag('main');
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
}

export function renderNotes() {
    const html = `
    <nav class="boek-info">
    <img src="https://v111.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/180056565&token=c1322402" alt="boek afbeelding">
    <div class="omschrijving_containter">
      <div class="titel">
        <p>Familie duurt een mensenleven lang : de honderd mooiste Nederlandse gedichten over vaders, moeders, dochters en zonen</p>
      </div>
      <div class="samenvatting">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <main>
      <div id="kladblok">
        <h2 class="subtitel">Notitie</h2>
        <p contenteditable="true">Schrijf hier informatie over het boek.</p>
      </div>
    </main>
  </nav>
    `;
    notes.insertAdjacentHTML('beforeend',html);
}

export function renderOverview(data) {
  const results = data.results;
  console.log("renderOverviewData: ", data);
  clearTag('main');
  clearTag('detail');
  main.style.display = 'flex';
  detailSection.style.display = 'none';
  results.forEach((item) => {
    const html = `
    <article>
    <div class="article-header">
      <label for="cb">
      Markeer uw favoriet
          <input name="cb" id="cb" type="checkbox" onclick="addToFavs(${item.id.replace("|oba-catalogus|",'')})">
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

function addToFavs(item) {
    let bookmarks = [];
    bookmarks.push(item);
}

export function renderNavButton(navValues) {
  navValues.forEach(item => {
    const html = `
    <button class="searchBtn" type="button" value="${item}">${item}</button>
    `;
    nav.insertAdjacentHTML('beforeend', html);
  });
}
