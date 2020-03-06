import {helper} from "./helper.js";

export function routing() {

    //if bookmark is pressed display popup
    helper.getBookmarked();

    routie({
        '': () => {
            helper.getCategoryChoice();
            helper.getButtonDieren();
            helper.fetchParameter();
        },
        'detail/:id': id => {
            helper.getDetailData(id);
        },
    });
}