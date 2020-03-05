import {helper} from "./helper.js";

export function routing() {
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