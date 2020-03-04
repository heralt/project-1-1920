import {getData, search} from "./api.js";
import {renderImages,renderNavButton,clearScreen} from "./render.js";

// The list with category themes
const ulCategoryList = document.querySelector("#themas");

//search with searchbar
document.getElementById('search').addEventListener("click",fetchParameter);

export function fetchParameter() {
  let searchValue = document.getElementById('search-value').value;

  clearScreen('main');
  renderPage(searchValue);
}

function renderPage(data){
    getData(search(data)).then( json => {
        renderImages(json);
    });
}

export const helper = {

    /*getSearchResult: function () {
        let searchValue = "";

    },*/

    getCategoryChoice: function () {
        //A variable to store user input
        let userCategoryChoice  = "";

        ulCategoryList.addEventListener("click", function (element) {

            // If it is a list item that has been clicked
            if(element.target.tagName === ("LI")){

                //Assign the list item ID to the variable
                userCategoryChoice = element.target.getAttribute("data-category-id");

                switch(userCategoryChoice){
                    case 'Dieren':
                        let dieren = ["Katten","Honden","Slangen","Leeuwen"];
                        renderNavButton(dieren);
                        break;
                    case 'Sport':
                        let sporten = ["Voetbal","Tennis","Hockey","Basketball"];
                        renderNavButton(sporten);
                        break;
                    case 'Landen':
                        let landen = ["America","Nederland","Engeland","Spanje"];
                        renderNavButton(landen);
                        break;
                    case 'Geschiedenis':
                        let geschiedenis = ["Voc","Oorlog","Revolutie","Slavernij"];
                        renderNavButton(geschiedenis);
                        break;
                }

                //Empties screen from previous content
                clearScreen('main');
                renderPage(userCategoryChoice);
            }
        });
    }
};
