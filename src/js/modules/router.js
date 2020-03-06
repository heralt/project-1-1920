import {helper} from "./helper.js";

const main = document.querySelector('main');

export function routing() {

    //if bookmark is pressed display popup
    // helper.getBookmarked();
    //helper.renderLoader('block');

    routie({
        '': () => {
            helper.getCategoryChoice();
            helper.getButtonDieren();
            helper.fetchParameter();
        },
        'detail/:id': id => {
            helper.getDetailData(id);
        },
        /*'notes': () => {
            clearTag('main');
            main.style.display = 'none';
            renderNotes();
        }*/
    });
}