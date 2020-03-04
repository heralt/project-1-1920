"use strict";

import {fetchParameter} from "./modules/helper.js";
import {routing} from "./modules/router.js";
import {helper, ulCategoryList} from "./modules/helper.js";

helper.getCategoryChoice();
fetchParameter();
routing();
