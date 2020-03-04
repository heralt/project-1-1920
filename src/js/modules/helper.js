import {getData, search} from "./api.js";
import {renderImages,renderNavButton,clearTag} from "./render.js";

// The list with category themes
const ulCategoryList = document.querySelector("#themas");

//search with searchbar
document.getElementById('search').addEventListener("click",fetchParameter);
const categoryButton = document.querySelectorAll('nav')[1];

export function fetchParameter() {
  let searchValue = document.getElementById('search-value').value;

  clearTag('main');
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

    getButtonDieren: function(){
        let categoryPH = "";

        categoryButton.addEventListener("click", function (element) {
            console.log(element.target.value);

        })
    },

    getCategoryChoice: function(){
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
                        clearTag('nav');
                        renderNavButton(dieren);
                        break;
                    case 'Sport':
                        let sporten = ["Voetbal","Tennis","Hockey","Basketball"];
                        clearTag('nav');
                        renderNavButton(sporten);
                        break;
                    case 'Landen':
                        let landen = ["America","Nederland","Engeland","Spanje"];
                        clearTag('nav');
                        renderNavButton(landen);
                        break;
                    case 'Geschiedenis':
                        let geschiedenis = ["Voc","Oorlog","Revolutie","Slavernij"];
                        clearTag('nav');
                        renderNavButton(geschiedenis);
                        break;
                }

                //Empties screen from previous content
                clearTag('main');
                renderPage(userCategoryChoice);
            }
        });
    }
};
