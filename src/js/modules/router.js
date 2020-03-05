import {fetchParameter, helper} from "./helper.js";
import {renderLoader} from "./render.js";

export function routing() {
    routie({
        "": () => {
            helper.getCategoryChoice();
            helper.getButtonDieren();
            fetchParameter();
        },
        "#boek-id/:id": id => {
            console.log(id);
        },
    });
}