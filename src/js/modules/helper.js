import {getData, search} from "./api.js";
import {renderOverview, renderDetail, renderNavButton, clearTag} from "./render.js";

// The list with category themes
const ulCategoryList = document.querySelector("#themas");

//search with button
const categoryButton = document.querySelectorAll('nav')[1];

let userCategoryChoice  = "";

export const helper = {

    /*getSearchResult: function () {
        let searchValue = "";
    },*/

    getDetailData: function(data){
        console.log("DetailData: ", data);
        var rawData = search('/details/?id=', data);
        var cleanUrl = rawData.replace(/undefined/g,'');

        getData(cleanUrl).then( json => {
            renderDetail(json);
        });
    },

    getOverviewData: function(data){
        console.log("OverviewData: ", data);
        getData(search('/search/?q=', data, '&pagesize=20', '&page=1', '&refine=true')).then( json => {
            renderOverview(json);
        });
    },

    fetchParameter: function() {
        let searchValue = document.getElementById('search-value').value;

        // clearTag('main');
        this.getOverviewData(searchValue);
    },

    getButtonDieren: function(){
        let categoryPH = "";
        //on button press subcategory
        categoryButton.addEventListener("click", function (element) {

            // typeof element.target.value !== undefined ?
            // getPageData(`${element.target.value}%20Dieren`): console.log("no value found for this click event!");
            if(element.target.tagName === ('BUTTON')){
                categoryPH = element.target.value;

                clearTag('main');
                helper.getOverviewData(`${userCategoryChoice}%20${categoryPH}`);
            }
        })
    },

    //Category buttons
    getCategoryChoice: function(){
        //A variable to store user input

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
                helper.getOverviewData(userCategoryChoice);
            }
        });
    }
};

//search with searchbar
document.getElementById('search').addEventListener("click", helper.fetchParameter);


