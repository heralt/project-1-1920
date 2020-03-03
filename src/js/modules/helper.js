import {getData, search} from "./api.js";
import {render,clearScreen} from "./render.js";

// The list with category themes
export const ulCategoryList = document.querySelector("#themas");

//search with searchbar
document.getElementById('search').addEventListener("click",fetchParameter);

export function fetchParameter() {
  let searchValue = document.getElementById('search-value').value;

  getData(search(searchValue)).then( json => {
    console.log(json);
    render(json);
  });
}

export const helper = {

  getCategoryChoice: function () {

    // A variabele to store user input
    let userCategoryChoice  = "";

    ulCategoryList.addEventListener("click", function (element) {

      // If it is a list item that has been clicked
      if(element.target.tagName == ("LI")){

        // Assign the list item ID to the variable
        userCategoryChoice = element.target.getAttribute("data-category-id");
        //Sconsole.log(userCategoryChoice);

        // Remove if any previous questions from the unordered list
        clearScreen('main');

        getData(search(userCategoryChoice)).then( json => {
          console.log(json);
          render(json);
        });
      }


    });
  }

};
