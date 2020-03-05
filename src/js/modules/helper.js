import {getData, search} from "./api.js";
import {renderImages,renderNavButton,clearTag} from "./render.js";

// The list with category themes
const ulCategoryList = document.querySelector("#themas");

//search with searchbar
document.getElementById('search').addEventListener("click",fetchParameter);

//search with button
const categoryButton = document.querySelectorAll('nav')[1];

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

        //on button press subcategory
        categoryButton.addEventListener("click", function (element) {

            // typeof element.target.value !== undefined ?
            // renderPage(`${element.target.value}%20Dieren`): console.log("no value found for this click event!");
            if(element.target.tagName === ('BUTTON')){
                categoryPH = element.target.value;
                console.log('button: ' + categoryPH)
            }
            clearTag('main');
            console.log(`Dieren%${categoryPH}`);
            renderPage(`Dieren%${categoryPH}`);
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

export function fetchParameter() {
    let searchValue = document.getElementById('search-value').value;

    clearTag('main');
    renderPage(searchValue);
}