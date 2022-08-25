import { GET_USER, GET_USER_BY_ID } from './data/constant.js';

// get user

import { getUser } from "./listners/get-user.js";
getUser(document.getElementById(GET_USER));

// get user by id

// import {userInputId} from "./listners/get-user-by-id.js"
// userInputId(document.getElementById(GET_USER_BY_ID));


import {userInputId} from "./listners/get-user-by-id.js";
userInputId(document.getElementById(GET_USER_BY_ID));
