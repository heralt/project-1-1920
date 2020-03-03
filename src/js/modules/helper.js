import {search} from "./api.js";

// The list with category themes
export const ulCategoryList = document.querySelector(".themas");
export const main = document.querySelector('main');

export const helper = {

  getCategoryChoice: function () {

    // A variabele to store user input
    let userCategoryChoice  = "";

    ulCategoryList.addEventListener("click", function (element) {

      // If it is a list item that has been clicked
      if(element.target.tagName == ("LI")){

        // Assign the list item ID to the variable
        userCategoryChoice = element.target.getAttribute("data-category-id");


        // Remove if any previous questions from the unordered list
        main.textContent = "";



        // call funtction to get Data from API
        // getCategoryQuestionsAndAnswers(userCategoryChoice);
        // data.ifAnyAPIData(userCategoryChoice);
      }


    });
  }

};
