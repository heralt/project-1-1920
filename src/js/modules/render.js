
const main = document.querySelector('main');
const detailSection = document.querySelector('#detail');
const noteSection = document.querySelector('#notes');
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
    //noteSection.style.display = "block";
    const html = `
    <nav class="boek-info">
    <img src="https://v111.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/180056565&token=c1322402" alt="boek afbeelding">
    <div class="omschrijving_containter">
      <div class="titel">
        <p>Familie duurt een mensenleven lang : de honderd mooiste Nederlandse gedichten over vaders, moeders, dochters en zonen</p>
      </div>
      <div class="samenvatting">
        <p>
          Bloemlezing van gedichten van Nederlandstalige dichters over vaders, moeders, dochters en zoons.
        </p>
      </div>
    </div>
    <main>
      <div id="kladblok">
        <h2 class="subtitel">Notitie</h2>
        <p contenteditable="true">Schrijf hier informatie over het boek.</p>
      </div>

      <div class="saveBox">
        <button id="wipe" class="wipeBtn" type="submit" name="wis">Wis</button>
        <button id="save" class="saveBtn" type="submit" name="opslaan">Opslaan</button>
      </div>
    </main>
  </nav>
    `;
    notes.insertAdjacentHTML('beforeend',html);
}

export function renderOverview(data) {
  const results = data.results;
    //noteSection.style.display = "none";
  console.log("renderOverviewData: ", data);
  clearTag('main');
  clearTag('detail');
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
    <p>${item.titles[0]}</p>
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
