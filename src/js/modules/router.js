import {helper} from "./helper.js";
import {renderNotes} from "./render.js";

export function routing() {

    //if bookmark is pressed display popup
    helper.getBookmarked();
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
        'notes': () => {
            renderNotes();
        }
    });
}